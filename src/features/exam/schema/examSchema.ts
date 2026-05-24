import * as z from "zod";

export const examSchema = z.object({
  name: z.string().min(1, "Exam Name is required"),
  examDate: z.string().min(1, "Exam Date is required"),
  startTime: z.string().min(1, "Start Time is required"),
  endTime: z.string().min(1, "End Time is required"),
  maxMarks: z.coerce.number().min(0, "Max Marks must be 0 or greater"),
  passingMarks: z.coerce.number().min(0, "Passing Marks must be 0 or greater"),
  subjectId: z.coerce.number().int().positive("Subject ID must be positive"),
  classId: z.coerce.number().int().positive("Class ID must be positive"),
});

export type ExamFormValues = z.infer<typeof examSchema>;
