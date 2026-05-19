/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// Data Table start\r\n    let table = new DataTable('#dataTable');\r\n    let tableTwo = new DataTable('#dataTableTwo');\r\n    let tableThree = new DataTable('#dataTableThree');\r\n    let tableFour = new DataTable('#dataTableFour');\r\n    let firstSemesterTable = new DataTable('#firstSemesterTable');\r\n    let monthlyTestJun = new DataTable('#monthlyTestJun');\r\n    let weeklyTestJun = new DataTable('#weeklyTestJun');\r\n    let weeklyTestMay = new DataTable('#weeklyTestMay');\r\n    let monthlyTestMay = new DataTable('#monthlyTestMay');\r\n    let dataTableLibrary = new DataTable('#dataTableLibrary');\r\n    let loginDetailsTable = new DataTable('#loginDetailsTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n    $(document).ready(function () {\r\n        $('.attendance').each(function () {\r\n            let value = $(this).text().trim().toUpperCase();\r\n\r\n            if (value === 'P') {\r\n                $(this).addClass('text-success-600')\r\n            } else if (value === 'A') {\r\n                $(this).addClass('text-danger-600')\r\n            } else if (value === 'H') {\r\n                $(this).addClass('text-warning-600')\r\n            } else if (value === 'F') {\r\n                $(this).addClass('text-purple-600')\r\n            } else if (value === 'L') {\r\n                $(this).addClass('text-info-600')\r\n            }\r\n        });\r\n    });\r\n    // Dynamic Class added to the (absent/present/late/holiday)\r\n\r\n\r\n    // Custom accordion js start\r\n    $(document).on('click', '.custom-accordion-btn', function () {\r\n        $('.custom-accordion-btn').not(this).removeClass('active').siblings('.custom-accordion-content').slideUp();\r\n\r\n        // Toggle current one\r\n        $(this).toggleClass('active');\r\n        $(this).siblings('.custom-accordion-content').slideToggle();\r\n    });\r\n\r\n    // Keep first accordion open by default\r\n    $(document).ready(function () {\r\n        const firstAccordion = $('.custom-accordion-btn').first();\r\n        firstAccordion.addClass('active');\r\n        firstAccordion.siblings('.custom-accordion-content').show();\r\n    });\r\n    // Custom accordion js end\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.apply-leave-btn').on('click', function () {\r\n        $('.apply-leave').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-apply-leave, .overlay').on('click', function () {\r\n        $('.apply-leave').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end\r\n\r\n    $('.collect-payroll-btn').on('click', function () {\r\n        $('.collect-payroll').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-collect-payroll, .overlay').on('click', function () {\r\n        $('.collect-payroll').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function GuardianDetailsPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Guardian Details</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <Link href="/guardian-list" className="text-secondary-light hover-text-primary hover-underline"> /
                              Guardian</Link>
                          <span className="text-secondary-light">/ Guardian Details</span>
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
                                      <img src="/assets/images/thumbs/teacher-details-img.png" alt="guardian Image"
                                          className="w-100 h-100 object-fit-cover" />
                                  </figure>
                                  <h2 className="h6 text-primary-light mb-8 fw-semibold">Marvin McKinney</h2>
                                  <p className="mb-0">ID: <span className="text-primary-600 fw-semibold"> AD1256589</span>
                                  </p>
                                  <div className="mt-20 d-flex gap-16 w-100">
                                      <Link href="/edit-guardian"
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
                                  </div>
                                  <div className="mt-16 d-flex flex-column gap-20">
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Guardians Type</span>
                                          <span className="fw-normal text-sm text-secondary-light">: Father</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Phone Number</span>
                                          <span className="fw-normal text-sm text-secondary-light">: +1 21541214</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Occupation</span>
                                          <span className="fw-normal text-sm text-secondary-light">: N/A</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Address</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 8502 Preston Rd. Inglewood,
                                              Maine 98380</span>
                                      </div>
                                      <div className="d-flex gap-4">
                                          <span className="fw-semibold text-sm text-primary-light w-110-px">Join Date</span>
                                          <span className="fw-normal text-sm text-secondary-light">: 10 Nov 2006</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="mt-16">
                      <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                          <div
                              className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                              <h6 className="text-lg fw-semibold mb-0">Profile Detail</h6>
                          </div>
                          <div className="card-body p-0">
                              <div className="">
                                  <div className="bg-hover-neutral-50 p-20">
                                      <div className="row g-4">
                                          <div className="col-sm-4">
                                              <div className="d-flex align-items-center gap-12">
                                                  <figure className="w-48-px h-48-px rounded-circle overflow-hidden mb-0">
                                                      <img src="/assets/images/thumbs/guardian-img1.png" alt="Guardian Image"
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
                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Class</h6>
                                                  <span className="">+19854 65642</span>
                                              </div>
                                          </div>
                                          <div className="col-sm-4">
                                              <div className="">
                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Roll No</h6>
                                                  <span className="">father@example.com</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="bg-hover-neutral-50 p-20">
                                      <div className="row g-4">
                                          <div className="col-sm-4">
                                              <div className="d-flex align-items-center gap-12">
                                                  <figure className="w-48-px h-48-px rounded-circle overflow-hidden mb-0">
                                                      <img src="/assets/images/thumbs/guardian-img2.png" alt="Guardian Image"
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
                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Class</h6>
                                                  <span className="">+19854 65642</span>
                                              </div>
                                          </div>
                                          <div className="col-sm-4">
                                              <div className="">
                                                  <h6 className="text-md mb-2 fw-medium flex-grow-1">Roll No</h6>
                                                  <span className="">mother@example.com</span>
                                              </div>
                                          </div>
                                      </div>
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
                          <img src="/assets/images/thumbs/student-details-img.png" alt="guardian Image"
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
                              <td className="text-start">guardian</td>
                              <td className="text-start">guardian@example.com</td>
                              <td className="text-start">15445@#AC</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </form>
      </div>
      
      <Script
        id="page-guardian-details-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
