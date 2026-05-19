/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end";

export default function ExamResultPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Exam Result </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Exam Result </span>
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
                                          <th scope="col">Exam</th>
                                          <th scope="col">Grand Total </th>
                                          <th scope="col">Percent (%) </th>
                                          <th scope="col">Grade </th>
                                          <th scope="col">Result </th>
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
                                          <td>Monthly Test</td>
                                          <td>644</td>
                                          <td>92</td>
                                          <td>A+</td>
                                          <td>
                                              <span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i>
                                                              View
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
                                          <td>Monthly Test</td>
                                          <td>644</td>
                                          <td>92</td>
                                          <td>A+</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>14</td>
                                          <td>Class 2 (B)</td>
                                          <td>Final Exam</td>
                                          <td>578</td>
                                          <td>82</td>
                                          <td>A</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>16</td>
                                          <td>Class 3 (C)</td>
                                          <td>Mid Term</td>
                                          <td>430</td>
                                          <td>70</td>
                                          <td>B+</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>19</td>
                                          <td>Class 4 (A)</td>
                                          <td>Quarterly Test</td>
                                          <td>380</td>
                                          <td>64</td>
                                          <td>B</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-16 py-2 radius-4 fw-medium text-sm">Fail</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>10</td>
                                          <td>Class 5 (B)</td>
                                          <td>Final Exam</td>
                                          <td>698</td>
                                          <td>96</td>
                                          <td>A+</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>07</td>
                                          <td>Class 6 (A)</td>
                                          <td>Half Yearly</td>
                                          <td>612</td>
                                          <td>89</td>
                                          <td>A</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>18</td>
                                          <td>Class 7 (C)</td>
                                          <td>Monthly Test</td>
                                          <td>325</td>
                                          <td>58</td>
                                          <td>C</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-16 py-2 radius-4 fw-medium text-sm">Fail</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>22</td>
                                          <td>Class 8 (A)</td>
                                          <td>Final Exam</td>
                                          <td>510</td>
                                          <td>75</td>
                                          <td>B+</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>09</td>
                                          <td>Class 9 (B)</td>
                                          <td>Mid Term</td>
                                          <td>285</td>
                                          <td>46</td>
                                          <td>D</td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-16 py-2 radius-4 fw-medium text-sm">Fail</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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
                                          <td>11</td>
                                          <td>Class 10 (C)</td>
                                          <td>Final Exam</td>
                                          <td>715</td>
                                          <td>98</td>
                                          <td>A+</td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-16 py-2 radius-4 fw-medium text-sm">Pass</span>
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
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                              <i className="ri-eye-line"></i> View
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

      <Script
        id="page-exam-result-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
