/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ============================ Area chart js start ==============================\r\n    function createChart(chartId, chartColor, curveClass) {\r\n\r\n        let currentYear = new Date().getFullYear();\r\n\r\n        var options = {\r\n            series: [\r\n                {\r\n                    name: 'series1',\r\n                    data: [31, 24, 30, 25, 32, 28, 40, 32, 42, 38, 40, 32, 38, 35, 45],\r\n                },\r\n            ],\r\n            chart: {\r\n                type: 'area',\r\n                width: 150,\r\n                height: 60,\r\n                sparkline: {\r\n                    enabled: true // Remove whitespace\r\n                },\r\n\r\n                toolbar: {\r\n                    show: false\r\n                },\r\n                padding: {\r\n                    left: 0,\r\n                    right: 0,\r\n                    top: 0,\r\n                    bottom: 0\r\n                },\r\n                events: {\r\n                    mounted: function (chartContext, config) {\r\n                        // Apply CSS blur to markers\r\n                        document.querySelectorAll(`#${chartId} .apexcharts-marker`).forEach(marker => {\r\n                            marker.style.filter = 'blur(2px)';\r\n                        });\r\n                    },\r\n                    updated: function (chartContext, config) {\r\n                        // Apply CSS blur to markers\r\n                        document.querySelectorAll(`#${chartId} .apexcharts-marker`).forEach(marker => {\r\n                            marker.style.filter = 'blur(3px)';\r\n                        });\r\n                    }\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            stroke: {\r\n                curve: `${curveClass}`,\r\n                width: 2,\r\n                colors: [chartColor],\r\n                lineCap: 'round'\r\n            },\r\n            grid: {\r\n                show: true,\r\n                borderColor: 'transparent',\r\n                strokeDashArray: 0,\r\n                position: 'back',\r\n                xaxis: {\r\n                    lines: {\r\n                        show: false\r\n                    }\r\n                },\r\n                yaxis: {\r\n                    lines: {\r\n                        show: false\r\n                    }\r\n                },\r\n                row: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                column: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                padding: {\r\n                    top: -3,\r\n                    right: 0,\r\n                    bottom: 0,\r\n                    left: 0\r\n                },\r\n            },\r\n            fill: {\r\n                type: 'gradient',\r\n                colors: [chartColor], // Set the starting color (top color) here\r\n                gradient: {\r\n                    shade: 'light', // Gradient shading type\r\n                    type: 'vertical',  // Gradient direction (vertical)\r\n                    shadeIntensity: 0.5, // Intensity of the gradient shading\r\n                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)\r\n                    inverseColors: false, // Do not invert colors\r\n                    opacityFrom: .5, // Starting opacity\r\n                    opacityTo: 0.3,  // Ending opacity\r\n                    stops: [0, 100],\r\n                },\r\n            },\r\n            // Customize the circle marker color on hover\r\n            markers: {\r\n                colors: [chartColor],\r\n                strokeWidth: 2,\r\n                size: 0,\r\n                hover: {\r\n                    size: 8\r\n                }\r\n            },\r\n            xaxis: {\r\n                labels: {\r\n                    show: false\r\n                },\r\n                categories: [`Jan ${currentYear}`, `Feb ${currentYear}`, `Mar ${currentYear}`, `Apr ${currentYear}`, `May ${currentYear}`, `Jun ${currentYear}`, `Jul ${currentYear}`, `Aug ${currentYear}`, `Sep ${currentYear}`, `Oct ${currentYear}`, `Nov ${currentYear}`, `Dec ${currentYear}`],\r\n                tooltip: {\r\n                    enabled: false,\r\n                },\r\n            },\r\n            yaxis: {\r\n                labels: {\r\n                    show: false\r\n                }\r\n            },\r\n            tooltip: {\r\n                x: {\r\n                    format: 'dd/MM/yy HH:mm'\r\n                },\r\n            },\r\n        };\r\n\r\n        var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n        chart.render();\r\n    }\r\n\r\n    createChart('enrolledCourses', '#0A51CE', 'smooth');\r\n    createChart('totalEarnings', '#00B252', 'straight');\r\n    // ============================ Area chart js End ==============================\r\n\r\n    // ============================ Bar chart js start ==============================\r\n    function createBarChart(barChartId, barChartColor) {\r\n        var options = {\r\n            series: [{\r\n                name: \"Sales\",\r\n                data: [{\r\n                    x: 'Sun',\r\n                    y: 15,\r\n                }, {\r\n                    x: 'Mon',\r\n                    y: 12,\r\n                }, {\r\n                    x: 'Tue',\r\n                    y: 18,\r\n                }, {\r\n                    x: 'Wed',\r\n                    y: 20,\r\n                }, {\r\n                    x: 'Thu',\r\n                    y: 13,\r\n                }]\r\n            }],\r\n            chart: {\r\n                type: 'bar',\r\n                height: 80,\r\n                width: 140,\r\n                sparkline: {\r\n                    enabled: true // Remove whitespace\r\n                },\r\n                toolbar: {\r\n                    show: false\r\n                },\r\n            },\r\n            plotOptions: {\r\n                bar: {\r\n                    borderRadius: 4,\r\n                    horizontal: false,\r\n                    columnWidth: 4,\r\n                    columnWidth: '60%',\r\n                    endingShape: 'rounded',\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            fill: {\r\n                type: 'gradient',\r\n                colors: [barChartColor], // Set the starting color (top color) here\r\n                gradient: {\r\n                    shade: 'light', // Gradient shading type\r\n                    type: 'vertical',  // Gradient direction (vertical)\r\n                    shadeIntensity: 0.5, // Intensity of the gradient shading\r\n                    gradientToColors: [barChartColor], // Bottom gradient color (with transparency)\r\n                    inverseColors: false, // Do not invert colors\r\n                    opacityFrom: 1, // Starting opacity\r\n                    opacityTo: 1,  // Ending opacity\r\n                    stops: [0, 100],\r\n                },\r\n            },\r\n            grid: {\r\n                show: false,\r\n                borderColor: '#D1D5DB',\r\n                strokeDashArray: 4, // Use a number for dashed style\r\n                position: 'back',\r\n                padding: {\r\n                    top: -10,\r\n                    right: -10,\r\n                    bottom: -10,\r\n                    left: -10\r\n                }\r\n            },\r\n            xaxis: {\r\n                type: 'category',\r\n                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu']\r\n            },\r\n            yaxis: {\r\n                show: false,\r\n            },\r\n        };\r\n\r\n        var chart = new ApexCharts(document.querySelector(`#${barChartId}`), options);\r\n        chart.render();\r\n    }\r\n\r\n    createBarChart('barChart', '#8247FF');\r\n    createBarChart('barChartTwo', '#FEAC3B');\r\n    // ============================ Bar chart js End ==============================\r\n\r\n    // ============================ Month Order Chart start ==========================\r\n    var options = {\r\n        series: [\r\n            {\r\n                name: 'Actual',\r\n                data: [\r\n                    {\r\n                        x: 'Jan',\r\n                        y: 100,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 103,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Feb',\r\n                        y: 452,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 455,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Mar',\r\n                        y: 303,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 306,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Apr',\r\n                        y: 503,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 506,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'May',\r\n                        y: 93,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 96,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Jun',\r\n                        y: 302,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 305,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Jul',\r\n                        y: 452,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 455,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Aug',\r\n                        y: 153,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 156,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Sep',\r\n                        y: 453,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 456,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Oct',\r\n                        y: 103,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 106,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Nov',\r\n                        y: 253,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 256,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                    {\r\n                        x: 'Dec',\r\n                        y: 153,\r\n                        goals: [\r\n                            {\r\n                                name: 'Expected',\r\n                                value: 156,\r\n                                strokeHeight: 3,\r\n                                strokeColor: '#25A194'\r\n                            }\r\n                        ]\r\n                    },\r\n                ]\r\n            }\r\n        ],\r\n        chart: {\r\n            height: 280,\r\n            type: 'bar',\r\n            toolbar: {\r\n                show: false\r\n            },\r\n        },\r\n        plotOptions: {\r\n            bar: {\r\n                columnWidth: '100%'\r\n            }\r\n        },\r\n        colors: ['#25A1941F', \"#000\"],\r\n        dataLabels: {\r\n            enabled: false\r\n        },\r\n        legend: {\r\n            show: false,\r\n            showForSingleSeries: true,\r\n            customLegendItems: ['Actual', 'Expected'],\r\n        }\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(\"#earningStatistic\"), options);\r\n    chart.render();\r\n    // ============================ Month Order Chart End ==========================\r\n\r\n    // ================================ Animated Radial Progress Bar Start ================================ \r\n    $('svg.radial-progress').each(function (index, value) {\r\n        $(this).find($('circle.complete')).removeAttr('style');\r\n    });\r\n\r\n    // Activate progress animation on scroll\r\n    $(window).scroll(function () {\r\n        $('svg.radial-progress').each(function (index, value) {\r\n            // Trigger when the element is fully in the viewport\r\n            if (\r\n                $(window).scrollTop() >= $(this).offset().top - $(window).height() &&\r\n                $(window).scrollTop() <= $(this).offset().top + $(this).height()\r\n            ) {\r\n                // Get percentage of progress\r\n                const percent = $(value).data('percentage');\r\n                // Get radius of the svg's circle.complete\r\n                const radius = $(this).find($('circle.complete')).attr('r');\r\n                // Get circumference (2πr)\r\n                const circumference = 2 * Math.PI * radius;\r\n                // Get stroke-dashoffset value based on the percentage of the circumference\r\n                const strokeDashOffset = circumference - ((percent * circumference) / 100);\r\n                // Transition progress for 1.25 seconds\r\n                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);\r\n            }\r\n        });\r\n    }).trigger('scroll');\r\n    // ================================ Animated Radial Progress Bar End ================================ \r\n\r\n    // ===================== Average Enrollment Rate Start =============================== \r\n    function createChartTwo(chartId, color1, color2) {\r\n        var options = {\r\n            series: [{\r\n                name: 'Free Course',\r\n                data: [48, 35, 55, 32, 48, 30, 55, 50, 57]\r\n            }, {\r\n                name: 'Paid Course',\r\n                data: [12, 20, 15, 26, 22, 60, 40, 48, 25]\r\n            }],\r\n            legend: {\r\n                show: false\r\n            },\r\n            chart: {\r\n                type: 'area',\r\n                width: '100%',\r\n                height: 260,\r\n                toolbar: {\r\n                    show: false\r\n                },\r\n                padding: {\r\n                    left: 0,\r\n                    right: 0,\r\n                    top: 0,\r\n                    bottom: 0\r\n                }\r\n            },\r\n            dataLabels: {\r\n                enabled: false\r\n            },\r\n            stroke: {\r\n                curve: 'smooth',\r\n                width: 3,\r\n                colors: [color1, color2], // Use two colors for the lines\r\n                lineCap: 'round'\r\n            },\r\n            grid: {\r\n                show: true,\r\n                borderColor: '#D1D5DB',\r\n                strokeDashArray: 1,\r\n                position: 'back',\r\n                xaxis: {\r\n                    lines: {\r\n                        show: false\r\n                    }\r\n                },\r\n                yaxis: {\r\n                    lines: {\r\n                        show: true\r\n                    }\r\n                },\r\n                row: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                column: {\r\n                    colors: undefined,\r\n                    opacity: 0.5\r\n                },\r\n                padding: {\r\n                    top: -20,\r\n                    right: 0,\r\n                    bottom: -10,\r\n                    left: 0\r\n                },\r\n            },\r\n            colors: [color1, color2],\r\n            markers: {\r\n                colors: [color1, color2], // Use two colors for the markers\r\n                strokeWidth: 3,\r\n                size: 0,\r\n                hover: {\r\n                    size: 10\r\n                }\r\n            },\r\n            xaxis: {\r\n                labels: {\r\n                    show: false\r\n                },\r\n                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n                tooltip: {\r\n                    enabled: false\r\n                },\r\n                labels: {\r\n                    formatter: function (value) {\r\n                        return value;\r\n                    },\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                }\r\n            },\r\n            yaxis: {\r\n                labels: {\r\n                    style: {\r\n                        fontSize: \"14px\"\r\n                    }\r\n                },\r\n            },\r\n            tooltip: {\r\n                x: {\r\n                    format: 'dd/MM/yy HH:mm'\r\n                }\r\n            }\r\n        };\r\n\r\n        var chart = new ApexCharts(document.querySelector(`#${chartId}`), options);\r\n        chart.render();\r\n    }\r\n\r\n    createChartTwo('courseActivityChart', '#487FFF', '#FF9F29');\r\n    // ===================== Average Enrollment Rate End =============================== \r\n\r\n    // ================================ Users Overview Donut chart Start ================================ \r\n    var options = {\r\n        series: [300, 200, 500, 172],\r\n        colors: ['#487FFF', '#9935FE', '#FF9F29', \"#45B369\"],\r\n        labels: ['Total Visitors', 'Registrations', 'Total Page Views', 'Registrations'],\r\n        legend: {\r\n            show: false\r\n        },\r\n        chart: {\r\n            type: 'donut',\r\n            height: 270,\r\n            sparkline: {\r\n                enabled: true // Remove whitespace\r\n            },\r\n            margin: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            },\r\n            padding: {\r\n                top: 0,\r\n                right: 0,\r\n                bottom: 0,\r\n                left: 0\r\n            }\r\n        },\r\n        stroke: {\r\n            width: 0,\r\n        },\r\n        dataLabels: {\r\n            enabled: false\r\n        },\r\n        responsive: [{\r\n            breakpoint: 480,\r\n            options: {\r\n                chart: {\r\n                    width: 200\r\n                },\r\n                legend: {\r\n                    position: 'bottom'\r\n                }\r\n            }\r\n        }],\r\n    };\r\n\r\n    var chart = new ApexCharts(document.querySelector(\"#userOverviewDonutChart\"), options);\r\n    chart.render();\r\n    // ================================ Users Overview Donut chart End ================================ \r\n\r\n    // ============================= Calendar Js Start =================================\r\n    let display = document.querySelector(\".display\");\r\n    let days = document.querySelector(\".days\");\r\n    let previous = document.querySelector(\".left\");\r\n    let next = document.querySelector(\".right\");\r\n\r\n    let date = new Date();\r\n\r\n    let year = date.getFullYear();\r\n    let month = date.getMonth();\r\n\r\n    function displayCalendar() {\r\n        const firstDay = new Date(year, month, 1);\r\n\r\n        const lastDay = new Date(year, month + 1, 0);\r\n\r\n        const firstDayIndex = firstDay.getDay(); //4\r\n\r\n        const numberOfDays = lastDay.getDate(); //31\r\n\r\n        let formattedDate = date.toLocaleString(\"en-US\", {\r\n            month: \"long\",\r\n            year: \"numeric\"\r\n        });\r\n\r\n        display.innerHTML = `${formattedDate}`;\r\n\r\n        for (let x = 1; x <= firstDayIndex; x++) {\r\n            const div = document.createElement(\"div\");\r\n            div.innerHTML += \"\";\r\n\r\n            days.appendChild(div);\r\n        }\r\n\r\n        for (let i = 1; i <= numberOfDays; i++) {\r\n            let div = document.createElement(\"div\");\r\n            let currentDate = new Date(year, month, i);\r\n\r\n            div.dataset.date = currentDate.toDateString();\r\n\r\n            div.innerHTML += i;\r\n            days.appendChild(div);\r\n            if (\r\n                currentDate.getFullYear() === new Date().getFullYear() &&\r\n                currentDate.getMonth() === new Date().getMonth() &&\r\n                currentDate.getDate() === new Date().getDate()\r\n            ) {\r\n                div.classList.add(\"current-date\");\r\n            }\r\n        }\r\n    }\r\n\r\n    // Call the function to display the calendar\r\n    displayCalendar();\r\n\r\n    previous.addEventListener(\"click\", () => {\r\n        days.innerHTML = \"\";\r\n\r\n        if (month < 0) {\r\n            month = 11;\r\n            year = year - 1;\r\n        }\r\n        month = month - 1;\r\n        date.setMonth(month);\r\n        displayCalendar();\r\n    });\r\n\r\n    next.addEventListener(\"click\", () => {\r\n        days.innerHTML = \"\";\r\n\r\n        if (month > 11) {\r\n            month = 0;\r\n            year = year + 1;\r\n        }\r\n\r\n        month = month + 1;\r\n        date.setMonth(month);\r\n\r\n        displayCalendar();\r\n    });\r\n    // ============================= Calendar Js End =================================";

export default function Index5Page() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <p className="text-neutral-600 mt-4 mb-0">LMS → Manage courses, students, assignments and performance metrics in one centralized LMS Dashboard.</p>
        </div>
      </div>
      
              <div className="mt-24">
                  <div className="row gy-4">
      
                      
                      <div className="col-xxl-6">
                          <div className="bg-base rounded-3 p-20">
                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <div className="border rounded-3">
                                          <div className="px-16 py-12 d-flex gap-8 align-items-center">
                                              <span
                                                  className="d-flex align-items-center justify-content-center w-32-px h-32-px rounded-circle bg-primary-100">
                                                  <img src="/assets/images/icons/lms-icon-1.png" alt="Icon" />
                                              </span>
                                              <span className="text-primary-light fw-medium">Enrolled Courses</span>
                                          </div>
                                          <div className="position-relative z-1">
                                              <img src="/assets/images/icons/lms-card-gradient-bg1.png"
                                                  className="position-absolute w-100 h-100 z-n1 object-fit-cover lms-card-gradient-bg"
                                                  alt="Gradient BG" />
                                              <div
                                                  className="px-16 py-12 d-flex align-items-center justify-content-between gap-12 flex-wrap">
                                                  <div className="">
                                                      <h6 className="mb-6">500</h6>
                                                      <span
                                                          className="fw-medium text-success-600 text-md d-flex gap-6 align-items-center">
                                                          <i
                                                              className="text-lg line-height-1 fw-medium ri-arrow-left-up-line"></i>
                                                          43,9%
                                                      </span>
                                                      <span className="text-secondary-light fw-medium mt-6 d-block">From last
                                                          month</span>
                                                  </div>
                                                  <div className="">
                                                      <div id="enrolledCourses"
                                                          className="remove-tooltip-title rounded-tooltip-value"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="border rounded-3">
                                          <div className="px-16 py-12 d-flex gap-8 align-items-center">
                                              <span
                                                  className="d-flex align-items-center justify-content-center w-32-px h-32-px rounded-circle bg-purple-100">
                                                  <img src="/assets/images/icons/lms-icon-2.png" alt="Icon" />
                                              </span>
                                              <span className="text-primary-light fw-medium">Total Students</span>
                                          </div>
                                          <div className="position-relative z-1">
                                              <img src="/assets/images/icons/lms-card-gradient-bg2.png"
                                                  className="position-absolute w-100 h-100 z-n1 object-fit-cover lms-card-gradient-bg"
                                                  alt="Gradient BG" />
                                              <div
                                                  className="px-16 py-12 d-flex align-items-center justify-content-between gap-12 flex-wrap">
                                                  <div className="">
                                                      <h6 className="mb-6">3,570</h6>
                                                      <span
                                                          className="fw-medium text-success-600 text-md d-flex gap-6 align-items-center">
                                                          <i
                                                              className="text-lg line-height-1 fw-medium ri-arrow-left-up-line"></i>
                                                          43,9%
                                                      </span>
                                                      <span className="text-secondary-light fw-medium mt-6 d-block">From last
                                                          month</span>
                                                  </div>
                                                  <div className="">
                                                      <div id="barChart"
                                                          className="barChart remove-tooltip-title rounded-tooltip-value"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="border rounded-3">
                                          <div className="px-16 py-12 d-flex gap-8 align-items-center">
                                              <span
                                                  className="d-flex align-items-center justify-content-center w-32-px h-32-px rounded-circle bg-warning-100">
                                                  <img src="/assets/images/icons/lms-icon-3.png" alt="Icon" />
                                              </span>
                                              <span className="text-primary-light fw-medium">Total Courses</span>
                                          </div>
                                          <div className="position-relative z-1">
                                              <img src="/assets/images/icons/lms-card-gradient-bg3.png"
                                                  className="position-absolute w-100 h-100 z-n1 object-fit-cover lms-card-gradient-bg"
                                                  alt="Gradient BG" />
                                              <div
                                                  className="px-16 py-12 d-flex align-items-center justify-content-between gap-12 flex-wrap">
                                                  <div className="">
                                                      <h6 className="mb-6">30</h6>
                                                      <span
                                                          className="fw-medium text-success-600 text-md d-flex gap-6 align-items-center">
                                                          <i
                                                              className="text-lg line-height-1 fw-medium ri-arrow-left-up-line"></i>
                                                          43,9%
                                                      </span>
                                                      <span className="text-secondary-light fw-medium mt-6 d-block">From last
                                                          month</span>
                                                  </div>
                                                  <div className="">
                                                      <div id="barChartTwo"
                                                          className="barChart remove-tooltip-title rounded-tooltip-value"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="border rounded-3">
                                          <div className="px-16 py-12 d-flex gap-8 align-items-center">
                                              <span
                                                  className="d-flex align-items-center justify-content-center w-32-px h-32-px rounded-circle bg-success-100">
                                                  <img src="/assets/images/icons/lms-icon-4.png" alt="Icon" />
                                              </span>
                                              <span className="text-primary-light fw-medium">Total Earnings</span>
                                          </div>
                                          <div className="position-relative z-1">
                                              <img src="/assets/images/icons/lms-card-gradient-bg4.png"
                                                  className="position-absolute w-100 h-100 z-n1 object-fit-cover lms-card-gradient-bg"
                                                  alt="Gradient BG" />
                                              <div
                                                  className="px-16 py-12 d-flex align-items-center justify-content-between gap-12 flex-wrap">
                                                  <div className="">
                                                      <h6 className="mb-6">$50,000</h6>
                                                      <span
                                                          className="fw-medium text-danger-600 text-md d-flex gap-6 align-items-center">
                                                          <i
                                                              className="text-lg line-height-1 fw-medium ri-arrow-left-down-line"></i>
                                                          20,3%
                                                      </span>
                                                      <span className="text-secondary-light fw-medium mt-6 d-block">From last
                                                          month</span>
                                                  </div>
                                                  <div className="">
                                                      <div id="totalEarnings"
                                                          className="remove-tooltip-title rounded-tooltip-value"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-6">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                                      <h6 className="text-lg mb-0">Earning Statistic</h6>
                                      <select className="form-select bg-base form-select-sm w-auto radius-8">
                                          <option>Yearly</option>
                                          <option>Monthly</option>
                                          <option>Weekly</option>
                                          <option>Today</option>
                                      </select>
                                  </div>
                                  <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
                                      <h6 className="mb-0">$27,200</h6>
                                      <span
                                          className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                                          10% <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon>
                                      </span>
                                      <span className="text-xs fw-medium">+ $1500 Per Day</span>
                                  </div>
                                  <div id="earningStatistic" className=" pt-28 apexcharts-tooltip-style-1"></div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-5">
                          <div className="card h-100">
                              <div className="card-body">
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
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-7">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between pb-16">
                                      <h6 className="text-lg mb-0">Upcoming Sessions</h6>
                                  </div>
      
                                  <div className="row g-3">
                                      <div className="col-sm-6">
                                          <div className="border rounded-3 p-12">
                                              <div className="d-flex  gap-12">
                                                  <div className="d-flex flex-shrink-0">
                                                      <img src="/assets/images/thumbs/session-img1.png" alt="Image"
                                                          className="w-100 h-100 object-fit-cover rounded-3" />
                                                  </div>
                                                  <div className="align-self-center w-100">
                                                      <h6 className="text-md mb-0">Cameron Williamson</h6>
                                                      <span className="fw-medium">English</span>
                                                      <div
                                                          className="mt-8 d-flex align-items-center gap-8 justify-content-between flex-wrap w-100">
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-calendar-2-line"></i>
                                                              15 Jun 2025
                                                          </div>
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-time-line"></i>
                                                              12:30 PM
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="mt-16 d-flex gap-12">
                                                  <Link href="#"
                                                      className="btn btn-primary-600 d-flex align-items-center gap-6 px-16 flex-grow-1 justify-content-center">
                                                      Join Class
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-primary-100 d-flex align-items-center justify-content-center gap-6 p-0 w-44-px h-44-px text-primary-600 text-xl">
                                                      <i className="ri-chat-1-line"></i>
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-warning-100 d-flex align-items-center gap-6 px-16 text-warning-600 flex-grow-1 justify-content-center">
                                                      <i className="ri-time-line"></i>
                                                      Join Class
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="border rounded-3 p-12">
                                              <div className="d-flex  gap-12">
                                                  <div className="d-flex flex-shrink-0">
                                                      <img src="/assets/images/thumbs/session-img2.png" alt="Image"
                                                          className="w-100 h-100 object-fit-cover rounded-3" />
                                                  </div>
                                                  <div className="align-self-center w-100">
                                                      <h6 className="text-md mb-0">Kristin Watson</h6>
                                                      <span className="fw-medium">English</span>
                                                      <div
                                                          className="mt-8 d-flex align-items-center gap-8 justify-content-between flex-wrap w-100">
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-calendar-2-line"></i>
                                                              15 Jun 2025
                                                          </div>
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-time-line"></i>
                                                              12:30 PM
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="mt-16 d-flex gap-12">
                                                  <Link href="#"
                                                      className="btn btn-primary-600 d-flex align-items-center gap-6 px-16 flex-grow-1 justify-content-center">
                                                      Join Class
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-primary-100 d-flex align-items-center justify-content-center gap-6 p-0 w-44-px h-44-px text-primary-600 text-xl">
                                                      <i className="ri-chat-1-line"></i>
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-warning-100 d-flex align-items-center gap-6 px-16 text-warning-600 flex-grow-1 justify-content-center">
                                                      <i className="ri-time-line"></i>
                                                      Join Class
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="border rounded-3 p-12">
                                              <div className="d-flex  gap-12">
                                                  <div className="d-flex flex-shrink-0">
                                                      <img src="/assets/images/thumbs/session-img2.png" alt="Image"
                                                          className="w-100 h-100 object-fit-cover rounded-3" />
                                                  </div>
                                                  <div className="align-self-center w-100">
                                                      <h6 className="text-md mb-0">Kristin Watson</h6>
                                                      <span className="fw-medium">English</span>
                                                      <div
                                                          className="mt-8 d-flex align-items-center gap-8 justify-content-between flex-wrap w-100">
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-calendar-2-line"></i>
                                                              15 Jun 2025
                                                          </div>
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-time-line"></i>
                                                              12:30 PM
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="mt-16 d-flex gap-12">
                                                  <Link href="#"
                                                      className="btn btn-primary-600 d-flex align-items-center gap-6 px-16 flex-grow-1 justify-content-center">
                                                      Join Class
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-primary-100 d-flex align-items-center justify-content-center gap-6 p-0 w-44-px h-44-px text-primary-600 text-xl">
                                                      <i className="ri-chat-1-line"></i>
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-warning-100 d-flex align-items-center gap-6 px-16 text-warning-600 flex-grow-1 justify-content-center">
                                                      <i className="ri-time-line"></i>
                                                      Join Class
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="border rounded-3 p-12">
                                              <div className="d-flex  gap-12">
                                                  <div className="d-flex flex-shrink-0">
                                                      <img src="/assets/images/thumbs/session-img1.png" alt="Image"
                                                          className="w-100 h-100 object-fit-cover rounded-3" />
                                                  </div>
                                                  <div className="align-self-center w-100">
                                                      <h6 className="text-md mb-0">Cameron Williamson</h6>
                                                      <span className="fw-medium">English</span>
                                                      <div
                                                          className="mt-8 d-flex align-items-center gap-8 justify-content-between flex-wrap w-100">
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-calendar-2-line"></i>
                                                              15 Jun 2025
                                                          </div>
                                                          <div
                                                              className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                                              <i className="ri-time-line"></i>
                                                              12:30 PM
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="mt-16 d-flex gap-12">
                                                  <Link href="#"
                                                      className="btn btn-primary-600 d-flex align-items-center gap-6 px-16 flex-grow-1 justify-content-center">
                                                      Join Class
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-primary-100 d-flex align-items-center justify-content-center gap-6 p-0 w-44-px h-44-px text-primary-600 text-xl">
                                                      <i className="ri-chat-1-line"></i>
                                                  </Link>
                                                  <Link href="#"
                                                      className="btn btn-warning-100 d-flex align-items-center gap-6 px-16 text-warning-600 flex-grow-1 justify-content-center">
                                                      <i className="ri-time-line"></i>
                                                      Join Class
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
      
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xl-6 col-xxl-4 col-lg-6">
                          <div className="card radius-12 border-0 h-100">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">User activity</h6>
                                  <select className="form-select bg-base form-select-sm w-auto radius-8">
                                      <option>Yearly</option>
                                      <option>Monthly</option>
                                      <option>Weekly</option>
                                      <option>Today</option>
                                  </select>
                              </div>
                              <div className="card-body py-24 d-flex flex-column justify-content-center">
                                  <div className="d-flex align-items-center gap-20 flex-sm-nowrap flex-wrap">
                                      <div className="d-flex flex-column gap-12">
                                          <div className="d-flex align-items-start gap-12">
                                              <div className="">
                                                  <span
                                                      className="w-16-px h-16-px bg-primary-600 radius-4 position-relative mt-6"></span>
                                              </div>
                                              <div className="">
                                                  <p className="text-secondary-light text-md mb-0">Organic Search</p>
                                                  <h6 className="mb-0 text-lg">875</h6>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-12">
                                              <div className="">
                                                  <span
                                                      className="w-16-px h-16-px bg-warning-600 radius-4 position-relative mt-6"></span>
                                              </div>
                                              <div className="">
                                                  <p className="text-secondary-light text-md mb-0">Referrals</p>
                                                  <h6 className="mb-0 text-lg">350</h6>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-12">
                                              <div className="">
                                                  <span
                                                      className="w-16-px h-16-px bg-success radius-4 position-relative mt-6"></span>
                                              </div>
                                              <div className="">
                                                  <p className="text-secondary-light text-md mb-0">Social Media</p>
                                                  <h6 className="mb-0 text-lg">320</h6>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-12">
                                              <div className="">
                                                  <span
                                                      className="w-16-px h-16-px bg-purple radius-4 position-relative mt-6"></span>
                                              </div>
                                              <div className="">
                                                  <p className="text-secondary-light text-md mb-0">Google Search</p>
                                                  <h6 className="mb-0 text-lg">340</h6>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div id="userOverviewDonutChart" className="apexcharts-tooltip-z-none"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4 col-lg-6">
                          <div className="card radius-12 border-0 h-100">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Top Student</h6>
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
                              <div className="card-body">
                                  <div className="d-flex flex-column gap-20">
      
                                      <div className="d-flex align-items-center justify-content-between gap-10">
                                          <div className="d-flex align-items-center gap-12">
                                              <span
                                                  className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
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
                                                  <svg className="radial-progress w-44-px" data-percentage="20"
                                                      viewBox="0 0 80 80">
                                                      <circle className="incomplete stroke-8-px opacity-02 stroke-blue" cx="40"
                                                          cy="40" r="35"></circle>
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
                                              <span
                                                  className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
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
                                                  <svg className="radial-progress w-44-px" data-percentage="35"
                                                      viewBox="0 0 80 80">
                                                      <circle className="incomplete stroke-8-px opacity-02 stroke-red" cx="40"
                                                          cy="40" r="35"></circle>
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
                                              <span
                                                  className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
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
                                                  <svg className="radial-progress w-44-px" data-percentage="45"
                                                      viewBox="0 0 80 80">
                                                      <circle className="incomplete stroke-8-px opacity-02 stroke-warning" cx="40"
                                                          cy="40" r="35"></circle>
                                                      <circle className="complete stroke-8-px stroke-warning" cx="40" cy="40"
                                                          r="35">
                                                      </circle>
                                                      <text className="percentage fill-black" x="50%" y="57%"
                                                          transform="matrix(0, 1, -1, 0, 80, 0)">45</text>
                                                  </svg>
                                              </span>
                                          </div>
                                      </div>
      
                                      <div className="d-flex align-items-center justify-content-between gap-10">
                                          <div className="d-flex align-items-center gap-12">
                                              <span
                                                  className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
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
                                                  <svg className="radial-progress w-44-px" data-percentage="65"
                                                      viewBox="0 0 80 80">
                                                      <circle className="incomplete stroke-8-px opacity-02 stroke-green" cx="40"
                                                          cy="40" r="35"></circle>
                                                      <circle className="complete stroke-8-px stroke-green" cx="40" cy="40"
                                                          r="35">
                                                      </circle>
                                                      <text className="percentage fill-black" x="50%" y="57%"
                                                          transform="matrix(0, 1, -1, 0, 80, 0)">65</text>
                                                  </svg>
                                              </span>
                                          </div>
                                      </div>
      
                                      <div className="d-flex align-items-center justify-content-between gap-10">
                                          <div className="d-flex align-items-center gap-12">
                                              <span
                                                  className="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
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
                                                  <svg className="radial-progress w-44-px" data-percentage="65"
                                                      viewBox="0 0 80 80">
                                                      <circle className="incomplete stroke-8-px opacity-02 stroke-blue" cx="40"
                                                          cy="40" r="35"></circle>
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
                      
      
                      
                      <div className="col-xxl-4">
                          <div className="card radius-12 border-0">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Top Instructor</h6>
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
                              <div className="card-body d-flex flex-column gap-20">
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                      <div className="d-flex align-items-center">
                                          <img src="/assets/images/users/user1.png" alt="Image"
                                              className="w-40-px h-40-px radius-4 flex-shrink-0 me-12 overflow-hidden" />
                                          <div className="flex-grow-1">
                                              <h6 className="text-md mb-0 fw-medium">Dianne Russell</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Agent ID: 36254</span>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div className="d-flex align-items-center gap-6 mb-1">
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                          </div>
                                          <span className="text-primary-light text-sm d-block text-end">25 Reviews</span>
                                      </div>
                                  </div>
      
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                      <div className="d-flex align-items-center">
                                          <img src="/assets/images/users/user2.png" alt="Image"
                                              className="w-40-px h-40-px radius-4 flex-shrink-0 me-12 overflow-hidden" />
                                          <div className="flex-grow-1">
                                              <h6 className="text-md mb-0 fw-medium">Wade Warren</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Agent ID: 36254</span>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div className="d-flex align-items-center gap-6 mb-1">
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                          </div>
                                          <span className="text-primary-light text-sm d-block text-end">25 Reviews</span>
                                      </div>
                                  </div>
      
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                      <div className="d-flex align-items-center">
                                          <img src="/assets/images/users/user3.png" alt="Image"
                                              className="w-40-px h-40-px radius-4 flex-shrink-0 me-12 overflow-hidden" />
                                          <div className="flex-grow-1">
                                              <h6 className="text-md mb-0 fw-medium">Albert Flores</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Agent ID: 36254</span>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div className="d-flex align-items-center gap-6 mb-1">
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                          </div>
                                          <span className="text-primary-light text-sm d-block text-end">25 Reviews</span>
                                      </div>
                                  </div>
      
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                      <div className="d-flex align-items-center">
                                          <img src="/assets/images/users/user4.png" alt="Image"
                                              className="w-40-px h-40-px radius-4 flex-shrink-0 me-12 overflow-hidden" />
                                          <div className="flex-grow-1">
                                              <h6 className="text-md mb-0 fw-medium">Bessie Cooper</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Agent ID: 36254</span>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div className="d-flex align-items-center gap-6 mb-1">
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                          </div>
                                          <span className="text-primary-light text-sm d-block text-end">25 Reviews</span>
                                      </div>
                                  </div>
      
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                      <div className="d-flex align-items-center">
                                          <img src="/assets/images/users/user5.png" alt="Image"
                                              className="w-40-px h-40-px radius-4 flex-shrink-0 me-12 overflow-hidden" />
                                          <div className="flex-grow-1">
                                              <h6 className="text-md mb-0 fw-medium">Arlene McCoy</h6>
                                              <span className="text-sm text-secondary-light fw-medium">Agent ID: 36254</span>
                                          </div>
                                      </div>
                                      <div className="">
                                          <div className="d-flex align-items-center gap-6 mb-1">
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                              <span className="text-lg text-warning-600 d-flex line-height-1"><i
                                                      className="ri-star-fill"></i></span>
                                          </div>
                                          <span className="text-primary-light text-sm d-block text-end">25 Reviews</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-8">
                          <div className="card radius-12 border-0">
                              <div
                                  className="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
                                  <h6 className="mb-2 fw-bold text-lg">Recent Enrolled Courses</h6>
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
                                      <table className="table bordered-table mb-0 rounded-0 border-0">
                                          <thead>
                                              <tr>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Invoice</th>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Student</th>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Courses Name</th>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Amount</th>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Payment By</th>
                                                  <th scope="col" className="bg-neutral-100 rounded-0">Date</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>#829776</td>
                                                  <td>John Doe</td>
                                                  <td>Scorm drawing course</td>
                                                  <td>$29.00</td>
                                                  <td>PayPal</td>
                                                  <td>04 Feb, 2025</td>
                                              </tr>
      
                                              <tr>
                                                  <td>#829777</td>
                                                  <td>Emily Carter</td>
                                                  <td>Advanced UI/UX Design</td>
                                                  <td>$49.00</td>
                                                  <td>Stripe</td>
                                                  <td>06 Feb, 2025</td>
                                              </tr>
      
                                              <tr>
                                                  <td>#829778</td>
                                                  <td>Michael Smith</td>
                                                  <td>Full-Stack Development</td>
                                                  <td>$79.00</td>
                                                  <td>MasterCard</td>
                                                  <td>08 Feb, 2025</td>
                                              </tr>
      
                                              <tr>
                                                  <td>#829779</td>
                                                  <td>Sarah Johnson</td>
                                                  <td>Digital Marketing Pro</td>
                                                  <td>$39.00</td>
                                                  <td>Visa</td>
                                                  <td>10 Feb, 2025</td>
                                              </tr>
      
                                              <tr>
                                                  <td>#829780</td>
                                                  <td>David Wilson</td>
                                                  <td>Laravel API Development</td>
                                                  <td>$59.00</td>
                                                  <td>PayPal</td>
                                                  <td>12 Feb, 2025</td>
                                              </tr>
                                          </tbody>
      
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                      
                      <div className="col-xxl-4">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                                      <h6 className="text-lg mb-0">Course Activity</h6>
                                      <select className="form-select bg-base form-select-sm w-auto radius-8">
                                          <option>Yearly</option>
                                          <option>Monthly</option>
                                          <option>Weekly</option>
                                          <option>Today</option>
                                      </select>
                                  </div>
      
                                  <ul className="d-flex flex-wrap align-items-center justify-content-center my-32 gap-3">
                                      <li className="d-flex align-items-center gap-2">
                                          <span className="w-12-px h-12-px rounded-circle bg-primary-600"></span>
                                          <span className="text-secondary-light text-sm">Paid Course:
                                              <span className="text-primary-light text-md fw-bold line-height-1 ms-4">500</span>
                                          </span>
                                      </li>
                                      <li className="d-flex align-items-center gap-2">
                                          <span className="w-12-px h-12-px rounded-circle bg-warning-600"></span>
                                          <span className="text-secondary-light text-sm">Free Course:
                                              <span className="text-primary-light text-xl fw-bold line-height-1 ms-4">200</span>
                                          </span>
                                      </li>
                                  </ul>
                                  <div className="margin-16-minus">
                                      <div id="courseActivityChart" className="apexcharts-tooltip-style-1"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
      
                  </div>
              </div>

      <Script
        id="page-index-5-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
