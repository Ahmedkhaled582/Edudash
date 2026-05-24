/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/Toast";
import {
  useExams,
  useAddExam,
  useUpdateExam,
  useDeleteExam,
} from "@/features/exam/hooks/useExam";
import { examSchema, ExamFormValues } from "@/features/exam/schema/examSchema";
import { Exam } from "@/features/exam/api/examApi";

export default function ExamPage() {
  const { data: exams, isLoading, error } = useExams();
  const addMutation = useAddExam();
  const updateMutation = useUpdateExam();
  const deleteMutation = useDeleteExam();
  
  const { showToast } = useToast();
  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [selectedExamId, setSelectedExamId] = useState<number | null>(null);

  // Forms setup
  const {
    register: registerAdd,
    handleSubmit: handleSubmitAdd,
    reset: resetAdd,
    formState: { errors: errorsAdd },
  } = useForm<ExamFormValues>({
    resolver: zodResolver(examSchema) as any,
    defaultValues: {
      name: "",
      examDate: "",
      startTime: "",
      endTime: "",
      maxMarks: 0,
      passingMarks: 0,
      subjectId: 1,
      classId: 1,
    },
  });

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    formState: { errors: errorsEdit },
  } = useForm<ExamFormValues>({
    resolver: zodResolver(examSchema) as any,
  });

  // Re-initialize jQuery DataTables when the data changes
  useEffect(() => {
    if (typeof window !== "undefined" && exams && exams.length > 0) {
      const $ = (window as any).$;
      const DataTable = (window as any).DataTable;

      if ($ && DataTable) {
        // Destroy existing instance if it exists to prevent duplicate tables
        if ($.fn.DataTable.isDataTable("#dataTable")) {
          $("#dataTable").DataTable().destroy();
        }

        // Initialize DataTable
        const tableInstance = new DataTable("#dataTable", {
          searching: true,
          lengthChange: true,
          pageLength: 10,
          order: [], // Disable initial sorting to keep the default API order
        });

        // Bind custom search input
        $(".dt-search .dt-input")
          .off("keyup")
          .on("keyup", function (this: any) {
            tableInstance.search(this.value).draw();
          });

        // Bind custom page length select
        $(".dt-length .dt-input")
          .off("change")
          .on("change", function (this: any) {
            const value = $(this).val();
            tableInstance.page.len(value).draw();
          });

        return () => {
          if ($.fn.DataTable.isDataTable("#dataTable")) {
            $("#dataTable").DataTable().destroy();
          }
        };
      }
    }
  }, [exams, isLoading]);

  // Date and Time Formatting Helpers
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      const day = String(date.getDate()).padStart(2, "0");
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } catch {
      return dateStr;
    }
  };

  const formatTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const strHours = String(hours).padStart(2, "0");
      return `${strHours}:${minutes} ${ampm}`;
    } catch {
      return dateStr;
    }
  };

  const getExamStatus = (startTimeStr: string, endTimeStr: string) => {
    try {
      const now = new Date();
      const start = new Date(startTimeStr);
      const end = new Date(endTimeStr);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return { label: "Active", className: "bg-success-100 text-success-600" };
      }
      if (now >= start && now <= end) {
        return { label: "Active", className: "bg-success-100 text-success-600" };
      } else if (now < start) {
        return { label: "Scheduled", className: "bg-info-100 text-info-600" };
      } else {
        return { label: "Closed", className: "bg-danger-100 text-danger-600" };
      }
    } catch {
      return { label: "Active", className: "bg-success-100 text-success-600" };
    }
  };

  // Handlers
  const handleEditClick = (exam: Exam) => {
    setSelectedExam(exam);
    resetEdit({
      name: exam.name,
      examDate: exam.examDate.split("T")[0],
      startTime: exam.startTime.slice(0, 16),
      endTime: exam.endTime.slice(0, 16),
      maxMarks: exam.maxMarks,
      passingMarks: exam.passingMarks,
      subjectId: exam.subjectId,
      classId: exam.classId,
    });
    setIsEditOpen(true);
  };

  const onSubmitAdd = (data: ExamFormValues) => {
    addMutation.mutate(
      {
        name: data.name,
        examDate: new Date(data.examDate).toISOString(),
        startTime: new Date(data.startTime).toISOString(),
        endTime: new Date(data.endTime).toISOString(),
        maxMarks: data.maxMarks,
        passingMarks: data.passingMarks,
        subjectId: data.subjectId,
        classId: data.classId,
      },
      {
        onSuccess: () => {
          showToast("success", "Exam Added", `Successfully created exam "${data.name}"`);
          setIsAddOpen(false);
          resetAdd();
        },
        onError: (err: any) => {
          const errMsg = err?.response?.data?.message || err?.message || "Failed to add exam";
          showToast("error", "Error Adding Exam", errMsg);
        },
      }
    );
  };

  const onSubmitEdit = (data: ExamFormValues) => {
    if (!selectedExam) return;
    updateMutation.mutate(
      {
        id: selectedExam.id,
        name: data.name,
        examDate: new Date(data.examDate).toISOString(),
        startTime: new Date(data.startTime).toISOString(),
        endTime: new Date(data.endTime).toISOString(),
        maxMarks: data.maxMarks,
        passingMarks: data.passingMarks,
        subjectId: data.subjectId,
        classId: data.classId,
      },
      {
        onSuccess: () => {
          showToast("success", "Exam Updated", `Successfully updated exam "${data.name}"`);
          setIsEditOpen(false);
          resetEdit();
          setSelectedExam(null);
        },
        onError: (err: any) => {
          const errMsg = err?.response?.data?.message || err?.message || "Failed to update exam";
          showToast("error", "Error Updating Exam", errMsg);
        },
      }
    );
  };

  const handleDelete = () => {
    if (selectedExamId !== null) {
      const targetExam = exams?.find((e) => e.id === selectedExamId);
      deleteMutation.mutate(selectedExamId, {
        onSuccess: () => {
          showToast("success", "Exam Deleted", `Successfully deleted exam "${targetExam?.name || ""}"`);
          // Close modal using Bootstrap API
          const modalElement = document.getElementById("exampleModalDelete");
          if (modalElement && typeof window !== "undefined") {
            const bootstrap = (window as any).bootstrap;
            if (bootstrap) {
              const modalInstance =
                bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
              modalInstance.hide();
            }
          }
          setSelectedExamId(null);
        },
        onError: (err: any) => {
          const errMsg = err?.response?.data?.message || err?.message || "Failed to delete exam";
          showToast("error", "Error Deleting Exam", errMsg);
        },
      });
    }
  };

  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div>
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Exam List</h1>
          <div>
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">
              Dashboard
            </Link>
            <span className="text-secondary-light">/ Exam List</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsAddOpen(true)}
          className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6"
        >
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Exam
        </button>
      </div>

      <div className="mt-24">
        <div className="card h-100">
          <div className="card-body p-0 dataTable-wrapper">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-16 px-20 py-12 border-bottom border-neutral-200">
              <div className="d-flex flex-wrap align-items-center gap-16">
                <div className="dropdown">
                  <button
                    type="button"
                    className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
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
                      <button
                        type="button"
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                      >
                        <i className="ri-file-3-line"></i>
                        PDF
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                      >
                        <i className="ri-file-excel-line"></i>
                        Excel
                      </button>
                    </li>
                  </ul>
                </div>
                <form className="navbar-search dt-search m-0" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    className="dt-input bg-transparent radius-4"
                    aria-controls="dataTable"
                    name="search"
                    placeholder="Search..."
                  />
                  <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                </form>
              </div>
              <div className="d-flex align-items-center gap-8 text-secondary-light">
                <span>Rows per page:</span>
                <div className="dt-length">
                  <select
                    name="dataTable_length"
                    aria-controls="dataTable"
                    className="dt-input form-control form-select"
                  >
                    <option value="5">5</option>
                    <option value="10" defaultValue="10">
                      10
                    </option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-0 table-responsive">
              <table
                className="table bordered-table mb-0 data-table"
                id="dataTable"
                data-page-length="10"
              >
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check style-check d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">S.L</label>
                      </div>
                    </th>
                    <th scope="col">Exam Name</th>
                    <th scope="col">Exam Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    {/*<th scope="col">Status</th>*/}
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
                        Error loading exams.
                      </td>
                    </tr>
                  ) : exams && exams.length > 0 ? (
                    exams.map((exam, index) => {
                      const status = getExamStatus(exam.startTime, exam.endTime);
                      return (
                        <tr key={exam.id}>
                          <td>
                            <div className="form-check style-check d-flex align-items-center">
                              <input className="form-check-input" type="checkbox" />
                              <label className="form-check-label">
                                {(index + 1).toString().padStart(2, "0")}
                              </label>
                            </div>
                          </td>
                          <td>{exam.name}</td>
                          <td>{formatDate(exam.examDate)}</td>
                          <td>{formatTime(exam.startTime)}</td>
                          <td>{formatTime(exam.endTime)}</td>
                          <td>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="text-primary-light text-xl"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                              >
                                <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => handleEditClick(exam)}
                                    className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6 w-100 text-start"
                                  >
                                    <i className="ri-edit-2-line"></i>
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6 w-100 text-start"
                                    type="button"
                                    onClick={() => setSelectedExamId(exam.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalDelete"
                                  >
                                    <i className="ri-delete-bin-6-line"></i>
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-20">
                        No exams found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Sidebar */}
      <div
        className={`my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0 ${
          isAddOpen ? "active" : ""
        }`}
      >
        <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
          <h5 className="text-lg mb-0">Add New Exam</h5>
          <button
            type="button"
            onClick={() => setIsAddOpen(false)}
            className="close-my-sidebar text-danger-600 text-lg d-flex"
          >
            <i className="ri-close-large-line"></i>
          </button>
        </div>
        <form onSubmit={handleSubmitAdd(onSubmitAdd)} className="d-flex flex-column p-20">
          <div className="row g-3">
            <div className="col-sm-12">
              <div>
                <label
                  htmlFor="examNm"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Exam Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errorsAdd.name ? "is-invalid" : ""}`}
                  id="examNm"
                  placeholder="Enter Exam name"
                  {...registerAdd("name")}
                />
                {errorsAdd.name && <div className="invalid-feedback">{errorsAdd.name.message}</div>}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="examDate"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Exam Date
                </label>
                <input
                  type="date"
                  className={`form-control ${errorsAdd.examDate ? "is-invalid" : ""}`}
                  id="examDate"
                  {...registerAdd("examDate")}
                />
                {errorsAdd.examDate && (
                  <div className="invalid-feedback">{errorsAdd.examDate.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="startTime"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  className={`form-control ${errorsAdd.startTime ? "is-invalid" : ""}`}
                  id="startTime"
                  {...registerAdd("startTime")}
                />
                {errorsAdd.startTime && (
                  <div className="invalid-feedback">{errorsAdd.startTime.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="endTime"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  End Time
                </label>
                <input
                  type="datetime-local"
                  className={`form-control ${errorsAdd.endTime ? "is-invalid" : ""}`}
                  id="endTime"
                  {...registerAdd("endTime")}
                />
                {errorsAdd.endTime && (
                  <div className="invalid-feedback">{errorsAdd.endTime.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="maxMarks"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Max Marks
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsAdd.maxMarks ? "is-invalid" : ""}`}
                  id="maxMarks"
                  placeholder="Enter Max Marks"
                  {...registerAdd("maxMarks")}
                />
                {errorsAdd.maxMarks && (
                  <div className="invalid-feedback">{errorsAdd.maxMarks.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="passingMarks"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Passing Marks
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsAdd.passingMarks ? "is-invalid" : ""}`}
                  id="passingMarks"
                  placeholder="Enter Passing Marks"
                  {...registerAdd("passingMarks")}
                />
                {errorsAdd.passingMarks && (
                  <div className="invalid-feedback">{errorsAdd.passingMarks.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="subjectId"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Subject ID
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsAdd.subjectId ? "is-invalid" : ""}`}
                  id="subjectId"
                  placeholder="Enter Subject ID"
                  {...registerAdd("subjectId")}
                />
                {errorsAdd.subjectId && (
                  <div className="invalid-feedback">{errorsAdd.subjectId.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="classId"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Class ID
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsAdd.classId ? "is-invalid" : ""}`}
                  id="classId"
                  placeholder="Enter Class ID"
                  {...registerAdd("classId")}
                />
                {errorsAdd.classId && (
                  <div className="invalid-feedback">{errorsAdd.classId.message}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addMutation.isPending}
                  className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100"
                >
                  {addMutation.isPending ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Edit Sidebar */}
      <div
        className={`edit-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0 ${
          isEditOpen ? "active" : ""
        }`}
      >
        <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
          <h5 className="text-lg mb-0">Edit Exam</h5>
          <button
            type="button"
            onClick={() => {
              setIsEditOpen(false);
              setSelectedExam(null);
            }}
            className="close-edit-sidebar text-danger-600 text-lg d-flex"
          >
            <i className="ri-close-large-line"></i>
          </button>
        </div>
        <form onSubmit={handleSubmitEdit(onSubmitEdit)} className="d-flex flex-column p-20">
          <div className="row g-3">
            <div className="col-sm-12">
              <div>
                <label
                  htmlFor="examNmEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Exam Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errorsEdit.name ? "is-invalid" : ""}`}
                  id="examNmEdit"
                  placeholder="Enter Exam name"
                  {...registerEdit("name")}
                />
                {errorsEdit.name && (
                  <div className="invalid-feedback">{errorsEdit.name.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="examDateEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Exam Date
                </label>
                <input
                  type="date"
                  className={`form-control ${errorsEdit.examDate ? "is-invalid" : ""}`}
                  id="examDateEdit"
                  {...registerEdit("examDate")}
                />
                {errorsEdit.examDate && (
                  <div className="invalid-feedback">{errorsEdit.examDate.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="startTimeEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  className={`form-control ${errorsEdit.startTime ? "is-invalid" : ""}`}
                  id="startTimeEdit"
                  {...registerEdit("startTime")}
                />
                {errorsEdit.startTime && (
                  <div className="invalid-feedback">{errorsEdit.startTime.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="endTimeEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  End Time
                </label>
                <input
                  type="datetime-local"
                  className={`form-control ${errorsEdit.endTime ? "is-invalid" : ""}`}
                  id="endTimeEdit"
                  {...registerEdit("endTime")}
                />
                {errorsEdit.endTime && (
                  <div className="invalid-feedback">{errorsEdit.endTime.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="maxMarksEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Max Marks
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsEdit.maxMarks ? "is-invalid" : ""}`}
                  id="maxMarksEdit"
                  placeholder="Enter Max Marks"
                  {...registerEdit("maxMarks")}
                />
                {errorsEdit.maxMarks && (
                  <div className="invalid-feedback">{errorsEdit.maxMarks.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="passingMarksEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Passing Marks
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsEdit.passingMarks ? "is-invalid" : ""}`}
                  id="passingMarksEdit"
                  placeholder="Enter Passing Marks"
                  {...registerEdit("passingMarks")}
                />
                {errorsEdit.passingMarks && (
                  <div className="invalid-feedback">{errorsEdit.passingMarks.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="subjectIdEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Subject ID
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsEdit.subjectId ? "is-invalid" : ""}`}
                  id="subjectIdEdit"
                  placeholder="Enter Subject ID"
                  {...registerEdit("subjectId")}
                />
                {errorsEdit.subjectId && (
                  <div className="invalid-feedback">{errorsEdit.subjectId.message}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <label
                  htmlFor="classIdEdit"
                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8"
                >
                  Class ID
                </label>
                <input
                  type="number"
                  className={`form-control ${errorsEdit.classId ? "is-invalid" : ""}`}
                  id="classIdEdit"
                  placeholder="Enter Class ID"
                  {...registerEdit("classId")}
                />
                {errorsEdit.classId && (
                  <div className="invalid-feedback">{errorsEdit.classId.message}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditOpen(false);
                    setSelectedExam(null);
                  }}
                  className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updateMutation.isPending}
                  className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8"
                >
                  {updateMutation.isPending ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-340-px">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-body pt-32 px-36 pb-24 text-center">
              <span className="mb-16 fs-1 line-height-1 text-danger">
                <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
              </span>
              <h6 className="text-lg fw-semibold text-primary-light mb-0">
                Are you sure you want to delete this exam?
              </h6>
              <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                <button
                  type="button"
                  className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleteMutation.isPending}
                  className="flex-grow-1 btn btn-primary-600 border border-primary-600 text-md px-16 py-12 radius-8"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controlled Overlay */}
      <div
        className={`overlay ${isAddOpen || isEditOpen ? "active" : ""}`}
        onClick={() => {
          setIsAddOpen(false);
          setIsEditOpen(false);
          setSelectedExam(null);
        }}
      />
    </>
  );
}
