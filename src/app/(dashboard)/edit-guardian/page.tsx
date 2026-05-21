/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useGuardians, useUpdateGuardian } from "@/features/guardian/hooks/useGuardian";
import { guardianSchema, GuardianFormValues } from "@/features/guardian/schema/guardianSchema";
import { useToast } from "@/components/Toast";

function EditGuardianForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const guardianId = idParam ? parseInt(idParam, 10) : null;

  const { data: guardians, isLoading: isLoadingGuardians, error: loadError } = useGuardians();
  const updateGuardianMutation = useUpdateGuardian();
  const { showToast } = useToast();

  const guardian = guardians?.find((g) => g.id === guardianId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GuardianFormValues>({
    resolver: zodResolver(guardianSchema) as any,
    defaultValues: {
      relation: "",
      name: "",
      phone: "",
      occupation: "",
      address: "",
      studentId: undefined,
    },
  });

  // Pre-fill form values once guardian data is fetched
  useEffect(() => {
    if (guardian) {
      reset({
        relation: guardian.relation,
        name: guardian.name,
        phone: guardian.phone,
        occupation: guardian.occupation,
        address: guardian.address,
        studentId: guardian.studentId,
      });
    }
  }, [guardian, reset]);

  const onSubmit = async (data: GuardianFormValues) => {
    if (guardianId === null) return;
    
    updateGuardianMutation.mutate({
      ...data,
      id: guardianId,
    }, {
      onSuccess: () => {
        showToast("success", "Guardian Updated", `Successfully updated ${data.relation} "${data.name}"`);
        router.push("/guardian-list");
      },
      onError: (error: any) => {
        const errorMsg = error?.response?.data?.message || error?.message || "Failed to update guardian";
        showToast("error", "Error Updating Guardian", errorMsg);
      }
    });
  };

  const isSubmitting = updateGuardianMutation.isPending;
  const errorObj = updateGuardianMutation.error as any;
  const errorMessage = errorObj?.response?.data?.message || errorObj?.message || null;
  const isSuccess = updateGuardianMutation.isSuccess;

  if (isLoadingGuardians) {
    return (
      <div className="d-flex align-items-center justify-content-center min-h-200-px py-40">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading guardian info...</span>
        </div>
      </div>
    );
  }

  if (loadError || !guardianId || !guardian) {
    return (
      <div className="alert alert-danger py-16 px-24 text-md radius-8 mb-24" role="alert">
        {loadError ? "Failed to load guardian information." : "Invalid or missing Guardian ID. Please go back to the guardian list."}
        <div className="mt-12">
          <Link href="/guardian-list" className="btn btn-danger-600 btn-sm text-white">
            Back to Guardian List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div>
          <h1 className="fw-semibold mb-4 h6 text-primary-light">Edit Guardian</h1>
          <div>
            <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
            <span className="text-secondary-light">/ Edit Guardian</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-24">
        {errorMessage && (
          <div className="alert alert-danger py-12 px-16 text-sm radius-8 mb-24" role="alert">
            {errorMessage}
          </div>
        )}
        {isSuccess && (
          <div className="alert alert-success py-12 px-16 text-sm radius-8 mb-24" role="alert">
            Guardian updated successfully!
          </div>
        )}

        <div className="row gy-3">
          <div className="col-xl-12">
            <div className="shadow-1 radius-12 bg-base h-100 overflow-hidden">
              <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
                <h6 className="text-lg fw-semibold mb-0">Personal Info</h6>
              </div>
              <div className="card-body p-20">
                <div className="row gy-3">
                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="guardianType" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Guardian Type <span className="text-danger-600">*</span>
                      </label>
                      <select id="guardianType" className="form-control form-select" {...register("relation")}>
                        <option value="">Select Guardian</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Uncle">Uncle</option>
                      </select>
                      {errors.relation && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.relation.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="guardianName" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Guardian Name <span className="text-danger-600">*</span>
                      </label>
                      <input type="text" id="guardianName" className="form-control" placeholder="Enter guardian name" {...register("name")} />
                      {errors.name && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="phoneNumber" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Phone <span className="text-danger-600">*</span>
                      </label>
                      <input type="tel" id="phoneNumber" className="form-control" placeholder="Enter phone number" {...register("phone")} />
                      {errors.phone && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="occupation" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Occupation <span className="text-danger-600">*</span>
                      </label>
                      <input type="text" id="occupation" className="form-control" placeholder="Enter occupation" {...register("occupation")} />
                      {errors.occupation && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.occupation.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="guardianAddress" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Guardian Address <span className="text-danger-600">*</span>
                      </label>
                      <input type="text" id="guardianAddress" className="form-control" placeholder="Enter guardian address" {...register("address")} />
                      {errors.address && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-sm-6">
                    <div>
                      <label htmlFor="studentId" className="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                        Student ID <span className="text-danger-600">*</span>
                      </label>
                      <input type="number" id="studentId" className="form-control" placeholder="Enter student ID" {...register("studentId")} />
                      {errors.studentId && (
                        <span className="text-danger-600 text-sm mt-8 d-inline-block">
                          {errors.studentId.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="d-flex align-items-center justify-content-center gap-3 mt-8">
              <button type="button" onClick={() => router.push("/guardian-list")} className="border border-neutral-300 bg-hover-neutral-200 text-secondary-light text-md px-50 py-11 radius-8">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default function EditGuardianPage() {
  return (
    <Suspense fallback={
      <div className="d-flex align-items-center justify-content-center min-h-200-px py-40">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading edit form...</span>
        </div>
      </div>
    }>
      <EditGuardianForm />
    </Suspense>
  );
}
