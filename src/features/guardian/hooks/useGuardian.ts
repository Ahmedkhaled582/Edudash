import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addGuardian,
  getGuardians,
  updateGuardian,
  deleteGuardian,
  AddGuardianPayload,
  UpdateGuardianPayload,
  Guardian,
} from "../api/guardianApi";

export const useGuardians = () => {
  return useQuery<Guardian[]>({
    queryKey: ["guardians"],
    queryFn: getGuardians,
  });
};

export const useAddGuardian = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddGuardianPayload) => addGuardian(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guardians"] });
    },
  });
};

export const useUpdateGuardian = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateGuardianPayload) => updateGuardian(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guardians"] });
    },
  });
};

export const useDeleteGuardian = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteGuardian(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guardians"] });
    },
  });
};

