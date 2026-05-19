/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Script from "next/script";
const __inlineScripts = "let choosePlanInput = document.querySelector('.choose-plan-input');\r\n    let priceRanges = document.querySelectorAll('.price-range');\r\n\r\n    // Store original prices (once)\r\n    priceRanges.forEach(price => {\r\n        price.dataset.original = price.innerHTML.trim();\r\n    });\r\n\r\n    choosePlanInput.addEventListener('change', function () {\r\n\r\n        if (this.checked) {\r\n            // When checked → Multiply by 10\r\n            priceRanges.forEach(price => {\r\n                let cleanValue = price.dataset.original.replace(/[^0-9.]/g, '').trim();\r\n                let multiplied = Number(cleanValue) * 10;\r\n                price.innerHTML = multiplied;\r\n            });\r\n\r\n        } else {\r\n            // When unchecked → Restore original values\r\n            priceRanges.forEach(price => {\r\n                price.innerHTML = price.dataset.original;\r\n            });\r\n        }\r\n    });";

export default function SubscriptionPlanPage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Subscription Plan </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Subscription Plan</span>
                      </div>
                  </div>
              </div>
      
              <div className="mt-24">
                  <div className="card h-100 p-0 radius-12 overflow-hidden mt-24">
                      <div className="card-body p-40">
                          <div className="row justify-content-center">
                              <div className="col-xxl-10">
                                  <div className="text-center">
                                      <h4 className="mb-0">Simple, Transparent Pricing</h4>
                                  </div>
      
                                  <div className="pricing-tab">
                                      <div
                                          className="form-switch switch-primary d-flex align-items-center gap-3 mt-28 justify-content-center">
                                          <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                              htmlFor="yes">Monthly</label>
                                          <input className="form-check-input choose-plan-input" type="checkbox" role="switch"
                                              id="yes" />
                                          <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                              htmlFor="yes">Annually</label>
                                      </div>
                                  </div>
      
                                  <div className="row gy-4">
                                      <div className="col-xxl-4 col-sm-6">
                                          <div
                                              className="pricing-plan position-relative radius-24 overflow-hidden border bg-base">
                                              <div className="d-flex align-items-center gap-16">
                                                  <span
                                                      className="w-72-px h-72-px d-flex justify-content-center align-items-center radius-16 bg-primary-50">
                                                      <img src="/assets/images/icons/price-icon1.png" alt="Image" />
                                                  </span>
                                                  <div className="">
                                                      <span className="fw-medium text-md text-secondary-light">For
                                                          individuals</span>
                                                      <h6 className="mb-0">Basic</h6>
                                                  </div>
                                              </div>
                                              <p className="mt-16 mb-0 text-secondary-light mb-28">Lorem ipsum dolor sit amet
                                                  doloroli sitiol conse ctetur adipiscing elit. </p>
                                              <h3 className="mb-24">
                                                  $<span className="price-range">99</span>
                                                  <span className="fw-medium text-md text-secondary-light">/monthly</span>
                                              </h3>
                                              <span className="mb-20 fw-medium">What's included</span>
                                              <ul>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">All analytics features</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Up to 250,000 tracked
                                                          visits</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Normal support</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                  </li>
                                              </ul>
                                              <button type="button"
                                                  className="bg-primary-600 bg-hover-primary-700 text-white text-center border border-primary-600 text-sm btn-sm px-12 py-10 w-100 radius-8 mt-28"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</button>
                                          </div>
                                      </div>
                                      <div className="col-xxl-4 col-sm-6">
                                          <div
                                              className="pricing-plan featured-item position-relative radius-24 overflow-hidden border bg-primary-600 text-white z-1">
                                              <img src="/assets/images/icons/pricing-shape.png" alt="Image"
                                                  className="position-absolute end-0 top-10 z-n1" />
                                              <span
                                                  className="bg-white bg-opacity-25 text-white radius-24 py-8 px-24 text-sm position-absolute end-0 top-0 z-1 rounded-start-top-0 rounded-end-bottom-0">Popular</span>
                                              <div className="d-flex align-items-center gap-16">
                                                  <span
                                                      className="w-72-px h-72-px d-flex justify-content-center align-items-center radius-16 bg-base">
                                                      <img src="/assets/images/icons/price-icon2.png" alt="Image" />
                                                  </span>
                                                  <div className="">
                                                      <span className="fw-medium text-md text-white">For startups</span>
                                                      <h6 className="mb-0 text-white">Pro</h6>
                                                  </div>
                                              </div>
                                              <p className="mt-16 mb-0 text-white mb-28">Lorem ipsum dolor sit amet doloroli
                                                  sitiol conse ctetur adipiscing elit. </p>
                                              <h3 className="mb-24 text-white">
                                                  $<span className="price-range">199</span>
                                                  <span className="fw-medium text-md text-white">/monthly</span>
                                              </h3>
                                              <span className="mb-20 fw-medium">What's included</span>
                                              <ul>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-white rounded-circle text-primary-600"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-lg   "></iconify-icon></span>
                                                      <span className="text-white text-lg">All analytics features</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-white rounded-circle text-primary-600"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-lg   "></iconify-icon></span>
                                                      <span className="text-white text-lg">Up to 250,000 tracked visits</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-white rounded-circle text-primary-600"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-lg   "></iconify-icon></span>
                                                      <span className="text-white text-lg">Normal support</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-white rounded-circle text-primary-600"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-lg   "></iconify-icon></span>
                                                      <span className="text-white text-lg">Up to 3 team members</span>
                                                  </li>
                                              </ul>
                                              <button type="button"
                                                  className="bg-white text-primary-600 text-white text-center border border-white text-sm btn-sm px-12 py-10 w-100 radius-8 mt-28"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</button>
      
                                          </div>
                                      </div>
                                      <div className="col-xxl-4 col-sm-6">
                                          <div
                                              className="pricing-plan position-relative radius-24 overflow-hidden border bg-base">
                                              <div className="d-flex align-items-center gap-16">
                                                  <span
                                                      className="w-72-px h-72-px d-flex justify-content-center align-items-center radius-16 bg-primary-50">
                                                      <img src="/assets/images/icons/price-icon3.png" alt="Image" />
                                                  </span>
                                                  <div className="">
                                                      <span className="fw-medium text-md text-secondary-light">For big
                                                          companies</span>
                                                      <h6 className="mb-0">Enterprise</h6>
                                                  </div>
                                              </div>
                                              <p className="mt-16 mb-0 text-secondary-light mb-28">Lorem ipsum dolor sit amet
                                                  doloroli sitiol conse ctetur adipiscing elit. </p>
                                              <h3 className="mb-24">
                                                  $<span className="price-range">399</span>
                                                  <span className="fw-medium text-md text-secondary-light">/monthly</span>
                                              </h3>
                                              <span className="mb-20 fw-medium">What's included</span>
                                              <ul>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">All analytics features</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Up to 250,000 tracked
                                                          visits</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16 mb-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Normal support</span>
                                                  </li>
                                                  <li className="d-flex align-items-center gap-16">
                                                      <span
                                                          className="w-24-px h-24-px d-flex justify-content-center align-items-center bg-primary-600 rounded-circle"><iconify-icon
                                                              icon="iconamoon:check-light"
                                                              className="text-white text-lg "></iconify-icon></span>
                                                      <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                  </li>
                                              </ul>
                                              <button type="button"
                                                  className="bg-primary-600 bg-hover-primary-700 text-white text-center border border-primary-600 text-sm btn-sm px-12 py-10 w-100 radius-8 mt-28"
                                                  data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

      <Script
        id="page-subscription-plan-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
      />
    </>
  );
}
