/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function LeaveRequestPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Leave Request</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Leave Request</span>
                      </div>
                  </div>
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
                                  <form className="navbar-search dt-search m-0">
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
                                          <option value="10" selected>10</option>
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
                                          <th scope="col">S.L</th>
                                          <th scope="col">Apply Date</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">User type</th>
                                          <th scope="col">Leave Type</th>
                                          <th scope="col">Date</th>
                                          <th scope="col">Duration</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>01</td>
                                          <td>07 May 2025</td>
                                          <td>Jerome Bell</td>
                                          <td>Teacher</td>
                                          <td><i className="ri-hospital-line me-1"></i> Medical Leave</td>
                                          <td>07 May 2025 - 08 May 2025</td>
                                          <td>1</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Approved</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>02</td>
                                          <td>10 May 2025</td>
                                          <td>Jane Cooper</td>
                                          <td>Student</td>
                                          <td><i className="ri-sun-line me-1"></i> Casual Leave</td>
                                          <td>10 May 2025 - 12 May 2025</td>
                                          <td>2</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>03</td>
                                          <td>12 May 2025</td>
                                          <td>Devon Lane</td>
                                          <td>Teacher</td>
                                          <td><i className="ri-time-line me-1"></i> Half Day Leave</td>
                                          <td>12 May 2025</td>
                                          <td>0.5</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>04</td>
                                          <td>13 May 2025</td>
                                          <td>Cody Fisher</td>
                                          <td>Admin</td>
                                          <td><i className="ri-flight-takeoff-line me-1"></i> Vacation Leave</td>
                                          <td>13 May 2025 - 20 May 2025</td>
                                          <td>7</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Approved</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>05</td>
                                          <td>14 May 2025</td>
                                          <td>Theresa Webb</td>
                                          <td>Teacher</td>
                                          <td><i className="ri-book-open-line me-1"></i> Study Leave</td>
                                          <td>14 May 2025 - 16 May 2025</td>
                                          <td>2</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>06</td>
                                          <td>15 May 2025</td>
                                          <td>Darrell Steward</td>
                                          <td>Student</td>
                                          <td><i className="ri-money-dollar-circle-line me-1"></i> Paid Leave</td>
                                          <td>15 May 2025 - 17 May 2025</td>
                                          <td>2</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Approved</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>07</td>
                                          <td>17 May 2025</td>
                                          <td>Leslie Alexander</td>
                                          <td>Teacher</td>
                                          <td><i className="ri-alarm-warning-line me-1"></i> Emergency Leave</td>
                                          <td>17 May 2025 - 18 May 2025</td>
                                          <td>1</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>08</td>
                                          <td>18 May 2025</td>
                                          <td>Guy Hawkins</td>
                                          <td>Admin</td>
                                          <td><i className="ri-parent-line me-1"></i> Maternity Leave</td>
                                          <td>18 May 2025 - 28 May 2025</td>
                                          <td>10</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Approved</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>09</td>
                                          <td>19 May 2025</td>
                                          <td>Brooklyn Simmons</td>
                                          <td>Teacher</td>
                                          <td><i className="ri-user-heart-line me-1"></i> Paternity Leave</td>
                                          <td>19 May 2025 - 24 May 2025</td>
                                          <td>5</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>10</td>
                                          <td>20 May 2025</td>
                                          <td>Kristin Watson</td>
                                          <td>Student</td>
                                          <td><i className="ri-close-circle-line me-1"></i> Unpaid Leave</td>
                                          <td>20 May 2025 - 21 May 2025</td>
                                          <td>1</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button type="button"
                                                              className="my-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View Request
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
      
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
      
      <div
          className="my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">View Leave Request</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <div className="p-20">
              <div className="d-flex flex-column gap-28">
                  <div className="d-flex flex-column gap-8">
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Apply Date</span>
                          <span className="fw-normal text-sm text-primary-light">: 07 May 2025</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Name</span>
                          <span className="fw-normal text-sm text-primary-light">: Jerome Bell</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">User type</span>
                          <span className="fw-normal text-sm text-primary-light">: Teacher</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Leave Type</span>
                          <span className="fw-normal text-sm text-primary-light">: Medical Leave</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Date</span>
                          <span className="fw-normal text-sm text-primary-light">: 07 May 2025 - 08 may 2025</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Duration</span>
                          <span className="fw-normal text-sm text-primary-light">: 1</span>
                      </div>
                      <div className="d-flex gap-4">
                          <span className="fw-semibold text-sm text-secondary-light w-110-px">Reasons</span>
                          <span className="fw-normal text-sm text-primary-light">: Doctor or hospital visits</span>
                      </div>
                  </div>
                  <div className="">
                      <h5 className="text-md mb-0">Update Status</h5>
                      <div className="d-flex align-items-center flex-wrap gap-28 mt-16">
                          <div className="form-check checked-primary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="radio1" id="p1" />
                              <label className="form-check-label" htmlFor="p1">Pending</label>
                          </div>
                          <div className="form-check checked-primary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="radio1" id="l1" />
                              <label className="form-check-label" htmlFor="l1">Approved</label>
                          </div>
                          <div className="form-check checked-primary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="radio1" id="a1" />
                              <label className="form-check-label" htmlFor="a1">Rejected</label>
                          </div>
                      </div>
                  </div>
                  <form action="#" className="">
                      <div className="">
                          <label htmlFor="notee" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Leave
                              Note
                          </label>
                          <textarea className="form-control" id="notee" placeholder="Enter note..."></textarea>
                      </div>
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                          <button type="reset"
                              className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                              Cancel
                          </button>
                          <button type="submit"
                              className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                              Save
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      
      
      
      
      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-340-px">
              <div className="modal-content radius-16 bg-base">
                  <div className="modal-body pt-32 px-36 pb-24 text-center">
                      <span className="mb-16 fs-1 line-height-1 text-danger">
                          <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
                      </span>
                      <h6 className="text-lg fw-semibold text-primary-light mb-0">Are your sure you want to Suspend this teacher
                      </h6>
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                          <button type="reset"
                              className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8" data-bs-dismiss="modal">
                              Cancel
                          </button>
                          <button type="button"
                              className="flex-grow-1 btn btn-primary-600 border border-primary-600 text-md px-16 py-12 radius-8">
                              Yes, Suspend
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <Script
        id="page-leave-request-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
