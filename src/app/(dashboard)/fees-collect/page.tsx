/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function FeesCollectPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Fees Collect </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Fees Collect </span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-wallet-3-line"></i>
                      </span>
                      Collect Fees
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
                                                  data-bs-toggle="modal" data-bs-target="#exampleModalView Details">
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
                                  <div className="dropdown">
                                      <button type="button"
                                          className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          <span className="d-flex align-items-center gap-1 text-secondary-light text-sm">
                                              Filter
                                          </span>
                                          <span className="">
                                              <i className="ri-arrow-down-s-line"></i>
                                          </span>
                                      </button>
                                      <div className="dropdown-menu border bg-base shadow dropdown-menu-lg p-0">
                                          <div
                                              className="d-flex align-items-center justify-content-between border-bottom py-8 px-16">
                                              <span className="fw-semibold text-lg text-primary-light">Filter</span>
                                              <button type="button">
                                                  <i className="ri-close-large-line"></i>
                                              </button>
                                          </div>
      
                                          <form action="#" className="p-16 d-grid grid-cols-2 gap-16">
                                              <div className="">
                                                  <label htmlFor="class"
                                                      className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class</label>
                                                  <select id="class" className="form-control form-select">
                                                      <option value="Select" disabled>Select Class</option>
                                                      <option value="Primary">Primary</option>
                                                      <option value="SSC">SSC</option>
                                                      <option value="HSC">HSC</option>
                                                      <option value="Hons">Hons</option>
                                                      <option value="Masters">Masters</option>
                                                  </select>
                                              </div>
                                              <div className="">
                                                  <label htmlFor="sectionEdit"
                                                      className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Section</label>
                                                  <select id="sectionEdit" className="form-control form-select">
                                                      <option value="Select">Select Section</option>
                                                      <option value="Arts">Arts</option>
                                                      <option value="Science">Science</option>
                                                      <option value="Commerce">Commerce</option>
                                                  </select>
                                              </div>
                                              <div className="">
                                                  <label htmlFor="gender"
                                                      className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Gender</label>
                                                  <select id="gender" className="form-control form-select">
                                                      <option value="Select">Select Gender</option>
                                                      <option value="Male">Male</option>
                                                      <option value="Female">Female</option>
                                                  </select>
                                              </div>
                                              <div className="">
                                                  <label htmlFor="status"
                                                      className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status</label>
                                                  <select id="status" className="form-control form-select">
                                                      <option value="Select">Select Status</option>
                                                      <option value="Active">Active</option>
                                                      <option value="Inactive">Inactive</option>
                                                  </select>
                                              </div>
                                              <div className="">
                                                  <button type="reset"
                                                      className="btn btn-danger-200 text-danger-600 w-100">Reset</button>
                                              </div>
                                              <div className="">
                                                  <button type="submit" className="btn btn-primary-600 w-100">Apply</button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
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
                                          <th scope="col">
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">
                                                      S.L
                                                  </label>
                                              </div>
                                          </th>
                                          <th scope="col">Admission No</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">Roll No</th>
                                          <th scope="col">Class</th>
                                          <th scope="col">Amount</th>
                                          <th scope="col">Paid</th>
                                          <th scope="col">Due</th>
                                          <th scope="col">Date </th>
                                          <th scope="col">Status </th>
                                          <th scope="col">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">
                                                      01
                                                  </label>
                                              </div>
                                          </td>
                                          <td>
                                              <span className="text-primary-600">AD52365</span>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img1.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
      
                                                  </div>
                                              </div>
                                          </td>
                                          <td>12</td>
                                          <td>Class 1 (A)</td>
                                          <td>$700.50</td>
                                          <td>$700.50</td>
                                          <td>$0</td>
                                          <td>12 May 2025</td>
                                          <td>
                                              <span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">01</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52365</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img1.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>12</td>
                                          <td>Class 1 (A)</td>
                                          <td>$700.50</td>
                                          <td>$700.50</td>
                                          <td>$0</td>
                                          <td>12 May 2025</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">02</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52366</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img2.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Jerome Bell</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>08</td>
                                          <td>Class 2 (B)</td>
                                          <td>$850.00</td>
                                          <td>$450.00</td>
                                          <td>$400.00</td>
                                          <td>10 May 2025</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-16 py-2 radius-4 fw-medium text-sm">Partial</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">03</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52367</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img3.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Theresa Webb</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>19</td>
                                          <td>Class 3 (A)</td>
                                          <td>$920.75</td>
                                          <td>$0</td>
                                          <td>$920.75</td>
                                          <td>08 May 2025</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-16 py-2 radius-4 fw-medium text-sm">Unpaid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">04</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52368</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img4.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Cody Fisher</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>10</td>
                                          <td>Class 4 (C)</td>
                                          <td>$750.00</td>
                                          <td>$750.00</td>
                                          <td>$0</td>
                                          <td>05 May 2025</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">05</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52369</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img5.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>16</td>
                                          <td>Class 5 (B)</td>
                                          <td>$630.20</td>
                                          <td>$500.00</td>
                                          <td>$130.20</td>
                                          <td>03 May 2025</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-16 py-2 radius-4 fw-medium text-sm">Partial</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">06</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52370</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img6.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Jenny Wilson</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>09</td>
                                          <td>Class 6 (A)</td>
                                          <td>$800.00</td>
                                          <td>$800.00</td>
                                          <td>$0</td>
                                          <td>01 May 2025</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">07</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52371</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img7.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Darlene Robertson</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>11</td>
                                          <td>Class 7 (A)</td>
                                          <td>$950.00</td>
                                          <td>$400.00</td>
                                          <td>$550.00</td>
                                          <td>28 Apr 2025</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-16 py-2 radius-4 fw-medium text-sm">Partial</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">08</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52372</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img8.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Wade Warren</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>18</td>
                                          <td>Class 8 (B)</td>
                                          <td>$880.00</td>
                                          <td>$880.00</td>
                                          <td>$0</td>
                                          <td>25 Apr 2025</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">09</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52373</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img9.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Esther Howard</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>13</td>
                                          <td>Class 9 (C)</td>
                                          <td>$990.00</td>
                                          <td>$0</td>
                                          <td>$990.00</td>
                                          <td>22 Apr 2025</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-16 py-2 radius-4 fw-medium text-sm">Unpaid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
                                                          </button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">10</label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52374</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img10.png" alt="Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Guy Hawkins</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>15</td>
                                          <td>Class 10 (A)</td>
                                          <td>$1020.00</td>
                                          <td>$1020.00</td>
                                          <td>$0</td>
                                          <td>20 Apr 2025</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Paid</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                              <i className="ri-eye-line"></i>
                                                              View Details
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
              <h5 className="text-lg mb-0">Collect Fees</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="className" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class
                          </label>
                          <select className="form-control form-select" id="className">
                              <option value="Select a class" selected disabled>Select a class</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                              <option value="Five">Five</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="section" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Section
                          </label>
                          <select className="form-control form-select" id="section">
                              <option value="Select a class" selected disabled>Select a Section</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="rollNo" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Roll No
                          </label>
                          <input type="text" className="form-control" id="rollNo" placeholder="Enter roll no." />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="collectDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date
                          </label>
                          <input type="date" className="form-control" id="collectDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <div className="d-flex align-items-center justify-content-between gap-4">
                              <label htmlFor="collectAmount" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Amount
                              </label>
                              <span className="text-sm fw-semibold text-warning-600">Due: 2000</span>
                          </div>
                          <input type="text" className="form-control" id="collectAmount" placeholder="$1500" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="colDiscount" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Discount
                          </label>
                          <select className="form-control form-select" id="colDiscount">
                              <option value="Select a class" selected disabled>Select a Discount</option>
                              <option value="10%">10%</option>
                              <option value="20%">20%</option>
                              <option value="30%">30%</option>
                              <option value="50%">50%</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="paymentType" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Payment Type
                          </label>
                          <select className="form-control form-select" id="paymentType">
                              <option value="Cash" selected>Cash</option>
                              <option value="bKash">bKash</option>
                              <option value="Bank">Bank</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="noteType" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Note
                          </label>
                          <textarea className="form-control" id="noteType" placeholder="Enter note..."></textarea>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                          <button type="reset"
                              className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                              Cancel
                          </button>
                          <button type="submit"
                              className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                              Save
                          </button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
      
      
      
      
       <div className="modal fade" id="payslipModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-600-px">
              <div className="modal-content radius-16 bg-base">
                  <div className="modal-body p-24">
                      <div className="text-center">
                          <h6 className="mb-0">School Name</h6>            
                          <p className="text-secondary-light">Smithbroand, Unit 4, Holler Tower, San Diego</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-20 flex-wrap mt-24 ">
                          <div className="d-flex flex-column">
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light w-110-px text-start">Student Name</span>
                                  <span className="text-primary-light">: Jon Deve</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light w-110-px text-start">Class</span>
                                  <span className="text-primary-light">: 5 (A)</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light w-110-px text-start">Roll No.</span>
                                  <span className="text-primary-light">: 10</span>
                              </div>
                          </div>
                          <div className="d-flex flex-column">
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light text-start">Date: 15 Jan 2025</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light text-start">Collected By: Admin</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light text-start">Payment By: Bank</span>
                              </div>
                          </div>
                      </div>
                      <ul className="border mt-24 radius-8 overflow-hidden">
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 bg-neutral-50 border-bottom">
                              <span className="text-primary-light fw-semibold">Amount</span>
                              <span className="text-primary-light fw-semibold">Paid</span>
                              <span className="text-primary-light fw-semibold">Balance</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 ">
                              <span className="text-primary-light">2500</span>
                              <span className="text-primary-light">$1500</span>
                              <span className="text-primary-light">$500</span>
                          </li>
                      </ul>
                      <div className="text-center mt-100-px">
                          <h6 className="text-xl mb-4">Thanks</h6>
                          <p className="text-secondary-light text-sm mb-0">This receipt is computer generated hence on signature is required</p>
                      </div>
                      <div className="text-center mt-100-px">
                          <p className="text-secondary-light text-sm mb-0">Made by <span className="fw-semibold">Wowtheme7.</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <Script
        id="page-fees-collect-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
