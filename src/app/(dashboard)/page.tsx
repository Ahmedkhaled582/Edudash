/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ============================ Revenue Statistics Chart start ===============================\r\n  var options = {\r\n    series: [{\r\n      name: 'Total Fee',\r\n      data: [25, 35, 50, 60, 26, 20, 40, 20, 50, 16, 10, 40]\r\n    }, {\r\n      name: 'Collected Fee',\r\n      data: [15, 16, 24, 30, 20, 15, 20, 10, 25, 10, 6, 20]\r\n    }],\r\n    chart: {\r\n      type: 'bar',\r\n      height: 250,\r\n      stacked: true,\r\n      toolbar: {\r\n        show: false\r\n      },\r\n      zoom: {\r\n        enabled: true\r\n      }\r\n    },\r\n    colors: [\"#25A194\", \"#FF7A2C\"],\r\n    plotOptions: {\r\n      bar: {\r\n        horizontal: false,\r\n        columnWidth: \"50%\",\r\n        shape: \"pyramid\",\r\n      },\r\n    },\r\n    xaxis: {\r\n      categories: ['Jan', 'Feb', 'Mar', 'Apr',\r\n        'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'\r\n      ],\r\n    },\r\n    yaxis: {\r\n      labels: {\r\n        formatter: function (value) {\r\n          return \"$\" + value + \"k\";\r\n        },\r\n        style: {\r\n          fontSize: \"14px\"\r\n        }\r\n      },\r\n    },\r\n    legend: {\r\n      show: false,\r\n    },\r\n    fill: {\r\n      opacity: 1\r\n    }\r\n  };\r\n\r\n  var chart = new ApexCharts(document.querySelector(\"#revenueStatistic\"), options);\r\n  chart.render()\r\n  // ============================ Revenue Statistics Chart End ===============================\r\n\r\n  // ===================== Income Vs Expense Start =============================== \r\n  function createChartThree(chartId, color1, color2) {\r\n    var options = {\r\n      series: [{\r\n        name: 'Income',\r\n        data: [48, 35, 55, 32, 48, 30, 15, 50, 57]\r\n      }, {\r\n        name: 'Expense',\r\n        data: [12, 20, 15, 26, 22, 60, 40, 32, 25]\r\n      }],\r\n      legend: {\r\n        show: false\r\n      },\r\n      chart: {\r\n        type: 'area',\r\n        width: '100%',\r\n        height: 260,\r\n        toolbar: {\r\n          show: false\r\n        },\r\n        padding: {\r\n          left: 0,\r\n          right: 0,\r\n          top: 0,\r\n          bottom: 0\r\n        }\r\n      },\r\n      dataLabels: {\r\n        enabled: false\r\n      },\r\n      stroke: {\r\n        curve: 'stepline',\r\n        width: 2,\r\n        colors: [color1, color2],\r\n        lineCap: 'round'\r\n      },\r\n      grid: {\r\n        show: true,\r\n        borderColor: '#D1D5DB',\r\n        strokeDashArray: 1,\r\n        position: 'back',\r\n        xaxis: {\r\n          lines: {\r\n            show: false\r\n          }\r\n        },\r\n        yaxis: {\r\n          lines: {\r\n            show: true\r\n          }\r\n        },\r\n        row: {\r\n          colors: undefined,\r\n          opacity: 0.2\r\n        },\r\n        column: {\r\n          colors: undefined,\r\n          opacity: 0.2\r\n        },\r\n        padding: {\r\n          top: -20,\r\n          right: 0,\r\n          bottom: -10,\r\n          left: 0\r\n        },\r\n      },\r\n      colors: [color1, color2],\r\n      markers: {\r\n        colors: [color1, color2],\r\n        strokeWidth: 1,\r\n        size: 0,\r\n        hover: {\r\n          size: 10\r\n        }\r\n      },\r\n      xaxis: {\r\n        labels: {\r\n          show: false\r\n        },\r\n        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n        tooltip: {\r\n          enabled: false\r\n        },\r\n        labels: {\r\n          formatter: function (value) {\r\n            return value;\r\n          },\r\n          style: {\r\n            fontSize: \"14px\"\r\n          }\r\n        }\r\n      },\r\n      yaxis: {\r\n        labels: {\r\n          formatter: function (value) {\r\n            return \"$\" + value + \"k\";\r\n          },\r\n          style: {\r\n            fontSize: \"14px\"\r\n          }\r\n        },\r\n      },\r\n      tooltip: {\r\n        x: {\r\n          format: 'dd/MM/yy HH:mm'\r\n        }\r\n      },\r\n      fill: {\r\n        type: \"gradient\",\r\n        gradient: {\r\n          shade: \"light\",\r\n          type: \"vertical\",\r\n          opacityFrom: 0.4,\r\n          opacityTo: 0.05,\r\n          stops: [0, 100]\r\n        }\r\n      }\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n    chart.render();\r\n  }\r\n\r\n  createChartThree('incomeExpense', '#16a34a', '#FF9F29');\r\n  // ===================== Income Vs Expense End =============================== \r\n\r\n  // ================================ New Admissions Chart Start ================================ \r\n  var options = {\r\n    series: [40, 87, 87, 30],\r\n    colors: ['#0A51CE', '#25A194', '#FF7A2C', '#009F5E'],\r\n    labels: ['Health', 'Business', 'Lifestyle', 'Entertainment'],\r\n    legend: {\r\n      show: false\r\n    },\r\n    chart: {\r\n      type: 'donut',\r\n      height: 270,\r\n      sparkline: {\r\n        enabled: true // Remove whitespace\r\n      },\r\n      margin: {\r\n        top: 0,\r\n        right: 0,\r\n        bottom: 0,\r\n        left: 0\r\n      },\r\n      padding: {\r\n        top: 0,\r\n        right: 0,\r\n        bottom: 0,\r\n        left: 0\r\n      }\r\n    },\r\n    stroke: {\r\n      width: 2,\r\n    },\r\n    dataLabels: {\r\n      enabled: false\r\n    },\r\n    responsive: [{\r\n      breakpoint: 480,\r\n      options: {\r\n        chart: {\r\n          width: 200\r\n        },\r\n        legend: {\r\n          position: 'bottom'\r\n        }\r\n      }\r\n    }],\r\n  };\r\n\r\n  var chart = new ApexCharts(document.querySelector(\"#newAdmissions\"), options);\r\n  chart.render();\r\n  // ================================ New Admissions Chart End ================================ \r\n\r\n  // ================================ Animated Radial Progress Bar Start ================================ \r\n  $('svg.radial-progress').each(function (index, value) {\r\n    $(this).find($('circle.complete')).removeAttr('style');\r\n  });\r\n\r\n  // Activate progress animation on scroll\r\n  $(window).scroll(function () {\r\n    $('svg.radial-progress').each(function (index, value) {\r\n      // Trigger when the element is fully in the viewport\r\n      if (\r\n        $(window).scrollTop() >= $(this).offset().top - $(window).height() &&\r\n        $(window).scrollTop() <= $(this).offset().top + $(this).height()\r\n      ) {\r\n        // Get percentage of progress\r\n        const percent = $(value).data('percentage');\r\n        // Get radius of the svg's circle.complete\r\n        const radius = $(this).find($('circle.complete')).attr('r');\r\n        // Get circumference (2πr)\r\n        const circumference = 2 * Math.PI * radius;\r\n        // Get stroke-dashoffset value based on the percentage of the circumference\r\n        const strokeDashOffset = circumference - ((percent * circumference) / 100);\r\n        // Transition progress for 1.25 seconds\r\n        $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);\r\n      }\r\n    });\r\n  }).trigger('scroll');\r\n  // ================================ Animated Radial Progress Bar End ================================\r\n\r\n  // ============================= Calendar Js Start =================================\r\n  let display = document.querySelector(\".display\");\r\n  let days = document.querySelector(\".days\");\r\n  let previous = document.querySelector(\".left\");\r\n  let next = document.querySelector(\".right\");\r\n\r\n  let date = new Date();\r\n\r\n  let year = date.getFullYear();\r\n  let month = date.getMonth();\r\n\r\n  function displayCalendar() {\r\n    const firstDay = new Date(year, month, 1);\r\n\r\n    const lastDay = new Date(year, month + 1, 0);\r\n\r\n    const firstDayIndex = firstDay.getDay(); //4\r\n\r\n    const numberOfDays = lastDay.getDate(); //31\r\n\r\n    let formattedDate = date.toLocaleString(\"en-US\", {\r\n      month: \"long\",\r\n      year: \"numeric\"\r\n    });\r\n\r\n    display.innerHTML = `${formattedDate}`;\r\n\r\n    for (let x = 1; x <= firstDayIndex; x++) {\r\n      const div = document.createElement(\"div\");\r\n      div.innerHTML += \"\";\r\n\r\n      days.appendChild(div);\r\n    }\r\n\r\n    for (let i = 1; i <= numberOfDays; i++) {\r\n      let div = document.createElement(\"div\");\r\n      let currentDate = new Date(year, month, i);\r\n\r\n      div.dataset.date = currentDate.toDateString();\r\n\r\n      div.innerHTML += i;\r\n      days.appendChild(div);\r\n      if (\r\n        currentDate.getFullYear() === new Date().getFullYear() &&\r\n        currentDate.getMonth() === new Date().getMonth() &&\r\n        currentDate.getDate() === new Date().getDate()\r\n      ) {\r\n        div.classList.add(\"current-date\");\r\n      }\r\n    }\r\n  }\r\n\r\n  // Call the function to display the calendar\r\n  displayCalendar();\r\n\r\n  previous.addEventListener(\"click\", () => {\r\n    days.innerHTML = \"\";\r\n\r\n    if (month < 0) {\r\n      month = 11;\r\n      year = year - 1;\r\n    }\r\n    month = month - 1;\r\n    date.setMonth(month);\r\n    displayCalendar();\r\n  });\r\n\r\n  next.addEventListener(\"click\", () => {\r\n    days.innerHTML = \"\";\r\n\r\n    if (month > 11) {\r\n      month = 0;\r\n      year = year + 1;\r\n    }\r\n\r\n    month = month + 1;\r\n    date.setMonth(month);\r\n\r\n    displayCalendar();\r\n  });\r\n  // ============================= Calendar Js End =================================";

export default function IndexPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <p className="text-neutral-600 mt-4 mb-0">School → Manage your school, track attendance, expense, and net worth.</p>
        </div>
      </div>
      
          <div className="mt-24">
            <div className="row gy-4">
              <div className="col-xxl-8">
                <div className="row gy-4">
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-1 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-warning-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon1.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-2 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-blue-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon2.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-3 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-purple-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon3.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-4 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-primary-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon4.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-5 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-success-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon5.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6">
                    <div className="card shadow-1 radius-8 gradient-bg-end-6 h-100">
                      <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-16">
                          <div
                            className="w-44-px h-44-px bg-cyan-600 rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/dashboard-icon6.png" alt="Icon" />
                          </div>
                          <p className="fw-medium text-primary-light mb-1">Total Student</p>
                        </div>
                        <h6 className="mb-0">20,000</h6>
                        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                          <span className="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
                            10%
                            <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                          </span>
                          +5 This Month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div
                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                      <h6 className="text-lg mb-0">Student Attendance</h6>
                    </div>
                    <div className="p-20">
                      <div className="d-flex gap-6">
                        <div className="h-44-px bg-primary-600 rounded" style={{width: "87%"}}></div>
                        <div className="h-44-px bg-warning-600 rounded" style={{width: "40%"}}></div>
                        <div className="h-44-px bg-purple-600 rounded" style={{width: "20%"}}></div>
                        <div className="h-44-px bg-success-600 rounded" style={{width: "20%"}}></div>
                      </div>
                      <div className="mt-32 d-flex flex-column gap-24">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px radius-2 bg-primary-600"></span>
                            <span className="text-neutral-600">Present </span>
                          </div>
                          <span className="fw-semibold text-primary-light">87%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px radius-2 bg-warning-600"></span>
                            <span className="text-neutral-600">Absent: </span>
                          </div>
                          <span className="fw-semibold text-primary-light">40%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px radius-2 bg-purple-600"></span>
                            <span className="text-neutral-600">Late </span>
                          </div>
                          <span className="fw-semibold text-primary-light">20%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px radius-2 bg-success-600"></span>
                            <span className="text-neutral-600">Half day </span>
                          </div>
                          <span className="fw-semibold text-primary-light">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-xxl-8">
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="card h-100">
                          <div className="card-body p-0">
                            <div
                              className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                              <h6 className="text-lg mb-0">Revenue Statistic</h6>
                            </div>
                            <div className="p-20">
                              <ul className="d-flex flex-wrap align-items-center justify-content-center mb-16 gap-3">
                                <li className="d-flex align-items-center gap-8">
                                  <span className="w-12-px h-12-px radius-2 rotate-45-deg bg-primary-600"></span>
                                  <span className="text-secondary-light text-sm fw-semibold">
                                    Total Fee:
                                    <span className="text-primary-light fw-bold">$500</span>
                                  </span>
                                </li>
                                <li className="d-flex align-items-center gap-8">
                                  <span className="w-12-px h-12-px radius-2 rotate-45-deg bg-warning-600"></span>
                                  <span className="text-secondary-light text-sm font-semibold">
                                    Collected Fee:
                                    <span className="text-primary-light fw-bold"> $300</span>
                                  </span>
                                </li>
                              </ul>
                              <div id="revenueStatistic"></div>
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
                                      <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                                      View
                                    </button>
                                  </li>
                                  <li>
                                    <button type="button"
                                      className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                      data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                      <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
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
                              <div className="pe-20 d-flex flex-column gap-20 max-h-462-px overflow-y-auto scroll-sm">
                                <div className="d-flex align-items-start gap-16">
                                  <img src="/assets/images/thumbs/notice-board-img1.png" alt="Thumbnail"
                                    className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                  <div className="">
                                    <h6 className="mb-4 text-lg">Admin</h6>
                                    <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy text of the
                                      printing and typesetti</p>
                                    <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-start gap-16">
                                  <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                    className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                  <div className="">
                                    <h6 className="mb-4 text-lg">Kathryn Murphy</h6>
                                    <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy text of the
                                      printing and typesett ing industry Lorem Ipsum is simply dummy text of the printing and
                                      typesetting industry.</p>
                                    <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-start gap-16">
                                  <img src="/assets/images/thumbs/notice-board-img3.png" alt="Thumbnail"
                                    className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                  <div className="">
                                    <h6 className="mb-4 text-lg">Admin</h6>
                                    <p className="text-secondary-light text-sm mb-0">Lorem Ipsum is simply dummy text of the
                                      printing and typesetti</p>
                                    <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-start gap-16">
                                  <img src="/assets/images/thumbs/notice-board-img2.png" alt="Thumbnail"
                                    className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                  <div className="">
                                    <h6 className="mb-4 text-lg">John Doe</h6>
                                    <p className="text-secondary-light text-sm mb-0">Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Laborum voluptas corporis qui dolore est odit officia fuga?</p>
                                    <span className="text-secondary-light text-sm mb-0 mt-4">25 Jan 2024</span>
                                  </div>
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
                              <h6 className="text-lg mb-0">Leave Requests</h6>
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
                                      <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                                      View
                                    </button>
                                  </li>
                                  <li>
                                    <button type="button"
                                      className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                      data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                      <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
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
                              <div className="pe-20 d-flex flex-column gap-28 max-h-462-px overflow-y-auto scroll-sm">
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img1.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Darlene Robertson</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img2.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Esther Howard</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img3.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Kristin Watson</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img4.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Leslie Alexander</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img5.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Dianne Russell</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-16">
                                  <div className="d-flex align-items-start gap-16">
                                    <img src="/assets/images/thumbs/leave-request-img3.png" alt="Thumbnail"
                                      className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                                    <div className="">
                                      <h6 className="mb-0 text-lg">Kristin Watson</h6>
                                      <span className="text-secondary-light text-sm mb-0">English Teacher</span>
                                    </div>
                                  </div>
                                  <div className="text-end">
                                    <span className="d-block fw-bold text-primary-light">3 Days</span>
                                    <p className="text-secondary-light text-sm mb-0">Apply on: 10 April</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4">
                    <div className="card h-100">
                      <div className="card-body p-0">
                        <div
                          className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                          <h6 className="text-lg mb-0">Calendar</h6>
                        </div>
      
                        <div className="p-20">
                          <div className="calendar">
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
      
                        <div className="ps-20 pt-20 pb-20 border-top border-neutral-200">
                          <h6 className="text-lg mb-20">Upcoming Events</h6>
                          <div className="pe-20 d-flex flex-column gap-32 overflow-y-auto max-h-500-px scroll-sm">
                            <div className="d-flex align-items-center justify-content-between gap-16">
                              <div className="ps-10 border-start-width-3-px border-purple-600">
                                <div className="d-flex align-items-end gap-6">
                                  <h6 className="text-lg fw-normal mb-0">09:00 - 09:45</h6>
                                  <span className="text-xs text-secondary-light line-height-1 mb-2">AM</span>
                                </div>
                                <p className="text-secondary-light mt-4 mb-2 text-sm">Marketing Strategy Kickoff</p>
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
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
                                <p className="text-secondary-light mt-4 mb-2 text-sm">Product Design Brainstorm</p>
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
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
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
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
                                <p className="text-secondary-light mt-4 mb-2 text-sm">Sprint Planning & Task Allocation</p>
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
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
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
                                    className="text-primary-600 hover-underline">John</Link></p>
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
                                <p className="text-secondary-light mt-4 mb-2 text-sm">Product Design Brainstorm</p>
                                <p className="text-xs text-secondary-light mb-0">Lead by <Link href="javascript:void(0)"
                                    className="text-primary-600 hover-underline">Leslie Alexander</Link></p>
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
              <div className="col-xxl-4 col-lg-6">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div
                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                      <h6 className="text-lg mb-0">User Overview</h6>
                      <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light"></iconify-icon>
                        </button>
                        <ul className="dropdown-menu p-12 border bg-base shadow">
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalView">
                              <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                              View
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                              <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                              <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1"></iconify-icon>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-20">
                      <div>
                        <div className="mt-40 mb-24 pe-110 position-relative max-w-288-px mx-auto">
                          <div
                            className="w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center">
                            <img src="/assets/images/icons/radial-bg1.png" alt="Image"
                              className="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover" />
                            <h5 className="text-white"> 60% </h5>
                          </div>
                          <div
                            className="w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center position-absolute top-0 end-0 mt--36">
                            <img src="/assets/images/icons/radial-bg2.png" alt="Image"
                              className="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover" />
                            <h5 className="text-white"> 30% </h5>
                          </div>
                          <div
                            className="w-110-px h-110-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x ms-48">
                            <img src="/assets/images/icons/radial-bg3.png" alt="Image"
                              className="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover" />
                            <h5 className="text-white"> 10% </h5>
                          </div>
                        </div>
      
                        <div className="d-flex align-items-center flex-wrap gap-24 justify-content-evenly">
                          <div className="d-flex flex-column align-items-start">
                            <div className="d-flex align-items-center gap-2">
                              <span className="w-12-px h-12-px rounded-pill bg-success-600"></span>
                              <span className="text-secondary-light text-sm fw-normal">Student</span>
                            </div>
                            <h6 className="text-primary-light fw-semibold mb-0 mt-4 text-lg">750</h6>
                          </div>
                          <div className="d-flex flex-column align-items-start">
                            <div className="d-flex align-items-center gap-2">
                              <span className="w-12-px h-12-px rounded-pill bg-warning-600"></span>
                              <span className="text-secondary-light text-sm fw-normal">Teacher</span>
                            </div>
                            <h6 className="text-primary-light fw-semibold mb-0 mt-4 text-lg">56</h6>
                          </div>
                          <div className="d-flex flex-column align-items-start">
                            <div className="d-flex align-items-center gap-2">
                              <span className="w-12-px h-12-px rounded-pill bg-blue-600"></span>
                              <span className="text-secondary-light text-sm fw-normal">Staffs </span>
                            </div>
                            <h6 className="text-primary-light fw-semibold mb-0 mt-4 text-lg">15</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-lg-6">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div
                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                      <h6 className="text-lg mb-0">Income Vs Expense </h6>
                      <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light"></iconify-icon>
                        </button>
                        <ul className="dropdown-menu p-12 border bg-base shadow">
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalView">
                              <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                              View
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                              <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                              <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1"></iconify-icon>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-20">
                      <ul className="d-flex flex-wrap align-items-center justify-content-center mb-16 gap-3">
                        <li className="d-flex align-items-center gap-8">
                          <span className="w-12-px h-12-px rounded-circle bg-primary-600"></span>
                          <span className="text-secondary-light text-sm fw-semibold">
                            Income:
                            <span className="text-primary-light fw-bold">$500</span>
                          </span>
                        </li>
                        <li className="d-flex align-items-center gap-8">
                          <span className="w-12-px h-12-px rounded-circle bg-warning-600"></span>
                          <span className="text-secondary-light text-sm font-semibold">
                            Expense:
                            <span className="text-primary-light fw-bold"> $300</span>
                          </span>
                        </li>
                      </ul>
                      <div id="incomeExpense" className="apexcharts-tooltip-style-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-6">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div
                      className="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
                      <h6 className="text-lg mb-0">Top Teachers</h6>
                      <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light"></iconify-icon>
                        </button>
                        <ul className="dropdown-menu p-12 border bg-base shadow">
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalView">
                              <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                              View
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                              <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                              <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1"></iconify-icon>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ps-20 pt-20 pb-20">
                      <div className="pe-20 d-flex flex-column gap-20 max-h-462-px overflow-y-auto scroll-sm">
                        <div className="d-flex align-items-center justify-content-between gap-16">
                          <div className="d-flex align-items-start gap-16">
                            <img src="/assets/images/thumbs/top-teacher-img1.png" alt="Thumbnail"
                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                            <div className="">
                              <h6 className="mb-0 text-lg">Theresa Webb</h6>
                              <span className="text-secondary-light text-sm mb-0">example@gmail.com</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="d-block fw-semibold text-primary-light">Mathematics</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-16">
                          <div className="d-flex align-items-start gap-16">
                            <img src="/assets/images/thumbs/top-teacher-img2.png" alt="Thumbnail"
                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                            <div className="">
                              <h6 className="mb-0 text-lg">Darrell Steward</h6>
                              <span className="text-secondary-light text-sm mb-0">example@gmail.com</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="d-block fw-semibold text-primary-light">Physics</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-16">
                          <div className="d-flex align-items-start gap-16">
                            <img src="/assets/images/thumbs/top-teacher-img3.png" alt="Thumbnail"
                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                            <div className="">
                              <h6 className="mb-0 text-lg">Jane Cooper</h6>
                              <span className="text-secondary-light text-sm mb-0">example@gmail.com</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="d-block fw-semibold text-primary-light">Biology</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-16">
                          <div className="d-flex align-items-start gap-16">
                            <img src="/assets/images/thumbs/top-teacher-img4.png" alt="Thumbnail"
                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                            <div className="">
                              <h6 className="mb-0 text-lg">Savannah Nguyen</h6>
                              <span className="text-secondary-light text-sm mb-0">example@gmail.com</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="d-block fw-semibold text-primary-light">English</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-16">
                          <div className="d-flex align-items-start gap-16">
                            <img src="/assets/images/thumbs/top-teacher-img5.png" alt="Thumbnail"
                              className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                            <div className="">
                              <h6 className="mb-0 text-lg">Eleanor Pena</h6>
                              <span className="text-secondary-light text-sm mb-0">example@gmail.com</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="d-block fw-semibold text-primary-light">Math</span>
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
                      <h6 className="text-lg mb-0">New Admissions</h6>
                      <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light"></iconify-icon>
                        </button>
                        <ul className="dropdown-menu p-12 border bg-base shadow">
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalView">
                              <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                              View
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                              <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button type="button"
                              className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                              data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                              <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1"></iconify-icon>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-20">
                      <div className="position-relative text-center">
                        <div id="newAdmissions" className="y-value-left apexcharts-tooltip-z-none"></div>
                        <div className="text-center position-absolute top-50 start-50 translate-middle">
                          <h5 className="mb-4">50</h5>
                          <span className="text-secondary-light">Total Admissions</span>
                        </div>
                      </div>
                      <ul className="d-flex flex-wrap align-items-center justify-content-center mt-48 gap-24">
                        <li className="d-flex align-items-center gap-2">
                          <span className="w-12-px h-12-px radius-2 bg-success-600 rotate-45-deg"></span>
                          <div className="">
                            <span className="text-secondary-light fw-medium">
                              English:
                              <span className="fw-bold text-primary-light">15</span>
                            </span>
                          </div>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <span className="w-12-px h-12-px radius-2 bg-blue-600 rotate-45-deg"></span>
                          <div className="">
                            <span className="text-secondary-light fw-medium">
                              Math:
                              <span className="fw-bold text-primary-light">15</span>
                            </span>
                          </div>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <span className="w-12-px h-12-px radius-2 bg-warning-600 rotate-45-deg"></span>
                          <div className="">
                            <span className="text-secondary-light fw-medium">
                              Biology:
                              <span className="fw-bold text-primary-light">5</span>
                            </span>
                          </div>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <span className="w-12-px h-12-px radius-2 bg-primary-600 rotate-45-deg"></span>
                          <div className="">
                            <span className="text-secondary-light fw-medium">
                              Physics:
                              <span className="fw-bold text-primary-light">10</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="card radius-12 border-0 h-100">
                  <div
                    className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                    <h6 className="mb-2 fw-bold text-lg">Top Student</h6>
                    <div className="dropdown">
                      <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light"></iconify-icon>
                      </button>
                      <ul className="dropdown-menu p-12 border bg-base shadow">
                        <li>
                          <button type="button"
                            className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                            data-bs-toggle="modal" data-bs-target="#exampleModalView">
                            <iconify-icon icon="hugeicons:view" className="icon text-lg line-height-1"></iconify-icon>
                            View
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                            data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                            <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1"></iconify-icon>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button type="button"
                            className="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                            data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                            <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1"></iconify-icon>
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column gap-28">
                      <div className="d-flex align-items-center justify-content-between gap-10">
                        <div className="d-flex align-items-center gap-12">
                          <span className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/thumbs/avatar-img1.png"
                              className="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon" />
                          </span>
                          <div className="">
                            <h6 className="text-sm mb-2">Brooklyn Simmons</h6>
                            <span className="text-xs text-secondary-light">Class: Six</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-8">
                          <span className="text-sm text-secondary-light">Marks</span>
                          <span className="text-primary-light text-sm d-block text-end">
                            <svg className="radial-progress w-44-px" data-percentage="20" viewBox="0 0 80 80">
                              <circle className="incomplete stroke-8-px opacity-02 stroke-blue" cx="40" cy="40" r="35"></circle>
                              <circle className="complete stroke-8-px stroke-blue" cx="40" cy="40" r="35">
                              </circle>
                              <text className="percentage fill-black" x="50%" y="57%"
                                transform="matrix(0, 1, -1, 0, 80, 0)">20</text>
                            </svg>
                          </span>
                        </div>
                      </div>
      
                      <div className="d-flex align-items-center justify-content-between gap-10">
                        <div className="d-flex align-items-center gap-12">
                          <span className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/thumbs/avatar-img2.png"
                              className="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon" />
                          </span>
                          <div className="">
                            <h6 className="text-sm mb-2">Floyd Miles</h6>
                            <span className="text-xs text-secondary-light">Class: Seven</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-8">
                          <span className="text-sm text-secondary-light">Marks</span>
                          <span className="text-primary-light text-sm d-block text-end">
                            <svg className="radial-progress w-44-px" data-percentage="35" viewBox="0 0 80 80">
                              <circle className="incomplete stroke-8-px opacity-02 stroke-red" cx="40" cy="40" r="35"></circle>
                              <circle className="complete stroke-8-px stroke-red" cx="40" cy="40" r="35">
                              </circle>
                              <text className="percentage fill-black" x="50%" y="57%"
                                transform="matrix(0, 1, -1, 0, 80, 0)">35</text>
                            </svg>
                          </span>
                        </div>
                      </div>
      
                      <div className="d-flex align-items-center justify-content-between gap-10">
                        <div className="d-flex align-items-center gap-12">
                          <span className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/thumbs/avatar-img2.png"
                              className="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon" />
                          </span>
                          <div className="">
                            <h6 className="text-sm mb-2">Courtney Henry</h6>
                            <span className="text-xs text-secondary-light">Class: Eight</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-8">
                          <span className="text-sm text-secondary-light">Marks</span>
                          <span className="text-primary-light text-sm d-block text-end">
                            <svg className="radial-progress w-44-px" data-percentage="45" viewBox="0 0 80 80">
                              <circle className="incomplete stroke-8-px opacity-02 stroke-warning" cx="40" cy="40" r="35">
                              </circle>
                              <circle className="complete stroke-8-px stroke-warning" cx="40" cy="40" r="35">
                              </circle>
                              <text className="percentage fill-black" x="50%" y="57%"
                                transform="matrix(0, 1, -1, 0, 80, 0)">45</text>
                            </svg>
                          </span>
                        </div>
                      </div>
      
                      <div className="d-flex align-items-center justify-content-between gap-10">
                        <div className="d-flex align-items-center gap-12">
                          <span className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/thumbs/avatar-img4.png"
                              className="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon" />
                          </span>
                          <div className="">
                            <h6 className="text-sm mb-2">Kathryn Murphy</h6>
                            <span className="text-xs text-secondary-light">Class: Nine</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-8">
                          <span className="text-sm text-secondary-light">Marks</span>
                          <span className="text-primary-light text-sm d-block text-end">
                            <svg className="radial-progress w-44-px" data-percentage="65" viewBox="0 0 80 80">
                              <circle className="incomplete stroke-8-px opacity-02 stroke-green" cx="40" cy="40" r="35"></circle>
                              <circle className="complete stroke-8-px stroke-green" cx="40" cy="40" r="35">
                              </circle>
                              <text className="percentage fill-black" x="50%" y="57%"
                                transform="matrix(0, 1, -1, 0, 80, 0)">65</text>
                            </svg>
                          </span>
                        </div>
                      </div>
      
                      <div className="d-flex align-items-center justify-content-between gap-10">
                        <div className="d-flex align-items-center gap-12">
                          <span className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/assets/images/thumbs/avatar-img5.png"
                              className="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon" />
                          </span>
                          <div className="">
                            <h6 className="text-sm mb-2">Annette Black</h6>
                            <span className="text-xs text-secondary-light">Class: Ten</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-8">
                          <span className="text-sm text-secondary-light">Marks</span>
                          <span className="text-primary-light text-sm d-block text-end">
                            <svg className="radial-progress w-44-px" data-percentage="65" viewBox="0 0 80 80">
                              <circle className="incomplete stroke-8-px opacity-02 stroke-blue" cx="40" cy="40" r="35"></circle>
                              <circle className="complete stroke-8-px stroke-blue" cx="40" cy="40" r="35">
                              </circle>
                              <text className="percentage fill-black" x="50%" y="57%"
                                transform="matrix(0, 1, -1, 0, 80, 0)">65</text>
                            </svg>
                          </span>
                        </div>
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      <Script
        id="page-index-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
