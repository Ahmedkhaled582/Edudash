/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end";

export default function TeacherListPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Teacher List</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="javascript:void(0)" className="text-secondary-light hover-text-primary hover-underline d-none"> /
              Teacher</Link>
            <span className="text-secondary-light">/ Teacher List</span>
          </div>
        </div>
        <Link href="/add-new-teacher" className="btn btn-primary-600 d-flex align-items-center gap-6 ">
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
                                          <th scope="col">Subject</th>
                                          <th scope="col">Class</th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Phone Number</th>
                                          <th scope="col">Join Date</th>
                                          <th scope="col">Status</th>
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
                                          <td><span className="text-primary-600">AD52365</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img1.png"
                                                      alt="Marvin McKinney Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Marvin McKinney</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Mathematics</td>
                                          <td>1 (A), 2(A), 3(A)</td>
                                          <td>chinthaka@hotmail.com</td>
                                          <td>209.555.0104</td>
                                          <td>05 May 2012</td>
                                          <td> <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label">
                                                      01
                                                  </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52365</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="Ralph Edwards Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div className="">
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Ralph Edwards</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Physics</td>
                                          <td>9 (A), 10 (B), </td>
                                          <td>mobileip@mac.com</td>
                                          <td>209.555.0104</td>
                                          <td>05 May 2012</td>
                                          <td> <span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img3.png"
                                                      alt="Courtney Henry Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Courtney Henry</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Biology</td>
                                          <td>6 (A), 7 (B)</td>
                                          <td>courtney@edu.com</td>
                                          <td>209.555.0134</td>
                                          <td>18 Jan 2014</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Student</Link></li>
                                                      <li><Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-error-warning-line"></i>Inactive</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img4.png"
                                                      alt="Eleanor Pena Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Eleanor Pena</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Chemistry</td>
                                          <td>8 (B), 9 (A)</td>
                                          <td>eleanor.pena@school.org</td>
                                          <td>209.555.0189</td>
                                          <td>22 Aug 2016</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Student</Link></li>
                                                      <li><Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-error-warning-line"></i>Inactive</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img5.png"
                                                      alt="Cody Fisher Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Cody Fisher</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>English</td>
                                          <td>5 (A), 6 (A)</td>
                                          <td>cody.fisher@school.com</td>
                                          <td>209.555.0192</td>
                                          <td>14 Mar 2015</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Student</Link></li>
                                                      <li><Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-error-warning-line"></i>Inactive</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png"
                                                      alt="Devon Lane Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Devon Lane</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Geography</td>
                                          <td>7 (C), 8 (A)</td>
                                          <td>devon@edu.org</td>
                                          <td>209.555.0119</td>
                                          <td>09 Jul 2018</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img7.png"
                                                      alt="Bessie Cooper Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Bessie Cooper</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>History</td>
                                          <td>9 (B), 10 (A)</td>
                                          <td>bessie.cooper@school.org</td>
                                          <td>209.555.0156</td>
                                          <td>23 Feb 2013</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img8.png"
                                                      alt="Arlene McCoy Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Arlene McCoy</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Economics</td>
                                          <td>11 (B), 12 (A)</td>
                                          <td>arlene.mccoy@edu.org</td>
                                          <td>209.555.0172</td>
                                          <td>16 Oct 2019</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img9.png"
                                                      alt="Annette Black Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>ICT</td>
                                          <td>8 (A), 9 (B)</td>
                                          <td>annette@school.edu</td>
                                          <td>209.555.0195</td>
                                          <td>05 May 2020</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="Guy Hawkins Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Guy Hawkins</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Accounting</td>
                                          <td>10 (A), 11 (A)</td>
                                          <td>guy.hawkins@edu.com</td>
                                          <td>209.555.0184</td>
                                          <td>11 Dec 2017</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i>
                                                              View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-error-warning-line"></i>
                                                              Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
                                                      </li>
                                                  </ul>
                                              </div>
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
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img9.png"
                                                      alt="Theresa Webb Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Theresa Webb</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Computer Science</td>
                                          <td>11 (B), 12 (A)</td>
                                          <td>theresa.webb@school.edu</td>
                                          <td>209.555.0217</td>
                                          <td>29 Mar 2019</td>
                                          <td>
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i> View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i> Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-error-warning-line"></i> Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
                                                      </li>
                                                  </ul>
                                              </div>
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
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png"
                                                      alt="Kathryn Murphy Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Environmental Science</td>
                                          <td>9 (A), 10 (B)</td>
                                          <td>kathryn.murphy@college.edu</td>
                                          <td>209.555.0259</td>
                                          <td>03 Feb 2020</td>
                                          <td>
                                              <span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
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
                                                          <Link href="/student-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-user-3-line"></i> View Student
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link href="/edit-teacher"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-edit-2-line"></i> Edit
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-error-warning-line"></i> Inactive
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i className="ri-delete-bin-6-line"></i>Delete</button>
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
        id="page-teacher-list-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
