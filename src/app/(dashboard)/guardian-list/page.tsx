/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end";

export default function GuardianListPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Guardian List</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="#" className="text-secondary-light hover-text-primary hover-underline d-none"> /
              guardian</Link>
            <span className="text-secondary-light">/ Guardian List</span>
          </div>
        </div>
        <Link href="/add-new-guardian" className="btn btn-primary-600 d-flex align-items-center gap-6 ">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Guardian
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
                                          <th scope="col">Child</th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Phone Number</th>
                                          <th scope="col">Join Date</th>
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
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Marvin McKinney</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img1.png"
                                                      alt="Darlene Robertson Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Darlene Robertson</h6>
                                                      <span className="text-secondary-light text-sm">Class: 1 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>chinthaka@hotmail.com</td>
                                          <td>209.555.0104</td>
                                          <td>05 May 2012</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td><span className="text-primary-600">AD65412</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="Esther Howard Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Esther Howard
                                                      </h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img2.png" alt="Jane Cooper Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Jane Cooper</h6>
                                                      <span className="text-secondary-light text-sm">Class: 2 (B)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>esther@example.com</td>
                                          <td>305.442.0899</td>
                                          <td>10 Feb 2014</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center"><input
                                                      className="form-check-input" type="checkbox" /><label
                                                      className="form-check-label">03</label></div>
                                          </td>
                                          <td><span className="text-primary-600">AD76548</span></td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/teacher-avatar-img3.png" alt="Cody Fisher"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Cody Fisher</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/avatar-img3.png" alt="Robert Fox"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Robert Fox</h6>
                                                      <span className="text-secondary-light text-sm">Class: 3 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>codyf@example.com</td>
                                          <td>312.900.0981</td>
                                          <td>08 Mar 2016</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" aria-expanded="false"><iconify-icon
                                                          icon="tabler:dots-vertical"></iconify-icon></button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center"><input
                                                      className="form-check-input" type="checkbox" /><label
                                                      className="form-check-label">04</label></div>
                                          </td>
                                          <td><span className="text-primary-600">AD33221</span></td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/teacher-avatar-img4.png" alt="Jenny Wilson"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Jenny Wilson
                                                      </h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/avatar-img4.png" alt="Albert Flores"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Albert Flores
                                                      </h6><span className="text-secondary-light text-sm">Class: 4 (B)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>jenny@example.com</td>
                                          <td>404.788.1120</td>
                                          <td>15 Aug 2017</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" aria-expanded="false"><iconify-icon
                                                          icon="tabler:dots-vertical"></iconify-icon></button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center"><input
                                                      className="form-check-input" type="checkbox" /><label
                                                      className="form-check-label">05</label></div>
                                          </td>
                                          <td><span className="text-primary-600">AD77231</span></td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/teacher-avatar-img5.png" alt="Theresa Webb"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Theresa Webb
                                                      </h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center"><img
                                                      src="/assets/images/thumbs/avatar-img5.png" alt="Leslie Alexander"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium text-secondary-light">Leslie Alexander
                                                      </h6><span className="text-secondary-light text-sm">Class: 5 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>theresa.webb@example.com</td>
                                          <td>213.987.7770</td>
                                          <td>22 Sep 2018</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" aria-expanded="false"><iconify-icon
                                                          icon="tabler:dots-vertical"></iconify-icon></button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 06 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52366</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img2.png"
                                                      alt="John Smith Image" className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">John
                                                          Smith</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img2.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Kathryn Murphy</h6>
                                                      <span className="text-secondary-light text-sm">Class: 2 (B)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>kathryn.murphy@example.com</td>
                                          <td>208.555.1122</td>
                                          <td>12 Jan 2013</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 07 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52367</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img3.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Theresa Webb</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img3.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">Guy
                                                          Hawkins</h6>
                                                      <span className="text-secondary-light text-sm">Class: 3 (C)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>guy.hawkins@example.com</td>
                                          <td>203.555.2145</td>
                                          <td>27 Mar 2014</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 08 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52368</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img4.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Courtney Henry</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img4.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Eleanor Pena</h6>
                                                      <span className="text-secondary-light text-sm">Class: 4 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>eleanor.pena@example.com</td>
                                          <td>210.555.1098</td>
                                          <td>08 Sep 2014</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 09 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52369</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img5.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Albert Flores</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img5.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Jenny Wilson</h6>
                                                      <span className="text-secondary-light text-sm">Class: 5 (B)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>jenny.wilson@example.com</td>
                                          <td>212.555.3223</td>
                                          <td>11 Nov 2015</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 10 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52370</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img6.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Jerome Bell</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img6.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Esther Howard</h6>
                                                      <span className="text-secondary-light text-sm">Class: 6 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>esther.howard@example.com</td>
                                          <td>210.555.7766</td>
                                          <td>22 Feb 2016</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 11 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52371</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img7.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Devon Lane</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img7.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Robert Fox</h6>
                                                      <span className="text-secondary-light text-sm">Class: 7 (C)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>robert.fox@example.com</td>
                                          <td>202.555.8974</td>
                                          <td>10 Jul 2017</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="form-check style-check d-flex align-items-center">
                                                  <input className="form-check-input" type="checkbox" />
                                                  <label className="form-check-label"> 12 </label>
                                              </div>
                                          </td>
                                          <td><span className="text-primary-600">AD52372</span></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/teacher-avatar-img8.png" alt="Teacher Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Floyd Miles</h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/thumbs/avatar-img8.png" alt="Student Image"
                                                      className="flex-shrink-0 me-12 radius-8" />
                                                  <div>
                                                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-secondary-light">
                                                          Leslie Alexander</h6>
                                                      <span className="text-secondary-light text-sm">Class: 8 (A)</span>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>leslie.alexander@example.com</td>
                                          <td>205.555.6742</td>
                                          <td>21 Oct 2018</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><Link href="/guardian-list"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-user-3-line"></i>View Guardian</Link></li>
                                                      <li><Link href="/edit-guardian"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</Link></li>
                                                      <li><Link href="/login"
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-login-box-line"></i>Login</Link></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
        id="page-guardian-list-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
