"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";
import { schoolRegisterAction } from "@/features/auth/api/auth";
import { SchoolRegisterFormValues, schoolRegisterSchema } from "@/features/auth/schema/authSchema";
import { useToast } from "@/components/Toast";

export default function SchoolRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchoolRegisterFormValues>({
    resolver: zodResolver(schoolRegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
      roleId: "",
      agreeToTerms: undefined,
    },
  });

  const onSubmit = async (data: SchoolRegisterFormValues) => {
    setError(null);
    try {
      const res = await schoolRegisterAction({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        password: data.password,
        roleId: data.roleId,
      });

      if (res.success) {
        showToast("success", "School Account Created! 🏫", "School registration successful. Please log in.");
        router.push("/login");
        router.refresh();
      } else {
        const errorMsg = res.error || "Registration failed";
        setError(errorMsg);
        showToast("error", "Registration Failed", errorMsg);
      }
    } catch (err: any) {
      const errorMsg = err?.message || "An unexpected error occurred";
      setError(errorMsg);
      showToast("error", "Registration Error", errorMsg);
    }
  };

  return (
    <>
      <ThemeCustomization />
      <MobileOverlay />
      <div className="d-lg-flex bg-white">
        <div className="w-50 d-lg-block d-none overflow-hidden d-flex">
          <img src="/assets/images/thumbs/login-img.png" alt="Register School Image" className="w-100 h-100 object-fit-cover" />
        </div>
        
        <div className="lg-w-50 px-24 py-40 d-flex justify-content-center align-items-center">
          <div className="max-w-540-px mx-auto w-100">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>

            <div className="mt-48 mb-32">
              <h1 className="h6 fw-bold text-primary-light">Register Your School 🏫</h1>
              <p className="text-sm text-secondary-light">
                Fill in the details to register your school account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-24">
              {error && (
                <div className="alert alert-danger py-12 px-16 text-sm radius-8" role="alert">
                  {error}
                </div>
              )}

              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="text-sm fw-semibold text-primary-light mb-8">
                    First Name <span className="text-danger-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="First name" 
                    {...register("firstName")} 
                  />
                  {errors.firstName && (
                    <span className="text-danger-600 text-sm mt-8 d-inline-block">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                
                <div className="col-sm-6">
                  <label className="text-sm fw-semibold text-primary-light mb-8">
                    Last Name <span className="text-danger-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 
                    {...register("lastName")} 
                  />
                  {errors.lastName && (
                    <span className="text-danger-600 text-sm mt-8 d-inline-block">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm fw-semibold text-primary-light mb-8">
                  Email Address <span className="text-danger-600">*</span>
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter school email" 
                  {...register("email")} 
                />
                {errors.email && (
                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="text-sm fw-semibold text-primary-light mb-8">
                    Phone Number <span className="text-danger-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Phone number" 
                    {...register("phoneNumber")} 
                  />
                  {errors.phoneNumber && (
                    <span className="text-danger-600 text-sm mt-8 d-inline-block">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
                
                <div className="col-sm-6">
                  <label className="text-sm fw-semibold text-primary-light mb-8">
                    Role ID <span className="text-danger-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Role UUID (e.g. ADMIN_ROLE_GUID)" 
                    {...register("roleId")} 
                  />
                  {errors.roleId && (
                    <span className="text-danger-600 text-sm mt-8 d-inline-block">
                      {errors.roleId.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm fw-semibold text-primary-light mb-8">
                  Address <span className="text-danger-600">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="School physical address" 
                  {...register("address")} 
                />
                {errors.address && (
                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                    {errors.address.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                  Password <span className="text-danger-600">*</span>
                </label>
                <div className="position-relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className="form-control" 
                    placeholder="Enter your password"
                    {...register("password")} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`toggle-password btn p-0 border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light cursor-pointer ${
                      showPassword ? "ri-eye-off-line" : "ri-eye-line"
                    }`}
                    aria-label="Toggle password visibility">
                  </button>
                </div>
                {errors.password && (
                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                    {errors.password.message}
                  </span>
                )}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                  Confirm Password <span className="text-danger-600">*</span>
                </label>
                <div className="position-relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirmPassword" 
                    className="form-control" 
                    placeholder="Confirm your password"
                    {...register("confirmPassword")} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`toggle-password btn p-0 border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light cursor-pointer ${
                      showConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"
                    }`}
                    aria-label="Toggle password visibility">
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div className="form-check style-check d-flex align-items-start">
                <input 
                  className="form-check-input border border-neutral-400 mt-4" 
                  type="checkbox" 
                  id="agreeToTerms"
                  {...register("agreeToTerms")} 
                />
                <label className="form-check-label ms-8" htmlFor="agreeToTerms">
                  I agree to the <Link href="#" className="text-primary-600 text-decoration-underline">Terms & Conditions</Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <span className="text-danger-600 text-sm d-inline-block">
                  {errors.agreeToTerms.message}
                </span>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn btn-primary-600 w-100 py-16 radius-8 text-sm fw-semibold"
              >
                {isSubmitting ? "Registering School..." : "Register School"}
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
