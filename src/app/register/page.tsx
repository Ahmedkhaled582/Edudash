import Link from "next/link";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";

export default function RegisterPage() {
  return (
    <>
      <ThemeCustomization />
      <MobileOverlay />
      <div className="d-lg-flex bg-white">
          
          <div className="w-50 d-lg-block d-none overflow-hidden d-flex">
              <img src="/assets/images/thumbs/login-img.png" alt="Register Image" className="w-100 h-100 object-fit-cover" />
          </div>
      
          
          <div className="lg-w-50 px-24 py-40 d-flex justify-content-center align-items-center">
              <div className="max-w-540-px mx-auto w-100">
      
                  <Link href="/">
                      <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
      
                  <div className="mt-48 mb-32">
                      <h1 className="h6 fw-bold text-primary-light">Create Your Account 🚀</h1>
                      <p className="text-sm text-secondary-light">
                          Fill in the details to get started
                      </p>
                  </div>
      
                  <form action="#" className="d-flex flex-column gap-24">
      
                      
                      <div>
                          <label className="text-sm fw-semibold text-primary-light mb-8">
                              Full Name <span className="text-danger-600">*</span>
                          </label>
                          <input type="text" className="form-control" placeholder="Enter your full name" />
                      </div>
      
                      
                      <div>
                          <label className="text-sm fw-semibold text-primary-light mb-8">
                              Email Address <span className="text-danger-600">*</span>
                          </label>
                          <input type="email" className="form-control" placeholder="Enter your email" />
                      </div>
      
                      
                      <div>
                          <label htmlFor="password" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                              Password
                              <span className="text-danger-600">*</span>
                          </label>
                          <div className="position-relative">
                              <input type="password" id="password" className="form-control" placeholder="Enter your password"
                                  required />
                              <button type="button"
                                  className="toggle-password btn p-0 border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light cursor-pointer ri-eye-line"
                                  data-toggle="#password" aria-label="Toggle password visibility">
                              </button>
                          </div>
                      </div>
                      
                      <div>
                              <label htmlFor="password" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                                  Password
                                  <span className="text-danger-600">*</span>
                              </label>
                              <div className="position-relative">
                                  <input type="password" id="confirmPassword" className="form-control" placeholder="Enter your password"
                                      required />
                                  <button type="button"
                                      className="toggle-password btn p-0 border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light cursor-pointer ri-eye-line"
                                      data-toggle="#confirmPassword" aria-label="Toggle password visibility">
                                  </button>
                              </div>
                          </div>
      
                      
                      <div>
                          <label className="text-sm fw-semibold text-primary-light mb-8">
                              Select Role
                          </label>
                          <select className="form-select">
                              <option value="">Choose your role</option>
                              <option>Student</option>
                              <option>Teacher</option>
                              <option>Guardian</option>
                              <option>Admin</option>
                          </select>
                      </div>
      
                      
                      <div className="form-check style-check d-flex align-items-center">
                          <input className="form-check-input border border-neutral-400" type="checkbox" value="" id="remeber" />
                          <label className="form-check-label" htmlFor="remeber"> I agree to the <Link href="#"
                                  className="text-primary-600 text-decoration-underline">Terms & Conditions</Link> </label>
                      </div>
      
                      
                      <button className="btn btn-primary-600 w-100 py-16 radius-8 text-sm fw-semibold">
                          Create Account
                      </button>
      
                  </form>
      
                  
                  <div className="mt-24 text-center text-sm">
                      Already have an account?
                      <Link href="/login" className="text-primary-600 fw-semibold text-decoration-underline">
                          Log In
                      </Link>
                  </div>
      
              </div>
          </div>
      </div>

    </>
  );
}
