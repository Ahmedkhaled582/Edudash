"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useClassRooms, useDeleteClassRoom, useAddClassRoom, useUpdateClassRoom } from "@/features/class-room/hooks/useClassRoom";
import { useToast } from "@/components/Toast";
import { ClassRoom, AddClassRoomPayload, UpdateClassRoomPayload } from "@/features/class-room/api/classRoomApi";

export default function ClassRoomListPage() {

  const { data: classRooms, isLoading, error } = useClassRooms();
  const deleteMutation = useDeleteClassRoom();
  const addMutation = useAddClassRoom();
  const updateMutation = useUpdateClassRoom();

  const [selectedClassRoomId, setSelectedClassRoomId] = useState<number | null>(null);
  const { showToast } = useToast();

  // Sidebar visibility
  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [showEditSidebar, setShowEditSidebar] = useState(false);

  // Add form state
  const [addForm, setAddForm] = useState<AddClassRoomPayload>({
    className: "",
    roomNumber: "",
    capacity: 0,
    floor: "",
    isActive: true,
  });

  // Edit form state
  const [editForm, setEditForm] = useState<UpdateClassRoomPayload>({
    id: 0,
    className: "",
    roomNumber: "",
    capacity: 0,
    floor: "",
    isActive: true,
  });

  // Re-initialize jQuery DataTables when the data changes
  useEffect(() => {
    if (typeof window !== "undefined" && classRooms && classRooms.length > 0) {
      const $ = (window as any).$;
      const DataTable = (window as any).DataTable;

      if ($ && DataTable) {
        // Destroy existing instance if it exists to prevent duplicate tables
        if ($.fn.DataTable.isDataTable('#dataTable')) {
          $('#dataTable').DataTable().destroy();
        }

        // Initialize DataTable
        const tableInstance = new DataTable('#dataTable', {
          searching: true,
          lengthChange: true,
          pageLength: 10,
          order: [] // Disable initial sorting to keep the default API order
        });

        // Bind custom search input
        $('.dt-search .dt-input').off('keyup').on('keyup', function (this: any) {
          tableInstance.search(this.value).draw();
        });

        // Bind custom page length select
        $('.dt-length .dt-input').off('change').on('change', function (this: any) {
          const value = $(this).val();
          tableInstance.page.len(value).draw();
        });

        return () => {
          if ($.fn.DataTable.isDataTable('#dataTable')) {
            $('#dataTable').DataTable().destroy();
          }
        };
      }
    }
  }, [classRooms, isLoading]);

  // Handle Add
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addMutation.mutate(addForm, {
      onSuccess: () => {
        showToast("success", "ClassRoom Added", `Successfully added classroom "${addForm.className}"`);
        setShowAddSidebar(false);
        setAddForm({ className: "", roomNumber: "", capacity: 0, floor: "", isActive: true });
      },
      onError: (error: any) => {
        const errorMsg = error?.response?.data?.message || error?.message || "Failed to add classroom";
        showToast("error", "Error Adding ClassRoom", errorMsg);
      }
    });
  };

  // Handle Edit
  const openEditSidebar = (room: ClassRoom) => {
    setEditForm({
      id: room.id,
      className: room.className,
      roomNumber: room.roomNumber,
      capacity: room.capacity,
      floor: room.floor,
      isActive: room.isActive,
    });
    setShowEditSidebar(true);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(editForm, {
      onSuccess: () => {
        showToast("success", "ClassRoom Updated", `Successfully updated classroom "${editForm.className}"`);
        setShowEditSidebar(false);
      },
      onError: (error: any) => {
        const errorMsg = error?.response?.data?.message || error?.message || "Failed to update classroom";
        showToast("error", "Error Updating ClassRoom", errorMsg);
      }
    });
  };

  // Handle Delete
  const handleDelete = () => {
    if (selectedClassRoomId !== null) {
      deleteMutation.mutate(selectedClassRoomId, {
        onSuccess: () => {
          showToast("success", "ClassRoom Deleted", "Successfully deleted classroom");
          // Close modal using Bootstrap instance API
          const modalElement = document.getElementById("exampleModalDelete");
          if (modalElement && typeof window !== "undefined") {
            const bootstrap = (window as any).bootstrap;
            if (bootstrap) {
              const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
              modalInstance.hide();
            }
          }
          setSelectedClassRoomId(null);
        },
        onError: (error: any) => {
          const errorMsg = error?.response?.data?.message || error?.message || "Failed to delete classroom";
          showToast("error", "Error Deleting ClassRoom", errorMsg);
        }
      });
    }
  };

  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Class Room List </h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <span className="text-secondary-light">/ Class Room List </span>
          </div>
        </div>
        <button type="button" onClick={() => setShowAddSidebar(true)} className="btn btn-primary-600 d-flex align-items-center gap-6">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Class Room
        </button>
      </div>

      <div className="mt-24">
        <div className="card h-100">
          <div className="card-body p-0 dataTable-wrapper">

            <div
              className="d-flex align-items-center justify-content-between flex-wrap gap-16 px-20 py-12 border-bottom border-neutral-200">
              <div className="d-flex flex-wrap align-items-center gap-16">
                <div className="dropdown">
                  <button type="button"
                    className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20 "
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="d-flex align-items-center gap-1 text-secondary-light text-sm">
                      <i className="ri-file-upload-line text-md line-height-1"></i>
                      Export
                    </span>
                    <span className="">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </button>
                  <ul className="dropdown-menu p-12 border bg-base shadow">
                    <li>
                      <button type="button"
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                        <i className="ri-file-3-line"></i>
                        PDF
                      </button>
                    </li>
                    <li>
                      <button type="button"
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                        <i className="ri-file-excel-line"></i>
                        Excel
                      </button>
                    </li>
                  </ul>
                </div>
                <form className="navbar-search dt-search m-0" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" className="dt-input bg-transparent radius-4" aria-controls="dataTable"
                    name="search" placeholder="Search..." />
                  <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                </form>
              </div>
              <div className="d-flex align-items-center gap-8 text-secondary-light">
                <span className="">
                  Rows per page:
                </span>
                <div className="dt-length">
                  <select name="dataTable_length" aria-controls="dataTable"
                    className="dt-input form-control form-select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-0 table-responsive">
              <table className="table bordered-table mb-0 data-table" id="dataTable" data-page-length='10'>
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check style-check d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          S.L
                        </label>
                      </div>
                    </th>
                    <th scope="col">Room No</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Floor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={7} className="text-center py-20">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={7} className="text-center py-20 text-danger">
                        Error loading classrooms.
                      </td>
                    </tr>
                  ) : classRooms && classRooms.length > 0 ? (
                    classRooms.map((room, index) => (
                      <tr key={room.id}>
                        <td>
                          <div className="form-check style-check d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                              {(index + 1).toString().padStart(2, "0")}
                            </label>
                          </div>
                        </td>
                        <td><span className="text-primary-600">CR-{room.roomNumber}</span></td>
                        <td>{room.className}</td>
                        <td>{room.capacity}</td>
                        <td>{room.floor}</td>
                        <td>{room.isActive ? (
                          <span className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                        ) : (
                          <span className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                        )}</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="text-primary-light text-xl"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                              <li>
                                <button type="button"
                                  onClick={() => openEditSidebar(room)}
                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                  <i className="ri-edit-2-line"></i>Edit
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => setSelectedClassRoomId(room.id)}
                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6 w-100 text-start"
                                  data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                  <i className="ri-delete-bin-6-line"></i>Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-20">
                        No classrooms found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(showAddSidebar || showEditSidebar) && (
        <div className="overlay active" onClick={() => { setShowAddSidebar(false); setShowEditSidebar(false); }}></div>
      )}

      {/* Add Sidebar */}
      <div
        className={`my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 duration-300 ${showAddSidebar ? 'active-translate-0' : 'translate-x-full'}`}>
        <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
          <h5 className="text-lg mb-0">Add New Class Room</h5>
          <button type="button" onClick={() => setShowAddSidebar(false)} className="text-danger-600 text-lg d-flex">
            <i className="ri-close-large-line"></i>
          </button>
        </div>
        <form onSubmit={handleAdd} className="d-flex flex-column p-20">
          <div className="row g-3">
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="addClassName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class Name
                </label>
                <input type="text" className="form-control" id="addClassName" placeholder="Enter class name"
                  value={addForm.className} onChange={(e) => setAddForm({ ...addForm, className: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="addRoomNumber" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Room Number
                </label>
                <input type="text" className="form-control" id="addRoomNumber" placeholder="Enter room number"
                  value={addForm.roomNumber} onChange={(e) => setAddForm({ ...addForm, roomNumber: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="addCapacity" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Capacity
                </label>
                <input type="number" className="form-control" id="addCapacity" placeholder="Enter room capacity"
                  value={addForm.capacity || ""} onChange={(e) => setAddForm({ ...addForm, capacity: Number(e.target.value) })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="addFloor" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Floor
                </label>
                <input type="text" className="form-control" id="addFloor" placeholder="Enter floor"
                  value={addForm.floor} onChange={(e) => setAddForm({ ...addForm, floor: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="addIsActive" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                </label>
                <select id="addIsActive" className="form-control form-select"
                  value={addForm.isActive ? "true" : "false"} onChange={(e) => setAddForm({ ...addForm, isActive: e.target.value === "true" })}>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                <button type="button" onClick={() => { setShowAddSidebar(false); setAddForm({ className: "", roomNumber: "", capacity: 0, floor: "", isActive: true }); }}
                  className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                  Cancel
                </button>
                <button type="submit" disabled={addMutation.isPending}
                  className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                  {addMutation.isPending ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Edit Sidebar */}
      <div
        className={`edit-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 duration-300 ${showEditSidebar ? 'active-translate-0' : 'translate-x-full'}`}>
        <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
          <h5 className="text-lg mb-0">Edit Class Room</h5>
          <button type="button" onClick={() => setShowEditSidebar(false)} className="text-danger-600 text-lg d-flex">
            <i className="ri-close-large-line"></i>
          </button>
        </div>
        <form onSubmit={handleEdit} className="d-flex flex-column p-20">
          <div className="row g-3">
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="editClassName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class Name
                </label>
                <input type="text" className="form-control" id="editClassName" placeholder="Enter class name"
                  value={editForm.className} onChange={(e) => setEditForm({ ...editForm, className: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="editRoomNumber" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Room Number
                </label>
                <input type="text" className="form-control" id="editRoomNumber" placeholder="Enter room number"
                  value={editForm.roomNumber} onChange={(e) => setEditForm({ ...editForm, roomNumber: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="editCapacity" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Capacity
                </label>
                <input type="number" className="form-control" id="editCapacity" placeholder="Enter room capacity"
                  value={editForm.capacity || ""} onChange={(e) => setEditForm({ ...editForm, capacity: Number(e.target.value) })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="editFloor" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Floor
                </label>
                <input type="text" className="form-control" id="editFloor" placeholder="Enter floor"
                  value={editForm.floor} onChange={(e) => setEditForm({ ...editForm, floor: e.target.value })} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="">
                <label htmlFor="editIsActive" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                </label>
                <select id="editIsActive" className="form-control form-select"
                  value={editForm.isActive ? "true" : "false"} onChange={(e) => setEditForm({ ...editForm, isActive: e.target.value === "true" })}>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                <button type="button" onClick={() => setShowEditSidebar(false)}
                  className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                  Cancel
                </button>
                <button type="submit" disabled={updateMutation.isPending}
                  className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                  {updateMutation.isPending ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered max-w-340-px">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-body pt-32 px-36 pb-24 text-center">
              <span className="mb-16 fs-1 line-height-1 text-danger animate-bounce">
                <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
              </span>
              <h6 className="text-lg fw-semibold text-primary-light mb-0">Are you sure you want to delete this classroom?</h6>
              <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                <button type="button" data-bs-dismiss="modal"
                  className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8">
                  Cancel
                </button>
                <button type="button"
                  onClick={handleDelete}
                  disabled={deleteMutation.isPending}
                  className="flex-grow-1 btn btn-primary-600 border border-primary-600 text-md px-16 py-12 radius-8">
                  {deleteMutation.isPending ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
