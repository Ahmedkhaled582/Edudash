/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ================== Password Show Hide Js Start ==========\r\n    function initializePasswordToggle(toggleSelector) {\r\n        $(toggleSelector).on('click', function () {\r\n            $(this).toggleClass(\"ri-eye-off-line\");\r\n            var input = $($(this).attr(\"data-toggle\"));\r\n            if (input.attr(\"type\") === \"password\") {\r\n                input.attr(\"type\", \"text\");\r\n            } else {\r\n                input.attr(\"type\", \"password\");\r\n            }\r\n        });\r\n    }\r\n    // Call the function\r\n    initializePasswordToggle('.toggle-password');\r\n    // ========================= Password Show Hide Js End ===========================\r\n\r\n    // ========================== Drag & Drop Upload photo Js start ========================\r\n    document.querySelectorAll(\".drop-zone__input\").forEach((inputElement) => {\r\n        const dropZoneElement = inputElement.closest(\".drop-zone\");\r\n\r\n        dropZoneElement.addEventListener(\"click\", (e) => {\r\n            inputElement.click();\r\n        });\r\n\r\n        inputElement.addEventListener(\"change\", (e) => {\r\n            if (inputElement.files.length) {\r\n                updateThumbnail(dropZoneElement, inputElement.files[0]);\r\n            }\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"dragover\", (e) => {\r\n            e.preventDefault();\r\n            dropZoneElement.classList.add(\"drop-zone--over\");\r\n        });\r\n\r\n        [\"dragleave\", \"dragend\"].forEach((type) => {\r\n            dropZoneElement.addEventListener(type, (e) => {\r\n                dropZoneElement.classList.remove(\"drop-zone--over\");\r\n            });\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"drop\", (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.dataTransfer.files.length) {\r\n                inputElement.files = e.dataTransfer.files;\r\n                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);\r\n            }\r\n\r\n            dropZoneElement.classList.remove(\"drop-zone--over\");\r\n        });\r\n    });\r\n\r\n    /**\r\n     * Updates the thumbnail on a drop zone element.\r\n     *\r\n     * @param {HTMLElement} dropZoneElement\r\n     * @param {File} file\r\n     */\r\n    function updateThumbnail(dropZoneElement, file) {\r\n        let thumbnailElement = dropZoneElement.querySelector(\".drop-zone__thumb\");\r\n\r\n        // First time - remove the prompt\r\n        if (dropZoneElement.querySelector(\".drop-zone__prompt\")) {\r\n            dropZoneElement.querySelector(\".drop-zone__prompt\").remove();\r\n        }\r\n\r\n        // First time - there is no thumbnail element, so lets create it\r\n        if (!thumbnailElement) {\r\n            thumbnailElement = document.createElement(\"div\");\r\n            thumbnailElement.classList.add(\"drop-zone__thumb\");\r\n            dropZoneElement.appendChild(thumbnailElement);\r\n        }\r\n\r\n        thumbnailElement.dataset.label = file.name;\r\n\r\n        // Show thumbnail for image files\r\n        if (file.type.startsWith(\"image/\")) {\r\n            const reader = new FileReader();\r\n\r\n            reader.readAsDataURL(file);\r\n            reader.onload = () => {\r\n                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;\r\n            };\r\n        } else {\r\n            thumbnailElement.style.backgroundImage = null;\r\n        }\r\n    }\r\n    // ========================== Drag & Drop Upload photo Js end ========================";

export default function EditStudentPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Edit Student</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="/student-list" className="text-secondary-light hover-text-primary hover-underline "> /
              Student</Link>
            <span className="text-secondary-light">/ Edit Student</span>
          </div>
        </div>
        <Link href="/add-new-student" className="btn btn-primary-600 d-flex align-items-center gap-6 d-none">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Add Student
        </Link>
      </div>
      
              <form action="#" className="mt-24">
                  <div className="row gy-3">
                      <div className="col-lg-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Personal Info</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="academicYear"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Academic
                                                  Year <span className="text-danger-600">* </span> </label>
                                              <select id="academicYear" className="form-control form-select">
                                                  <option value="Jun 2025/2026">Jun 2025/2026</option>
                                                  <option value="Jun 2026/2027">Jun 2026/2027</option>
                                                  <option value="Jun 2027/2028">Jun 2027/2028</option>
                                                  <option value="Jun 2028/2029">Jun 2028/2029</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="classSelection"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Class
                                                  <span className="text-danger-600">* </span> </label>
                                              <select id="classSelection" className="form-control form-select">
                                                  <option value="Select a class" disabled>Select a class</option>
                                                  <option value="Primary">Primary</option>
                                                  <option value="High school">High school</option>
                                                  <option value="College">College</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="section"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Section
                                                  <span className="text-danger-600">* </span> </label>
                                              <select id="section" className="form-control form-select">
                                                  <option value="Select section" disabled>Select section</option>
                                                  <option value="Science">Science</option>
                                                  <option value="Art">Art</option>
                                                  <option value="Commerce">Commerce</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="rollNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Roll
                                                  Number </label>
                                              <input type="text" className="form-control" id="rollNumber"
                                                  placeholder="Enter your rollNumber" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="admissionNo"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Admission
                                                  No <span className="text-danger-600">*</span> </label>
                                              <input type="text" className="form-control" id="admissionNo"
                                                  placeholder="Enter admission number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="fullName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Full Name
                                                  <span className="text-danger-600">*</span> </label>
                                              <input type="text" className="form-control" id="fullName"
                                                  placeholder="Enter your Full Name" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="category"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Category
                                                  <span className="text-danger-600">*</span> </label>
                                              <input type="text" className="form-control" id="category"
                                                  placeholder="Select a Category" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="gender"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Gender</label>
                                              <select id="gender" className="form-control form-select">
                                                  <option value="Select section" disabled>Select Gender</option>
                                                  <option value="Male">Male</option>
                                                  <option value="Female">Female</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="dateOfBirth"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date Of
                                                  Birth <span className="text-danger-600">*</span> </label>
                                              <input type="date" className="form-control" id="dateOfBirth" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="phoneNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Phone
                                                  Number <span className="text-danger-600">*</span> </label>
                                              <input type="text" className="form-control" id="phoneNumber"
                                                  placeholder="Enter your Phone Number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="studentEmail"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Email
                                                  <span className="text-danger-600">*</span> </label>
                                              <input type="text" className="form-control" id="studentEmail"
                                                  placeholder="Enter your Email" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Student
                                                  Photo <span className="text-danger-600">*</span> </label>
                                              <div
                                                  className="drop-zone height-44-px p-4 d-flex justify-content-center align-items-center text-center fw-medium text-md cursor-pointer border border-neutral-400 radius-8 border-dashed bg-hover-neutral-200">
                                                  <span className="drop-zone__prompt">Darg & drop a file here or click</span>
                                                  <input type="file" name="myFile" className="drop-zone__input" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Parent & Guardian Info </h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="fathersName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Fathers
                                                  Name </label>
                                              <input type="text" className="form-control" id="fathersName"
                                                  placeholder="Enter Fathers Name" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="fathersPhoneNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Phone
                                                  Number </label>
                                              <input type="tel" className="form-control" id="fathersPhoneNumber"
                                                  placeholder="Enter Fathers Number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="fathersFatherOccupation"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Father
                                                  Occupation </label>
                                              <input type="text" className="form-control" id="fathersFatherOccupation"
                                                  placeholder="Enter Father Occupation" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Fathers
                                                  Photo <span className="text-danger-600">*</span> </label>
                                              <div
                                                  className="drop-zone height-44-px p-4 d-flex justify-content-center align-items-center text-center fw-medium text-md cursor-pointer border border-neutral-400 radius-8 border-dashed bg-hover-neutral-200">
                                                  <span className="drop-zone__prompt">Darg & drop a file here or click</span>
                                                  <input type="file" name="myFile" className="drop-zone__input" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="mothersName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Mothers
                                                  Name </label>
                                              <input type="text" className="form-control" id="mothersName"
                                                  placeholder="Enter mothers Name" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="mothersPhoneNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Phone
                                                  Number </label>
                                              <input type="tel" className="form-control" id="mothersPhoneNumber"
                                                  placeholder="Enter mothers Number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="mothersFatherOccupation"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Father
                                                  Occupation </label>
                                              <input type="text" className="form-control" id="mothersFatherOccupation"
                                                  placeholder="Enter Father Occupation" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Mothers
                                                  Photo <span className="text-danger-600">*</span> </label>
                                              <div
                                                  className="drop-zone height-44-px p-4 d-flex justify-content-center align-items-center text-center fw-medium text-md cursor-pointer border border-neutral-400 radius-8 border-dashed bg-hover-neutral-200">
                                                  <span className="drop-zone__prompt">Darg & drop a file here or click</span>
                                                  <input type="file" name="myFile" className="drop-zone__input" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="mt-24">
                                              <span className="text-lg fw-bold text-primary-light d-inline-block mb-8">Select a
                                                  Guardian </span>
                                              <div className="d-flex align-items-center flex-wrap gap-28">
                                                  <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio"
                                                          id="selectFather" />
                                                      <label
                                                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                          htmlFor="selectFather"> Father </label>
                                                  </div>
                                                  <div className="form-check checked-secondary d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio"
                                                          id="selectMother" />
                                                      <label
                                                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                          htmlFor="selectMother"> Mother </label>
                                                  </div>
                                                  <div className="form-check checked-success d-flex align-items-center gap-2">
                                                      <input className="form-check-input" type="radio" name="radio"
                                                          id="selectOthers" />
                                                      <label
                                                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                          htmlFor="selectOthers"> Others </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Name </label>
                                              <input type="text" className="form-control" id="guardianName"
                                                  placeholder="Enter Guardian Name" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianEmail"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Email </label>
                                              <input type="email" className="form-control" id="guardianEmail"
                                                  placeholder="Enter Guardian Email" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianPhoneNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Phone
                                                  Number </label>
                                              <input type="tel" className="form-control" id="guardianPhoneNumber"
                                                  placeholder="Enter Guardian Number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianFatherOccupation"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Father
                                                  Occupation </label>
                                              <input type="text" className="form-control" id="guardianFatherOccupation"
                                                  placeholder="Enter Father Occupation" />
                                          </div>
                                      </div>
                                      <div className="col-xl-9 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianGuardianAddress"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Address </label>
                                              <input type="text" className="form-control" id="guardianGuardianAddress"
                                                  placeholder="Enter Guardian Address" />
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Photo <span className="text-danger-600">*</span> </label>
                                              <div
                                                  className="drop-zone height-44-px p-4 d-flex justify-content-center align-items-center text-center fw-medium text-md cursor-pointer border border-neutral-400 radius-8 border-dashed bg-hover-neutral-200">
                                                  <span className="drop-zone__prompt">Darg & drop a file here or click</span>
                                                  <input type="file" name="myFile" className="drop-zone__input" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Medical Details</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="bloodGroup"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Blood
                                                  Group</label>
                                              <select id="bloodGroup" className="form-control form-select">
                                                  <option value="Select blood group" disabled>Select blood group</option>
                                                  <option value="A+">A+</option>
                                                  <option value="AB+">AB+</option>
                                                  <option value="A-">A-</option>
                                                  <option value="AB-">AB-</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="medicalHeight"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Height
                                              </label>
                                              <input type="text" className="form-control" id="medicalHeight"
                                                  placeholder="Enter height" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="medicalWeight"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Weight
                                              </label>
                                              <input type="text" className="form-control" id="medicalWeight"
                                                  placeholder="Enter Weight" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Bank Details </h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="bankAccountNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Bank
                                                  Account Number </label>
                                              <input type="text" className="form-control" id="bankAccountNumber"
                                                  placeholder="Enter bank account number" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="bankName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Bank Name
                                              </label>
                                              <input type="text" className="form-control" id="bankName"
                                                  placeholder="Enter bank name" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="iFSCCode"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">IFSC Code
                                              </label>
                                              <input type="text" className="form-control" id="iFSCCode"
                                                  placeholder="Enter IFSC Code" />
                                          </div>
                                      </div>
                                      <div className="col-xxl-3 col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="nationalIdentificationNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">National
                                                  Identification Number</label>
                                              <input type="text" className="form-control" id="nationalIdentificationNumber"
                                                  placeholder="Enter national identification number" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-6">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Previous School Details</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="schoolNamee"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">School
                                                  Name </label>
                                              <input type="text" className="form-control" id="schoolNamee"
                                                  placeholder="Enter School Name" />
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="Address"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Address
                                              </label>
                                              <input type="text" className="form-control" id="Address"
                                                  placeholder="Enter Address" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-6">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Address</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="currentAddress"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Current
                                                  Address </label>
                                              <input type="text" className="form-control" id="currentAddress"
                                                  placeholder="Enter Current Address" />
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="permanentAddress"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Permanent
                                                  Address </label>
                                              <input type="text" className="form-control" id="permanentAddress"
                                                  placeholder="Enter Permanent Address" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-6">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Hostel Details</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="hostel"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Hostel
                                              </label>
                                              <input type="text" className="form-control" id="hostel" placeholder="Enter Hostel" />
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="roomNo"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Room No
                                              </label>
                                              <input type="text" className="form-control" id="roomNo" placeholder="Enter Room No" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-6">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Upload Documents</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="docName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Doc Name
                                              </label>
                                              <input type="text" className="form-control" id="docName"
                                                  placeholder="Enter Doc Name" />
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Photo <span className="text-danger-600">*</span> </label>
                                              <div
                                                  className="drop-zone height-44-px p-4 d-flex justify-content-center align-items-center text-center fw-medium text-md cursor-pointer border border-neutral-400 radius-8 border-dashed bg-hover-neutral-200">
                                                  <span className="drop-zone__prompt">Darg & drop a file here or click</span>
                                                  <input type="file" name="myFile" className="drop-zone__input" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Student Details</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-12">
                                          <div className="">
                                              <label htmlFor="moreDetails"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Details
                                              </label>
                                              <textarea id="moreDetails" className="form-control"
                                                  placeholder="Enter details"></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Login Details</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="myEmail"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Email
                                                  <span className="text-danger-600">*</span>
                                              </label>
                                              <input type="email" className="form-control" id="myEmail" placeholder="Enter Email" />
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="">
                                              <label htmlFor="your-password"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Password
                                                  <span className="text-danger-600">*</span>
                                              </label>
                                              <div className="position-relative">
                                                  <input type="password" id="your-password" className="form-control"
                                                      placeholder="Enter your password" />
                                                  <span
                                                      className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                                                      data-toggle="#your-password"></span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
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
                                  Save Changes
                              </button>
                          </div>
                      </div>
                  </div>
              </form>

      <Script
        id="page-edit-student-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
