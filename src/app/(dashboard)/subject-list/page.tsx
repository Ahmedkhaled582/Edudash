"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";
import { useEffect, useState } from "react";
import { useSubjects , useAddSubject , useUpdateSubject , useDeleteSubject } from "@/features/subjects/hooks/useSubject";
import { useToast } from "@/components/Toast";
import { subject , AddSubjectPayload , UpdateSubjectPayload } from "@/features/subjects/api/subjectsApi";
export default function SubjectListPage() {

     const { data: subjects, isLoading, error } = useSubjects();
      const deleteMutation = useDeleteSubject();
      const addMutation = useAddSubject();
      const updateMutation = useUpdateSubject();
    
      const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);
      const { showToast } = useToast();
    
      // Sidebar visibility
      const [showAddSidebar, setShowAddSidebar] = useState(false);
      const [showEditSidebar, setShowEditSidebar] = useState(false);
    
      // Add form state
      const [addForm, setAddForm] = useState<AddSubjectPayload>({
          name: "",
          code: "",
          teacherId: 0,
          status: true,
         });
    
      // Edit form state
      const [editForm, setEditForm] = useState<UpdateSubjectPayload>({
        id: 0,
        name: "",
        code: "",
        teacherId: 0,
        status: true,
      });
    
      // Re-initialize jQuery DataTables when the data changes
      useEffect(() => {
        if (typeof window !== "undefined" && subjects && subjects.length > 0) {
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
      }, [subjects, isLoading]);
    
      // Handle Add
      const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        addMutation.mutate(addForm, {
          onSuccess: () => {
            showToast("success", "Subject Added", `Successfully added subject "${addForm.name}"`);
            setShowAddSidebar(false);
            setAddForm({ name: "", code: "", teacherId: 0, status: true });
          },
          onError: (error: any) => {
            const errorMsg = error?.response?.data?.message || error?.message || "Failed to add subject";
            showToast("error", "Error Adding Subject", errorMsg);
          }
        });
      };
    
      // Handle Edit
      const openEditSidebar = (room: subject) => {
        setEditForm({
          id: room.id,
          name: room.name,
          code: room.code,
          teacherId: room.teacherId,
          status: room.status,
        });
        setShowEditSidebar(true);
      };
    
      const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        updateMutation.mutate(editForm, {
          onSuccess: () => {
            showToast("success", "Subject Updated", `Successfully updated subject "${editForm.name}"`);
            setShowEditSidebar(false);
          },
          onError: (error: any) => {
            const errorMsg = error?.response?.data?.message || error?.message || "Failed to update subject";
            showToast("error", "Error Updating Subject", errorMsg);
          }
        });
      };
    
      // Handle Delete
      const handleDelete = () => {
        if (selectedSubjectId !== null) {
          deleteMutation.mutate(selectedSubjectId, {
            onSuccess: () => {
              showToast("success", "Subject Deleted", "Successfully deleted subject");
              // Close modal using Bootstrap instance API
              const modalElement = document.getElementById("exampleModalDelete");
              if (modalElement && typeof window !== "undefined") {
                const bootstrap = (window as any).bootstrap;
                if (bootstrap) {
                  const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
                  modalInstance.hide();
                }
              }
              setSelectedSubjectId(null);
            },
            onError: (error: any) => {
              const errorMsg = error?.response?.data?.message || error?.message || "Failed to delete subject";
              showToast("error", "Error Deleting Subject", errorMsg);
            }
          });
        }
      };

  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Subjects List </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Subjects List </span>
                      </div>
                  </div>
        <button type="button" onClick={() => setShowAddSidebar(true)} className="btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add Subject
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
                                                  className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                  <i className="ri-file-3-line"></i>
                                                  PDF
                                              </button>
                                          </li>
                                          <li>
                                              <button type="button"
                                                  className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
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
      
                          <div className="p-0">
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
                                          <th scope="col">Subject</th>
                                          <th scope="col">Code</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>{isLoading ? (
                    <tr>
                      <td colSpan={5} className="text-center py-20">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={5} className="text-center py-20 text-danger">
                        Error loading subjects.
                      </td>
                    </tr>
                  ) : subjects && subjects.length > 0 ? (
                    subjects.map((subject, index) => (
                      <tr key={subject.id}>
                        {/* <td>
                          <div className="form-check style-check d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                              {(index + 1).toString().padStart(2, "0")}
                            </label>
                          </div>
                        </td> */}
                        <td><span className="text-primary-600">CR-{subject.id}</span></td>
                        <td>{subject.name}</td>
                        <td>{subject.code}</td>
                        <td>{subject.status ? (
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
                                  onClick={() => openEditSidebar(subject)}
                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                  <i className="ri-edit-2-line"></i>Edit
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => setSelectedSubjectId(subject.id)}
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
                      <td colSpan={5} className="text-center py-20">
                        No Subjects found.
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
      
        <div
          className={`my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 duration-300 ${showAddSidebar ? 'active-translate-0' : 'translate-x-full'}`}>
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
            <h5 className="text-lg mb-0">Add New Subject</h5>
          <button type="button" onClick={() => setShowAddSidebar(false)} className="text-danger-600 text-lg d-flex">
              <i className="ri-close-large-line"></i>
            </button>
          </div>
        <form onSubmit={handleAdd} className="d-flex flex-column p-20">
            <div className="row g-3">
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="sectionName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                    Name
                  </label>
                  <input type="text" className="form-control" id="sectionName" placeholder="Enter subject name" value={addForm.name} onChange={(e) => setAddForm({ ...addForm, name: e.target.value })} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="subjectCode" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                    Code
                  </label>
                  <input type="text" className="form-control" id="subjectCode" placeholder="Enter subject code"  value={addForm.code} onChange={(e) => setAddForm({ ...addForm, code: e.target.value })}  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="teacherId" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Teacher ID
                  </label>
                  <input type="number" className="form-control" id="teacherId" placeholder="Enter teacher ID" value={addForm.teacherId || ""} onChange={(e) => setAddForm({ ...addForm, teacherId: Number(e.target.value) })} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="sectionStatus" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                  </label>
                  <select id="sectionStatus" className="form-control form-select" value={addForm.status ? "true" : "false"} onChange={(e) => setAddForm({ ...addForm, status: e.target.value === "true" })}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                          <button type="button" onClick={() => { setShowAddSidebar(false); setAddForm({ name: "", code: "", teacherId: 0, status: true }); }}
                              
                    className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                    Cancel
                  </button>
            <button type="submit" disabled={addMutation.isPending}
                    className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                                
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      
      
      
        <div
          className={`edit-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 duration-300 ${showEditSidebar ? 'active-translate-0' : 'translate-x-full'}`}>
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
            <h5 className="text-lg mb-0">Edit Subject</h5>
            <button type="button" onClick={() => setShowEditSidebar(false)} className="text-danger-600 text-lg d-flex">
              <i className="ri-close-large-line"></i>
            </button>
          </div>
          <form onSubmit={handleEdit} className="d-flex flex-column p-20">
            <div className="row g-3">
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="sectionNameEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                    Name
                  </label>
                  <input type="text" className="form-control" id="sectionNameEdit" placeholder="Enter subject name" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                </div>
              </div>
               <div className="col-sm-12">
                <div className="">
                  <label htmlFor="subjectCodeTwoEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                    Code
                  </label>
                  <input type="text" className="form-control" id="subjectCodeTwoEdit" placeholder="Enter subject code" value={editForm.code} onChange={(e) => setEditForm({ ...editForm, code: e.target.value })} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="teacherIdEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Teacher ID
                  </label>
                  <input type="number" className="form-control" id="teacherIdEdit" placeholder="Enter teacher ID" value={editForm.teacherId || ""} onChange={(e) => setEditForm({ ...editForm, teacherId: Number(e.target.value) })} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="">
                  <label htmlFor="sectionStatusEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                  </label>
                  <select id="sectionStatusEdit" className="form-control form-select" value={editForm.status ? "true" : "false"} onChange={(e) => setEditForm({ ...editForm, status: e.target.value === "true" })}>
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
      
      
      
      
      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered max-w-340-px">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-body pt-32 px-36 pb-24 text-center">
              <span className="mb-16 fs-1 line-height-1 text-danger animate-bounce">
                <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
              </span>
              <h6 className="text-lg fw-semibold text-primary-light mb-0">Are you sure you want to delete this subject?</h6>
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
      
      {/* <Script
        id="page-subject-list-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      /> */}
    </>
  );
}
