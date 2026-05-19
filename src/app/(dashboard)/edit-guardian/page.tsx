/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ================== Password Show Hide Js Start ==========\r\n    function initializePasswordToggle(toggleSelector) {\r\n        $(toggleSelector).on('click', function () {\r\n            $(this).toggleClass(\"ri-eye-off-line\");\r\n            var input = $($(this).attr(\"data-toggle\"));\r\n            if (input.attr(\"type\") === \"password\") {\r\n                input.attr(\"type\", \"text\");\r\n            } else {\r\n                input.attr(\"type\", \"password\");\r\n            }\r\n        });\r\n    }\r\n    // Call the function\r\n    initializePasswordToggle('.toggle-password');\r\n    // ========================= Password Show Hide Js End ===========================\r\n\r\n    // ========================== Drag & Drop Upload photo Js start ========================\r\n    document.querySelectorAll(\".drop-zone__input\").forEach((inputElement) => {\r\n        const dropZoneElement = inputElement.closest(\".drop-zone\");\r\n\r\n        dropZoneElement.addEventListener(\"click\", (e) => {\r\n            inputElement.click();\r\n        });\r\n\r\n        inputElement.addEventListener(\"change\", (e) => {\r\n            if (inputElement.files.length) {\r\n                updateThumbnail(dropZoneElement, inputElement.files[0]);\r\n            }\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"dragover\", (e) => {\r\n            e.preventDefault();\r\n            dropZoneElement.classList.add(\"drop-zone--over\");\r\n        });\r\n\r\n        [\"dragleave\", \"dragend\"].forEach((type) => {\r\n            dropZoneElement.addEventListener(type, (e) => {\r\n                dropZoneElement.classList.remove(\"drop-zone--over\");\r\n            });\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"drop\", (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.dataTransfer.files.length) {\r\n                inputElement.files = e.dataTransfer.files;\r\n                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);\r\n            }\r\n\r\n            dropZoneElement.classList.remove(\"drop-zone--over\");\r\n        });\r\n    });\r\n\r\n    /**\r\n     * Updates the thumbnail on a drop zone element.\r\n     *\r\n     * @param {HTMLElement} dropZoneElement\r\n     * @param {File} file\r\n     */\r\n    function updateThumbnail(dropZoneElement, file) {\r\n        let thumbnailElement = dropZoneElement.querySelector(\".drop-zone__thumb\");\r\n\r\n        // First time - remove the prompt\r\n        if (dropZoneElement.querySelector(\".drop-zone__prompt\")) {\r\n            dropZoneElement.querySelector(\".drop-zone__prompt\").remove();\r\n        }\r\n\r\n        // First time - there is no thumbnail element, so lets create it\r\n        if (!thumbnailElement) {\r\n            thumbnailElement = document.createElement(\"div\");\r\n            thumbnailElement.classList.add(\"drop-zone__thumb\");\r\n            dropZoneElement.appendChild(thumbnailElement);\r\n        }\r\n\r\n        thumbnailElement.dataset.label = file.name;\r\n\r\n        // Show thumbnail for image files\r\n        if (file.type.startsWith(\"image/\")) {\r\n            const reader = new FileReader();\r\n\r\n            reader.readAsDataURL(file);\r\n            reader.onload = () => {\r\n                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;\r\n            };\r\n        } else {\r\n            thumbnailElement.style.backgroundImage = null;\r\n        }\r\n    }\r\n    // ========================== Drag & Drop Upload photo Js end ========================";

export default function EditGuardianPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Edit Guardian</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="/guardian-list" className="text-secondary-light hover-text-primary hover-underline d-none"> /
              guardian</Link>
            <span className="text-secondary-light">/ Edit Guardian</span>
          </div>
        </div>
        <Link href="/add-new-guardian" className="btn btn-primary-600 d-flex align-items-center gap-6 d-none">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Edit Guardian
        </Link>
      </div>
      
              <form action="#" className="mt-24">
                  <div className="row gy-3">
                      <div className="col-xl-12">
                          <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
                              <div
                                  className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                                  <h6 className="text-lg fw-semibold mb-0">Personal Info</h6>
                              </div>
                              <div className="card-body p-20">
                                  <div className="row gy-3">
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianType"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Type
                                              </label>
                                              <select id="guardianType" className="form-control form-select">
                                                  <option value="Select Guardian" disabled>Select Guardian</option>
                                                  <option value="Father">Father</option>
                                                  <option value="Mother">Mother</option>
                                                  <option value="Brother">Brother</option>
                                                  <option value="Sister">Sister</option>
                                                  <option value="Uncle">Uncle</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianName"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Name
                                              </label>
                                              <input type="text" id="guardianName" className="form-control"
                                                  placeholder="Enter guardian name" />
                                          </div>
                                      </div>
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="phoneNumber"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Instagram
                                              </label>
                                              <input type="tel" id="phoneNumber" className="form-control"
                                                  placeholder="Enter phone number" />
                                          </div>
                                      </div>
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="occupation"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Occupation
                                              </label>
                                              <input type="text" id="occupation" className="form-control"
                                                  placeholder="Enter occupation" />
                                          </div>
                                      </div>
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label htmlFor="guardianAddress"
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Guardian
                                                  Address
                                              </label>
                                              <input type="text" id="guardianAddress" className="form-control"
                                                  placeholder="Enter guardian address" />
                                          </div>
                                      </div>
                                      <div className="col-xl-4 col-sm-6">
                                          <div className="">
                                              <label
                                                  className="text-sm fw-semibold text-primary-light d-inline-block mb-8">Teacher
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
                                  Reset
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
        id="page-edit-guardian-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
