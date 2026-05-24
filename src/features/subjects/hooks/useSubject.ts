import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
 getSubjects, addSubject, updateSubject, deleteSubject,
 AddSubjectPayload , subject, UpdateSubjectPayload
} from "../api/subjectsApi";

export const useSubjects = () => {
  return useQuery<subject[]>({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });
};

export const useAddSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddSubjectPayload) => addSubject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });
};

export const useUpdateSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSubjectPayload) => updateSubject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });
};

export const useDeleteSubject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteSubject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });
};

