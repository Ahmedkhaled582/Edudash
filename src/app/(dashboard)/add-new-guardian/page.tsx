/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddGuardian } from "@/features/guardian/hooks/useGuardian";
import { guardianSchema, GuardianFormValues } from "@/features/guardian/schema/guardianSchema";
import { useToast } from "@/components/Toast";

const __inlineScripts = "// ================== Password Show Hide Js Start ==========\r\n    function initializePasswordToggle(toggleSelector) {\r\n        $(toggleSelector).on('click', function () {\r\n            $(this).toggleClass(\"ri-eye-off-line\");\r\n            var input = $($(this).attr(\"data-toggle\"));\r\n            if (input.attr(\"type\") === \"password\") {\r\n                input.attr(\"type\", \"text\");\r\n            } else {\r\n                input.attr(\"type\", \"password\");\r\n            }\r\n        });\r\n    }\r\n    // Call the function\r\n    initializePasswordToggle('.toggle-password');\r\n    // ========================= Password Show Hide Js End ===========================\r\n\r\n    // ========================== Drag & Drop Upload photo Js start ========================\r\n    document.querySelectorAll(\".drop-zone__input\").forEach((inputElement) => {\r\n        const dropZoneElement = inputElement.closest(\".drop-zone\");\r\n\r\n        dropZoneElement.addEventListener(\"click\", (e) => {\r\n            inputElement.click();\r\n        });\r\n\r\n        inputElement.addEventListener(\"change\", (e) => {\r\n            if (inputElement.files.length) {\r\n                updateThumbnail(dropZoneElement, inputElement.files[0]);\r\n            }\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"dragover\", (e) => {\r\n            e.preventDefault();\r\n            dropZoneElement.classList.add(\"drop-zone--over\");\r\n        });\r\n\r\n        [\"dragleave\", \"dragend\"].forEach((type) => {\r\n            dropZoneElement.addEventListener(type, (e) => {\r\n                dropZoneElement.classList.remove(\"drop-zone--over\");\r\n            });\r\n        });\r\n\r\n        dropZoneElement.addEventListener(\"drop\", (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.dataTransfer.files.length) {\r\n                inputElement.files = e.dataTransfer.files;\r\n                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);\r\n            }\r\n\r\n            dropZoneElement.classList.remove(\"drop-zone--over\");\r\n        });\r\n    });\r\n\r\n    /**\r\n     * Updates the thumbnail on a drop zone element.\r\n     *\r\n     * @param {HTMLElement} dropZoneElement\r\n     * @param {File} file\r\n     */\r\n    function updateThumbnail(dropZoneElement, file) {\r\n        let thumbnailElement = dropZoneElement.querySelector(\".drop-zone__thumb\");\r\n\r\n        // First time - remove the prompt\r\n        if (dropZoneElement.querySelector(\".drop-zone__prompt\")) {\r\n            dropZoneElement.querySelector(\".drop-zone__prompt\").remove();\r\n        }\r\n\r\n        // First time - there is no thumbnail element, so lets create it\r\n        if (!thumbnailElement) {\r\n            thumbnailElement = document.createElement(\"div\");\r\n            thumbnailElement.classList.add(\"drop-zone__thumb\");\r\n            dropZoneElement.appendChild(thumbnailElement);\r\n        }\r\n\r\n        thumbnailElement.dataset.label = file.name;\r\n\r\n        // Show thumbnail for image files\r\n        if (file.type.startsWith(\"image/\")) {\r\n            const reader = new FileReader();\r\n\r\n            reader.readAsDataURL(file);\r\n            reader.onload = () => {\r\n                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;\r\n            };\r\n        } else {\r\n            thumbnailElement.style.backgroundImage = null;\r\n        }\r\n    }\r\n    // ========================== Drag & Drop Upload photo Js end ========================";



export default function AddNewGuardianPage() {
    const addGuardianMutation = useAddGuardian();
    const { showToast } = useToast();

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

    const onSubmit = async (data: GuardianFormValues) => {
        addGuardianMutation.mutate(data, {
            onSuccess: () => {
                showToast("success", "Guardian Added", `Successfully added ${data.relation} "${data.name}"`);
                reset();
            },
            onError: (error: any) => {
                const errorMsg = error?.response?.data?.message || error?.message || "Failed to add guardian";
                showToast("error", "Error Adding Guardian", errorMsg);
            }
        });
    };

    const isSubmitting = addGuardianMutation.isPending;
    const errorObj = addGuardianMutation.error as any;
    const errorMessage = errorObj?.response?.data?.message || errorObj?.message || null;
    const isSuccess = addGuardianMutation.isSuccess;

    return (
        <>
            <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                <div className="">
                    <h1 className="fw-semibold mb-4 h6 text-primary-light">Add New Guardian</h1>
                    <div className="">
                        <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                        <Link href="/guardian-list" className="text-secondary-light hover-text-primary hover-underline d-none"> /
                            guardian</Link>
                        <span className="text-secondary-light">/ Add New Guardian</span>
                    </div>
                </div>
                <Link href="/add-new-guardian" className="btn btn-primary-600 d-flex align-items-center gap-6 d-none">
                    <span className="d-flex text-md">
                        <i className="ri-add-large-line"></i>
                    </span>
                    Add Guardian
                </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-24">
                {errorMessage && (
                    <div className="alert alert-danger py-12 px-16 text-sm radius-8 mb-24" role="alert">
                        {errorMessage}
                    </div>
                )}
                {isSuccess && (
                    <div className="alert alert-success py-12 px-16 text-sm radius-8 mb-24" role="alert">
                        Guardian added successfully!
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
                                        <div className="">
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
                                        <div className="">
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
                                        <div className="">
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
                                        <div className="">
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
                                        <div className="">
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
                                        <div className="">
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
                            <button type="button" onClick={() => reset()} className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <Script
                id="page-add-new-guardian-inline"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{ __html: "(function(){\n" + __inlineScripts + "\n})();" }}
            />
        </>
    );
}
