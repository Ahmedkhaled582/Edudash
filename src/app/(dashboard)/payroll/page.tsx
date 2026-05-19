/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function PayrollPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Payroll</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Payroll</span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Proceed to pay
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
      
                                          <form action="#" className="p-16">
                                              <div className="row g-3">
                                                  <div className="col-12">
                                                      <label htmlFor="subject"
                                                          className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Gender</label>
                                                      <select id="subject" className="form-control form-select">
                                                          <option value="Select">Select Subject</option>
                                                          <option value="Match">Match</option>
                                                          <option value="English">English</option>
                                                          <option value="Bangla">Bangla</option>
                                                          <option value="Economics">Economics</option>
                                                          <option value="Physics">Physics</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-12">
                                                      <label htmlFor="status"
                                                          className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status</label>
                                                      <select id="status" className="form-control form-select">
                                                          <option value="Select">Select Status</option>
                                                          <option value="Active">Active</option>
                                                          <option value="Inactive">Inactive</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-6">
                                                      <button type="reset"
                                                          className="btn btn-danger-200 text-danger-600 w-100">Reset</button>
                                                  </div>
                                                  <div className="col-6">
                                                      <button type="submit" className="btn btn-primary-600 w-100">Apply</button>
                                                  </div>
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
                                          <th scope="col">ID</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">Department</th>
                                          <th scope="col">Designation</th>
                                          <th scope="col">Payment Method</th>
                                          <th scope="col">Net Salary</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">Action</th>
                                      </tr>
                                  </thead>
                                    <tbody>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img1.png"
                                                      alt="Marvin McKinney Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Marvin McKinney</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>English Department</td>
                                          <td>Principal</td>
                                          <td>Bank</td>
                                          <td>$5,000</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="Courtney Henry Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Courtney Henry</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Mathematics Department</td>
                                          <td>Vice Principal</td>
                                          <td>Cash</td>
                                          <td>$4,200</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img3.png"
                                                      alt="Ralph Edwards Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Ralph Edwards</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Science Department</td>
                                          <td>Lecturer</td>
                                          <td>Bank</td>
                                          <td>$3,500</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img4.png"
                                                      alt="Annette Black Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Annette Black</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>IT Department</td>
                                          <td>Software Engineer</td>
                                          <td>Bank</td>
                                          <td>$4,800</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img5.png"
                                                      alt="Theresa Webb Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Theresa Webb</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Administration</td>
                                          <td>Office Manager</td>
                                          <td>Cheque</td>
                                          <td>$3,200</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Unpaid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png"
                                                      alt="Jacob Jones Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Jacob Jones</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Finance Department</td>
                                          <td>Accountant</td>
                                          <td>Bank</td>
                                          <td>$4,000</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img7.png"
                                                      alt="Kathryn Murphy Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Kathryn Murphy</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Human Resources</td>
                                          <td>HR Manager</td>
                                          <td>Bank</td>
                                          <td>$4,600</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img8.png"
                                                      alt="Esther Howard Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Esther Howard</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Marketing Department</td>
                                          <td>Marketing Executive</td>
                                          <td>Cash</td>
                                          <td>$3,700</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img9.png"
                                                      alt="Floyd Miles Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Floyd Miles</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Library Department</td>
                                          <td>Librarian</td>
                                          <td>Cheque</td>
                                          <td>$3,000</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Unpaid</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img4.png"
                                                      alt="Jane Cooper Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium">Jane Cooper</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Support Department</td>
                                          <td>Office Assistant</td>
                                          <td>Cash</td>
                                          <td>$2,500</td>
                                          <td><span
                                                  className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </td>
                                          <td><button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">View Payslip</button>
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
              <h5 className="text-lg mb-0">Add New Fees Type</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="employeeName"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Employee Name
                          </label>
                          <input type="text" className="form-control" id="employeeName" placeholder="Enter Fees Type name" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="paymentAmount"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Payment Amount ($)
                          </label>
                          <input type="text" className="form-control" id="paymentAmount" placeholder="Enter Payment Amount ($)" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="month" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Month
                          </label>
                          <select id="month" className="form-control form-select">
                              <option value="Select a Month" selected disabled>Select Month</option>
                              <option value="January 2026">January 2026</option>
                              <option value="February 2026">February 2026</option>
                              <option value="March 2026">March 2026</option>
                              <option value="April 2026">April 2026</option>
                              <option value="May 2026">May 2026</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="paymentTypee" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Payment
                              Type
                          </label>
                          <select id="paymentTypee" className="form-control form-select">
                              <option value="Select Payment Type" selected disabled>Select Payment Type</option>
                              <option value="Cash">Cash</option>
                              <option value="Bank">Bank</option>
                              <option value="Card">Card</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="paymentDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date
                          </label>
                          <input type="date" className="form-control" id="paymentDate" />
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="ddescription"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Description
                          </label>
                          <textarea className="form-control" id="ddescription" placeholder="Enter Description"></textarea>
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
                                  <span className="text-primary-light w-110-px text-start">Invoice No</span>
                                  <span className="text-primary-light">: #5695</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light w-110-px text-start">employee Name</span>
                                  <span className="text-primary-light">: Jon Dan</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light w-110-px text-start">Phone</span>
                                  <span className="text-primary-light">: +112515474</span>
                              </div>
                          </div>
                          <div className="d-flex flex-column">
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-primary-light text-start">Payslip</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-secondary-light text-start">Month: January 2025</span>
                              </div>
                              <div className="text-sm fw-medium d-flex">
                                  <span className="text-secondary-light text-start">Payment : 15 Jan 2025</span>
                              </div>
                          </div>
                      </div>
                      <ul className="border mt-24 radius-8 overflow-hidden">
                          <li
                              className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 bg-neutral-50 border-bottom">
                              <span className="text-primary-light fw-semibold">Name</span>
                              <span className="text-primary-light fw-semibold">Amount</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 border-bottom">
                              <span className="text-primary-light">Base Salary</span>
                              <span className="text-primary-light">$2000</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 border-bottom">
                              <span className="text-primary-light">Overtime Pay</span>
                              <span className="text-primary-light">$1000</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 border-bottom">
                              <span className="text-primary-light">Bonuses</span>
                              <span className="text-primary-light">$2000</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 border-bottom">
                              <span className="text-primary-light">Gross Salary</span>
                              <span className="text-primary-light">$5000</span>
                          </li>
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20  bg-neutral-50">
                              <span className="text-primary-light fw-semibold text-lg">Total</span>
                              <span className="text-primary-light fw-semibold text-lg">$5000</span>
                          </li>
                      </ul>
                      <div className="pt-28 ms-16 text-start">
                          <p className="text-primary-light fw-medium mb-0">Payment type : Bank</p>
                      </div>
                      <div className="text-center mt-100-px">
                          <h6 className="text-xl mb-4">Thanks</h6>
                          <p className="text-secondary-light text-sm mb-0">If you need further assistance, please feel free to
                              contact HR at <span className="fw-semibold text-primary-light">Example school</span> </p>
                      </div>
                      <div className="text-center mt-100-px">
                          <p className="text-secondary-light text-sm mb-0">Made by <span className="fw-semibold">Wowtheme7.</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <Script
        id="page-payroll-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
