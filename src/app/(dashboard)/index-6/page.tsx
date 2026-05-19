/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ===================== Revenue Chart Start =============================== \r\n    function createChartTwo(chartId, color1, color2) {\r\n        var options = {\r\n            series: [{\r\n                name: 'Profit',\r\n                data: [6, 20, 15, 48, 28, 55, 28, 52, 25, 32, 15, 25]\r\n            }, {\r\n                name: 'Loss',\r\n                data: [0, 8, 4, 36, 16, 42, 16, 40, 12, 24, 4, 12]\r\n            }],\r\n            legend: {\r\n                show: false\r\n            },\r\n            chart: {\r\n                type: 'area',\r\n                width: '100%',\r\n                height: 200,\r\n                toolbar: {\r\n                    show: false\r\n                },\r\n                padding: {\r\n                    left: 0,\r\n                    right: 0,\r\n                    top: 0,\r\n                    bottom: 0\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            stroke: {\r\n                curve: 'smooth',\r\n                width: 3,\r\n                colors: [color1, color2], // Use two colors for the lines\r\n                lineCap: 'round'\r\n            },\r\n            grid: {\r\n                show: true,\r\n                borderColor: '#D1D5DB',\r\n                strokeDashArray: 1,\r\n                position: 'back',\r\n                xaxis: {\r\n                    lines: {\r\n                        show: false\r\n                    }\r\n                },\r\n                yaxis: {\r\n                    lines: {\r\n                        show: true\r\n                    }\r\n                },\r\n                row: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                column: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                padding: {\r\n                    top: -20,\r\n                    right: 0,\r\n                    bottom: -10,\r\n                    left: 0\r\n                },\r\n            },\r\n            colors: [color1, color2], // Set color for series\r\n            fill: {\r\n                type: 'gradient',\r\n                colors: [color1, color2], // Use two colors for the gradient\r\n                gradient: {\r\n                    shade: 'light',\r\n                    type: 'vertical',\r\n                    shadeIntensity: 0.5,\r\n                    gradientToColors: [undefined, `${color2}00`], // Apply transparency to both colors\r\n                    inverseColors: false,\r\n                    opacityFrom: [0.4, 0.6], // Starting opacity for both colors\r\n                    opacityTo: [0.3, 0.3], // Ending opacity for both colors\r\n                    stops: [0, 100],\r\n                },\r\n            },\r\n            markers: {\r\n                colors: [color1, color2],\r\n                strokeWidth: 2,\r\n                size: 0,\r\n                hover: {\r\n                    size: 8\r\n                }\r\n            },\r\n\r\n            xaxis: {\r\n                labels: {\r\n                    show: false\r\n                },\r\n                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n                tooltip: {\r\n                    enabled: false\r\n                },\r\n                labels: {\r\n                    formatter: function (value) {\r\n                        return value;\r\n                    },\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                }\r\n            },\r\n            yaxis: {\r\n                labels: {\r\n                    formatter: function (value) {\r\n                        return \"$\" + value + \"k\";\r\n                    },\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                },\r\n            },\r\n            tooltip: {\r\n                x: {\r\n                    format: 'dd/MM/yy HH:mm'\r\n                }\r\n            }\r\n        };\r\n\r\n        var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n        chart.render();\r\n    }\r\n\r\n    createChartTwo('revenueChart', '#FF7A2C', '#18A194');\r\n    // ===================== Revenue Chart End =============================== \r\n\r\n    // ================================ Users Overview Donut chart Start ================================ \r\n    var options = {\r\n        series: [300, 200, 500, 172],\r\n        colors: ['#487FFF', '#9935FE', '#FF9F29', \"#45B369\"],\r\n        labels: ['Total Visitors', 'Registrations', 'Total Page Views', 'Registrations'],\r\n        legend: {\r\n            show: false\r\n        },\r\n        chart: {\r\n            type: 'donut',\r\n            height: 270,\r\n            sparkline: {\r\n                enabled: true // Remove whitespace\r\n            },\r\n            margin: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            },\r\n            padding: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            }\r\n        },\r\n        stroke: {\r\n            width: 0,\r\n        },\r\n        dataLabels: {\r\n            enabled: false\r\n        },\r\n        responsive: [{\r\n            breakpoint: 480,\r\n            options: {\r\n                chart: {\r\n                    width: 200\r\n                },\r\n                legend: {\r\n                    position: 'bottom'\r\n                }\r\n            }\r\n        }],\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(\"#userOverviewDonutChart\"), options);\r\n    chart.render();\r\n    // ================================ Users Overview Donut chart End ================================ \r\n\r\n      // ================================ Recent Orders Chart Start ================================ \r\n  function createChartTwoLineOne(chartId, chartColor) {\r\n    \r\n    var options = {\r\n      series: [\r\n          {\r\n            name: 'This Day',\r\n            data: [18, 25, 20, 35, 25, 55, 45, 50, 40],\r\n          },\r\n      ],\r\n      chart: {\r\n          type: 'area',\r\n          width: '100%',\r\n          height: 360,\r\n          sparkline: {\r\n            enabled: false // Remove whitespace\r\n          },\r\n          toolbar: {\r\n              show: false\r\n          },\r\n          padding: {\r\n              left: 0,\r\n              right: 0,\r\n              top: 0,\r\n              bottom: 0\r\n          }\r\n      },\r\n      dataLabels: {\r\n          enabled: false\r\n      },\r\n      stroke: {\r\n          curve: 'smooth',\r\n          width: 4,\r\n          colors: [chartColor],\r\n          lineCap: 'round'\r\n      },\r\n      grid: {\r\n          show: true,\r\n          borderColor: '#D1D5DB',\r\n          strokeDashArray: 1,\r\n          position: 'back',\r\n          xaxis: {\r\n              lines: {\r\n                  show: false\r\n              }\r\n          },   \r\n          yaxis: {\r\n              lines: {\r\n                  show: true\r\n              }\r\n          },  \r\n          row: {\r\n              colors: undefined,\r\n              opacity: 0.5\r\n          },  \r\n          column: {\r\n              colors: undefined,\r\n              opacity: 0.5\r\n          },  \r\n          padding: {\r\n              top: -30,\r\n              right: 0,\r\n              bottom: -10,\r\n              left: 0\r\n          },  \r\n      },\r\n      colors: [chartColor], // Set color for series\r\n      fill: {\r\n          type: 'gradient',\r\n          colors: [chartColor], // Set the starting color (top color) here\r\n          gradient: {\r\n              shade: 'light', // Gradient shading type\r\n              type: 'vertical',  // Gradient direction (vertical)\r\n              shadeIntensity: 0.5, // Intensity of the gradient shading\r\n              gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)\r\n              inverseColors: false, // Do not invert colors\r\n              opacityFrom: .6, // Starting opacity\r\n              opacityTo: 0.3,  // Ending opacity\r\n              stops: [0, 100],\r\n          },\r\n      },\r\n      // Customize the circle marker color on hover\r\n      markers: {\r\n        colors: [chartColor],\r\n        strokeWidth: 3,\r\n        size: 0,\r\n        hover: {\r\n          size: 10\r\n        }\r\n      },\r\n      xaxis: {\r\n          labels: {\r\n              show: false\r\n          },\r\n          categories: [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],\r\n          tooltip: {\r\n              enabled: false,\r\n          },\r\n          tooltip: {\r\n            enabled: false\r\n          },\r\n          labels: {\r\n            formatter: function (value) {\r\n              return value;\r\n            },\r\n            style: {\r\n              fontSize: \"14px\"\r\n            }\r\n          },\r\n      },\r\n      yaxis: {\r\n          labels: {\r\n              show: false\r\n          },\r\n      },\r\n      tooltip: {\r\n          x: {\r\n              format: 'dd/MM/yy HH:mm'\r\n          },\r\n      },\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n    chart.render();\r\n  }\r\n  createChartTwoLineOne('recent-orders', '#487fff');\r\n  // ================================ Recent Orders Chart End ================================";

export default function Index6Page() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <p className="text-neutral-600 mt-4 mb-0">University → Manage your University, track attendance, expense, and net worth.</p>
        </div>
      </div>
      
              <div className="mt-24">
                  <div className="row gy-4">
                      <div className="col-xxl-8">
                          <div className="row gy-4">
                              <div className="col-xxl-3 col-sm-6">
                                  <div className="card shadow-1 radius-8 border border-white gradient-bg-end-1 h-100">
                                      <div className="card-body px-20 py-12">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-16">
                                              <div className="">
                                                  <h6 className="mb-0 fw-bold">720</h6>
                                                  <p className="fw-medium text-primary-light mb-0 mt-2">Total Student</p>
                                              </div>
                                              <div
                                                  className="w-44-px h-44-px bg-warning-600 rounded-circle d-flex justify-content-center align-items-center">
                                                  <img src="/assets/images/icons/dashboard-icon1.png" alt="Icon" />
                                              </div>
                                          </div>
                                          <p
                                              className="fw-medium text-sm text-secondary-light mt-12 mb-0 d-flex align-items-center gap-2">
                                              <span
                                                  className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                                                  10%
                                                  <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                                              </span>
                                              +5 This Month
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-sm-6">
                                  <div className="card shadow-1 radius-8 border border-white gradient-bg-end-2 h-100">
                                      <div className="card-body px-20 py-12">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-16">
                                              <div className="">
                                                  <h6 className="mb-0 fw-bold">16</h6>
                                                  <p className="fw-medium text-primary-light mb-0 mt-2">Total Student</p>
                                              </div>
                                              <div
                                                  className="w-44-px h-44-px bg-blue-600 rounded-circle d-flex justify-content-center align-items-center">
                                                  <img src="/assets/images/icons/dashboard-icon2.png" alt="Icon" />
                                              </div>
                                          </div>
                                          <p
                                              className="fw-medium text-sm text-secondary-light mt-12 mb-0 d-flex align-items-center gap-2">
                                              <span
                                                  className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                                                  10%
                                                  <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                                              </span>
                                              +5 This Month
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-sm-6">
                                  <div className="card shadow-1 radius-8 border border-white gradient-bg-end-3 h-100">
                                      <div className="card-body px-20 py-12">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-16">
                                              <div className="">
                                                  <h6 className="mb-0 fw-bold">3</h6>
                                                  <p className="fw-medium text-primary-light mb-0 mt-2">Total Staff</p>
                                              </div>
                                              <div
                                                  className="w-44-px h-44-px bg-purple-600 rounded-circle d-flex justify-content-center align-items-center">
                                                  <img src="/assets/images/icons/dashboard-icon3.png" alt="Icon" />
                                              </div>
                                          </div>
                                          <p
                                              className="fw-medium text-sm text-secondary-light mt-12 mb-0 d-flex align-items-center gap-2">
                                              <span
                                                  className="d-inline-flex align-items-center gap-1 text-warning-600 text-sm fw-semibold">
                                                  10%
                                                  <iconify-icon icon="bxs:down-arrow" className="text-xs"></iconify-icon>
                                              </span>
                                              +5 This Month
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-sm-6">
                                  <div className="card shadow-1 radius-8 border border-white gradient-bg-end-4 h-100">
                                      <div className="card-body px-20 py-12">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-16">
                                              <div className="">
                                                  <h6 className="mb-0 fw-bold">$15,720.50</h6>
                                                  <p className="fw-medium text-primary-light mb-0 mt-2">Total Incomes</p>
                                              </div>
                                              <div
                                                  className="w-44-px h-44-px bg-primary-600 rounded-circle d-flex justify-content-center align-items-center">
                                                  <img src="/assets/images/icons/dashboard-icon4.png" alt="Icon" />
                                              </div>
                                          </div>
                                          <p
                                              className="fw-medium text-sm text-secondary-light mt-12 mb-0 d-flex align-items-center gap-2">
                                              <span
                                                  className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                                                  10%
                                                  <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                                              </span>
                                              +5 This Month
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-24">
                              <div className="row gy-4">
                                  <div className="col-12">
                                      <div className="card h-100">
                                          <div className="card-body p-24 mb-8">
                                              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                  <h6 className="mb-2 fw-bold text-lg mb-0">Earning Statistic</h6>
                                                  <select
                                                      className="form-select form-select-sm w-auto bg-base border text-secondary-light radius-8">
                                                      <option>Yearly</option>
                                                      <option>Monthly</option>
                                                      <option>Weekly</option>
                                                      <option>Today</option>
                                                  </select>
                                              </div>
                                              <ul
                                                  className="d-flex flex-wrap align-items-center justify-content-center my-3 gap-24">
                                                  <li className="d-flex flex-column gap-1">
                                                      <div className="d-flex align-items-center gap-2">
                                                          <span className="w-8-px h-8-px rounded-pill bg-primary-600"></span>
                                                          <span className="text-secondary-light text-sm fw-semibold">Profit
                                                          </span>
                                                      </div>
                                                      <div className="d-flex align-items-center gap-8">
                                                          <h6 className="mb-0">$26,201</h6>
                                                          <span
                                                              className="text-success-600 d-flex align-items-center gap-1 text-sm fw-bolder">
                                                              10%
                                                              <i className="ri-arrow-up-s-fill d-flex"></i>
                                                          </span>
                                                      </div>
                                                  </li>
                                                  <li className="d-flex flex-column gap-1">
                                                      <div className="d-flex align-items-center gap-2">
                                                          <span className="w-8-px h-8-px rounded-pill bg-warning-600"></span>
                                                          <span className="text-secondary-light text-sm fw-semibold">Loss </span>
                                                      </div>
                                                      <div className="d-flex align-items-center gap-8">
                                                          <h6 className="mb-0">$18,120</h6>
                                                          <span
                                                              className="text-warning-600 d-flex align-items-center gap-1 text-sm fw-bolder">
                                                              10%
                                                              <i className="ri-arrow-down-s-fill d-flex"></i>
                                                          </span>
                                                      </div>
                                                  </li>
                                              </ul>
                                              <div id="revenueChart" className="apexcharts-tooltip-style-1"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-4">
                          <div className="row gy-4">
                              <div className="col-12">
                                  <div className="card">
                                      <div className="card-body p-0">
                                          <div
                                              className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                                              <h6 className="text-lg mb-0">Calendar</h6>
                                          </div>
      
                                          <div className="ps-20 pt-24 pb-24">
      
                                              <div
                                                  className="d-flex align-items-center gap-16 justify-content-between flex-wrap pb-24 pe-20">
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Fr</span>
                                                      <h6 className="text-md mb-0">21</h6>
                                                  </div>
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Sa</span>
                                                      <h6 className="text-md mb-0">22</h6>
                                                  </div>
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Su</span>
                                                      <h6 className="text-md mb-0">23</h6>
                                                  </div>
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Mo</span>
                                                      <h6 className="text-md mb-0">24</h6>
                                                  </div>
                                                  <div className="week-item text-center bg-purple rounded-pill py-12 px-16">
                                                      <span className="text-sm text-white fw-medium">Tu</span>
                                                      <h6 className="text-md mb-0 text-white">25</h6>
                                                  </div>
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">We</span>
                                                      <h6 className="text-md mb-0">26</h6>
                                                  </div>
                                                  <div className="week-item text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Th</span>
                                                      <h6 className="text-md mb-0">27</h6>
                                                  </div>
                                                  <div className="text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Fr</span>
                                                      <h6 className="text-md mb-0">28</h6>
                                                  </div>
                                                  <div className="text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Sa</span>
                                                      <h6 className="text-md mb-0">29</h6>
                                                  </div>
                                                  <div className="text-center">
                                                      <span className="text-sm text-neutral-400 fw-medium">Su</span>
                                                      <h6 className="text-md mb-0">30</h6>
                                                  </div>
                                              </div>
      
                                              <div
                                                  className="pe-20 d-flex flex-column gap-16 overflow-y-auto max-h-500-px scroll-sm">
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-purple-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-semibold mb-0">10:20 - 11:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">UI UX Dashboard
                                                              Project Meeting</p>
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
                                                              <h6 className="text-lg fw-semibold mb-0">11:15 - 12:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Product Design
                                                              Brainstorm</p>
                                                          <p className="text-xs text-secondary-light mb-0">Lead by <Link
                                                                  href="#"
                                                                  className="text-primary-600 hover-underline">Leslie
                                                                  Alexander</Link></p>
                                                      </div>
                                                      <div>
                                                          <Link href="#"
                                                              className="py-6 px-16 radius-4 bg-neutral-100 text-secondary-light fw-semibold bg-hover-primary-600 hover-text-white">View</Link>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex align-items-center justify-content-between gap-16">
                                                      <div className="ps-10 border-start-width-3-px border-blue-600">
                                                          <div className="d-flex align-items-end gap-6">
                                                              <h6 className="text-lg fw-semibold mb-0">02:00 - 03:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Client Feedback
                                                              Review</p>
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
                                                              <h6 className="text-lg fw-semibold mb-0">04:15 - 05:00</h6>
                                                              <span
                                                                  className="text-xs text-secondary-light line-height-1 mb-2">PM</span>
                                                          </div>
                                                          <p className="text-secondary-light mt-4 mb-2 text-sm">Sprint Planning &
                                                              Task Allocation</p>
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
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="mt-24">
                      <div className="row gy-4">
                          <div className="col-xl-4 col-md-6">
                              <div className="card h-100">
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
                                  <div className="card-body pb-20 ps-20 pt-20 pe-0">
                                      <div className="d-flex flex-column max-h-390-px overflow-y-auto scroll-sm">
                                          <div className="pe-20 d-flex flex-column gap-20 max-h-462-px overflow-y-auto scroll-sm">
                                              <div className="d-flex align-items-start gap-16">
                                                  <img src="/assets/images/thumbs/notice-board-img1.png" alt="Thumbnail"
                                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                  <div className="">
                                                      <h6 className="mb-4 text-lg">Admin</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Lorem Ipsum
                                                          is
                                                          simply dummy text of the
                                                          printing and typesetti</p>
                                                      <span className="text-secondary-light text-sm mb-0 mt-4">25
                                                          Jan
                                                          2024</span>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-start gap-16">
                                                  <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                  <div className="">
                                                      <h6 className="mb-4 text-lg">Kathryn Murphy</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Lorem Ipsum
                                                          is
                                                          simply dummy text of the
                                                          printing and typesett ing industry Lorem Ipsum is
                                                          simply
                                                          dummy text of the printing and
                                                          typesetting industry.</p>
                                                      <span className="text-secondary-light text-sm mb-0 mt-4">25
                                                          Jan
                                                          2024</span>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-start gap-16">
                                                  <img src="/assets/images/thumbs/notice-board-img3.png" alt="Thumbnail"
                                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                  <div className="">
                                                      <h6 className="mb-4 text-lg">Admin</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Lorem Ipsum
                                                          is
                                                          simply dummy text of the
                                                          printing and typesetti</p>
                                                      <span className="text-secondary-light text-sm mb-0 mt-4">25
                                                          Jan
                                                          2024</span>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-start gap-16">
                                                  <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                                  <div className="">
                                                      <h6 className="mb-4 text-lg">John Doe</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Lorem ipsum
                                                          dolor sit amet consectetur
                                                          adipisicing elit. Laborum voluptas corporis qui
                                                          dolore
                                                          est odit officia fuga?</p>
                                                      <span className="text-secondary-light text-sm mb-0 mt-4">25
                                                          Jan
                                                          2024</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-4 col-md-6">
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
                                  <div className="card-body pe-0 pb-20">
                                      <div className="d-flex flex-column max-h-390-px overflow-y-auto scroll-sm pe-20">
                                          <div
                                              className="d-flex align-items-center justify-content-between gap-3 py-10 border-bottom">
                                              <div className="flex-grow-1">
                                                  <h6 className="text-lg mb-4 fw-medium">Emergency Leave</h6>
                                                  <div className="d-flex align-items-center gap-8">
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
      
                          <div className="col-xl-4 col-md-6">
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
                                  <div className="card-body py-24 d-flex flex-column justify-content-center">
                                      <div
                                          className="d-flex align-items-center gap-20 flex-sm-nowrap flex-wrap justify-content-around">
                                          <div className="d-flex flex-column gap-12">
                                              <div className="d-flex align-items-center gap-12">
                                                  <div className="">
                                                      <span
                                                          className="w-20-px h-20-px bg-primary-600 rounded-circle position-relative">
                                                          <span
                                                              className="w-10-px h-10-px bg-white rounded-circle position-absolute top-50 start-50 translate-middle"></span>
                                                      </span>
                                                  </div>
                                                  <div className="">
                                                      <h6 className="mb-0">200</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Present</p>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center gap-12">
                                                  <div className="">
                                                      <span
                                                          className="w-20-px h-20-px bg-warning-600 rounded-circle position-relative">
                                                          <span
                                                              className="w-10-px h-10-px bg-white rounded-circle position-absolute top-50 start-50 translate-middle"></span>
                                                      </span>
                                                  </div>
                                                  <div className="">
                                                      <h6 className="mb-0">300</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Half Day </p>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center gap-12">
                                                  <div className="">
                                                      <span
                                                          className="w-20-px h-20-px bg-success rounded-circle position-relative">
                                                          <span
                                                              className="w-10-px h-10-px bg-white rounded-circle position-absolute top-50 start-50 translate-middle"></span>
                                                      </span>
                                                  </div>
                                                  <div className="">
                                                      <h6 className="mb-0">172</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Late</p>
                                                  </div>
                                              </div>
                                              <div className="d-flex align-items-center gap-12">
                                                  <div className="">
                                                      <span
                                                          className="w-20-px h-20-px bg-purple rounded-circle position-relative">
                                                          <span
                                                              className="w-10-px h-10-px bg-white rounded-circle position-absolute top-50 start-50 translate-middle"></span>
                                                      </span>
                                                  </div>
                                                  <div className="">
                                                      <h6 className="mb-0">500</h6>
                                                      <p className="text-secondary-light text-sm mb-0">Absent</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="text-center">
                                              <div id="userOverviewDonutChart" className="apexcharts-tooltip-z-none"></div>
                                          </div>
                                      </div>
      
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-xl-8">
                              <div className="card radius-12 border-0">
                                  <div
                                      className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                      <h6 className="mb-2 fw-bold text-lg">Student Marks</h6>
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
                                                      <th scope="col">Admission No</th>
                                                      <th scope="col">Name</th>
                                                      <th scope="col">Class</th>
                                                      <th scope="col">Marks%</th>
                                                      <th scope="col">CGPA</th>
                                                      <th scope="col">Status</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td className="py-10-px"><span className="text-primary-600">AD45231</span></td>
                                                      <td className="py-10-px">
                                                          <div className="d-flex align-items-center">
                                                              <img src="/assets/images/users/student-mark-images1.png"
                                                                  alt="Image" className="flex-shrink-0 me-12 radius-8" />
                                                              <div>
                                                                  <h6 className="text-md mb-0 fw-medium">Wade
                                                                      Warren
                                                                  </h6>
                                                                  <span>Roll No: <span className="fw-semibold">08</span></span>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td className="py-10-px">Class 2 (B)</td>
                                                      <td className="py-10-px">88%</td>
                                                      <td className="py-10-px">3.9</td>
                                                      <td className="py-10-px">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                      </td>
                                                  </tr>
      
                                                  <tr>
                                                      <td className="py-10-px"><span className="text-primary-600">AD67452</span></td>
                                                      <td className="py-10-px">
                                                          <div className="d-flex align-items-center">
                                                              <img src="/assets/images/users/student-mark-images2.png"
                                                                  alt="Image" className="flex-shrink-0 me-12 radius-8" />
                                                              <div>
                                                                  <h6 className="text-md mb-0 fw-medium">Brooklyn
                                                                      Simmons</h6>
                                                                  <span>Roll No: <span className="fw-semibold">15</span></span>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td className="py-10-px">Class 3 (A)</td>
                                                      <td className="py-10-px">72%</td>
                                                      <td className="py-10-px">3.1</td>
                                                      <td className="py-10-px">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                      </td>
                                                  </tr>
      
                                                  <tr>
                                                      <td className="py-10-px"><span className="text-primary-600">AD98214</span></td>
                                                      <td className="py-10-px">
                                                          <div className="d-flex align-items-center">
                                                              <img src="/assets/images/users/student-mark-images3.png"
                                                                  alt="Image" className="flex-shrink-0 me-12 radius-8" />
                                                              <div>
                                                                  <h6 className="text-md mb-0 fw-medium">Darlene
                                                                      Robertson</h6>
                                                                  <span>Roll No: <span className="fw-semibold">20</span></span>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td className="py-10-px">Class 4 (C)</td>
                                                      <td className="py-10-px">54%</td>
                                                      <td className="py-10-px">2.4</td>
                                                      <td className="py-10-px">
                                                          <span
                                                              className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Fail</span>
                                                      </td>
                                                  </tr>
      
                                                  <tr>
                                                      <td className="py-10-px"><span className="text-primary-600">AD76133</span></td>
                                                      <td className="py-10-px">
                                                          <div className="d-flex align-items-center">
                                                              <img src="/assets/images/users/student-mark-images4.png"
                                                                  alt="Image" className="flex-shrink-0 me-12 radius-8" />
                                                              <div>
                                                                  <h6 className="text-md mb-0 fw-medium">Theresa
                                                                      Webb
                                                                  </h6>
                                                                  <span>Roll No: <span className="fw-semibold">11</span></span>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td className="py-10-px">Class 5 (A)</td>
                                                      <td className="py-10-px">41%</td>
                                                      <td className="py-10-px">1.9</td>
                                                      <td className="py-10-px">
                                                          <span
                                                              className="bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm">Fail</span>
                                                      </td>
                                                  </tr>
      
                                                  <tr>
                                                      <td className="py-10-px"><span className="text-primary-600">AD33578</span></td>
                                                      <td className="py-10-px">
                                                          <div className="d-flex align-items-center">
                                                              <img src="/assets/images/users/student-mark-images2.png"
                                                                  alt="Image" className="flex-shrink-0 me-12 radius-8" />
                                                              <div>
                                                                  <h6 className="text-md mb-0 fw-medium">Arlene
                                                                      McCoy
                                                                  </h6>
                                                                  <span>Roll No: <span className="fw-semibold">06</span></span>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td className="py-10-px">Class 1 (C)</td>
                                                      <td className="py-10-px">91%</td>
                                                      <td className="py-10-px">4.0</td>
                                                      <td className="py-10-px">
                                                          <span
                                                              className="bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm">Pass</span>
                                                      </td>
                                                  </tr>
      
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-xl-4">
                              <div className="card h-100 radius-8 border">
                                  <div className="card-body p-24">
                                      <h6 className="mb-12 fw-bold text-lg mb-0">Recent Orders</h6>
                                      <div className="d-flex align-items-center gap-2">
                                          <h6 className="fw-semibold mb-0">$27,200</h6>
                                          <p className="text-sm mb-0">
                                              <span
                                                  className="bg-success-focus border border-success px-8 py-2 rounded-pill fw-semibold text-success-main text-sm d-inline-flex align-items-center gap-1">
                                                  10%
                                                  <iconify-icon icon="iconamoon:arrow-up-2-fill" className="icon"></iconify-icon>
                                              </span>
                                              Increases
                                          </p>
                                      </div>
                                      <div id="recent-orders" className="mt-28"></div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
      
              </div>

      <Script
        id="page-index-6-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
