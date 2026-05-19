/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// Flat pickr or date picker js \r\n    function getDatePicker(receiveID) {\r\n        flatpickr(receiveID, {\r\n            enableTime: true,\r\n            dateFormat: \"d/m/Y H:i\",\r\n        });\r\n    }\r\n    getDatePicker('#startDate');\r\n    getDatePicker('#endDate');\r\n\r\n    getDatePicker('#editstartDate');\r\n    getDatePicker('#editendDate');\r\n\r\n\r\n    // Sidebar js start\r\n    $('.my-sidebar-btn').on('click', function () {\r\n        $('.my-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-my-sidebar, .overlay').on('click', function () {\r\n        $('.my-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n\r\n\r\n    $('.edit-sidebar-btn').on('click', function () {\r\n        $('.edit-sidebar').addClass('active');\r\n        $('.overlay').addClass('active');\r\n    });\r\n    $('.close-edit-sidebar, .overlay').on('click', function () {\r\n        $('.edit-sidebar').removeClass('active');\r\n        $('.overlay').removeClass('active');\r\n    });\r\n    // Sidebar js end";

export default function EventPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <span className="fw-semibold mb-4 h6 text-primary-light d-block">Event </span>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Event</span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add Event
                  </button>
              </div>
      
              <div className="mt-24">
                  <div className="row gy-4">
                      <div className="col-xxl-3 col-lg-4">
                          <div className="card h-100 p-0">
                              <div className="card-body p-24">
                                  <div className="mt-8">
                                      <div
                                          className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                          <div className="">
                                              <div className="d-flex align-items-center gap-10">
                                                  <span
                                                      className="w-12-px h-12-px bg-warning-600 rounded-circle fw-medium"></span>
                                                  <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                              </div>
                                              <span className="text-primary-light fw-semibold text-md mt-4">Design
                                                  Conference</span>
                                          </div>
                                          <div className="dropdown">
                                              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <iconify-icon icon="entypo:dots-three-vertical"
                                                      className="icon text-secondary-light"></iconify-icon>
                                              </button>
                                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                                  <li>
                                                      <button type="button"
                                                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                          <iconify-icon icon="hugeicons:view"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          View
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="edit-sidebar-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                                                          <iconify-icon icon="lucide:edit"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Edit
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                          <iconify-icon icon="fluent:delete-24-regular"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Delete
                                                      </button>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div
                                          className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                          <div className="">
                                              <div className="d-flex align-items-center gap-10">
                                                  <span
                                                      className="w-12-px h-12-px bg-success-600 rounded-circle fw-medium"></span>
                                                  <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                              </div>
                                              <span className="text-primary-light fw-semibold text-md mt-4">Weekend
                                                  Festival</span>
                                          </div>
                                          <div className="dropdown">
                                              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <iconify-icon icon="entypo:dots-three-vertical"
                                                      className="icon text-secondary-light"></iconify-icon>
                                              </button>
                                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                                  <li>
                                                      <button type="button"
                                                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                          <iconify-icon icon="hugeicons:view"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          View
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="edit-sidebar-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                                                          <iconify-icon icon="lucide:edit"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Edit
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                          <iconify-icon icon="fluent:delete-24-regular"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Delete
                                                      </button>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div
                                          className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                          <div className="">
                                              <div className="d-flex align-items-center gap-10">
                                                  <span className="w-12-px h-12-px bg-info-600 rounded-circle fw-medium"></span>
                                                  <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                              </div>
                                              <span className="text-primary-light fw-semibold text-md mt-4">Design
                                                  Conference</span>
                                          </div>
                                          <div className="dropdown">
                                              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <iconify-icon icon="entypo:dots-three-vertical"
                                                      className="icon text-secondary-light"></iconify-icon>
                                              </button>
                                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                                  <li>
                                                      <button type="button"
                                                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                          <iconify-icon icon="hugeicons:view"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          View
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="edit-sidebar-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                                                          <iconify-icon icon="lucide:edit"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Edit
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                          <iconify-icon icon="fluent:delete-24-regular"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Delete
                                                      </button>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div
                                          className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                          <div className="">
                                              <div className="d-flex align-items-center gap-10">
                                                  <span
                                                      className="w-12-px h-12-px bg-warning-600 rounded-circle fw-medium"></span>
                                                  <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                              </div>
                                              <span className="text-primary-light fw-semibold text-md mt-4">Ultra Europe
                                                  2019</span>
                                          </div>
                                          <div className="dropdown">
                                              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <iconify-icon icon="entypo:dots-three-vertical"
                                                      className="icon text-secondary-light"></iconify-icon>
                                              </button>
                                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                                  <li>
                                                      <button type="button"
                                                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                          <iconify-icon icon="hugeicons:view"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          View
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="edit-sidebar-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                                                          <iconify-icon icon="lucide:edit"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Edit
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                          <iconify-icon icon="fluent:delete-24-regular"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Delete
                                                      </button>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div
                                          className="event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0">
                                          <div className="">
                                              <div className="d-flex align-items-center gap-10">
                                                  <span
                                                      className="w-12-px h-12-px bg-warning-600 rounded-circle fw-medium"></span>
                                                  <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                              </div>
                                              <span className="text-primary-light fw-semibold text-md mt-4">Design
                                                  Conference</span>
                                          </div>
                                          <div className="dropdown">
                                              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  <iconify-icon icon="entypo:dots-three-vertical"
                                                      className="icon text-secondary-light"></iconify-icon>
                                              </button>
                                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                                  <li>
                                                      <button type="button"
                                                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                          <iconify-icon icon="hugeicons:view"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          View
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="edit-sidebar-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                                                          <iconify-icon icon="lucide:edit"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Edit
                                                      </button>
                                                  </li>
                                                  <li>
                                                      <button type="button"
                                                          className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                                                          data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                          <iconify-icon icon="fluent:delete-24-regular"
                                                              className="icon text-lg line-height-1"></iconify-icon>
                                                          Delete
                                                      </button>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
      
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-9 col-lg-8">
                          <div className="card h-100 p-0">
                              <div className="card-body p-24">
                                  <div id='wrap'>
                                      <div id='calendar'></div>
                                      <div style={{clear: "both"}}></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
      
      <div
          className="my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300 active-translate-0">
          <div className="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
              <h5 className="text-lg mb-0">Add New Event</h5>
              <button type="button" className="close-my-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="p-20">
              <div className="row g-3">
                  <div className="col-12">
                      <label htmlFor="eventTitle" className="form-label fw-semibold text-primary-light text-sm mb-8">Event Title :
                      </label>
                      <input type="text" className="form-control radius-8" id="eventTitle" placeholder="Enter Event Title " />
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="startDate" className="form-label fw-semibold text-primary-light text-sm mb-8">Start Date</label>
                      <div className=" position-relative">
                          <input className="form-control radius-8 bg-base flatpickr-input" id="startDate" type="text"
                              placeholder="03/12/2024, 10:30 AM" readOnly />
                          <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1"><iconify-icon
                                  icon="solar:calendar-linear" className="icon text-lg"></iconify-icon></span>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="endDate" className="form-label fw-semibold text-primary-light text-sm mb-8">End Date </label>
                      <div className=" position-relative">
                          <input className="form-control radius-8 bg-base flatpickr-input" id="endDate" type="text"
                              placeholder="03/12/2024, 2:30 PM" readOnly />
                          <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1"><iconify-icon
                                  icon="solar:calendar-linear" className="icon text-lg"></iconify-icon></span>
                      </div>
                  </div>
                  <div className="col-12">
                      <label htmlFor="endDate" className="form-label fw-semibold text-primary-light text-sm mb-8">Label </label>
                      <div className="d-flex align-items-center flex-wrap gap-28">
                          <div className="form-check checked-success d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="Personal" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="Personal">
                                  <span className="w-8-px h-8-px bg-success-600 rounded-circle"></span>
                                  Personal
                              </label>
                          </div>
                          <div className="form-check checked-primary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="Business" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="Business">
                                  <span className="w-8-px h-8-px bg-primary-600 rounded-circle"></span>
                                  Business
                              </label>
                          </div>
                          <div className="form-check checked-warning d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="Family" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="Family">
                                  <span className="w-8-px h-8-px bg-warning-600 rounded-circle"></span>
                                  Family
                              </label>
                          </div>
                          <div className="form-check checked-secondary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="Important" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="Important">
                                  <span className="w-8-px h-8-px bg-lilac-600 rounded-circle"></span>
                                  Important
                              </label>
                          </div>
                          <div className="form-check checked-danger d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="Holiday" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="Holiday">
                                  <span className="w-8-px h-8-px bg-danger-600 rounded-circle"></span>
                                  Holiday
                              </label>
                          </div>
                      </div>
                  </div>
      
                  <div className="col-12">
                      <label htmlFor="desc" className="form-label fw-semibold text-primary-light text-sm mb-8">Description</label>
                      <textarea className="form-control" id="desc" rows={4} cols={50} placeholder="Write some text"></textarea>
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
              <h5 className="text-lg mb-0">Edit Department </h5>
              <button type="button" className="close-edit-sidebar text-danger-600 text-lg d-flex">
                  <i className="ri-close-large-line"></i>
              </button>
          </div>
          <form action="#" className="p-20">
              <div className="row g-3">
                  <div className="col-12">
                      <label htmlFor="eventTitleEdit" className="form-label fw-semibold text-primary-light text-sm mb-8">Event Title :
                      </label>
                      <input type="text" className="form-control radius-8" id="eventTitleEdit" placeholder="Enter Event Title " />
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="startDateEdit" className="form-label fw-semibold text-primary-light text-sm mb-8">Start Date</label>
                      <div className=" position-relative">
                          <input className="form-control radius-8 bg-base flatpickr-input" id="startDateEdit" type="text"
                              placeholder="03/12/2024, 10:30 AM" readOnly />
                          <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1"><iconify-icon
                                  icon="solar:calendar-linear" className="icon text-lg"></iconify-icon></span>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="endDateEdit" className="form-label fw-semibold text-primary-light text-sm mb-8">End Date </label>
                      <div className=" position-relative">
                          <input className="form-control radius-8 bg-base flatpickr-input" id="endDateEdit" type="text"
                              placeholder="03/12/2024, 2:30 PM" readOnly />
                          <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1"><iconify-icon
                                  icon="solar:calendar-linear" className="icon text-lg"></iconify-icon></span>
                      </div>
                  </div>
                  <div className="col-12">
                      <label htmlFor="endDateEdit" className="form-label fw-semibold text-primary-light text-sm mb-8">Label </label>
                      <div className="d-flex align-items-center flex-wrap gap-28">
                          <div className="form-check checked-success d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="PersonalEdit" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="PersonalEdit">
                                  <span className="w-8-px h-8-px bg-success-600 rounded-circle"></span>
                                  Personal
                              </label>
                          </div>
                          <div className="form-check checked-primary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="BusinessEdit" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="BusinessEdit">
                                  <span className="w-8-px h-8-px bg-primary-600 rounded-circle"></span>
                                  Business
                              </label>
                          </div>
                          <div className="form-check checked-warning d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="FamilyEdit" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="FamilyEdit">
                                  <span className="w-8-px h-8-px bg-warning-600 rounded-circle"></span>
                                  Family
                              </label>
                          </div>
                          <div className="form-check checked-secondary d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="ImportantEdit" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="ImportantEdit">
                                  <span className="w-8-px h-8-px bg-lilac-600 rounded-circle"></span>
                                  Important
                              </label>
                          </div>
                          <div className="form-check checked-danger d-flex align-items-center gap-2">
                              <input className="form-check-input" type="radio" name="label" id="HolidayEdit" />
                              <label
                                  className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                  htmlFor="HolidayEdit">
                                  <span className="w-8-px h-8-px bg-danger-600 rounded-circle"></span>
                                  Holiday
                              </label>
                          </div>
                      </div>
                  </div>
      
                  <div className="col-12">
                      <label htmlFor="descEdit" className="form-label fw-semibold text-primary-light text-sm mb-8">Description</label>
                      <textarea className="form-control" id="descEdit" rows={4} cols={50} placeholder="Write some text"></textarea>
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
      
      
      
      <div className="modal fade" id="exampleModalView" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog modal-dialog-centered">
              <div className="modal-content radius-16 bg-base">
                  <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                      <span className="modal-title fs-5 d-block" id="exampleModalViewLabel">View Details</span>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body p-24">
                      <div className="mb-12">
                          <span className="text-secondary-light txt-sm fw-medium">Title</span>
                          <h6 className="text-primary-light fw-semibold text-md mb-0 mt-4">Design Conference</h6>
                      </div>
                      <div className="mb-12">
                          <span className="text-secondary-light txt-sm fw-medium">Start Date</span>
                          <h6 className="text-primary-light fw-semibold text-md mb-0 mt-4">25 Jan 2024, 10:30AM</h6>
                      </div>
                      <div className="mb-12">
                          <span className="text-secondary-light txt-sm fw-medium">End Date</span>
                          <h6 className="text-primary-light fw-semibold text-md mb-0 mt-4">25 Jan 2024, 2:30AM</h6>
                      </div>
                      <div className="mb-12">
                          <span className="text-secondary-light txt-sm fw-medium">Description</span>
                          <h6 className="text-primary-light fw-semibold text-md mb-0 mt-4">N/A</h6>
                      </div>
                      <div className="mb-12">
                          <span className="text-secondary-light txt-sm fw-medium">Label</span>
                          <h6 className="text-primary-light fw-semibold text-md mb-0 mt-4 d-flex align-items-center gap-2">
                              <span className="w-8-px h-8-px bg-success-600 rounded-circle"></span>
                              Business
                          </h6>
                      </div>
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
        id="page-event-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
