/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// Data Table start\r\n    let table = new DataTable('#dataTable');\r\n    let tableTwo = new DataTable('#dataTableTwo');\r\n    let tableThree = new DataTable('#dataTableThree');\r\n    let tableFour = new DataTable('#dataTableFour');\r\n    let firstSemesterTable = new DataTable('#firstSemesterTable');\r\n    let monthlyTestJun = new DataTable('#monthlyTestJun');\r\n    let weeklyTestJun = new DataTable('#weeklyTestJun');\r\n    let weeklyTestMay = new DataTable('#weeklyTestMay');\r\n    let monthlyTestMay = new DataTable('#monthlyTestMay');\r\n    let dataTableLibrary = new DataTable('#dataTableLibrary');\r\n    let loginDetailsTable = new DataTable('#loginDetailsTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n    $(document).ready(function () {\r\n        $('.attendance').each(function () {\r\n            let value = $(this).text().trim().toUpperCase();\r\n\r\n            if (value === 'P') {\r\n                $(this).addClass('text-success-600')\r\n            } else if (value === 'A') {\r\n                $(this).addClass('text-danger-600')\r\n            } else if (value === 'H') {\r\n                $(this).addClass('text-warning-600')\r\n            } else if (value === 'F') {\r\n                $(this).addClass('text-purple-600')\r\n            } else if (value === 'L') {\r\n                $(this).addClass('text-info-600')\r\n            }\r\n        });\r\n    });\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n\r\n\r\n    // Custom accordion js start\r\n    $(document).on('click', '.custom-accordion-btn', function () {\r\n        $('.custom-accordion-btn').not(this).removeClass('active').siblings('.custom-accordion-content').slideUp();\r\n\r\n        // Toggle current one\r\n        $(this).toggleClass('active');\r\n        $(this).siblings('.custom-accordion-content').slideToggle();\r\n    });\r\n\r\n    // Keep first accordion open by default\r\n    $(document).ready(function () {\r\n        const firstAccordion = $('.custom-accordion-btn').first();\r\n        firstAccordion.addClass('active');\r\n        firstAccordion.siblings('.custom-accordion-content').show();\r\n    });\r\n    // Custom accordion js end\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.apply-leave-btn').on('click', function () {\r\n        $('.apply-leave').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-apply-leave, .overlay').on('click', function () {\r\n        $('.apply-leave').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end\r\n\r\n    $('.collect-fees-btn').on('click', function () {\r\n        $('.collect-fees').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-collect-fees, .overlay').on('click', function () {\r\n        $('.collect-fees').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function StudentDetailsPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Student Details</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <Link href="/student-list" className="text-secondary-light hover-text-primary hover-underline"> /
                              Student</Link>
                          <span className="text-secondary-light">/ Student Details</span>
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
                                      <img src="/assets/images/thumbs/student-details-img.png" alt="Student Image" className="w-100 h-100 object-fit-cover" />
                                  </figure>
                                  <h2 className="h6 text-primary-light mb-16 fw-semibold">Seth Hallam</h2>
                                  <p className="mb-0">Admission No: <span className="text-primary-600 fw-semibold">AD1256589</span>
                                  </p>
                                  <p className="mb-0">Admission No: <span className="text-primary-light fw-semibold">10</span> </p>
                                  <div className="mt-32 d-flex gap-16 w-100">
                                      <button type="button"
                                          className="btn border fw-medium border-danger-600 bg-hover-danger-200 text-danger-600 text-md d-flex justify-content-center align-items-center gap-8 flex-grow-1 px-12 py-8 radius-8"
                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                          <span className="d-flex text-lg">
                                              <i className="ri-delete-bin-2-line"></i>
                                          </span>
                                          Suspend
                                      </button>
                                      <Link href="/edit-student"
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
                                          <span className="fw-normal text-sm text-secondary-light">: 1 (A), 2(A), 3(A)</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Section</span>
                                          <span className="fw-normal text-sm text-secondary-light">: A</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Roll No</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 10</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Gender</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Male</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Date Of Birth</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 10 Nov 2006</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Category</span>
                                          <span className="fw-normal text-sm text-secondary-light">: General</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Academic Year</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Jun 2025/2026</span>
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
                                  id="pills-studentDetails-tab" data-bs-toggle="pill" data-bs-target="#pills-studentDetails"
                                  type="button" role="tab" aria-controls="pills-studentDetails" aria-selected="true">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-group-line"></i>
                                  </span>
                                  Student Details
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
                                  id="pills-fees-tab" data-bs-toggle="pill" data-bs-target="#pills-fees" type="button"
                                  role="tab" aria-controls="pills-fees" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                       <i className="ri-money-dollar-box-line"></i>
                                  </span>
                                  Fees
                              </button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 "
                                  id="pills-exam-tab" data-bs-toggle="pill" data-bs-target="#pills-exam" type="button"
                                  role="tab" aria-controls="pills-exam" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                       <i className="ri-file-edit-line"></i>
                                  </span>
                                  exam
                              </button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button
                                  className="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 "
                                  id="pills-library-tab" data-bs-toggle="pill" data-bs-target="#pills-library" type="button"
                                  role="tab" aria-controls="pills-library" aria-selected="false">
                                  <span className="d-flex tab-icon line-height-1 text-md">
                                      <i className="ri-book-line"></i>
                                  </span>
                                  library
                              </button>
                          </li>
                      </ul>
      
      
                      <div className="tab-content" id="pills-tabContent">
      
                          
                          <div className="tab-pane fade show active" id="pills-studentDetails" role="tabpanel"
                              aria-labelledby="pills-studentDetails-tab" tabIndex={0}>
                              <div className="row gy-4">
                                  <div className="col-12">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Parent Guardian Detail</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="bg-hover-neutral-50 p-20">
                                                  <div className="row g-4">
                                                      <div className="col-sm-4">
                                                          <div className="d-flex align-items-center gap-12">
                                                              <figure
                                                                  className="w-48-px h-48-px rounded-circle overflow-hidden mb-0">
                                                                  <img src="/assets/images/thumbs/guardian-img1.png"
                                                                      alt="Guardian Image"
                                                                      className="flex-shrink-0 w-100 h-100 object-fit-cover" />
                                                              </figure>
                                                              <div className="">
                                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Robert Fox
                                                                  </h6>
                                                                  <span className="">Father</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Phone</h6>
                                                              <span className="">+19854 65642</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Email</h6>
                                                              <span className="">father@example.com</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="bg-hover-neutral-50 p-20">
                                                  <div className="row g-4">
                                                      <div className="col-sm-4">
                                                          <div className="d-flex align-items-center gap-12">
                                                              <figure
                                                                  className="w-48-px h-48-px rounded-circle overflow-hidden mb-0">
                                                                  <img src="/assets/images/thumbs/guardian-img2.png"
                                                                      alt="Guardian Image"
                                                                      className="flex-shrink-0 w-100 h-100 object-fit-cover" />
                                                              </figure>
                                                              <div className="">
                                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Brooklyn
                                                                      Simmons</h6>
                                                                  <span className="">Mother</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Phone</h6>
                                                              <span className="">+19854 65642</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Email</h6>
                                                              <span className="">mother@example.com</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="bg-hover-neutral-50 p-20">
                                                  <div className="row g-4">
                                                      <div className="col-sm-4">
                                                          <div className="d-flex align-items-center gap-12">
                                                              <figure
                                                                  className="w-48-px h-48-px rounded-circle overflow-hidden mb-0">
                                                                  <img src="/assets/images/thumbs/guardian-img1.png"
                                                                      alt="Guardian Image"
                                                                      className="flex-shrink-0 w-100 h-100 object-fit-cover" />
                                                              </figure>
                                                              <div className="">
                                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Robert Fox
                                                                  </h6>
                                                                  <span className="">Guardian (Father)</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Phone</h6>
                                                              <span className="">+19854 65642</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Email</h6>
                                                              <span className="">father@example.com</span>
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
                                              <h6 className="text-lg fw-semibold mb-0">Hostel</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <div className="row gy-4">
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Hostel</h6>
                                                              <span className="">Boys Hostel 101</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Room No.</h6>
                                                              <span className="">Room No.</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-sm-4">
                                                          <div className="">
                                                              <h6 className="text-md mb-2 fw-medium flex-grow-1">Room Type</h6>
                                                              <span className="">One Bed</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                          <div
                                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                              <h6 className="text-lg fw-semibold mb-0">Description</h6>
                                          </div>
                                          <div className="card-body p-0">
                                              <div className="p-20">
                                                  <p className="text-secondary-light">Known for their punctuality and positive
                                                      attitude,
                                                      [he/she/they] consistently demonstrates a strong commitment to academic
                                                      excellence
                                                      and co-curricular participation. [He/She/They] maintains good behavior,
                                                      shows
                                                      respect toward teachers and peers, and actively engages in classroom
                                                      discussions and
                                                      group activities. </p>
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
                                                      <option value="10">10</option>
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
                          
      
                          
                          <div className="tab-pane fade" id="pills-fees" role="tabpanel" aria-labelledby="pills-fees-tab"
                              tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-10 px-20 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Fees </h6>
                                      <button type="button"
                                          className="collect-fees-btn btn btn-primary-600 d-flex align-items-center gap-6 py-8 text-sm">
                                          <span className="d-flex text-sm">
                                              <i className="ri-calendar-close-line"></i>
                                          </span>
                                          Collect Fees
                                      </button>
                                  </div>
                                  <div className="card-body p-0 dataTable-wrapper">
                                      <div className="p-20">
                                          <div className="row g-3">
                                              <div className="col-xl-3 col-sm-6">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-10">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">$10,500</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Amount</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-info-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/fees-icon1.png"
                                                                      alt="Clock Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xl-3 col-sm-6">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-8">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">$200</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Fine</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-danger-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/fees-icon2.png"
                                                                      alt="Absent Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xl-3 col-sm-6">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-7">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">$7,500</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Paid </span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-success-600 text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/fees-icon3.png"
                                                                      alt="Present Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-xl-3 col-sm-6">
                                                  <div
                                                      className="card px-20 py-28 shadow-2 radius-8 h-100 border border-neutral-200 shadow-none gradient-bg-end-11">
                                                      <div className="card-body p-0">
                                                          <div
                                                              className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                                              <div>
                                                                  <h6 className="fw-semibold mb-2">$3,000</h6>
                                                                  <span className="fw-medium text-secondary-light text-sm">Total
                                                                      Due</span>
                                                              </div>
                                                              <span
                                                                  className="mb-0 w-48-px h-48-px bg-orange text-white flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                  <img src="/assets/images/icons/fees-icon4.png"
                                                                      alt="Holiday Icon" />
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div
                                          className="d-flex flex-wrap align-items-center gap-24 justify-content-between px-20 pb-16">
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
                                                  <th scope="col">Fees Type</th>
                                                  <th scope="col">Due Date</th>
                                                  <th scope="col">Payment Type</th>
                                                  <th scope="col">Amount</th>
                                                  <th scope="col">Discount</th>
                                                  <th scope="col">Fine</th>
                                                  <th scope="col">Paid</th>
                                                  <th scope="col">Due</th>
                                                  <th scope="col">Paid Date</th>
                                                  <th scope="col">Status</th>
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
                                                  <td>May Month Fees</td>
                                                  <td>05 May 2025</td>
                                                  <td>Bank</td>
                                                  <td>$700.50</td>
                                                  <td>10%</td>
                                                  <td>$50</td>
                                                  <td>$700.50</td>
                                                  <td>$0</td>
                                                  <td>12 May 2025</td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                          Paid
                                                      </span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">02</label>
                                                      </div>
                                                  </td>
                                                  <td>June Month Fees</td>
                                                  <td>05 Jun 2025</td>
                                                  <td>Cash</td>
                                                  <td>$680.00</td>
                                                  <td>5%</td>
                                                  <td>$30</td>
                                                  <td>$350.00</td>
                                                  <td>$330.00</td>
                                                  <td>09 Jun 2025</td>
                                                  <td>
                                                      <span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                          Partial
                                                      </span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">03</label>
                                                      </div>
                                                  </td>
                                                  <td>July Month Fees</td>
                                                  <td>05 Jul 2025</td>
                                                  <td>Bank</td>
                                                  <td>$700.00</td>
                                                  <td>10%</td>
                                                  <td>$0</td>
                                                  <td>$0.00</td>
                                                  <td>$700.00</td>
                                                  <td>-</td>
                                                  <td>
                                                      <span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                          Unpaid
                                                      </span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">04</label>
                                                      </div>
                                                  </td>
                                                  <td>August Month Fees</td>
                                                  <td>05 Aug 2025</td>
                                                  <td>Online</td>
                                                  <td>$750.00</td>
                                                  <td>15%</td>
                                                  <td>$40</td>
                                                  <td>$750.00</td>
                                                  <td>$0</td>
                                                  <td>07 Aug 2025</td>
                                                  <td>
                                                      <span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                          Paid
                                                      </span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">05</label>
                                                      </div>
                                                  </td>
                                                  <td>September Month Fees</td>
                                                  <td>05 Sep 2025</td>
                                                  <td>Bank</td>
                                                  <td>$720.00</td>
                                                  <td>10%</td>
                                                  <td>$25</td>
                                                  <td>$360.00</td>
                                                  <td>$360.00</td>
                                                  <td>10 Sep 2025</td>
                                                  <td>
                                                      <span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">
                                                          Partial
                                                      </span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">06</label>
                                                      </div>
                                                  </td>
                                                  <td>June month fees</td>
                                                  <td>05 Jun 2025</td>
                                                  <td>Cash</td>
                                                  <td>$700.50</td>
                                                  <td>5%</td>
                                                  <td>$0</td>
                                                  <td>$665.00</td>
                                                  <td>$35.50</td>
                                                  <td>07 Jun 2025</td>
                                                  <td><span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Partial</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">07</label>
                                                      </div>
                                                  </td>
                                                  <td>July month fees</td>
                                                  <td>05 Jul 2025</td>
                                                  <td>Bank</td>
                                                  <td>$700.50</td>
                                                  <td>10%</td>
                                                  <td>$25</td>
                                                  <td>$700.50</td>
                                                  <td>$0</td>
                                                  <td>06 Jul 2025</td>
                                                  <td><span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">08</label>
                                                      </div>
                                                  </td>
                                                  <td>August month fees</td>
                                                  <td>05 Aug 2025</td>
                                                  <td>Card</td>
                                                  <td>$700.50</td>
                                                  <td>0%</td>
                                                  <td>$0</td>
                                                  <td>$0</td>
                                                  <td>$700.50</td>
                                                  <td>-</td>
                                                  <td><span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Unpaid</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">09</label>
                                                      </div>
                                                  </td>
                                                  <td>September month fees</td>
                                                  <td>05 Sep 2025</td>
                                                  <td>Online</td>
                                                  <td>$700.50</td>
                                                  <td>5%</td>
                                                  <td>$15</td>
                                                  <td>$350.00</td>
                                                  <td>$350.50</td>
                                                  <td>08 Sep 2025</td>
                                                  <td><span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Partial</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">10</label>
                                                      </div>
                                                  </td>
                                                  <td>October month fees</td>
                                                  <td>05 Oct 2025</td>
                                                  <td>Bank</td>
                                                  <td>$700.50</td>
                                                  <td>10%</td>
                                                  <td>$20</td>
                                                  <td>$700.50</td>
                                                  <td>$0</td>
                                                  <td>06 Oct 2025</td>
                                                  <td><span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">11</label>
                                                      </div>
                                                  </td>
                                                  <td>November month fees</td>
                                                  <td>05 Nov 2025</td>
                                                  <td>Cash</td>
                                                  <td>$700.50</td>
                                                  <td>0%</td>
                                                  <td>$0</td>
                                                  <td>$0</td>
                                                  <td>$700.50</td>
                                                  <td>-</td>
                                                  <td><span
                                                          className="bg-danger-100 text-danger-600 px-20 py-4 radius-4 fw-medium text-sm">Unpaid</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">12</label>
                                                      </div>
                                                  </td>
                                                  <td>December month fees</td>
                                                  <td>05 Dec 2025</td>
                                                  <td>Online</td>
                                                  <td>$700.50</td>
                                                  <td>15%</td>
                                                  <td>$0</td>
                                                  <td>$595.00</td>
                                                  <td>$105.50</td>
                                                  <td>10 Dec 2025</td>
                                                  <td><span
                                                          className="bg-warning-100 text-warning-600 px-20 py-4 radius-4 fw-medium text-sm">Partial</span>
                                                  </td>
                                              </tr>
      
                                              <tr>
                                                  <td>
                                                      <div className="form-check style-check d-flex align-items-center">
                                                          <input className="form-check-input" type="checkbox" />
                                                          <label className="form-check-label">13</label>
                                                      </div>
                                                  </td>
                                                  <td>January month fees</td>
                                                  <td>05 Jan 2026</td>
                                                  <td>Bank</td>
                                                  <td>$700.50</td>
                                                  <td>10%</td>
                                                  <td>$0</td>
                                                  <td>$700.50</td>
                                                  <td>$0</td>
                                                  <td>06 Jan 2026</td>
                                                  <td><span
                                                          className="bg-success-100 text-success-600 px-20 py-4 radius-4 fw-medium text-sm">Paid</span>
                                                  </td>
                                              </tr>
      
                                          </tbody>
      
                                      </table>
                                  </div>
                              </div>
                          </div>
                          
      
                          
                          <div className="tab-pane fade" id="pills-exam" role="tabpanel" aria-labelledby="pills-exam-tab"
                              tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Exam </h6>
                                  </div>
                                  <div className="card-body p-20 d-flex flex-column gap-20">
      
                                      <div className="border radius-8 overflow-hidden">
                                          <button type="button"
                                              className="custom-accordion-btn text-md fw-semibold text-secondary-light w-100 py-10 px-20 d-flex align-items-center gap-12 justify-content-between">
                                              First Semester
                                              <span className="arrow-icon text-lg d-flex line-height-1">
                                                  <i className="ri-arrow-down-s-line"></i>
                                              </span>
                                          </button>
                                          <div className="custom-accordion-content table-bottom-info-none">
                                              <table
                                                  className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                                  id="firstSemesterTable" data-page-length='10'>
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-start">Subject</th>
                                                          <th scope="col" className="text-start">Max Marks</th>
                                                          <th scope="col" className="text-start">Min Marks</th>
                                                          <th scope="col" className="text-start">Marks Obtained</th>
                                                          <th scope="col" className="text-start">Grade</th>
                                                          <th scope="col" className="text-start">Result</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td className="text-start">Bangla</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">English</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60</td>
                                                          <td className="text-start">B+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">ICT</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">70</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Physics </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Chemistry </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">48 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Mathematics</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Rank: 30
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total: 600
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total Obtain Marks: 398
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Grande: A
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Results: Pass
                                                          </td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                      </div>
      
                                      <div className="border radius-8 overflow-hidden">
                                          <button type="button"
                                              className="custom-accordion-btn text-md fw-semibold text-secondary-light w-100 py-10 px-20 d-flex align-items-center gap-12 justify-content-between">
                                              Monthly Test (Jun-2025)
                                              <span className="arrow-icon text-lg d-flex line-height-1">
                                                  <i className="ri-arrow-down-s-line"></i>
                                              </span>
                                          </button>
                                          <div className="custom-accordion-content table-bottom-info-none">
                                              <table
                                                  className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                                  id="monthlyTestJun" data-page-length='10'>
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-start">Subject</th>
                                                          <th scope="col" className="text-start">Max Marks</th>
                                                          <th scope="col" className="text-start">Min Marks</th>
                                                          <th scope="col" className="text-start">Marks Obtained</th>
                                                          <th scope="col" className="text-start">Grade</th>
                                                          <th scope="col" className="text-start">Result</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td className="text-start">Bangla</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">English</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60</td>
                                                          <td className="text-start">B+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">ICT</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">70</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Physics </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Chemistry </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">48 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Mathematics</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Rank: 30
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total: 600
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total Obtain Marks: 398
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Grande: A
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Results: Pass
                                                          </td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                      </div>
      
                                      <div className="border radius-8 overflow-hidden">
                                          <button type="button"
                                              className="custom-accordion-btn text-md fw-semibold text-secondary-light w-100 py-10 px-20 d-flex align-items-center gap-12 justify-content-between">
                                              Weekly Test(Jun-2025)
                                              <span className="arrow-icon text-lg d-flex line-height-1">
                                                  <i className="ri-arrow-down-s-line"></i>
                                              </span>
                                          </button>
                                          <div className="custom-accordion-content table-bottom-info-none">
                                              <table
                                                  className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                                  id="weeklyTestJun" data-page-length='10'>
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-start">Subject</th>
                                                          <th scope="col" className="text-start">Max Marks</th>
                                                          <th scope="col" className="text-start">Min Marks</th>
                                                          <th scope="col" className="text-start">Marks Obtained</th>
                                                          <th scope="col" className="text-start">Grade</th>
                                                          <th scope="col" className="text-start">Result</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td className="text-start">Bangla</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">English</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60</td>
                                                          <td className="text-start">B+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">ICT</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">70</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Physics </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Chemistry </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">48 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Mathematics</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Rank: 30
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total: 600
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total Obtain Marks: 398
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Grande: A
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Results: Pass
                                                          </td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                      </div>
      
                                      <div className="border radius-8 overflow-hidden">
                                          <button type="button"
                                              className="custom-accordion-btn text-md fw-semibold text-secondary-light w-100 py-10 px-20 d-flex align-items-center gap-12 justify-content-between">
                                              Weekly Test(May-2025)
                                              <span className="arrow-icon text-lg d-flex line-height-1">
                                                  <i className="ri-arrow-down-s-line"></i>
                                              </span>
                                          </button>
                                          <div className="custom-accordion-content table-bottom-info-none">
                                              <table
                                                  className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                                  id="weeklyTestMay" data-page-length='10'>
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-start">Subject</th>
                                                          <th scope="col" className="text-start">Max Marks</th>
                                                          <th scope="col" className="text-start">Min Marks</th>
                                                          <th scope="col" className="text-start">Marks Obtained</th>
                                                          <th scope="col" className="text-start">Grade</th>
                                                          <th scope="col" className="text-start">Result</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td className="text-start">Bangla</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">English</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60</td>
                                                          <td className="text-start">B+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">ICT</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">70</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Physics </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Chemistry </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">48 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Mathematics</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Rank: 30
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total: 600
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total Obtain Marks: 398
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Grande: A
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Results: Pass
                                                          </td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                      </div>
      
                                      <div className="border radius-8 overflow-hidden">
                                          <button type="button"
                                              className="custom-accordion-btn text-md fw-semibold text-secondary-light w-100 py-10 px-20 d-flex align-items-center gap-12 justify-content-between">
                                              weeklyTestMay
                                              <span className="arrow-icon text-lg d-flex line-height-1">
                                                  <i className="ri-arrow-down-s-line"></i>
                                              </span>
                                          </button>
                                          <div className="custom-accordion-content table-bottom-info-none">
                                              <table
                                                  className="table bordered-table mb-0 table-heading-dark-mode w-100 data-table"
                                                  id="monthlyTestMay" data-page-length='10'>
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-start">Subject</th>
                                                          <th scope="col" className="text-start">Max Marks</th>
                                                          <th scope="col" className="text-start">Min Marks</th>
                                                          <th scope="col" className="text-start">Marks Obtained</th>
                                                          <th scope="col" className="text-start">Grade</th>
                                                          <th scope="col" className="text-start">Result</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td className="text-start">Bangla</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">English</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60</td>
                                                          <td className="text-start">B+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">ICT</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">70</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Physics </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">60 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Chemistry </td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">48 </td>
                                                          <td className="text-start">B</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="text-start">Mathematics</td>
                                                          <td className="text-start">100.00</td>
                                                          <td className="text-start">35.00</td>
                                                          <td className="text-start">80</td>
                                                          <td className="text-start">A+</td>
                                                          <td className="text-start">
                                                              <span
                                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                                  <tfoot>
                                                      <tr>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Rank: 30
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total: 600
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Total Obtain Marks: 398
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Grande: A
                                                          </td>
                                                          <td
                                                              className="text-primary-light fw-semibold text-md border-top border-bottom border-neutral-200 text-start bg-neutral-50">
                                                              Results: Pass
                                                          </td>
                                                      </tr>
                                                  </tfoot>
                                              </table>
                                          </div>
                                      </div>
      
                                  </div>
                              </div>
                          </div>
                          
      
                          
                          <div className="tab-pane fade" id="pills-library" role="tabpanel" aria-labelledby="pills-library-tab"
                              tabIndex={0}>
                              <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                                  <div
                                      className="card-header border-bottom bg-base py-10 px-20 d-flex align-items-center justify-content-between">
                                      <h6 className="text-lg fw-semibold mb-0">Library </h6>
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
                                          id="dataTableLibrary" data-page-length='10'>
                                          <thead>
                                              <tr>
                                                  <th scope="col" className="text-start">S.L</th>
                                                  <th scope="col" className="text-start">Book Name</th>
                                                  <th scope="col" className="text-start">Book Category</th>
                                                  <th scope="col" className="text-start">Book Number</th>
                                                  <th scope="col" className="text-start">Taken ON</th>
                                                  <th scope="col" className="text-start">Last Date</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td className="text-start">01</td>
                                                  <td className="text-start">
                                                      <div className="d-flex align-items-center">
                                                          <img src="/assets/images/thumbs/library-img1.png" alt="Library Image"
                                                              className="flex-shrink-0 me-12 radius-4 w-36-px h-36-px" />
                                                          <div className="">
                                                              <h6
                                                                  className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                                  Marigold (NCERT)
                                                              </h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-start">English</td>
                                                  <td className="text-start">8512</td>
                                                  <td className="text-start"> 05 May 2025</td>
                                                  <td className="text-start">05 Jun 2025</td>
                                              </tr>
                                              <tr>
                                                  <td className="text-start">02</td>
                                                  <td className="text-start">
                                                      <div className="d-flex align-items-center">
                                                          <img src="/assets/images/thumbs/library-img2.png" alt="Library Image"
                                                              className="flex-shrink-0 me-12 radius-4 w-36-px h-36-px" />
                                                          <div className="">
                                                              <h6
                                                                  className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                                  Number Magic
                                                              </h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-start">Mathematics</td>
                                                  <td className="text-start">85620</td>
                                                  <td className="text-start"> 05 May 2025</td>
                                                  <td className="text-start">05 Jun 2025</td>
                                              </tr>
                                              <tr>
                                                  <td className="text-start">03</td>
                                                  <td className="text-start">
                                                      <div className="d-flex align-items-center">
                                                          <img src="/assets/images/thumbs/library-img3.png" alt="Library Image"
                                                              className="flex-shrink-0 me-12 radius-4 w-36-px h-36-px" />
                                                          <div className="">
                                                              <h6
                                                                  className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                                  Mental Math
                                                              </h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-start">Mathematics</td>
                                                  <td className="text-start">8512</td>
                                                  <td className="text-start"> 05 May 2025</td>
                                                  <td className="text-start">05 Jun 2025</td>
                                              </tr>
                                              <tr>
                                                  <td className="text-start">04</td>
                                                  <td className="text-start">
                                                      <div className="d-flex align-items-center">
                                                          <img src="/assets/images/thumbs/library-img4.png" alt="Library Image"
                                                              className="flex-shrink-0 me-12 radius-4 w-36-px h-36-px" />
                                                          <div className="">
                                                              <h6
                                                                  className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                                  Our Environment
                                                              </h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-start">Environmental Studies</td>
                                                  <td className="text-start">85620</td>
                                                  <td className="text-start"> 05 May 2025</td>
                                                  <td className="text-start">05 Jun 2025</td>
                                              </tr>
                                              <tr>
                                                  <td className="text-start">05</td>
                                                  <td className="text-start">
                                                      <div className="d-flex align-items-center">
                                                          <img src="/assets/images/thumbs/library-img5.png" alt="Library Image"
                                                              className="flex-shrink-0 me-12 radius-4 w-36-px h-36-px" />
                                                          <div className="">
                                                              <h6
                                                                  className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                                  Brainvita
                                                              </h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="text-start">General Knowledge</td>
                                                  <td className="text-start">8512</td>
                                                  <td className="text-start"> 05 May 2025</td>
                                                  <td className="text-start">05 Jun 2025</td>
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
                          <img src="/assets/images/thumbs/student-details-img.png" alt="Student Image" className="w-100 h-100 object-fit-cover" />
                      </figure>
                      <div className="flex-grow-1">
                          <h2 className="text-xl text-primary-light mb-4">Seth Hallam</h2>
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
                              <td className="text-start">Student</td>
                              <td className="text-start">student@example.com</td>
                              <td className="text-start">15445@#AC</td>
                          </tr>
                          <tr>
                              <td className="text-start">Parent</td>
                              <td className="text-start">parent@example.com</td>
                              <td className="text-start">52445@#AC</td>
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
          className="collect-fees bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Collect Fees</h5>
              <button type="button" className="close-collect-fees text-danger-600 text-lg d-flex">
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
                      <h6 className="text-lg fw-semibold text-primary-light mb-0">Are your sure you want to Suspend this Student
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
      
      <Script
        id="page-student-details-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
