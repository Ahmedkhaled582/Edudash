/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// Data Table start\r\n    let table = new DataTable('#dataTable');\r\n    let tableTwo = new DataTable('#dataTableTwo');\r\n    let tableThree = new DataTable('#dataTableThree');\r\n    let tableFour = new DataTable('#dataTableFour');\r\n    let firstSemesterTable = new DataTable('#firstSemesterTable');\r\n    let monthlyTestJun = new DataTable('#monthlyTestJun');\r\n    let weeklyTestJun = new DataTable('#weeklyTestJun');\r\n    let weeklyTestMay = new DataTable('#weeklyTestMay');\r\n    let monthlyTestMay = new DataTable('#monthlyTestMay');\r\n    let dataTableLibrary = new DataTable('#dataTableLibrary');\r\n    let loginDetailsTable = new DataTable('#loginDetailsTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n    $(document).ready(function () {\r\n        $('.attendance').each(function () {\r\n            let value = $(this).text().trim().toUpperCase();\r\n\r\n            if (value === 'P') {\r\n                $(this).addClass('text-success-600')\r\n            } else if (value === 'A') {\r\n                $(this).addClass('text-danger-600')\r\n            } else if (value === 'H') {\r\n                $(this).addClass('text-warning-600')\r\n            } else if (value === 'F') {\r\n                $(this).addClass('text-purple-600')\r\n            } else if (value === 'L') {\r\n                $(this).addClass('text-info-600')\r\n            }\r\n        });\r\n    });\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n\r\n\r\n    // Custom accordion js start\r\n    $(document).on('click', '.custom-accordion-btn', function () {\r\n        $('.custom-accordion-btn').not(this).removeClass('active').siblings('.custom-accordion-content').slideUp();\r\n\r\n        // Toggle current one\r\n        $(this).toggleClass('active');\r\n        $(this).siblings('.custom-accordion-content').slideToggle();\r\n    });\r\n\r\n    // Keep first accordion open by default\r\n    $(document).ready(function () {\r\n        const firstAccordion = $('.custom-accordion-btn').first();\r\n        firstAccordion.addClass('active');\r\n        firstAccordion.siblings('.custom-accordion-content').show();\r\n    });\r\n    // Custom accordion js end\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.apply-leave-btn').on('click', function () {\r\n        $('.apply-leave').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-apply-leave, .overlay').on('click', function () {\r\n        $('.apply-leave').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end\r\n\r\n    $('.collect-payroll-btn').on('click', function () {\r\n        $('.collect-payroll').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-collect-payroll, .overlay').on('click', function () {\r\n        $('.collect-payroll').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function EmployeeDetailsPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Employee Details</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <Link href="/employee-list" className="text-secondary-light hover-text-primary hover-underline"> /
                              HRM</Link>
                          <span className="text-secondary-light">/ Employee Details</span>
                      </div>
                  </div>
                  <button type="button"
                      className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6 bg-base text-primary-light bg-hover-primary-600">
                      <span className="d-flex text-md">
                          <i className="ri-lock-2-line"></i>
                      </span>
                      Login Details
                  </button>
              </div>
      
              <div className="mt-24">
                  <div className="card h-100">
                      <div className="card-body p-24">
                          <div className="d-flex gap-32 flex-md-row flex-column">
                              <div className="max-w-300-px w-100 text-center">
                                  <figure className="mb-24 w-120-px h-120-px mx-auto rounded-circle overflow-hidden">
                                      <img src="/assets/images/thumbs/teacher-details-img.png" alt="employee Image"
                                          className="w-100 h-100 object-fit-cover" />
                                  </figure>
                                  <h2 className="h6 text-primary-light mb-16 fw-semibold">Marvin McKinney</h2>
                                  <p className="mb-0">ID: <span className="text-primary-600 fw-semibold"> AD1256589</span>
                                  </p>
                                  <p className="mb-0">Subject: <span className="text-primary-light fw-semibold">Mathematics</span>
                                  </p>
                                  <div className="mt-32 d-flex gap-16 w-100">
                                      <button type="button"
                                          className="btn border fw-medium border-danger-600 bg-hover-danger-200 text-danger-600 text-md d-flex justify-content-center align-items-center gap-8 flex-grow-1 px-12 py-8 radius-8"
                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                          <span className="d-flex text-lg">
                                              <i className="ri-delete-bin-2-line"></i>
                                          </span>
                                          Suspend
                                      </button>
                                      <Link href="/edit-employee"
                                          className="btn btn-primary-600 border fw-medium border-primary-600 text-md d-flex justify-content-center align-items-center gap-8 flex-grow-1 px-12 py-8 radius-8">
                                          <span className="d-flex text-lg">
                                              <i className="ri-edit-line"></i>
                                          </span>
                                          Edit
                                      </Link>
                                  </div>
                              </div>
                              <div className="">
                                  <span className="h-100 w-1-px bg-neutral-200"></span>
                              </div>
                              <div className="flex-grow-1">
                                  <div className="pb-16 border-bottom d-flex align-items-center justify-content-between gap-20">
                                      <h3 className="h6 text-primary-light text-lg mb-0 fw-semibold">Personal Info</h3>
                                      <span
                                          className="bg-success-100 text-success-600 px-16 py-4 radius-4 fw-medium text-sm">Active</span>
                                  </div>
                                  <div className="mt-16 d-flex flex-column gap-8">
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Class</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Class 6 (2025-26)</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Contract Type</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Permanent</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Shift</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Morning</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Work Location</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 2nd Floor</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Date Of Birth</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 10 Nov 2006</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Gender</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Male</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Join Date</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 05 May 2012</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Phone Number</span>
                                          <span className="fw-normal text-sm text-primary-600">: 789678456</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Email</span>
                                          <span className="fw-normal text-sm text-primary-600">: set@example.com</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="my-16">
                      <ul className="nav nav-pills bordered-tab mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12  active"
                                  id="pills-employeeDetails-tab" data-bs-toggle="pill" data-bs-target="#pills-employeeDetails"
                                  type="button" role="tab" aria-controls="pills-employeeDetails" aria-selected="true">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-group-line"></i>
                                  </span>
                                  employee Details
                              </button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 "
                                  id="pills-attendance-tab" data-bs-toggle="pill" data-bs-target="#pills-attendance"
                                  type="button" role="tab" aria-controls="pills-attendance" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-calendar-check-line"></i>
                                  </span>
                                  Attendance
                              </button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 "
                                  id="pills-leave-tab" data-bs-toggle="pill" data-bs-target="#pills-leave" type="button"
                                  role="tab" aria-controls="pills-leave" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-login-box-line"></i>
                                  </span>
                                  Leave
                              </button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 "
                                  id="pills-payroll-tab" data-bs-toggle="pill" data-bs-target="#pills-payroll" type="button"
                                  role="tab" aria-controls="pills-payroll" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-money-dollar-box-line"></i>
                                  </span>
                                  Payroll 
                              </button>
                          </li>
                      </ul>
      
      
                      <div className="tab-content" id="pills-tabContent">
      
                          
                          <div className="tab-pane fade show active" id="pills-employeeDetails" role="tabpanel"
                              aria-labelledby="pills-employeeDetails-tab" tabIndex={0}>
                              <div className="row gy-4">
                                  <div className="col-md-12">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Profile Detail</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Date of Birth
                                                              </h6>
                                                              <span className="">10 Nov 1995</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Martial Status
                                                              </h6>
                                                              <span className="">Married </span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Qualification
                                                              </h6>
                                                              <span className="">MBA</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Experience</h6>
                                                              <span className="">7 Years</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Father Name </h6>
                                                              <span className="">Ralph Edwards</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-3 col-sm-6">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Mother Name</h6>
                                                              <span className="">Floyd Miles</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Previous School Details</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-12">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Previous School
                                                                  Name</h6>
                                                              <span className="">Stuyvesant High School</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-12">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Current School
                                                                  Name</h6>
                                                              <span className="">Bronx High School of Science</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Address</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-12">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Current Address
                                                              </h6>
                                                              <span className="">8502 Preston Rd. Inglewood, Maine 98380</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-12">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Permanent Address
                                                              </h6>
                                                              <span className="">2118 Thornridge Cir. Syracuse, Connecticut
                                                                  35624</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Bank Details</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Bank Name</h6>
                                                              <span className="">Bank of America</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Branch</h6>
                                                              <span className="">New York</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">IFSC Code</h6>
                                                              <span className="">5283209832</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Medical Details</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Blood Group</h6>
                                                              <span className="">O+</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Height</h6>
                                                              <span className="">5.2</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Weight</h6>
                                                              <span className="">60kg</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Documents</h6>
                                          </div>
                                          <div className="card-body p-20">
                                              <div className="p-10 border radius-8">
                                                  <div className="d-flex align-items-center justify-content-between gap-20">
                                                      <div className="d-flex align-items-center gap-12">
                                                          <span
                                                              className="w-36-px h-36-px radius-4 bg-neutral-50 d-flex justify-content-center align-items-center text-xl">
                                                              <i className="ri-file-text-line"></i>
                                                          </span>
                                                          <span
                                                              className="text-md text-secondary-light">BirthCertificate.pdf</span>
                                                      </div>
                                                      <button type="button"
                                                          className="w-36-px h-36-px radius-4 bg-primary-50 bg-hover-primary-100 text-primary-600 d-flex justify-content-center align-items-center text-xl">
                                                          <i className="ri-download-2-line"></i>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Social Media</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Facebook</h6>
                                                              <span className="">www.facebook.com</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">LinkedIn</h6>
                                                              <span className="">www.linkedin.com</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Instagram</h6>
                                                              <span className="">www.instagram.com</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
      
                          
                          <div className="tab-pane fade" id="pills-attendance" role="tabpanel"
                              aria-labelledby="pills-attendance-tab" tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Attendance</h6>
                                  </div>
                                  <div className="card-body p-0">
                                      <div className="px-20 pt-20">
                                          <div className="row row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3">
                                              <div className="col">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-7">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">227</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Present</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-success-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/attendence-icon1.png"
                                                                      alt="Present Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-8">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">70</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Absent</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-danger-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/attendence-icon2.png"
                                                                      alt="Absent Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-9">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">27</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Half
                                                                      Day</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-purple-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/attendence-icon3.png"
                                                                      alt="Calendar Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-10">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">28</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Late</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-info-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/attendence-icon4.png"
                                                                      alt="Clock Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-11">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">12</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Holiday</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-orange text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/attendence-icon5.png"
                                                                      alt="Holiday Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mt-24 mb-16 mx-20">
                                          <div
                                              className="d-flex flex-wrap align-items-center gap-24 justify-content-between flex-wrap">
                                              <div className="d-flex flex-wrap align-items-center gap-16 ">
                                                  <div className="">
                                                      <select className="form-control form-select">
                                                          <option value="Jun 2025/2026">Jun 2025/2026</option>
                                                          <option value="Jun 2026/2027">Jun 2026/2027</option>
                                                          <option value="Jun 2027/2028">Jun 2027/2028</option>
                                                          <option value="Jun 2028/2029">Jun 2028/2029</option>
                                                      </select>
                                                  </div>
                                                  <div className="dropdown">
                                                      <button type="button"
                                                          className="px-12 py-8 border border-neutral-300 radius-8 d-flex align-items-center gap-20"
                                                          data-bs-toggle="dropdown" aria-expanded="false">
                                                          <span
                                                              className="d-flex align-items-center gap-1 text-secondary-light text-sm">
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
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap gap-8">
                                                  <p className="text-primary-light text-sm fw-medium mb-0">
                                                      Present:
                                                      <span className="fw-semibold text-success-600">P </span>
                                                  </p>
                                                  <p className="text-primary-light text-sm fw-medium mb-0">
                                                      Absent:
                                                      <span className="fw-semibold text-danger-600">A </span>
                                                  </p>
                                                  <p className="text-primary-light text-sm fw-medium mb-0">
                                                      Holiday:
                                                      <span className="fw-semibold text-warning-600">H </span>
                                                  </p>
                                                  <p className="text-primary-light text-sm fw-medium mb-0">
                                                      Late:
                                                      <span className="fw-semibold text-info-600">L </span>
                                                  </p>
                                                  <p className="text-primary-light text-sm fw-medium mb-0">
                                                      Half Day:
                                                      <span className="fw-semibold text-purple-600">F </span>
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className="table-responsive overflow-x-auto">
                                          <table className="table mb-0 table-heading-dark-mode">
                                              <thead>
                                                  <tr>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">Month
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">1</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">2</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">3</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">4</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">5</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">6</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">7</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">8</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">9</th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">10
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">11
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">12
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">13
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">14
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">15
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">15
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">16
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">17
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">18
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">19
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">20
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">21
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">22
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">23
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">24
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">25
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">26
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">27
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">28
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">29
                                                      </th>
                                                      <th className="bg-neutral-100 text-sm text-primary-light px-10 py-16">30
                                                      </th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Jan</td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">H</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">A</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">F</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">L</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">H</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">A</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">L</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">h</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">F</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">H</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">P</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">A</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">H</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">p</span>
                                                      </td>
                                                      <td className="px-10 py-14 text-sm text-uppercase">
                                                          <span className="attendance">p</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Feb</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Mar</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Apr</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">May</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">May</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">F</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">L</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">H</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">P</span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance">A</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Jun</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Ju</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Aug</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Sep</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Oct</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Nov</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                                  <tr>
                                                      <td className="px-10 py-16 text-sm">Dec</td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                      <td className="px-10 py-16 text-sm"><span className="attendance"></span></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
      
                          
                          <div className="tab-pane fade" id="pills-leave" role="tabpanel" aria-labelledby="pills-leave-tab"
                              tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-10 px-20 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Leave </h6>
                                      <button type="button"
                                          className="apply-leave-btn btn btn-primary-600 d-flex align-items-center gap-6 py-8 text-sm">
                                          <span className="d-flex text-sm">
                                              <i className="ri-calendar-close-line"></i>
                                          </span>
                                          Apply Leave
                                      </button>
                                  </div>
                                  <div className="card-body p-0 dataTable-wrapper">
                                      <div
                                          className="d-flex flex-wrap align-items-center gap-24 justify-content-between px-20 py-12">
                                          <div className="d-flex flex-wrap align-items-center gap-16">
                                              <form className="navbar-search dt-search m-0">
                                                  <input type="text" className="dt-input bg-transparent radius-4"
                                                      aria-controls="dataTable" name="search" placeholder="Search..." />
                                                  <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                                              </form>
                                              <div className="">
                                                  <select className="form-control form-select">
                                                      <option value="Year 2025/2026">Year 2025/2026</option>
                                                      <option value="Year 2026/2027">Year 2026/2027</option>
                                                      <option value="Year 2027/2028">Year 2027/2028</option>
                                                      <option value="Year 2028/2029">Year 2028/2029</option>
                                                  </select>
                                              </div>
                                              <div className="dropdown">
                                                  <button type="button"
                                                      className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20 "
                                                      data-bs-toggle="dropdown" aria-expanded="false">
                                                      <span
                                                          className="d-flex align-items-center gap-1 text-secondary-light text-sm">
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
                                      <table className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                          id="dataTable" data-page-length='10'>
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
                                                  <th scope="col">Leave Type</th>
                                                  <th scope="col">Date</th>
                                                  <th scope="col">Duration</th>
                                                  <th scope="col">Apply Date</th>
                                                  <th scope="col">Status</th>
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
                                                  <td>Medical Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>1</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Approved</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              02
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Special Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>3</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              03
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Medical Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>5</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Approved</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              04
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Casual Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>6</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              05
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Medical Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>1</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Approved</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              06
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Special Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>2</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              07
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Medical Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>5</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Approved</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              08
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Casual Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>6</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              09
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Medical Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>1</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Approved</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">
                                                              10
                                                          </label>
                                                      </div>
                                                  </td>
                                                  <td>Special Leave</td>
                                                  <td>07 May 2025 - 08 may 2025</td>
                                                  <td>2</td>
                                                  <td>07 May 2025 </td>
                                                  <td>
                                                      <span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Rejected</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          
      
                          
                          <div className="tab-pane fade" id="pills-payroll" role="tabpanel" aria-labelledby="pills-payroll-tab"
                              tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-10 px-20 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Payroll </h6>
                                  </div>
                                  <div className="card-body p-0 dataTable-wrapper">
                                      <div
                                          className="d-flex flex-wrap align-items-center gap-24 justify-content-between px-20 py-16">
                                          <div className="d-flex flex-wrap align-items-center gap-16">
                                              <form className="navbar-search dt-search m-0">
                                                  <input type="text" className="dt-input bg-transparent radius-4"
                                                      aria-controls="dataTable" name="search" placeholder="Search..." />
                                                  <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                                              </form>
                                              <div className="">
                                                  <select className="form-control form-select">
                                                      <option value="Year 2025/2026">Year 2025/2026</option>
                                                      <option value="Year 2026/2027">Year 2026/2027</option>
                                                      <option value="Year 2027/2028">Year 2027/2028</option>
                                                      <option value="Year 2028/2029">Year 2028/2029</option>
                                                  </select>
                                              </div>
                                              <div className="dropdown">
                                                  <button type="button"
                                                      className="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20 "
                                                      data-bs-toggle="dropdown" aria-expanded="false">
                                                      <span
                                                          className="d-flex align-items-center gap-1 text-secondary-light text-sm">
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
                                      <table className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                          id="dataTableTwo" data-page-length='10'>
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
                                                  <th scope="col">Invoice ID</th>
                                                  <th scope="col">Salary For</th>
                                                  <th scope="col">Date</th>
                                                  <th scope="col">Net Salary</th>
                                                  <th scope="col">Payment Method</th>
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
                                              <td>Jan 2025</td>
                                              <td>07 Jan 2025</td>
                                              <td>$5,000</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Feb 2025</td>
                                              <td>08 Feb 2025</td>
                                              <td>$4,800</td>
                                              <td>Cash</td>
                                              <td>
                                              <span className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Pending
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Mar 2025</td>
                                              <td>09 Mar 2025</td>
                                              <td>$5,100</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Apr 2025</td>
                                              <td>06 Apr 2025</td>
                                              <td>$4,950</td>
                                              <td>Online</td>
                                              <td>
                                              <span className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Failed
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>May 2025</td>
                                              <td>05 May 2025</td>
                                              <td>$5,200</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Jun 2025</td>
                                              <td>06 Jun 2025</td>
                                              <td>$4,600</td>
                                              <td>Cash</td>
                                              <td>
                                              <span className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Pending
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Jul 2025</td>
                                              <td>08 Jul 2025</td>
                                              <td>$5,300</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Aug 2025</td>
                                              <td>05 Aug 2025</td>
                                              <td>$4,750</td>
                                              <td>Online</td>
                                              <td>
                                              <span className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Pending
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Sep 2025</td>
                                              <td>06 Sep 2025</td>
                                              <td>$5,400</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
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
                                              <td>Oct 2025</td>
                                              <td>07 Oct 2025</td>
                                              <td>$4,850</td>
                                              <td>Cash</td>
                                              <td>
                                              <span className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Failed
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
                                              </td>
                                          </tr>
      
                                          <tr>
                                              <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">11</label>
                                              </div>
                                              </td>
                                              <td><span className="text-primary-600">AD52375</span></td>
                                              <td>Nov 2025</td>
                                              <td>06 Nov 2025</td>
                                              <td>$5,150</td>
                                              <td>Bank</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
                                              </td>
                                          </tr>
      
                                          <tr>
                                              <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">12</label>
                                              </div>
                                              </td>
                                              <td><span className="text-primary-600">AD52376</span></td>
                                              <td>Dec 2025</td>
                                              <td>08 Dec 2025</td>
                                              <td>$5,000</td>
                                              <td>Online</td>
                                              <td>
                                              <span className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                  Paid
                                              </span>
                                              </td>
                                              <td>
                                              <button type="button"
                                                  className="bg-neutral-200 bg-hover-neutral-300 text-neutral-600 px-20 py-4 radius-4 fw-medium text-sm"
                                                  data-bs-toggle="modal" data-bs-target="#payslipModal">
                                                  View Payslip
                                              </button>
                                              </td>
                                          </tr>
                                          </tbody>
      
                                      </table>
                                  </div>
                              </div>
                          </div>
                          
      
                      </div>
                  </div>
              </div>
      
      <div
          className="my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Login Details</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column">
              <div className="p-20">
                  <div className="d-flex align-items-center gap-20">
                      <figure className="w-72-px h-72-px rounded-circle overflow-hidden mb-0">
                          <img src="/assets/images/thumbs/teacher-details-img.png" alt="employee Image"
                              className="w-100 h-100 object-fit-cover" />
                      </figure>
                      <div className="flex-grow-1">
                          <h2 className="text-xl text-primary-light mb-4">Marvin McKinney</h2>
                          <p className="mb-0">Roll No: <span className="text-primary-light fw-semibold">10</span> </p>
                      </div>
                  </div>
              </div>
              <div className="table-bottom-info-none">
                  <table className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table" id="loginDetailsTable"
                      data-page-length='10'>
                      <thead>
                          <tr>
                              <th scope="col" className="text-start">User Type</th>
                              <th scope="col" className="text-start">Email</th>
                              <th scope="col" className="text-start">Password</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="text-start">employee</td>
                              <td className="text-start">employee@example.com</td>
                              <td className="text-start">15445@#AC</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </form>
      </div>
      
      
      
      <div
          className="apply-leave bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Apply Leave</h5>
              <button type="button" className="close-apply-leave text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="leaveType" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Leave Type
                          </label>
                          <select id="leaveType" className="form-control form-select">
                              <option value="Select a leave type" selected disabled>Select a leave type</option>
                              <option value="Sickness">Sickness</option>
                              <option value="Accident">Accident</option>
                              <option value="Travel">Travel</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="fromDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">From Date
                          </label>
                          <input type="date" className="form-control" id="fromDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="toDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">To Date
                          </label>
                          <input type="date" className="form-control" id="toDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="leaveDays" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Leave
                              Days</label>
                          <select id="leaveDays" className="form-control form-select">
                              <option value="Ex: Full day,  first half, second half">Ex: Full day, first half, second half
                              </option>
                              <option value="Ex: Full day,  first half, second half">Ex: Full day, first half, second half
                              </option>
                              <option value="Ex: Full day,  first half, second half">Ex: Full day, first half, second half
                              </option>
                              <option value="Ex: Full day,  first half, second half">Ex: Full day, first half, second half
                              </option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="ReasonForLeave"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Reason for Leave
                          </label>
                          <textarea id="ReasonForLeave" className="form-control"
                              placeholder="Enter reason for leave..."></textarea>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                          <button type="reset"
                              className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                              Cancel
                          </button>
                          <button type="submit"
                              className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                              Send Request
                          </button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
      
      
      
      <div
          className="collect-payroll bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Collect Fees</h5>
              <button type="button" className="close-collect-payroll text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="feesType" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Leave Type
                          </label>
                          <select id="feesType" className="form-control form-select">
                              <option value="Select a fees type" selected disabled>Select a fees type</option>
                              <option value="May month fees">May month fees</option>
                              <option value="June month fees">June month fees</option>
                              <option value="July month fees">July month fees</option>
                              <option value="August month fees">August month fees</option>
                              <option value="September month fees">September month fees</option>
                              <option value="October month fees">October month fees</option>
                              <option value="November month fees">November month fees</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="feesDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">From Date
                          </label>
                          <input type="date" className="form-control" id="feesDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="feesAmount" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Amount
                          </label>
                          <input type="text" className="form-control" id="feesAmount" value="$700.50" placeholder="$700.50"
                              disabled />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="feesPaymentType"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Payment Type</label>
                          <select id="feesPaymentType" className="form-control form-select">
                              <option value="Bank">Bank</option>
                              <option value="bKash">bKash</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="feesNote" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Reason for
                              Leave
                          </label>
                          <textarea id="feesNote" className="form-control" placeholder="Enter note..."></textarea>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                          <button type="reset"
                              className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                              Cancel
                          </button>
                          <button type="submit"
                              className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                              Pay
                          </button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
      
      
      
      <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-340-px">
              <div className="modal-content radius-16 bg-base">
                  <div className="modal-body pt-32 px-36 pb-24 text-center">
                      <span className="mb-16 fs-1 line-height-1 text-danger">
                          <iconify-icon icon="fluent:delete-24-regular" className="menu-icon"></iconify-icon>
                      </span>
                      <h6 className="text-lg fw-semibold text-primary-light mb-0">Are your sure you want to Suspend this employee
                      </h6>
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                          <button type="reset"
                              className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8">
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
                          <li className="py-10 px-20 d-flex align-items-center justify-content-between gap-20 bg-neutral-50 border-bottom">
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
                          <p className="text-secondary-light text-sm mb-0">If you need further assistance, please feel free to contact HR at <span className="fw-semibold text-primary-light">Example school</span> </p>
                      </div>
                      <div className="text-center mt-100-px">
                          <p className="text-secondary-light text-sm mb-0">Made by <span className="fw-semibold">Wowtheme7.</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <Script
        id="page-employee-details-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
