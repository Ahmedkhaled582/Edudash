/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "// ================== Image Upload Js Start ===========================\r\n    function readURL(input, previewElementId) {\r\n        if (input.files && input.files[0]) {\r\n            var reader = new FileReader();\r\n            reader.onload = function (e) {\r\n                $('#' + previewElementId).css('background-image', 'url(' + e.target.result + ')');\r\n                $('#' + previewElementId).hide();\r\n                $('#' + previewElementId).fadeIn(650);\r\n            }\r\n            reader.readAsDataURL(input.files[0]);\r\n        }\r\n    }\r\n\r\n    $(\"#imageUpload\").change(function () {\r\n        readURL(this, 'previewImage1');\r\n    });\r\n\r\n    $(\"#imageUploadTwo\").change(function () {\r\n        readURL(this, 'previewImage2');\r\n    });\r\n    // ================== Image Upload Js End ===========================";

export default function GeneralPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">General </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <Link href="/general" className="text-secondary-light hover-text-primary hover-underline "> /
                              Settings</Link>
                          <span className="text-secondary-light">/ General</span>
                      </div>
                  </div>
                  <button type="button" className="my-sidebar-btn btn btn-primary-600 d-flex align-items-center gap-6">
                      <span className="d-flex text-md">
                          <i className="ri-add-large-line"></i>
                      </span>
                      Add General
                  </button>
              </div>
      
              <div className="card h-100 p-0 radius-12 overflow-hidden">
                  <div className="card-body">
                      <form action="#">
                          <div className="row">
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="name" className="form-label fw-semibold text-primary-light text-sm mb-8">Full
                                          Name <span className="text-danger-600">*</span></label>
                                      <input type="text" className="form-control radius-8" id="name"
                                          placeholder="Enter Full Name" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="email" className="form-label fw-semibold text-primary-light text-sm mb-8">Email
                                          <span className="text-danger-600">*</span></label>
                                      <input type="email" className="form-control radius-8" id="email"
                                          placeholder="Enter email address" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="number" className="form-label fw-semibold text-primary-light text-sm mb-8">Phone
                                          Number</label>
                                      <input type="email" className="form-control radius-8" id="number"
                                          placeholder="Enter phone number" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="Website" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                          Website</label>
                                      <input type="url" className="form-control radius-8" id="Website" placeholder="Website URL" />
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="country"
                                          className="form-label fw-semibold text-primary-light text-sm mb-8">Country <span
                                              className="text-danger-600">*</span> </label>
                                      <select className="form-control radius-8 form-select" id="country">
                                          <option selected disabled>Select Country</option>
                                          <option>USA</option>
                                          <option>Bangladesh</option>
                                          <option>Pakistan</option>
                                          <option>India</option>
                                          <option>Canada</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="city" className="form-label fw-semibold text-primary-light text-sm mb-8">City
                                          <span className="text-danger-600">*</span> </label>
                                      <select className="form-control radius-8 form-select" id="city">
                                          <option selected disabled>Select City</option>
                                          <option>Washington</option>
                                          <option>Dhaka</option>
                                          <option>Lahor</option>
                                          <option>Panjab</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="state" className="form-label fw-semibold text-primary-light text-sm mb-8">State
                                          <span className="text-danger-600">*</span> </label>
                                      <select className="form-control radius-8 form-select" id="state">
                                          <option selected disabled>Select State</option>
                                          <option>Washington</option>
                                          <option>Dhaka</option>
                                          <option>Lahor</option>
                                          <option>Panjab</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="mb-20">
                                      <label htmlFor="zip" className="form-label fw-semibold text-primary-light text-sm mb-8"> Zip
                                          Code <span className="text-danger-600">*</span></label>
                                      <input type="text" className="form-control radius-8" id="zip" placeholder="Zip Code" />
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="mb-20">
                                      <label htmlFor="address" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                          Address* <span className="text-danger-600">*</span></label>
                                      <input type="text" className="form-control radius-8" id="address"
                                          placeholder="Enter Your Address" />
                                  </div>
                              </div>
                              <div className="row gy-4">
                                  <div className="col-md-6">
                                      <label htmlFor="imageUpload"
                                          className="form-label fw-semibold text-secondary-light text-md mb-8">Logo <span
                                              className="text-secondary-light fw-normal">(140px X 140px)</span></label>
                                      <input type="file" className="form-control radius-8" id="imageUpload" />
                                      <div className="avatar-upload mt-16">
                                          <div className="avatar-preview style-two">
                                              <div id="previewImage1"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="imageUploadTwo"
                                          className="form-label fw-semibold text-secondary-light text-md mb-8">Logo <span
                                              className="text-secondary-light fw-normal">(140px X 140px)</span></label>
                                      <input type="file" className="form-control radius-8" id="imageUploadTwo" />
                                      <div className="avatar-upload mt-16">
                                          <div className="avatar-preview style-two">
                                              <div id="previewImage2"></div>
                                          </div>
                                      </div>
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
        id="page-general-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />
    </>
  );
}
