/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function IssueReturnPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Issue Return </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Issue Return </span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add Issue Return
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
                                          <th scope="col">Card No</th>
                                          <th scope="col">Issue To</th>
                                          <th scope="col">Class</th>
                                          <th scope="col">Book Name</th>
                                          <th scope="col">Number</th>
                                          <th scope="col">Issue Date</th>
                                          <th scope="col">Return Date</th>
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
                                          <td>12563</td>
                                          <td>Jon Dev</td>
                                          <td>Class 1 (A)</td>
                                          <td>The Little Prince</td>
                                          <td>101</td>
                                          <td>01 Jun 2015</td>
                                          <td>01 Feb 2015</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>12874</td>
                                          <td>Sarah Khan</td>
                                          <td>Class 2 (B)</td>
                                          <td>To Kill a Mockingbird</td>
                                          <td>102</td>
                                          <td>10 Jul 2016</td>
                                          <td>25 Jul 2016</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>13345</td>
                                          <td>Michael Lee</td>
                                          <td>Class 3 (C)</td>
                                          <td>1984</td>
                                          <td>103</td>
                                          <td>12 Mar 2017</td>
                                          <td>02 Apr 2017</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>14122</td>
                                          <td>Emma Watson</td>
                                          <td>Class 4 (A)</td>
                                          <td>Pride and Prejudice</td>
                                          <td>104</td>
                                          <td>05 Aug 2018</td>
                                          <td>28 Aug 2018</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>14567</td>
                                          <td>David Miller</td>
                                          <td>Class 5 (C)</td>
                                          <td>The Great Gatsby</td>
                                          <td>105</td>
                                          <td>11 Nov 2018</td>
                                          <td>05 Dec 2018</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>15231</td>
                                          <td>Olivia Brown</td>
                                          <td>Class 6 (B)</td>
                                          <td>The Hobbit</td>
                                          <td>106</td>
                                          <td>22 May 2019</td>
                                          <td>10 Jun 2019</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>15890</td>
                                          <td>Lucas Smith</td>
                                          <td>Class 7 (A)</td>
                                          <td>Jane Eyre</td>
                                          <td>107</td>
                                          <td>03 Apr 2020</td>
                                          <td>20 Apr 2020</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>16324</td>
                                          <td>Ella Johnson</td>
                                          <td>Class 8 (B)</td>
                                          <td>The Alchemist</td>
                                          <td>108</td>
                                          <td>09 Oct 2021</td>
                                          <td>28 Oct 2021</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>17215</td>
                                          <td>Noah Wilson</td>
                                          <td>Class 9 (C)</td>
                                          <td>Brave New World</td>
                                          <td>109</td>
                                          <td>05 Jan 2022</td>
                                          <td>28 Jan 2022</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
                                          <td>18009</td>
                                          <td>Sophia Davis</td>
                                          <td>Class 10 (A)</td>
                                          <td>Harry Potter and the Sorcerer’s Stone</td>
                                          <td>110</td>
                                          <td>15 Mar 2023</td>
                                          <td>10 Apr 2023</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalReturn">
                                                              <i className="ri-arrow-go-back-line"></i>Book Return
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
              <h5 className="text-lg mb-0">Add Book Issue </h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="libraryCardNo"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Library Card No
                          </label>
                          <input type="text" className="form-control" id="libraryCardNo" placeholder="Enter Library Card No" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="memberClass" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class
                          </label>
                          <input type="text" className="form-control" id="memberClass" placeholder="Enter Class" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="memberSection"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Section
                          </label>
                          <input type="text" className="form-control" id="memberSection" placeholder="Enter Section" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="memberStudent"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Student
                          </label>
                          <select id="memberStudent" className="form-control form-select">
                              <option value="Select a Student" selected disabled>Select Student</option>
                              <option value="Regular">Regular</option>
                              <option value="Irregular">Irregular</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="selectSubject" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Select
                              Subject
                          </label>
                          <select id="selectSubject" className="form-control form-select">
                              <option value="Select a Student" selected disabled>Select a Subject</option>
                              <option value="Regular">Regular</option>
                              <option value="Irregular">Irregular</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="selectBook" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Book
                          </label>
                          <select id="selectBook" className="form-control form-select">
                              <option value="Select a Student" selected disabled>Select a book</option>
                              <option value="English">English</option>
                              <option value="Mathematics">Mathematics</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="issueDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Issue Date
                          </label>
                          <input type="date" className="form-control" id="issueDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="returnDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Return
                              Date
                          </label>
                          <input type="date" className="form-control" id="returnDate" />
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
      
      
      
      <div
          className="edit-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Edit Fees Type</h5>
              <button type="button" className="close-edit-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="bookNameEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Book
                              Name
                          </label>
                          <input type="text" className="form-control" id="bookNameEdit" placeholder="Enter Book Name" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="publisherEdit"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Publisher
                          </label>
                          <input type="text" className="form-control" id="publisherEdit" placeholder="Enter Publisher" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="authorEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Author
                          </label>
                          <input type="text" className="form-control" id="authorEdit" placeholder="Enter Author" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="numberEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Number
                          </label>
                          <input type="number" className="form-control" id="numberEdit" placeholder="Enter Number" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="subjectEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                          </label>
                          <input type="text" className="form-control" id="subjectEdit" placeholder="Enter Subject" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="rackNoEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Rack No
                          </label>
                          <input type="text" className="form-control" id="rackNoEdit" placeholder="Enter Rack No" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="enterQtyEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Qty
                          </label>
                          <input type="text" className="form-control" id="enterQtyEdit" placeholder="Enter Qty" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="availableEdit"
                              className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Available
                          </label>
                          <input type="text" className="form-control" id="availableEdit" placeholder="Enter Available" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="priceEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Price
                          </label>
                          <input type="text" className="form-control" id="priceEdit" placeholder="Enter Price" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="postDateEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Post
                              Date
                          </label>
                          <input type="date" className="form-control" id="postDateEdit" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="statusEdit" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                          </label>
                          <select id="statusEdit" className="form-control form-select">
                              <option value="Select a Status" selected disabled>Select Status</option>
                              <option value="Active">Active</option>
                              <option value="Inactive">Inactive</option>
                          </select>
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
                              Update
                          </button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
      
      
      
      <div className="modal fade" id="exampleModalReturn" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-340-px">
              <div className="modal-content radius-16 bg-base">
                  <div className="modal-body pt-32 px-36 pb-24 text-center">
                      <span className="mb-16 fs-1 line-height-1 text-primary-600">
                          <i className="ri-book-open-line"></i>
                      </span>
                      <h6 className="text-lg fw-semibold text-primary-light mb-0">Are your sure you want to Return this book!
                      </h6>
                      <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                          <button type="reset"
                              className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8">
                              No
                          </button>
                          <button type="button"
                              className="flex-grow-1 btn btn-primary-600 border border-primary-600 text-md px-16 py-12 radius-8">
                              Yes Return
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <Script
        id="page-issue-return-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
