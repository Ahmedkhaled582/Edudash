/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end";

export default function TeacherAttendancePage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Teacher Attendance</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="#" className="text-secondary-light hover-text-primary hover-underline d-none"> /
              Teacher Attendance</Link>
            <span className="text-secondary-light">/ Teacher Attendance</span>
          </div>
        </div>
        <Link href="/add-new-teacher" className="btn btn-primary-600 d-flex align-items-center gap-6 d-none">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Teacher
        </Link>
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
                                                      <label htmlFor="class"
                                                          className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject</label>
                                                      <select id="class" className="form-control form-select">
                                                          <option value="English">English</option>
                                                          <option value="Bangla">Bangla</option>
                                                          <option value="Math">Math</option>
                                                          <option value="Physics">Physics</option>
                                                          <option value="Chemistry">Chemistry</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-12">
                                                      <label htmlFor="date"
                                                          className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date</label>
                                                      <input type="date" className="form-control" id="date" />
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
                                          <th scope="col">Admission No</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">Class</th>
                                          <th scope="col">Attendance</th>
                                          <th scope="col">Note</th>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img1.png"
                                                      alt="Marvin McKinney Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Marvin McKinney</h6>
                                                  </div>
                                              </div>
                                          </td>
      
                                          <td>Mathematics</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio1" id="p1" />
                                                      <label className="form-check-label" htmlFor="p1">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio1" id="l1" />
                                                      <label className="form-check-label" htmlFor="l1">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio1" id="a1" />
                                                      <label className="form-check-label" htmlFor="a1">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio1" id="h1" />
                                                      <label className="form-check-label" htmlFor="h1">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio1" id="ho1" />
                                                      <label className="form-check-label" htmlFor="ho1">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="Cody Fisher Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Cody Fisher</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Physics</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio2" id="p2" />
                                                      <label className="form-check-label" htmlFor="p2">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio2" id="l2" />
                                                      <label className="form-check-label" htmlFor="l2">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio2" id="a2" />
                                                      <label className="form-check-label" htmlFor="a2">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio2" id="h2" />
                                                      <label className="form-check-label" htmlFor="h2">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio2" id="ho2" />
                                                      <label className="form-check-label" htmlFor="ho2">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img3.png"
                                                      alt="Jenny Wilson Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Jenny Wilson</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Biology</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio3" id="p3" />
                                                      <label className="form-check-label" htmlFor="p3">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio3" id="l3" />
                                                      <label className="form-check-label" htmlFor="l3">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio3" id="a3" />
                                                      <label className="form-check-label" htmlFor="a3">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio3" id="h3" />
                                                      <label className="form-check-label" htmlFor="h3">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio3" id="ho3" />
                                                      <label className="form-check-label" htmlFor="ho3">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img4.png"
                                                      alt="Guy Hawkins Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Guy Hawkins</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>English</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio4" id="p4" />
                                                      <label className="form-check-label" htmlFor="p4">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio4" id="l4" />
                                                      <label className="form-check-label" htmlFor="l4">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio4" id="a4" />
                                                      <label className="form-check-label" htmlFor="a4">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio4" id="h4" />
                                                      <label className="form-check-label" htmlFor="h4">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio4" id="ho4" />
                                                      <label className="form-check-label" htmlFor="ho4">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img5.png"
                                                      alt="Esther Howard Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Esther Howard</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Math</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio5" id="p5" />
                                                      <label className="form-check-label" htmlFor="p5">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio5" id="l5" />
                                                      <label className="form-check-label" htmlFor="l5">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio5" id="a5" />
                                                      <label className="form-check-label" htmlFor="a5">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio5" id="h5" />
                                                      <label className="form-check-label" htmlFor="h5">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio5" id="ho5" />
                                                      <label className="form-check-label" htmlFor="ho5">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png"
                                                      alt="Jane Cooper Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Jane Cooper</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Chemistry</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio6" id="p6" />
                                                      <label className="form-check-label" htmlFor="p6">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio6" id="l6" />
                                                      <label className="form-check-label" htmlFor="l6">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio6" id="a6" />
                                                      <label className="form-check-label" htmlFor="a6">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio6" id="h6" />
                                                      <label className="form-check-label" htmlFor="h6">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio6" id="ho6" />
                                                      <label className="form-check-label" htmlFor="ho6">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img7.png"
                                                      alt="Robert Fox Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Robert Fox</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Biology</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio7" id="p7" />
                                                      <label className="form-check-label" htmlFor="p7">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio7" id="l7" />
                                                      <label className="form-check-label" htmlFor="l7">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio7" id="a7" />
                                                      <label className="form-check-label" htmlFor="a7">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio7" id="h7" />
                                                      <label className="form-check-label" htmlFor="h7">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio7" id="ho7" />
                                                      <label className="form-check-label" htmlFor="ho7">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img8.png"
                                                      alt="Theresa Webb Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Theresa Webb</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Mathematics</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio8" id="p8" />
                                                      <label className="form-check-label" htmlFor="p8">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio8" id="l8" />
                                                      <label className="form-check-label" htmlFor="l8">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio8" id="a8" />
                                                      <label className="form-check-label" htmlFor="a8">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio8" id="h8" />
                                                      <label className="form-check-label" htmlFor="h8">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio8" id="ho8" />
                                                      <label className="form-check-label" htmlFor="ho8">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img9.png"
                                                      alt="Courtney Henry Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Courtney Henry</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Physics</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio9" id="p9" />
                                                      <label className="form-check-label" htmlFor="p9">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio9" id="l9" />
                                                      <label className="form-check-label" htmlFor="l9">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio9" id="a9" />
                                                      <label className="form-check-label" htmlFor="a9">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio9" id="h9" />
                                                      <label className="form-check-label" htmlFor="h9">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio9" id="ho9" />
                                                      <label className="form-check-label" htmlFor="ho9">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
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
                                              <div className="d-flex align-items-center flex-grow-1">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png"
                                                      alt="Wade Warren Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Wade Warren</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Biology</td>
                                          <td>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio10" id="p10" />
                                                      <label className="form-check-label" htmlFor="p10">Present</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio10" id="l10" />
                                                      <label className="form-check-label" htmlFor="l10">Late</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio10" id="a10" />
                                                      <label className="form-check-label" htmlFor="a10">Absent</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio10" id="h10" />
                                                      <label className="form-check-label" htmlFor="h10">Halfday</label>
                                                  </div>
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio10" id="ho10" />
                                                      <label className="form-check-label" htmlFor="ho10">Holiday</label>
                                                  </div>
                                              </div>
                                          </td>
                                          <td><input type="text" className="form-control" placeholder="Write note..." /></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>

      <Script
        id="page-teacher-attendance-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
