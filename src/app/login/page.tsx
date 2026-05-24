"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";
import { loginAction } from "@/features/auth/api/auth";
import { LoginFormValues, loginSchema } from "@/features/auth/schema/authSchema";
import { useToast } from "@/components/Toast";



export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
      schoolId: "DEFAULT",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(null);
    try {
      const res = await loginAction(data);
      if (res.success) {
        showToast("success", "Welcome Back! 👋", "Logged in successfully.");
        // Redirect to dashboard or home page
        router.push("/");
        router.refresh();
      } else {
        const errorMsg = res.error || "Login failed";
        setError(errorMsg);
        showToast("error", "Login Failed", errorMsg);
      }
    } catch (err: any) {
      const errorMsg = err?.message || "An unexpected error occurred";
      setError(errorMsg);
      showToast("error", "Login Error", errorMsg);
    }
  };

  return (
    <>
      <ThemeCustomization />
      <MobileOverlay />
      <div className="d-lg-flex bg-white">
          <div className="w-50 d-lg-flex d-none overflow-hidden">
              <img src="/assets/images/learn-logo.png" alt="Login Image" className="w-100 h-100 object-fit-cover" />
          </div>
          <div className="lg-w-50 px-24 py-32 d-flex justify-content-center align-items-center">
              <div className="max-w-540-px mx-auto">
                  <Link href="/" className="">
                      <img className="w-30" src="/assets/images/INNOVATION LOGO.png" alt="Logo" />
                  </Link>
                  <div className="mt-32 mb-32">
                      <h1 className="h6 fw-bold text-primary-light mb-8">
                          Welcome Back 👋
                      </h1>
                      <p className="text-sm text-secondary-light mb-0">
                          Log in to your account to continue
                      </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-32 submit-form">
                      {error && (
                          <div className="alert alert-danger py-12 px-16 text-sm radius-8" role="alert">
                              {error}
                          </div>
                      )}
                      
                      <div className="d-flex flex-column gap-16">
                          <div>
                              <label htmlFor="userName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                                  Username
                                  <span className="text-danger-600">*</span>
                              </label>
                              <input 
                                  type="text" 
                                  id="userName" 
                                  className="userName-field form-control" 
                                  placeholder="Enter your username" 
                                  {...register("userName")}
                              />
                              {errors.userName && (
                                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                      {errors.userName.message}
                                  </span>
                              )}
                          </div>
      
                          <div>
                              <label htmlFor="password" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                                  Password
                                  <span className="text-danger-600">*</span>
                              </label>
                              <div className="position-relative">
                                  <input 
                                      type={showPassword ? "text" : "password"} 
                                      id="password" 
                                      className="password-field form-control" 
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
                              <label htmlFor="schoolId" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                                  School ID
                                  <span className="text-danger-600">*</span>
                              </label>
                              <input 
                                  type="text" 
                                  id="schoolId" 
                                  className="schoolId-field form-control" 
                                  placeholder="Enter school ID" 
                                  {...register("schoolId")}
                              />
                              {errors.schoolId && (
                                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                      {errors.schoolId.message}
                                  </span>
                              )}
                          </div>
                      </div>
                      <div className="d-flex justify-content-between gap-2">
                          <div className="form-check style-check d-flex align-items-center">
                              <input className="form-check-input border border-neutral-400" type="checkbox" value="" id="remeber" />
                              <label className="form-check-label" htmlFor="remeber">Remember me </label>
                          </div>
                          <Link href="#" className="text-primary-600 fw-medium text-decoration-underline">Forgot Password?</Link>
                      </div>
                      <div className="">
                          <button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="loginBtn btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-8"
                          > 
                              {isSubmitting ? "Logging In..." : "Log In"}
                          </button>
                      </div>
                      <div className="text-center text-sm text-secondary-light">
                          or login as
                      </div>
                      <div className="d-grid sm-grid-cols-3 grid-cols-2 gap-16">
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-success text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/sheild-icon.png" alt="Icon" />
                              </span>
                              <span className="">Supper Admin</span>
                          </Link>
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-info-600 text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/dashboard-icon.png" alt="Icon" />
                              </span>
                              <span className="">Admin</span>
                          </Link>
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-warning-600 text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/student-icon.png" alt="Icon" />
                              </span>
                              <span className="">Student</span>
                          </Link>
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-purple-600 text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/teacher-icon.png" alt="Icon" />
                              </span>
                              <span className="">Teacher</span>
                          </Link>
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-primary-600 text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/guardian-icon.png" alt="Icon" />
                              </span>
                              <span className="">Guardians </span>
                          </Link>
                          <Link href="#"
                              className="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-pink text-white py-10 px-8">
                              <span className="d-flex">
                                  <img src="/assets/images/icons/library-icon.png" alt="Icon" />
                              </span>
                              <span className="">Librarian</span>
                          </Link>
                      </div>
                  </form>
              </div>
          </div>
      </div>

    </>
  );
}
