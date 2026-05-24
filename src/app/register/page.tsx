"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";
import { signupAction } from "@/features/auth/api/auth";
import { RegisterPayload } from "@/features/auth/types/auth.types";
import { RegisterFormValues, registerSchema } from "@/features/auth/schema/authSchema";
import { useToast } from "@/components/Toast";

const ROLE_MAP = {
  "ef50422e-2db4-4330-8bec-429973121fb7": "Parent",
  "STUDENT_ROLE_GUID_HERE": "Student",
  "TEACHER_ROLE_GUID_HERE": "Teacher",
  "ADMIN_ROLE_GUID_HERE": "Admin",
} as const;



export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema
    ) as any,
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      tenantId: "DEFAULT",
      password: "",
      confirmPassword: "",
      roleId: "",
      agreeToTerms: undefined,
      parent: { occupation: "" },
      student: {
        admissionNumber: "",
        admissionDate: "",
        academicYear: "",
        status: true,
        gender: "",
        dateOfBirth: "",
        bloodGroup: "",
        house: "",
        religion: "",
        caste: "",
        motherTongue: "",
        languagesKnown: "",
        primaryContactNumber: "",
        emailAddress: "",
        studentImage: "",
        categoryId: 0,
        classId: 0,
        parentId: 0,
      },
      teacher: {
        gender: "",
        qualification: "",
        joiningDate: "",
      },
    },
  });

  const selectedRoleId = watch("roleId");
  const selectedRoleName = ROLE_MAP[selectedRoleId as keyof typeof ROLE_MAP] || "";

  const onSubmit = async (data: RegisterFormValues) => {
    setError(null);
    
    // Construct the payload conditionally based on selected roleId
    const payload: RegisterPayload = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      tenantId: data.tenantId,
      password: data.password,
      roleId: data.roleId,
    };

    const roleName = ROLE_MAP[data.roleId as keyof typeof ROLE_MAP] || "";

    if (roleName === "Parent" && data.parent) {
      payload.parent = {
        occupation: data.parent.occupation || "",
      };
    } else if (roleName === "Student" && data.student) {
      payload.student = {
        admissionNumber: data.student.admissionNumber || "",
        admissionDate: data.student.admissionDate ? new Date(data.student.admissionDate).toISOString() : "",
        academicYear: data.student.academicYear || "",
        status: data.student.status ?? true,
        gender: data.student.gender || "",
        dateOfBirth: data.student.dateOfBirth ? new Date(data.student.dateOfBirth).toISOString() : "",
        bloodGroup: data.student.bloodGroup || "",
        house: data.student.house || "",
        religion: data.student.religion || "",
        caste: data.student.caste || "",
        motherTongue: data.student.motherTongue || "",
        languagesKnown: data.student.languagesKnown || "",
        primaryContactNumber: data.student.primaryContactNumber || "",
        emailAddress: data.student.emailAddress || "",
        studentImage: data.student.studentImage || "",
        categoryId: Number(data.student.categoryId || 0),
        classId: Number(data.student.classId || 0),
        parentId: Number(data.student.parentId || 0),
      };
    } else if (roleName === "Teacher" && data.teacher) {
      payload.teacher = {
        gender: data.teacher.gender || "",
        qualification: data.teacher.qualification || "",
        joiningDate: data.teacher.joiningDate || "",
      };
    }

    try {
      const res = await signupAction(payload);
      if (res.success) {
        showToast("success", "Account Created! 🚀", "Registration successful. Please log in.");
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
              <img src="/assets/images/learn-logo.png" alt="Register Image" className="w-100 h-100 object-fit-cover" />
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
                              placeholder="Enter your email" 
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
                                  Tenant ID <span className="text-danger-600">*</span>
                              </label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  placeholder="Tenant ID" 
                                  {...register("tenantId")} 
                              />
                              {errors.tenantId && (
                                  <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                      {errors.tenantId.message}
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
                              placeholder="Address" 
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
      
                      <div>
                          <label className="text-sm fw-semibold text-primary-light mb-8">
                              Select Role <span className="text-danger-600">*</span>
                          </label>
                          <select className="form-select" {...register("roleId")}>
                              <option value="">Choose your role</option>
                              <option value="STUDENT_ROLE_GUID_HERE">Student</option>
                              <option value="TEACHER_ROLE_GUID_HERE">Teacher</option>
                              <option value="ef50422e-2db4-4330-8bec-429973121fb7">Parent</option>
                              <option value="ADMIN_ROLE_GUID_HERE">Admin</option>
                          </select>
                          {errors.roleId && (
                              <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                  {errors.roleId.message}
                              </span>
                          )}
                      </div>

                      {/* Parent Fields */}
                      {selectedRoleName === "Parent" && (
                          <div className="border border-neutral-200 p-16 radius-8 bg-neutral-50 d-flex flex-column gap-16">
                              <h6 className="text-md fw-bold mb-0">Parent Information</h6>
                              <div>
                                  <label className="text-sm fw-semibold text-primary-light mb-8">
                                      Occupation <span className="text-danger-600">*</span>
                                  </label>
                                  <input 
                                      type="text" 
                                      className="form-control bg-white" 
                                      placeholder="Parent's occupation" 
                                      {...register("parent.occupation")} 
                                  />
                                  {errors.parent?.occupation && (
                                      <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                          {errors.parent.occupation.message}
                                      </span>
                                  )}
                              </div>
                          </div>
                      )}

                      {/* Teacher Fields */}
                      {selectedRoleName === "Teacher" && (
                          <div className="border border-neutral-200 p-16 radius-8 bg-neutral-50 d-flex flex-column gap-16">
                              <h6 className="text-md fw-bold mb-0">Teacher Information</h6>
                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Gender <span className="text-danger-600">*</span>
                                      </label>
                                      <select className="form-select bg-white" {...register("teacher.gender")}>
                                          <option value="">Select Gender</option>
                                          <option value="Male">Male</option>
                                          <option value="Female">Female</option>
                                      </select>
                                      {errors.teacher?.gender && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.teacher.gender.message}
                                          </span>
                                      )}
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Joining Date <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="date" 
                                          className="form-control bg-white" 
                                          {...register("teacher.joiningDate")} 
                                      />
                                      {errors.teacher?.joiningDate && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.teacher.joiningDate.message}
                                          </span>
                                      )}
                                  </div>
                              </div>
                              <div>
                                  <label className="text-sm fw-semibold text-primary-light mb-8">
                                      Qualification <span className="text-danger-600">*</span>
                                  </label>
                                  <input 
                                      type="text" 
                                      className="form-control bg-white" 
                                      placeholder="Qualification (e.g. Master in Science)" 
                                      {...register("teacher.qualification")} 
                                  />
                                  {errors.teacher?.qualification && (
                                      <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                          {errors.teacher.qualification.message}
                                      </span>
                                  )}
                              </div>
                          </div>
                      )}

                      {/* Student Fields */}
                      {selectedRoleName === "Student" && (
                          <div className="border border-neutral-200 p-16 radius-8 bg-neutral-50 d-flex flex-column gap-16">
                              <h6 className="text-md fw-bold mb-0">Student Information</h6>
                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Admission Number <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Admission number" 
                                          {...register("student.admissionNumber")} 
                                      />
                                      {errors.student?.admissionNumber && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.admissionNumber.message}
                                          </span>
                                      )}
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Admission Date <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="date" 
                                          className="form-control bg-white" 
                                          {...register("student.admissionDate")} 
                                      />
                                      {errors.student?.admissionDate && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.admissionDate.message}
                                          </span>
                                      )}
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Academic Year <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Academic Year (e.g. 2026)" 
                                          {...register("student.academicYear")} 
                                      />
                                      {errors.student?.academicYear && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.academicYear.message}
                                          </span>
                                      )}
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Gender <span className="text-danger-600">*</span>
                                      </label>
                                      <select className="form-select bg-white" {...register("student.gender")}>
                                          <option value="">Select Gender</option>
                                          <option value="Male">Male</option>
                                          <option value="Female">Female</option>
                                      </select>
                                      {errors.student?.gender && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.gender.message}
                                          </span>
                                      )}
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Date of Birth <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="date" 
                                          className="form-control bg-white" 
                                          {...register("student.dateOfBirth")} 
                                      />
                                      {errors.student?.dateOfBirth && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.dateOfBirth.message}
                                          </span>
                                      )}
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Blood Group
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Blood group (e.g. O+)" 
                                          {...register("student.bloodGroup")} 
                                      />
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          House
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="House" 
                                          {...register("student.house")} 
                                      />
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Religion
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Religion" 
                                          {...register("student.religion")} 
                                      />
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Caste
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Caste" 
                                          {...register("student.caste")} 
                                      />
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Mother Tongue
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Mother tongue" 
                                          {...register("student.motherTongue")} 
                                      />
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Languages Known
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="e.g. English, Arabic" 
                                          {...register("student.languagesKnown")} 
                                      />
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Primary Contact <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Primary contact phone" 
                                          {...register("student.primaryContactNumber")} 
                                      />
                                      {errors.student?.primaryContactNumber && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.primaryContactNumber.message}
                                          </span>
                                      )}
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Student Email Address <span className="text-danger-600">*</span>
                                      </label>
                                      <input 
                                          type="email" 
                                          className="form-control bg-white" 
                                          placeholder="Student's email" 
                                          {...register("student.emailAddress")} 
                                      />
                                      {errors.student?.emailAddress && (
                                          <span className="text-danger-600 text-sm mt-8 d-inline-block">
                                              {errors.student.emailAddress.message}
                                          </span>
                                      )}
                                  </div>
                                  <div className="col-sm-6">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Student Image URL
                                      </label>
                                      <input 
                                          type="text" 
                                          className="form-control bg-white" 
                                          placeholder="Student image URL" 
                                          {...register("student.studentImage")} 
                                      />
                                  </div>
                              </div>

                              <div className="row g-3">
                                  <div className="col-sm-4">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Category ID
                                      </label>
                                      <input 
                                          type="number" 
                                          className="form-control bg-white" 
                                          placeholder="0" 
                                          {...register("student.categoryId")} 
                                      />
                                  </div>
                                  <div className="col-sm-4">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Class ID
                                      </label>
                                      <input 
                                          type="number" 
                                          className="form-control bg-white" 
                                          placeholder="0" 
                                          {...register("student.classId")} 
                                      />
                                  </div>
                                  <div className="col-sm-4">
                                      <label className="text-sm fw-semibold text-primary-light mb-8">
                                          Parent ID
                                      </label>
                                      <input 
                                          type="number" 
                                          className="form-control bg-white" 
                                          placeholder="0" 
                                          {...register("student.parentId")} 
                                      />
                                  </div>
                              </div>
                          </div>
                      )}
       
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
                          {isSubmitting ? "Creating Account..." : "Create Account"}
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
