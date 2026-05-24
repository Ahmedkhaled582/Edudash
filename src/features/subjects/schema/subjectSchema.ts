import * as z from "zod";

export const subjectSchema = z.object({
    name: z.string().min(1, "Subject name is required"),
    academicYearId: z.preprocess(
        (val) => (val === "" || val === undefined ? 0 : Number(val)),
        z.number().int().positive("Academic year is required and must be a positive number")
    ),
    teacherId: z.preprocess(
        (val) => (val === "" || val === undefined ? 0 : Number(val)),
        z.number().int().positive("Teacher is required and must be a positive number")
    ),
});

export type SubjectFormValues = z.infer<typeof subjectSchema>;