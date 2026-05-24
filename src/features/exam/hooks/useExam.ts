import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getExams,
  addExam,
  updateExam,
  deleteExam,
  AddExamPayload,
  UpdateExamPayload,
  Exam,
} from "../api/examApi";

export const useExams = () => {
  return useQuery<Exam[]>({
    queryKey: ["exams"],
    queryFn: getExams,
  });
};

export const useAddExam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddExamPayload) => addExam(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};

export const useUpdateExam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateExamPayload) => updateExam(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};

export const useDeleteExam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteExam(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};
