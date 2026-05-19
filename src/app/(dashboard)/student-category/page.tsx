/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let table = new DataTable('#dataTable');\r\n\r\n    // ✅ Data Table start\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    // ✅ Data Table end\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function StudentCategoryPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h6 className="fw-semibold mb-4">Student Categories</h6>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
      
                          <span className="text-secondary-light">/ Student Categories</span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6 ">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      New Category
                  </button>
              </div>
      
              <div className="mt-24">
                  <div className="card h-100">
                      <div className="card-body dataTable-wrapper p-0">
      
                          <div
                              className="d-flex flex-wrap align-items-center gap-16 px-20 py-12 border-bottom border-neutral-200">
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
      
                          <div className="p-0">
                              <table className="table data-table bordered-table mb-0" id="dataTable" data-page-length='10'>
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
                                          <th scope="col">Category Name</th>
                                          <th scope="col">Status</th>
                                          <th scope="col" className="text-center">Action</th>
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
                                          <td><span className="">General</span></td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Special</span></td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Physically Challenged</span></td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">General</span></td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Special</span></td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Physically Challenged</span></td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">General</span></td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Special</span></td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">Physically Challenged</span></td>
                                          <td><span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Active</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
                                          <td><span className="">General</span></td>
                                          <td><span
                                                  className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Inactive</span>
                                          </td>
                                          <td className="text-center">
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
                                                              type="button">
                                                              <i className="ri-edit-2-line"></i>Edit
                                                          </button>
                                                      </li>
                                                      <li>
                                                          <button
                                                              className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                              type="button">
                                                              <i className="ri-delete-bin-6-line"></i>Delete
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
              <h5 className="text-lg mb-0">Add New Student Category</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="d-flex flex-column gap-20 p-20">
              <div className="">
                  <label htmlFor="studentCategoryName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Student
                      Category Name </label>
                  <input type="text" className="form-control" id="studentCategoryName" placeholder="Enter Student Category Name" />
              </div>
              <div className="">
                  <label htmlFor="studentStatus" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status</label>
                  <select id="studentStatus" className="form-control form-select">
                      <option value="Select a class" disabled>Select a Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                  </select>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
                  <button type="reset"
                      className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                      Cancel
                  </button>
                  <button type="submit" className="btn btn-primary-600 text-md px-48 py-12 radius-8">
                      Save
                  </button>
              </div>
          </form>
      </div>
      
      <Script
        id="page-student-category-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
