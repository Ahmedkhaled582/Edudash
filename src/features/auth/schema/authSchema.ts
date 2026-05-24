import * as z from "zod";
export const loginSchema = z.object({
  userName: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  schoolId: z.string().min(1, "School ID is required"),
});

const ROLE_MAP = {
  "ef50422e-2db4-4330-8bec-429973121fb7": "Parent",
  "STUDENT_ROLE_GUID_HERE": "Student",
  "TEACHER_ROLE_GUID_HERE": "Teacher",
  "ADMIN_ROLE_GUID_HERE": "Admin",
} as const;

export const registerSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  tenantId: z.string().min(1, "Tenant ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
  roleId: z.string().min(1, "Role is required"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the Terms & Conditions"),
  
  parent: z.object({
    occupation: z.string(),
  }).optional(),
  
  student: z.object({
    admissionNumber: z.string(),
    admissionDate: z.string(),
    academicYear: z.string(),
    status: z.boolean(),
    gender: z.string(),
    dateOfBirth: z.string(),
    bloodGroup: z.string(),
    house: z.string(),
    religion: z.string(),
    caste: z.string(),
    motherTongue: z.string(),
    languagesKnown: z.string(),
    primaryContactNumber: z.string(),
    emailAddress: z.string(),
    studentImage: z.string(),
    categoryId: z.preprocess((val) => Number(val || 0), z.number().int()),
    classId: z.preprocess((val) => Number(val || 0), z.number().int()),
    parentId: z.preprocess((val) => Number(val || 0), z.number().int()),
  }).optional(),
  
  teacher: z.object({
    gender: z.string(),
    qualification: z.string(),
    joiningDate: z.string(),
  }).optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
}).superRefine((data, ctx) => {
  const roleName = ROLE_MAP[data.roleId as keyof typeof ROLE_MAP] || "";
  if (roleName === "Parent") {
    if (!data.parent?.occupation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Occupation is required",
        path: ["parent", "occupation"],
      });
    }
  } else if (roleName === "Student") {
    if (!data.student?.admissionNumber) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "admissionNumber"] });
    }
    if (!data.student?.admissionDate) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "admissionDate"] });
    }
    if (!data.student?.academicYear) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "academicYear"] });
    }
    if (!data.student?.gender) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "gender"] });
    }
    if (!data.student?.dateOfBirth) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "dateOfBirth"] });
    }
    if (!data.student?.primaryContactNumber) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "primaryContactNumber"] });
    }
    if (!data.student?.emailAddress) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["student", "emailAddress"] });
    } else {
      const emailResult = z.string().email().safeParse(data.student.emailAddress);
      if (!emailResult.success) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid email", path: ["student", "emailAddress"] });
      }
    }
  } else if (roleName === "Teacher") {
    if (!data.teacher?.gender) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["teacher", "gender"] });
    }
    if (!data.teacher?.qualification) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["teacher", "qualification"] });
    }
    if (!data.teacher?.joiningDate) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["teacher", "joiningDate"] });
    }
  }
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const schoolRegisterSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
  roleId: z.string().min(1, "Role ID is required"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the Terms & Conditions"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SchoolRegisterFormValues = z.infer<typeof schoolRegisterSchema>;