import * as z from "zod";

export const guardianSchema = z.object({
  relation: z.string().min(1, "Guardian Type is required"),
  name: z.string().min(1, "Guardian Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  occupation: z.string().min(1, "Occupation is required"),
  address: z.string().min(1, "Address is required"),
  studentId: z.preprocess(
    (val) => (val === "" || val === undefined ? 0 : Number(val)),
    z.number().int().positive("Student ID is required and must be positive")
  ),
});

export type GuardianFormValues = z.infer<typeof guardianSchema>;