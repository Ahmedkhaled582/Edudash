/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function BooksListPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Books List </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Books List </span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add Book
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
                                          <th scope="col">Subject</th>
                                          <th scope="col">Book Name</th>
                                          <th scope="col">Publisher</th>
                                          <th scope="col">Author</th>
                                          <th scope="col">Number</th>
                                          <th scope="col">Rack No</th>
                                          <th scope="col">Qty</th>
                                          <th scope="col">Available</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Exam Date</th>
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
                                          <td>Art</td>
                                          <td>The Little Prince</td>
                                          <td>Devon Lane</td>
                                          <td>Darrell Steward</td>
                                          <td>101</td>
                                          <td>1234</td>
                                          <td>60</td>
                                          <td>20</td>
                                          <td>$250</td>
                                          <td>05 Jun 2015</td>
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
                                                              <i className="ri-edit-2-line"></i>
                                                              Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete">
                                                              <i className="ri-delete-bin-6-line"></i>
                                                              Delete
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
                                          <td>Mathematics</td>
                                          <td>Advanced Algebra</td>
                                          <td>Penguin Books</td>
                                          <td>Jane Cooper</td>
                                          <td>102</td>
                                          <td>5678</td>
                                          <td>40</td>
                                          <td>18</td>
                                          <td>$300</td>
                                          <td>10 Jul 2016</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td>Science</td>
                                          <td>Physics for Beginners</td>
                                          <td>HarperCollins</td>
                                          <td>Guy Hawkins</td>
                                          <td>103</td>
                                          <td>8790</td>
                                          <td>55</td>
                                          <td>30</td>
                                          <td>$280</td>
                                          <td>15 Mar 2017</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
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
                                          <td>History</td>
                                          <td>World Wars</td>
                                          <td>Oxford Press</td>
                                          <td>Leslie Alexander</td>
                                          <td>104</td>
                                          <td>3210</td>
                                          <td>35</td>
                                          <td>12</td>
                                          <td>$200</td>
                                          <td>21 Sep 2018</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
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
                                          <td>Geography</td>
                                          <td>Earth & Beyond</td>
                                          <td>Macmillan</td>
                                          <td>Robert Fox</td>
                                          <td>105</td>
                                          <td>4311</td>
                                          <td>45</td>
                                          <td>10</td>
                                          <td>$310</td>
                                          <td>08 Jan 2019</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
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
                                          <td>Biology</td>
                                          <td>Human Anatomy</td>
                                          <td>Cambridge House</td>
                                          <td>Annette Black</td>
                                          <td>106</td>
                                          <td>2915</td>
                                          <td>70</td>
                                          <td>35</td>
                                          <td>$400</td>
                                          <td>11 Dec 2020</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td>Economics</td>
                                          <td>Money & Markets</td>
                                          <td>Random House</td>
                                          <td>Esther Howard</td>
                                          <td>107</td>
                                          <td>3425</td>
                                          <td>50</td>
                                          <td>28</td>
                                          <td>$270</td>
                                          <td>19 Mar 2021</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td>Computer Science</td>
                                          <td>JavaScript Essentials</td>
                                          <td>TechWorld</td>
                                          <td>Kathryn Murphy</td>
                                          <td>108</td>
                                          <td>5320</td>
                                          <td>80</td>
                                          <td>60</td>
                                          <td>$500</td>
                                          <td>05 Apr 2022</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td>English</td>
                                          <td>Shakespeare's Works</td>
                                          <td>Vintage Books</td>
                                          <td>Courtney Henry</td>
                                          <td>109</td>
                                          <td>1567</td>
                                          <td>65</td>
                                          <td>45</td>
                                          <td>$350</td>
                                          <td>12 May 2023</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
                                                                  className="ri-delete-bin-6-line"></i>Delete</button></li>
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
                                          <td>Chemistry</td>
                                          <td>Organic Compounds</td>
                                          <td>Scholastic</td>
                                          <td>Wade Warren</td>
                                          <td>110</td>
                                          <td>4879</td>
                                          <td>75</td>
                                          <td>55</td>
                                          <td>$420</td>
                                          <td>10 Feb 2024</td>
                                          <td>
                                              <div className="btn-group">
                                                  <button type="button" className="text-primary-light text-xl"
                                                      data-bs-toggle="dropdown" data-bs-display="static"
                                                      aria-expanded="false">
                                                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                                  </button>
                                                  <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
                                                      <li><button type="button"
                                                              className="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"><i
                                                                  className="ri-edit-2-line"></i>Edit</button></li>
                                                      <li><button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button" data-bs-toggle="modal"
                                                              data-bs-target="#exampleModalDelete"><i
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
      
      <div
          className="my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Add Book </h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column p-20">
              <div className="row g-3">
                  <div className="col-sm-12">
                      <div className="">
                          <label htmlFor="bookName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Book Name
                          </label>
                          <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="publisher" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Publisher
                          </label>
                          <input type="text" className="form-control" id="publisher" placeholder="Enter Publisher" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="author" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Author
                          </label>
                          <input type="text" className="form-control" id="author" placeholder="Enter Author" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="number" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Number
                          </label>
                          <input type="number" className="form-control" id="number" placeholder="Enter Number" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="subject" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Subject
                          </label>
                          <input type="text" className="form-control" id="subject" placeholder="Enter Subject" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="rackNo" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Rack No
                          </label>
                          <input type="text" className="form-control" id="rackNo" placeholder="Enter Rack No" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="enterQty" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Qty
                          </label>
                          <input type="text" className="form-control" id="enterQty" placeholder="Enter Qty" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="available" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Available
                          </label>
                          <input type="text" className="form-control" id="available" placeholder="Enter Available" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="price" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Price
                          </label>
                          <input type="text" className="form-control" id="price" placeholder="Enter Price" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="postDate" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Post Date
                          </label>
                          <input type="date" className="form-control" id="postDate" />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="">
                          <label htmlFor="status" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status
                          </label>
                          <select id="status" className="form-control form-select">
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
                              className="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8" data-bs-dismiss="modal">
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
        id="page-books-list-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
