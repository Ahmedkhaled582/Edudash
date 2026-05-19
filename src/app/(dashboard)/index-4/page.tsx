/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ===================== Average Enrollment Rate Start =============================== \r\n    function createChartTwo(chartId, color1, color2) {\r\n        var options = {\r\n            series: [{\r\n                name: 'Free Course',\r\n                data: [48, 35, 55, 32, 48, 30, 55, 50, 57]\r\n            }, {\r\n                name: 'Paid Course',\r\n                data: [12, 20, 15, 26, 22, 60, 40, 48, 25]\r\n            }],\r\n            legend: {\r\n                show: false\r\n            },\r\n            chart: {\r\n                type: 'area',\r\n                width: '100%',\r\n                height: 210,\r\n                toolbar: {\r\n                    show: false\r\n                },\r\n                padding: {\r\n                    left: 0,\r\n                    right: 0,\r\n                    top: 0,\r\n                    bottom: 0\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            stroke: {\r\n                curve: 'smooth',\r\n                width: 3,\r\n                colors: [color1, color2], // Use two colors for the lines\r\n                lineCap: 'round'\r\n            },\r\n            grid: {\r\n                show: true,\r\n                borderColor: '#D1D5DB',\r\n                strokeDashArray: 1,\r\n                position: 'back',\r\n                xaxis: {\r\n                    lines: {\r\n                        show: false\r\n                    }\r\n                },\r\n                yaxis: {\r\n                    lines: {\r\n                        show: true\r\n                    }\r\n                },\r\n                row: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                column: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                padding: {\r\n                    top: -20,\r\n                    right: 0,\r\n                    bottom: -10,\r\n                    left: 0\r\n                },\r\n            },\r\n            colors: [color1, color2],\r\n            markers: {\r\n                colors: [color1, color2], // Use two colors for the markers\r\n                strokeWidth: 3,\r\n                size: 0,\r\n                hover: {\r\n                    size: 10\r\n                }\r\n            },\r\n            xaxis: {\r\n                labels: {\r\n                    show: false\r\n                },\r\n                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n                tooltip: {\r\n                    enabled: false\r\n                },\r\n                labels: {\r\n                    formatter: function (value) {\r\n                        return value;\r\n                    },\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                }\r\n            },\r\n            yaxis: {\r\n                labels: {\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                },\r\n            },\r\n            tooltip: {\r\n                x: {\r\n                    format: 'dd/MM/yy HH:mm'\r\n                }\r\n            }\r\n        };\r\n\r\n        var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n        chart.render();\r\n    }\r\n\r\n    createChartTwo('courseActivityChart', '#487FFF', '#FF9F29');\r\n    // ===================== Average Enrollment Rate End =============================== \r\n\r\n    //============================= ✅ Data Table start =============================\r\n    let table = new DataTable('#dataTable');\r\n    $('.data-table').each(function () {\r\n        const $table = $(this);\r\n        const tableInstance = new DataTable(this);\r\n\r\n        // Handle search input (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {\r\n            tableInstance.search(this.value).draw();\r\n        });\r\n\r\n        // Handle page length change (inside same wrapper)\r\n        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {\r\n            const value = $(this).val();\r\n            tableInstance.page.len(value).draw();\r\n        });\r\n    });\r\n    //============================= ✅ Data Table end =============================";

export default function Index4Page() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <p className="text-neutral-600 mt-4 mb-0">Parent → Track student progress, attendance, and academic performance in one place.</p>
        </div>
      </div>
      
              <div className="mt-24">
                  <div className="row gy-4">
                      <div className="col-xxl-3 col-sm-6">
                          <div className="card p-3 shadow-2 radius-8 h-100 border-0 gradient-bg-end-12">
                              <div className="card-body p-0">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
      
                                      <div className="d-flex align-items-center gap-3">
                                          <span
                                              className="mb-0 w-48-px h-48-px bg-warning-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                              <img src="/assets/images/icons/parent-widget-icon1.png" alt="Wallet Icon" />
                                          </span>
                                          <div>
                                              <span className="fw-medium text-primary-light text-md">Due Fees</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-16">
                                      <h6 className="fw-semibold mb-0">$500</h6>
                                      <p className="text-sm mb-0 mt-1">
                                          <span className="fw-semibold text-success-main text-sm">
                                              10%
                                              <span className="text-lg d-inline-flex line-height-1"><i
                                                      className="ri-arrow-up-s-fill"></i></span>
                                          </span>
                                          +5 This Month
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-3 col-sm-6">
                          <div className="card p-3 shadow-2 radius-8 h-100 border-0 gradient-bg-end-13">
                              <div className="card-body p-0">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
      
                                      <div className="d-flex align-items-center gap-3">
                                          <span
                                              className="mb-0 w-48-px h-48-px bg-blue-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                              <img src="/assets/images/icons/parent-widget-icon1.png" alt="Wallet Icon" />
                                          </span>
                                          <div>
                                              <span className="fw-medium text-primary-light text-md">Due Fees</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-16">
                                      <h6 className="fw-semibold mb-0">$500</h6>
                                      <p className="text-sm mb-0 mt-1">
                                          <span className="fw-semibold text-success-main text-sm">
                                              10%
                                              <span className="text-lg d-inline-flex line-height-1"><i
                                                      className="ri-arrow-up-s-fill"></i></span>
                                          </span>
                                          +5 This Month
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-3 col-sm-6">
                          <div className="card p-3 shadow-2 radius-8 h-100 border-0 gradient-bg-end-14">
                              <div className="card-body p-0">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
      
                                      <div className="d-flex align-items-center gap-3">
                                          <span
                                              className="mb-0 w-48-px h-48-px bg-purple-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                              <img src="/assets/images/icons/parent-widget-icon1.png" alt="Wallet Icon" />
                                          </span>
                                          <div>
                                              <span className="fw-medium text-primary-light text-md">Due Fees</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-16">
                                      <h6 className="fw-semibold mb-0">$500</h6>
                                      <p className="text-sm mb-0 mt-1">
                                          <span className="fw-semibold text-success-main text-sm">
                                              10%
                                              <span className="text-lg d-inline-flex line-height-1"><i
                                                      className="ri-arrow-up-s-fill"></i></span>
                                          </span>
                                          +5 This Month
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-3 col-sm-6">
                          <div className="card p-3 shadow-2 radius-8 h-100 border-0 gradient-bg-end-15">
                              <div className="card-body p-0">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
      
                                      <div className="d-flex align-items-center gap-3">
                                          <span
                                              className="mb-0 w-48-px h-48-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                              <img src="/assets/images/icons/parent-widget-icon1.png" alt="Wallet Icon" />
                                          </span>
                                          <div>
                                              <span className="fw-medium text-primary-light text-md">Due Fees</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-16">
                                      <h6 className="fw-semibold mb-0">$500</h6>
                                      <p className="text-sm mb-0 mt-1">
                                          <span className="fw-semibold text-success-main text-sm">
                                              10%
                                              <span className="text-lg d-inline-flex line-height-1"><i
                                                      className="ri-arrow-up-s-fill"></i></span>
                                          </span>
                                          +5 This Month
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="mt-16">
                      <div className="row gy-4">
                          <div className="col-xxl-8">
                              <div className="row gy-4">
                                  
                                  <div className="col-12">
                                      <div className="card radius-12 border-0 h-100">
                                          <div
                                              className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                              <h6 className="mb-2 fw-bold text-lg">Statistic</h6>
                                              <select className="form-select bg-base form-select-sm w-auto radius-8">
                                                  <option>Yearly</option>
                                                  <option>Monthly</option>
                                                  <option>Weekly</option>
                                                  <option>Today</option>
                                              </select>
                                          </div>
                                          <div className="card-body py-20 d-flex flex-column justify-content-center">
                                              <ul
                                                  className="d-flex flex-wrap align-items-center justify-content-center mb-20 gap-3">
                                                  <li className="d-flex align-items-center gap-2">
                                                      <span className="w-12-px h-12-px rounded-circle bg-warning-600"></span>
                                                      <span className="text-secondary-light text-sm">Avg. Attendance:
                                                          <span
                                                              className="text-primary-light text-xl fw-bold line-height-1 ms-4">200</span>
                                                      </span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-2">
                                                      <span className="w-12-px h-12-px rounded-circle bg-primary-600"></span>
                                                      <span className="text-secondary-light text-sm">Avg. Exam Score:
                                                          <span
                                                              className="text-primary-light text-md fw-bold line-height-1 ms-4">500</span>
                                                      </span>
                                                  </li>
                                              </ul>
                                              <div id="courseActivityChart" className="apexcharts-tooltip-style-1"></div>
                                          </div>
                                      </div>
                                  </div>
                                  
      
                                  
                                  <div className="col-md-6">
                                      <div className="card radius-12 border-0 h-100">
                                          <div
                                              className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                              <h6 className="mb-2 fw-bold text-lg">Today's Class</h6>
                                              <select className="form-select bg-base form-select-sm w-auto radius-8">
                                                  <option>Yearly</option>
                                                  <option>Monthly</option>
                                                  <option>Weekly</option>
                                                  <option>Today</option>
                                              </select>
                                          </div>
                                          <div className="card-body pe-0 py-8">
                                              <div className="d-flex flex-column max-h-390-px overflow-y-auto scroll-sm pe-20">
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Emergency Leave</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Medical Leave</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Now Well</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Medical Leave</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Now Well</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Emergency Leave</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-warning-100 text-warning-600 px-24 py-4 radius-4 fw-medium text-sm">Pending</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Medical Leave</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
                                                      </div>
                                                      <div className="">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Accepted</span>
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                                      <div className="flex-grow-1">
                                                          <h6 className="text-lg mb-4 fw-medium">Now Well</h6>
                                                          <div className="d-flex align-items-center gap-8">
                                                              <span className="d-flex">
                                                                  <i className="ri-graduation-cap-line"></i>
                                                              </span>
                                                              <span className="text-sm text-secondary-light fw-medium">Date:
                                                                  10/10/24</span>
                                                          </div>
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
                                  
      
                                  
                                  <div className="col-md-6">
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
                                                  <div
                                                      className="pe-20 d-flex flex-column gap-28 overflow-y-auto max-h-390-px scroll-sm">
                                                      <div className="d-flex align-items-start gap-16">
                                                          <img src="/assets/images/thumbs/notice-board-img1.png"
                                                              alt="Thumbnail"
                                                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                          <div className="">
                                                              <h6 className="mb-4 text-lg">Admin</h6>
                                                              <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is
                                                                  simply dummy
                                                                  text of the
                                                                  printing and typesetti</p>
                                                              <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan
                                                                  2024</span>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex align-items-start gap-16">
                                                          <img src="/assets/images/thumbs/notice-board-img2.png"
                                                              alt="Thumbnail"
                                                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                          <div className="">
                                                              <h6 className="mb-4 text-lg">Kathryn Murphy</h6>
                                                              <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is
                                                                  simply dummy
                                                                  text of the
                                                                  printing and typesett ing industry Lorem Ipsum is simply
                                                                  dummy text
                                                                  of
                                                                  the printing and
                                                                  typesetting industry.</p>
                                                              <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan
                                                                  2024</span>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex align-items-start gap-16">
                                                          <img src="/assets/images/thumbs/notice-board-img3.png"
                                                              alt="Thumbnail"
                                                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                          <div className="">
                                                              <h6 className="mb-4 text-lg">Admin</h6>
                                                              <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is
                                                                  simply dummy
                                                                  text of the
                                                                  printing and typesetti</p>
                                                              <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan
                                                                  2024</span>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex align-items-start gap-16">
                                                          <img src="/assets/images/thumbs/notice-board-img1.png"
                                                              alt="Thumbnail"
                                                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                          <div className="">
                                                              <h6 className="mb-4 text-lg">Admin</h6>
                                                              <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is
                                                                  simply dummy
                                                                  text of the
                                                                  printing and typesetti</p>
                                                              <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan
                                                                  2024</span>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex align-items-start gap-16">
                                                          <img src="/assets/images/thumbs/notice-board-img2.png"
                                                              alt="Thumbnail"
                                                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                          <div className="">
                                                              <h6 className="mb-4 text-lg">Kathryn Murphy</h6>
                                                              <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is
                                                                  simply dummy
                                                                  text of the
                                                                  printing and typesett ing industry Lorem Ipsum is simply
                                                                  dummy text
                                                                  of
                                                                  the printing and
                                                                  typesetting industry.</p>
                                                              <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan
                                                                  2024</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
      
                                  
                                  <div className="col-12">
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
                                                              <td className="py-10-px"><span
                                                                      className="text-primary-600">AD52365</span></td>
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
                                                              <td className="py-10-px"><span
                                                                      className="text-primary-600">AD52365</span></td>
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
                                                              <td className="py-10-px"><span
                                                                      className="text-primary-600">AD52365</span></td>
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
                                                              <td className="py-10-px"><span
                                                                      className="text-primary-600">AD52365</span></td>
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
                                                              <td className="py-10-px"><span
                                                                      className="text-primary-600">AD52365</span></td>
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
                                  
                              </div>
                          </div>
      
                          <div className="col-xxl-4">
      
                              <div className="d-flex flex-column gap-24">
                                  
                                  <div className="card h-100">
                                      <div className="card-body p-0">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                              <h6 className="text-lg mb-0">My Kids</h6>
                                          </div>
                                          <div className="ps-20 pt-20 pb-20">
                                              <div
                                                  className="pe-20 d-flex flex-column gap-16">
                                                  <div className="p-20 bg-neutral-40 rounded">
                                                      <div className="d-flex align-items-center gap-16">
                                                          <figure
                                                              className="w-120-px h-120-px rounded-circle overflow-hidden mb-0 border border-width-4-px border-white">
                                                              <img src="/assets/images/thumbs/student-details-img.png"
                                                                  alt="Student Image" className="w-100 h-100 object-fit-cover" />
                                                          </figure>
                                                          <div>
                                                              <h2 className="h6 text-primary-light mb-16 fw-semibold">Seth Hallam
                                                              </h2>
                                                              <p className="mb-0">Admission No: <span
                                                                      className="text-primary-600 fw-semibold">AD1256589</span>
                                                              </p>
                                                              <p className="mb-0">Roll Number: <span
                                                                      className="text-primary-light fw-semibold">10</span> </p>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex flex-column gap-8 border-top border-neutral-300 mt-16 pt-16">
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Class</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: Class 6 (2025-26)</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Section</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: A</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Gender</span>
                                                              <span className="fw-normal text-sm text-secondary-light">:
                                                                  Male</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Date
                                                                  Of Birth</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: 10 Nov
                                                                  2006</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Academic
                                                                  Year</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: Jun
                                                                  2025/2026</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="p-20 bg-neutral-40 rounded">
                                                      <div className="d-flex align-items-center gap-16">
                                                          <figure
                                                              className="w-120-px h-120-px rounded-circle overflow-hidden mb-0 border border-width-4-px border-white">
                                                              <img src="/assets/images/thumbs/student-details-img.png"
                                                                  alt="Student Image" className="w-100 h-100 object-fit-cover" />
                                                          </figure>
                                                          <div>
                                                              <h2 className="h6 text-primary-light mb-16 fw-semibold">Seth Hallam
                                                              </h2>
                                                              <p className="mb-0">Admission No: <span
                                                                      className="text-primary-600 fw-semibold">AD1256589</span>
                                                              </p>
                                                              <p className="mb-0">Roll Number: <span
                                                                      className="text-primary-light fw-semibold">10</span> </p>
                                                          </div>
                                                      </div>
                                                      <div className="d-flex flex-column gap-8 border-top border-neutral-300 mt-16 pt-16">
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Class</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: Class 6 (2025-26)</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Section</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: A</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Gender</span>
                                                              <span className="fw-normal text-sm text-secondary-light">:
                                                                  Male</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Date
                                                                  Of Birth</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: 10 Nov
                                                                  2006</span>
                                                          </div>
                                                          <div className="d-flex gap-4">
                                                              <span
                                                                  className="fw-semibold text-sm text-primary-light w-110-px">Academic
                                                                  Year</span>
                                                              <span className="fw-normal text-sm text-secondary-light">: Jun
                                                                  2025/2026</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
      
                                  
                                  <div className="card h-100">
                                      <div className="card-body p-0">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                              <h6 className="text-lg mb-0">Upcoming Events</h6>
                                          </div>
                                          <div className="ps-20 pt-20 pb-20">
                                              <div
                                                  className="pe-20 d-flex flex-column gap-28 overflow-y-auto max-h-490-px scroll-sm">
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-purple-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-normal mb-0">09:00 - 09:45</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Marketing Strategy
                                                              Kickoff
                                                          </p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">Robert Fox</Link></p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
                                                              className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-warning-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-normal mb-0">11:15 - 12:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Product Design
                                                              Brainstorm
                                                          </p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">Leslie
                                                                  Alexander</Link>
                                                          </p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
                                                              className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-blue-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-normal mb-0">02:00 - 03:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Client Feedback
                                                              Review
                                                          </p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">Courtney Henry</Link>
                                                          </p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
                                                              className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-success-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-normal mb-0">04:15 - 05:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Sprint Planning
                                                              &amp;
                                                              Task
                                                              Allocation</p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">Eleanor Pena</Link>
                                                          </p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
                                                              className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-primary-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-normal mb-0">01:15 - 02:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Client Feedback
                                                              Review
                                                          </p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">John</Link></p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
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
                  </div>
              </div>

      <Script
        id="page-index-4-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
