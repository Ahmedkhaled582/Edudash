/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGuardians, useDeleteGuardian } from "@/features/guardian/hooks/useGuardian";
import { useToast } from "@/components/Toast";

export default function GuardianListPage() {
  const { data: guardians, isLoading, error } = useGuardians();
  const deleteMutation = useDeleteGuardian();
  const [selectedGuardianId, setSelectedGuardianId] = useState<number | null>(null);
  const { showToast } = useToast();

  // Re-initialize jQuery DataTables when the data changes
  useEffect(() => {
    if (typeof window !== "undefined" && guardians && guardians.length > 0) {
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
  }, [guardians, isLoading]);

  const handleDelete = () => {
    if (selectedGuardianId !== null) {
      const deletedGuardian = guardians?.find((g) => g.id === selectedGuardianId);
      
      deleteMutation.mutate(selectedGuardianId, {
        onSuccess: () => {
          showToast("success", "Guardian Deleted", `Successfully deleted ${deletedGuardian?.relation || "Guardian"} "${deletedGuardian?.name || ""}"`);
          // Close modal using Bootstrap instance API
          const modalElement = document.getElementById("exampleModalDelete");
          if (modalElement && typeof window !== "undefined") {
            const bootstrap = (window as any).bootstrap;
            if (bootstrap) {
              const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
              modalInstance.hide();
            }
          }
          setSelectedGuardianId(null);
        },
        onError: (error: any) => {
          const errorMsg = error?.response?.data?.message || error?.message || "Failed to delete guardian";
          showToast("error", "Error Deleting Guardian", errorMsg);
        }
      });
    }
  };

  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div>
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Guardian List</h1>
          <div>
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <span className="text-secondary-light">/ Guardian List</span>
          </div>
        </div>
        <Link href="/add-new-guardian" className="btn btn-primary-600 d-flex align-items-center gap-6">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Guardian
        </Link>
      </div>

      <div className="mt-24">
        <div className="card h-100">
          <div className="card-body p-0 dataTable-wrapper">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-16 px-20 py-12 border-bottom border-neutral-200">
              <div className="d-flex flex-wrap align-items-center gap-16">
                <div className="dropdown">
                  <button type="button"
                    className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="d-flex align-items-center gap-1 text-secondary-light text-sm">
                      <i className="ri-file-upload-line text-md line-height-1"></i>
                      Export
                    </span>
                    <span>
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
                <span>
                  Rows per page:
                </span>
                <div className="dt-length">
                  <select name="dataTable_length" aria-controls="dataTable"
                    className="dt-input form-control form-select">
                    <option value="5">5</option>
                    <option value="10" defaultValue="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-0 table-responsive">
              <table className="table bordered-table mb-0 data-table" id="dataTable" data-page-length="10">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check style-check d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">S.L</label>
                      </div>
                    </th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Student Details</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={8} className="text-center py-20">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={8} className="text-center py-20 text-danger">
                        Error loading guardians.
                      </td>
                    </tr>
                  ) : guardians && guardians.length > 0 ? (
                    guardians.map((guardian, index) => (
                      <tr key={guardian.id}>
                        <td>
                          <div className="form-check style-check d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                              {(index + 1).toString().padStart(2, "0")}
                            </label>
                          </div>
                        </td>
                        <td><span className="text-primary-600">GD-{guardian.id}</span></td>
                        <td>
                          <div className="d-flex align-items-center">
                            {/* <img src={guardian.studentProfile}
                              alt="Avatar" className="flex-shrink-0 me-12 radius-8" width={32} height={32} /> */}
                            <div>
                              <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                {guardian.name}
                              </h6>
                              <span className="text-secondary-light text-xs">{guardian.relation}</span>
                            </div>
                          </div>
                        </td>
                        <td>{guardian.occupation}</td>
                        <td>{guardian.address}</td>
                        <td>{guardian.phone}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={guardian.studentProfile}
                              alt="Student Avatar" className="flex-shrink-0 me-12 radius-8" width={32} height={32} />
                            <div>
                              <h6 className="text-sm mb-0 fw-medium text-secondary-light">
                                Student ID: {guardian.studentId}
                              </h6>
                                <h6 className="text-sm mb-0 fw-medium text-secondary-light">
                                Student Name: {guardian.studentName}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="text-primary-light text-xl"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                              <li>
                                <Link href={`/edit-guardian?id=${guardian.id}`}
                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                  <i className="ri-edit-2-line"></i>Edit
                                </Link>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => setSelectedGuardianId(guardian.id)}
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
                      <td colSpan={8} className="text-center py-20">
                        No guardians found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered max-w-340-px">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-body pt-32 px-36 pb-24 text-center">
              <span className="mb-16 fs-1 line-height-1 text-danger animate-bounce">
                <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
              </span>
              <h6 className="text-lg fw-semibold text-primary-light mb-0">Are you sure you want to delete this guardian?</h6>
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
