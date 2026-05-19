/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ========================== DataTable Js start ========================\r\n    let table = new DataTable('#dataTable');\r\n    // ========================== DataTable Js end ========================\r\n\r\n    // ================== Password Show Hide Js Start ==========\r\n    function initializePasswordToggle(toggleSelector) {\r\n        $(toggleSelector).on('click', function () {\r\n            $(this).toggleClass(\"ri-eye-off-line\");\r\n            var input = $($(this).attr(\"data-toggle\"));\r\n            if (input.attr(\"type\") === \"password\") {\r\n                input.attr(\"type\", \"text\");\r\n            } else {\r\n                input.attr(\"type\", \"password\");\r\n            }\r\n        });\r\n    }\r\n    // Call the function\r\n    initializePasswordToggle('.toggle-password');\r\n    // ========================= Password Show Hide Js End ===========================\r\n\r\n    // ========================== Drag & Drop Upload photo Js start ========================\r\n    document.querySelectorAll(\".drop-zone__input\").forEach((inputElement) => {\r\n        const dropZoneElement = inputElement.closest(\".drop-zone\");\r\n\r\n        dropZoneElement.addEventListener(\"click\", (e) => {\r\n            inputElement.click();\r\n        });\r\n\r\n        inputElement.addEventListener(\"change\", (e) => {\r\n            if (inputElement.files.length) {\r\n                updateThumbnail(dropZoneElement, inputElement.files[0]);\r\n            }\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"dragover\", (e) => {\r\n            e.preventDefault();\r\n            dropZoneElement.classList.add(\"drop-zone--over\");\r\n        });\r\n\r\n        [\"dragleave\", \"dragend\"].forEach((type) => {\r\n            dropZoneElement.addEventListener(type, (e) => {\r\n                dropZoneElement.classList.remove(\"drop-zone--over\");\r\n            });\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"drop\", (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.dataTransfer.files.length) {\r\n                inputElement.files = e.dataTransfer.files;\r\n                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);\r\n            }\r\n\r\n            dropZoneElement.classList.remove(\"drop-zone--over\");\r\n        });\r\n    });\r\n\r\n    /**\r\n     * Updates the thumbnail on a drop zone element.\r\n     *\r\n     * @param {HTMLElement} dropZoneElement\r\n     * @param {File} file\r\n     */\r\n    function updateThumbnail(dropZoneElement, file) {\r\n        let thumbnailElement = dropZoneElement.querySelector(\".drop-zone__thumb\");\r\n\r\n        // First time - remove the prompt\r\n        if (dropZoneElement.querySelector(\".drop-zone__prompt\")) {\r\n            dropZoneElement.querySelector(\".drop-zone__prompt\").remove();\r\n        }\r\n\r\n        // First time - there is no thumbnail element, so lets create it\r\n        if (!thumbnailElement) {\r\n            thumbnailElement = document.createElement(\"div\");\r\n            thumbnailElement.classList.add(\"drop-zone__thumb\");\r\n            dropZoneElement.appendChild(thumbnailElement);\r\n        }\r\n\r\n        thumbnailElement.dataset.label = file.name;\r\n\r\n        // Show thumbnail for image files\r\n        if (file.type.startsWith(\"image/\")) {\r\n            const reader = new FileReader();\r\n\r\n            reader.readAsDataURL(file);\r\n            reader.onload = () => {\r\n                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;\r\n            };\r\n        } else {\r\n            thumbnailElement.style.backgroundImage = null;\r\n        }\r\n    }\r\n    // ========================== Drag & Drop Upload photo Js end ========================";

export default function NotificationPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div className="">
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Notification</h1>
          <div className="">
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <Link href="/general" className="text-secondary-light hover-text-primary hover-underline "> /
              Settings</Link>
            <span className="text-secondary-light">/ Notification</span>
          </div>
        </div>
        <Link href="javascript:void(0)" className="btn btn-primary-600 d-flex align-items-center gap-6 d-none">
          <span className="d-flex text-md">
            <i className="ri-add-large-line"></i>
          </span>
          Notification
        </Link>
      </div>
      
              <div className="card h-100 p-0 radius-12 overflow-hidden">
                  <div className="card-body p-40">
                      <form action="#">
                          <div className="row">
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseSecretKey"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase secret
                                          key</label>
                                      <input type="text" className="form-control radius-8" id="firebaseSecretKey"
                                          placeholder="Firebase secret key"
                                          value="AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebasePublicVapidKey"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase public vapid
                                          key (key pair)</label>
                                      <input type="text" className="form-control radius-8" id="firebasePublicVapidKey"
                                          placeholder="Firebase public vapid key (key pair)"
                                          value="BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseAPIKey"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase API
                                          Key</label>
                                      <input type="text" className="form-control radius-8" id="firebaseAPIKey"
                                          placeholder="Firebase  API Key" value="AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseAuthDomain"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase AUTH
                                          Domain</label>
                                      <input type="text" className="form-control radius-8" id="firebaseAuthDomain"
                                          placeholder="Firebase  AUTH Domain" value="wowdash.firebaseapp.com" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseProjectID"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase Project
                                          ID</label>
                                      <input type="text" className="form-control radius-8" id="firebaseProjectID"
                                          placeholder="Firebase Project ID" value="wowdash.com" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseStorageBucket"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase Storage
                                          Bucket</label>
                                      <input type="text" className="form-control radius-8" id="firebaseStorageBucket"
                                          placeholder="Firebase Storage Bucket" value="wowdash.appsport.com" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseMessageSenderID"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase Message
                                          Sender ID</label>
                                      <input type="text" className="form-control radius-8" id="firebaseMessageSenderID"
                                          placeholder="Firebase  Message Sender ID" value="52362145" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseAppID"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase App
                                          ID</label>
                                      <input type="text" className="form-control radius-8" id="firebaseAppID"
                                          placeholder="Firebase  App ID" value="1:843456771665:web:ac1e3115e9e17ee1582a70" />
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="mb-20">
                                      <label htmlFor="firebaseMeasurmentID"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Firebase Measurement
                                          ID</label>
                                      <input type="text" className="form-control radius-8" id="firebaseMeasurmentID"
                                          placeholder="Firebase  Measurement ID" value="G-GSJPS921XW" />
                                  </div>
                              </div>
      
                              <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                  <button type="reset"
                                      className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8">
                                      Reset
                                  </button>
                                  <button type="submit"
                                      className="btn btn-primary-600 border border-primary-600 text-md px-24 py-12 radius-8">
                                      Save Change
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>

      <Script
        id="page-notification-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
