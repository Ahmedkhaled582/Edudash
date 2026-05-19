/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end\r\n\r\n    // Search Item input js start\r\n    $('.item-search-input').on('input', function () {\r\n        const inputValue = event.target.value.trim().toLowerCase();\r\n\r\n        let items = document.querySelectorAll('.attendance-card .card-title');\r\n        items.forEach(item => {\r\n            const itemText = item.innerText.trim().toLowerCase();\r\n\r\n            const matched = itemText.includes(inputValue);\r\n            if (matched) {\r\n                item.parentElement.classList.remove('d-none');\r\n            } else {\r\n                item.parentElement.classList.add('d-none');\r\n            }\r\n        });\r\n    });\r\n    // Search Item input js end";

export default function TeacherTimetablePage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Teacher Timetable</h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
      
                          <span className="text-secondary-light">/ Teacher Timetable</span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6 ">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add Timetable
                  </button>
              </div>
      
              <div className="mt-24">
                  <div className="card h-100">
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
                                  <input type="text" className="item-search-input dt-input bg-transparent radius-4" name="search" placeholder="Search..." />
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
                                      <div className="d-flex align-items-center justify-content-between border-bottom py-8 px-16">
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
                      </div>
      
                      <div className="card-body p-20 d-flex flex-column gap-20">
                          <div className="overflow-x-auto d-flex scroll-sm pb-8">
                              <div className="d-flex gap-16 flex-shrink-0 flex-grow-1">
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Monday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Tuesday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Wednesday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Thursday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Friday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Saturday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 1 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Math</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 16</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:00 AM - 09:45 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-info-100 text-info-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 2 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: English</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 10</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">09:50 AM - 10:35 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-success-100 text-success-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 3 (A)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: Science</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 22</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">10:40 AM - 11:25 AM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-danger-100 text-danger-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 4 (C)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: History</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 8</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">11:30 AM - 12:15 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-primary-100 text-primary-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Class: 5 (B)
                                              </h6>
                                              <div className="px-10 py-16 d-flex flex-column gap-10">
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-book-open-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Subject </span>
                                                          <span className="flex-grow-1">: CSE</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-building-4-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="w-64-px flex-shrink-0"> Room No </span>
                                                          <span className="flex-grow-1">: 25</span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-8">
                                                      <span className="d-flex line-height-1 text-secondary-light text-lg">
                                                          <i className="ri-time-line"></i>
                                                      </span>
                                                      <div className="text-primary-light text-sm d-flex">
                                                          <span className="flex-grow-1">12:20 PM - 01:05 PM</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h6 className="text-md mb-8">Sunday</h6>
                                      <div className="d-flex flex-column gap-16">
                                          <div className="attendance-card border radius-8 overflow-hidden">
                                              <h6
                                                  className="text-sm bg-warning-100 text-warning-600 fw-semibold py-10 px-16 text-center mb-0 card-title">
                                                  Holiday
                                              </h6>
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
              <h5 className="text-lg mb-0">Add New Timetable</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="timetableDay" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Day
                          </label>
                          <select id="timetableDay" className="form-control form-select">
                              <option value="Select a Day"  disabled>Select a Day</option>
                              <option value="Sunday">Sunday</option>
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                              <option value="Saturday">Saturday</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="timetableSelectTeacher"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Teacher
                          </label>
                          <select id="timetableSelectTeacher" className="form-control form-select">
                              <option value="Select a teacher" disabled>Select a teacher</option>
                              <option value="John Doe">John Doe</option>
                              <option value="John Alex">John Alex</option>
                              <option value="Bill Gets">Bill Gets</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="selectClass" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class
                          </label>
                          <select id="selectClass" className="form-control form-select">
                              <option value="Select a class"  disabled>Select a class</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                              <option value="Five">Five</option>
                              <option value="Six">Six</option>
                              <option value="Seven">Seven</option>
                              <option value="Eight">Eight</option>
                              <option value="Nice">Nice</option>
                              <option value="Ten">Ten</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="selectSubject"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                          </label>
                          <select id="selectSubject" className="form-control form-select">
                              <option value="Select a subject"  disabled>Select a subject</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                              <option value="Five">Five</option>
                              <option value="Six">Six</option>
                              <option value="Seven">Seven</option>
                              <option value="Eight">Eight</option>
                              <option value="Nice">Nice</option>
                              <option value="Ten">Ten</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="selectRoom" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Room No
                          </label>
                          <select id="selectRoom" className="form-control form-select">
                              <option value="Select a Room No"  disabled>Select a Room No</option>
                              <option value="101">101</option>
                              <option value="102">102</option>
                              <option value="103">103</option>
                              <option value="104">104</option>
                              <option value="105">105</option>
                              <option value="106">106</option>
                              <option value="107">107</option>
                              <option value="108">108</option>
                              <option value="109">109</option>
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
      
      <Script
        id="page-teacher-timetable-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
