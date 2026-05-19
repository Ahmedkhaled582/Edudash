/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ================================ Users Overview Donut chart Start ================================ \r\n    var options = {\r\n        series: [200, 200, 200, 200],\r\n        colors: ['#487FFF', '#9935FE', '#FF9F29', \"#45B369\"],\r\n        labels: ['Total Visitors', 'Registrations', 'Total Page Views', 'Registrations'],\r\n        legend: {\r\n            show: false\r\n        },\r\n        chart: {\r\n            type: 'donut',\r\n            height: 270,\r\n            sparkline: {\r\n                enabled: true // Remove whitespace\r\n            },\r\n            margin: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            },\r\n            padding: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            }\r\n        },\r\n        stroke: {\r\n            width: 0,\r\n        },\r\n        dataLabels: {\r\n            enabled: false\r\n        },\r\n        responsive: [{\r\n            breakpoint: 480,\r\n            options: {\r\n                chart: {\r\n                    width: 300\r\n                },\r\n                legend: {\r\n                    position: 'bottom'\r\n                }\r\n            }\r\n        }],\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(\"#userOverviewDonutChart\"), options);\r\n    chart.render();\r\n    // ================================ Users Overview Donut chart End ================================ \r\n\r\n    // ============================= Calendar Js Start =================================\r\n    let display = document.querySelector(\".display\");\r\n    let days = document.querySelector(\".days\");\r\n    let previous = document.querySelector(\".left\");\r\n    let next = document.querySelector(\".right\");\r\n\r\n    let date = new Date();\r\n\r\n    let year = date.getFullYear();\r\n    let month = date.getMonth();\r\n\r\n    function displayCalendar() {\r\n        const firstDay = new Date(year, month, 1);\r\n\r\n        const lastDay = new Date(year, month + 1, 0);\r\n\r\n        const firstDayIndex = firstDay.getDay(); //4\r\n\r\n        const numberOfDays = lastDay.getDate(); //31\r\n\r\n        let formattedDate = date.toLocaleString(\"en-US\", {\r\n            month: \"long\",\r\n            year: \"numeric\"\r\n        });\r\n\r\n        display.innerHTML = `${formattedDate}`;\r\n\r\n        for (let x = 1; x <= firstDayIndex; x++) {\r\n            const div = document.createElement(\"div\");\r\n            div.innerHTML += \"\";\r\n\r\n            days.appendChild(div);\r\n        }\r\n\r\n        for (let i = 1; i <= numberOfDays; i++) {\r\n            let div = document.createElement(\"div\");\r\n            let currentDate = new Date(year, month, i);\r\n\r\n            div.dataset.date = currentDate.toDateString();\r\n\r\n            div.innerHTML += i;\r\n            days.appendChild(div);\r\n            if (\r\n                currentDate.getFullYear() === new Date().getFullYear() &&\r\n                currentDate.getMonth() === new Date().getMonth() &&\r\n                currentDate.getDate() === new Date().getDate()\r\n            ) {\r\n                div.classList.add(\"current-date\");\r\n            }\r\n        }\r\n    }\r\n\r\n    // Call the function to display the calendar\r\n    displayCalendar();\r\n\r\n    previous.addEventListener(\"click\", () => {\r\n        days.innerHTML = \"\";\r\n\r\n        if (month < 0) {\r\n            month = 11;\r\n            year = year - 1;\r\n        }\r\n        month = month - 1;\r\n        date.setMonth(month);\r\n        displayCalendar();\r\n    });\r\n\r\n    next.addEventListener(\"click\", () => {\r\n        days.innerHTML = \"\";\r\n\r\n        if (month > 11) {\r\n            month = 0;\r\n            year = year + 1;\r\n        }\r\n\r\n        month = month + 1;\r\n        date.setMonth(month);\r\n\r\n        displayCalendar();\r\n    });\r\n    // ============================= Calendar Js End =================================\r\n\r\n\r\n    let table = new DataTable('#dataTable');\r\n\r\n    //============================= ✅ Data Table start =============================\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    //============================= ✅ Data Table end =============================";

export default function Index2Page() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <p className="text-neutral-600 mt-4 mb-0">Student → Manage courses, students, and assignments efficiently from a centralized teacher.</p>
        </div>
      </div>
      
              <div className="mt-24">
                  <div className="row gy-4">
      
                      
                      <div className="col-xxl-4">
                          <div className="card radius-12 border-0 h-100">
                              <div className="card-body p-24 d-flex gap-16 flex-sm-nowrap flex-wrap">
                                  <div
                                      className="radius-8 overflow-hidden position-relative z-1 py-32 px-20 text-center d-flex justify-content-center align-items-center flex-grow-1">
                                      <img src="/assets/images/bg/edit-profile-bg.png" alt="BG Image"
                                          className="position-absolute start-0 top-0 w-100 h-100 z-n1" />
                                      <div className="">
                                          <span className="mb-12">
                                              <img src="/assets/images/thumbs/studnt-edit-profile-img.png" alt="BG Image"
                                                  className="rounded-circle object-fit-cover" />
                                          </span>
                                          <h6 className="text-white">Devon Lane</h6>
                                          <span className="text-white text-lg d-block">Class: 7</span>
                                          <span className="text-white text-lg d-block">Roll No: 03</span>
                                          <div className="mt-12">
                                              <Link href="/edit-teacher"
                                                  className="px-20 py-8 text-white bg-white bg-opacity-10 radius-6 fw-medium text-lg">Edit
                                                  Profile</Link>
                                          </div>
                                      </div>
                                  </div>
      
                                  <div className="d-flex flex-column gap-20 flex-grow-1 justify-content-between">
                                      <div
                                          className="radius-8 py-24 px-24 text-start d-flex align-items-center gap-12 bg-purple-100">
                                          <span
                                              className="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-purple-300 bg-purple-200">
                                              <img src="/assets/images/icons/teacher-widget-icon1.png" alt="User Icon" />
                                          </span>
                                          <div className="">
                                              <span className="text-secondary-light fw-medium d-block">Events</span>
                                              <h5 className="text-primary-light">10</h5>
                                          </div>
                                      </div>
                                      <div
                                          className="radius-8 py-24 px-24 text-start d-flex align-items-center gap-12 bg-success-100">
                                          <span
                                              className="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-success-300 bg-success-200">
                                              <img src="/assets/images/icons/teacher-widget-icon2.png" alt="User Icon" />
                                          </span>
                                          <div className="">
                                              <span className="text-secondary-light fw-medium d-block">Notifications</span>
                                              <h5 className="text-primary-light">15</h5>
                                          </div>
                                      </div>
                                      <div
                                          className="radius-8 py-24 px-24 text-start d-flex align-items-center gap-12 bg-primary-100">
                                          <span
                                              className="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-primary-300 bg-primary-200">
                                              <img src="/assets/images/icons/teacher-widget-icon3.png" alt="User Icon" />
                                          </span>
                                          <div className="">
                                              <span className="text-secondary-light fw-medium d-block">Attendance</span>
                                              <h5 className="text-primary-light">90%</h5>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card radius-12 border-0 h-100">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Attendance</h6>
                                  <select className="form-select bg-base form-select-sm w-auto radius-8">
                                      <option>Yearly</option>
                                      <option>Monthly</option>
                                      <option>Weekly</option>
                                      <option>Today</option>
                                  </select>
                              </div>
                              <div className="card-body py-24">
                                  <div className=" gap-20">
                                      <div className="text-center">
                                          <div id="userOverviewDonutChart" className="apexcharts-tooltip-z-none"></div>
                                      </div>
                                      <div className="d-flex gap-12 justify-content-around mt-24">
                                          <div className="d-flex align-items-start gap-8">
                                              <span className="w-6-px h-16-px bg-success-500 rounded-pill position-relative mt-8">
                                              </span>
                                              <div className="">
                                                  <h6 className="mb-0">200</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Present</p>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-8">
                                              <span className="w-6-px h-16-px bg-info rounded-pill position-relative mt-8">
                                              </span>
                                              <div className="">
                                                  <h6 className="mb-0">300</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Half Day </p>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-8">
                                              <span
                                                  className="w-6-px h-16-px bg-purple rounded-pill position-relative mt-8"></span>
                                              <div className="">
                                                  <h6 className="mb-0">172</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Late</p>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-8">
                                              <span
                                                  className="w-6-px h-16-px bg-warning rounded-pill position-relative mt-8"></span>
                                              <div className="">
                                                  <h6 className="mb-0">500</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Absent</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card radius-12 border-0 h-100">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Today's Class</h6>
                              </div>
                              <div className="card-body pe-0 py-8">
                                  <div className="d-flex flex-column max-h-390-px overflow-y-auto scroll-sm pe-20">
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">English</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Completed</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">Physics</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:50 - 10:35 AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Inprogress</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">Bangla</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Inprogress</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">Chemistry</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Inprogress</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">Accounting</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Inprogress</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">English</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Completed</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-4 fw-medium">English</h6>
                                              <div className="d-flex align-items-center gap-8">
                                                  <span className="d-flex">
                                                      <i className="ri-graduation-cap-line"></i>
                                                  </span>
                                                  <span className="text-sm text-secondary-light fw-medium">09:300 - 09:45
                                                      AM</span>
                                              </div>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Completed</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-8">
                          <div className="card radius-12 border-0">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Exam Results</h6>
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
                                                  className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
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
                              <div className="card-body p-0">
                                  <div className="table-responsive scroll-sm">
                                      <table className="table bordered-table mb-0 data-table" id="dataTable"
                                          data-page-length='10'>
                                          <thead>
                                              <tr>
                                                  <th scope="col">ID</th>
                                                  <th scope="col">Exam Name</th>
                                                  <th scope="col">Subject</th>
                                                  <th scope="col">Grade</th>
                                                  <th scope="col">Marks%</th>
                                                  <th scope="col">CGPA</th>
                                                  <th scope="col">Status</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">Class Test</td>
                                                  <td className="py-10-px">English</td>
                                                  <td className="py-10-px">A</td>
                                                  <td className="py-10-px">95%</td>
                                                  <td className="py-10-px">4.2</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">First Semester</td>
                                                  <td className="py-10-px">Chemistry </td>
                                                  <td className="py-10-px">A</td>
                                                  <td className="py-10-px">80%</td>
                                                  <td className="py-10-px">3.2</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">Class Test</td>
                                                  <td className="py-10-px">Bangla</td>
                                                  <td className="py-10-px">B</td>
                                                  <td className="py-10-px">70%</td>
                                                  <td className="py-10-px">4.5</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">Class Test</td>
                                                  <td className="py-10-px">Accounting</td>
                                                  <td className="py-10-px">C</td>
                                                  <td className="py-10-px">60%</td>
                                                  <td className="py-10-px">3.9</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">First Semester</td>
                                                  <td className="py-10-px">Chemistry </td>
                                                  <td className="py-10-px">A</td>
                                                  <td className="py-10-px">80%</td>
                                                  <td className="py-10-px">3.2</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="py-10-px"><span className="text-primary-600">AD52365</span></td>
                                                  <td className="py-10-px">Class Test</td>
                                                  <td className="py-10-px">English </td>
                                                  <td className="py-10-px">F</td>
                                                  <td className="py-10-px">30%</td>
                                                  <td className="py-10-px">2.5</td>
                                                  <td className="py-10-px">
                                                      <span
                                                          className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Fail</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card h-100">
                              <div className="card-body p-0">
                                  <div
                                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                      <h6 className="text-lg mb-0">Calendar</h6>
                                  </div>
                                  <div className="p-20">
                                      <div className="calendar style-big">
                                          <div className="calendar__header">
                                              <button type="button" className="calendar__arrow left">
                                                  <i className="ri-arrow-left-s-line"></i>
                                              </button>
                                              <p className="display text-md text-secondary-light fw-semibold mb-0">""</p>
                                              <button type="button" className="calendar__arrow right">
                                                  <i className="ri-arrow-right-s-line"></i>
                                              </button>
                                          </div>
      
                                          <div className="calendar__week week">
                                              <div className="calendar__week-text">Su</div>
                                              <div className="calendar__week-text">Mo</div>
                                              <div className="calendar__week-text">Tu</div>
                                              <div className="calendar__week-text">We</div>
                                              <div className="calendar__week-text">Th</div>
                                              <div className="calendar__week-text">Fr</div>
                                              <div className="calendar__week-text">Sa</div>
                                          </div>
                                          <div className="days"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card radius-12 border-0 h-100">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Leave Status</h6>
                                  <select className="form-select bg-base form-select-sm w-auto radius-8">
                                      <option>Yearly</option>
                                      <option>Monthly</option>
                                      <option>Weekly</option>
                                      <option>Today</option>
                                  </select>
                              </div>
                              <div className="card-body pe-0">
                                  <div className="d-flex flex-column max-h-494-px overflow-y-auto scroll-sm pe-20">
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Emergency Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Medical Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Now Well</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Medical Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Emergency Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Now Well</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Medical Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Emergency Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Emergency Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Medical Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Now Well</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Medical Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Emergency Leave</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                          </div>
                                      </div>
                                      <div
                                          className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                          <div className="flex-grow-1">
                                              <h6 className="text-lg mb-0 fw-medium">Now Well</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Date: 10/10/24</span>
                                          </div>
                                          <div className="">
                                              <span
                                                  className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card h-100">
                              <div className="card-body p-0">
                                  <div
                                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                      <h6 className="text-lg mb-0">Notice Board</h6>
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
                                                      className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                                      data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
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
                                  <div className="ps-20 pt-20 pb-20">
                                      <div className="pe-20 d-flex flex-column gap-28 overflow-y-auto max-h-490-px scroll-sm">
                                          <div className="d-flex align-items-start gap-16">
                                              <img src="/assets/images/thumbs/notice-board-img1.png" alt="Thumbnail"
                                                  className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                              <div className="">
                                                  <h6 className="mb-4 text-lg">Admin</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy
                                                      text of the
                                                      printing and typesetti</p>
                                                  <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-16">
                                              <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                                  className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                              <div className="">
                                                  <h6 className="mb-4 text-lg">Kathryn Murphy</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy
                                                      text of the
                                                      printing and typesett ing industry Lorem Ipsum is simply dummy text of
                                                      the printing and
                                                      typesetting industry.</p>
                                                  <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-16">
                                              <img src="/assets/images/thumbs/notice-board-img3.png" alt="Thumbnail"
                                                  className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                              <div className="">
                                                  <h6 className="mb-4 text-lg">Admin</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy
                                                      text of the
                                                      printing and typesetti</p>
                                                  <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-16">
                                              <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                                  className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                              <div className="">
                                                  <h6 className="mb-4 text-lg">John Doe</h6>
                                                  <p className="text-secondary-light text-sm mb-0">Lorem ipsum dolor sit amet
                                                      consectetur
                                                      adipisicing elit. Laborum voluptas corporis qui dolore est odit officia
                                                      fuga?</p>
                                                  <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card h-100">
                              <div className="card-body p-0">
                                  <div
                                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                      <h6 className="text-lg mb-0">Upcoming Events</h6>
                                  </div>
                                  <div className="ps-20 pt-20 pb-20">
                                      <div className="pe-20 d-flex flex-column gap-28 overflow-y-auto max-h-490-px scroll-sm">
                                          <div className="d-flex align-items-center justify-content-between gap-16">
                                              <div className="ps-10 border-start-width-3-px border-purple-600">
                                                  <div className="d-flex align-items-end gap-6">
                                                      <h6 className="text-lg fw-normal mb-0">09:00 - 09:45</h6>
                                                      <span className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                  </div>
                                                  <p className="text-secondary-light mt-4 mb-2 text-sm">Marketing Strategy Kickoff
                                                  </p>
                                                  <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                          href="javascript:void(0)"
                                                          className="text-primary-600 hover-underline">Robert Fox</Link></p>
                                              </div>
                                              <div>
                                                  <Link href="javascript:void(0)"
                                                      className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-center justify-content-between gap-16">
                                              <div className="ps-10 border-start-width-3-px border-warning-600">
                                                  <div className="d-flex align-items-end gap-6">
                                                      <h6 className="text-lg fw-normal mb-0">11:15 - 12:00</h6>
                                                      <span className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                  </div>
                                                  <p className="text-secondary-light mt-4 mb-2 text-sm">Product Design Brainstorm
                                                  </p>
                                                  <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                          href="javascript:void(0)"
                                                          className="text-primary-600 hover-underline">Leslie Alexander</Link></p>
                                              </div>
                                              <div>
                                                  <Link href="javascript:void(0)"
                                                      className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-center justify-content-between gap-16">
                                              <div className="ps-10 border-start-width-3-px border-blue-600">
                                                  <div className="d-flex align-items-end gap-6">
                                                      <h6 className="text-lg fw-normal mb-0">02:00 - 03:00</h6>
                                                      <span className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                  </div>
                                                  <p className="text-secondary-light mt-4 mb-2 text-sm">Client Feedback Review</p>
                                                  <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                          href="javascript:void(0)"
                                                          className="text-primary-600 hover-underline">Courtney Henry</Link></p>
                                              </div>
                                              <div>
                                                  <Link href="javascript:void(0)"
                                                      className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-center justify-content-between gap-16">
                                              <div className="ps-10 border-start-width-3-px border-success-600">
                                                  <div className="d-flex align-items-end gap-6">
                                                      <h6 className="text-lg fw-normal mb-0">04:15 - 05:00</h6>
                                                      <span className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                  </div>
                                                  <p className="text-secondary-light mt-4 mb-2 text-sm">Sprint Planning &amp; Task
                                                      Allocation</p>
                                                  <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                          href="javascript:void(0)"
                                                          className="text-primary-600 hover-underline">Eleanor Pena</Link></p>
                                              </div>
                                              <div>
                                                  <Link href="javascript:void(0)"
                                                      className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-center justify-content-between gap-16">
                                              <div className="ps-10 border-start-width-3-px border-primary-600">
                                                  <div className="d-flex align-items-end gap-6">
                                                      <h6 className="text-lg fw-normal mb-0">01:15 - 02:00</h6>
                                                      <span className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                  </div>
                                                  <p className="text-secondary-light mt-4 mb-2 text-sm">Client Feedback Review</p>
                                                  <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                          href="javascript:void(0)"
                                                          className="text-primary-600 hover-underline">John</Link></p>
                                              </div>
                                              <div>
                                                  <Link href="javascript:void(0)"
                                                      className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                  </div>
              </div>

      <Script
        id="page-index-2-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
