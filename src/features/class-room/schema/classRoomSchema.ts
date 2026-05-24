import * as z from "zod";

export const classRoomSchema = z.object({
    name: z.string().min(1, "Classroom name is required"),
    academicYearId: z.preprocess(
        (val) => (val === "" || val === undefined ? 0 : Number(val)),
        z.number().int().positive("Academic year is required and must be a positive number")
    ),
    teacherId: z.preprocess(
        (val) => (val === "" || val === undefined ? 0 : Number(val)),
        z.number().int().positive("Teacher is required and must be a positive number")
    ),
});

export type ClassRoomFormValues = z.infer<typeof classRoomSchema>;