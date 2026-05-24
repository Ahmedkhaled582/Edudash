import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getClassRooms,
  addClassRoom,
  updateClassRoom,
  deleteClassRoom,
  AddClassRoomPayload,
  UpdateClassRoomPayload,
  ClassRoom,
} from "../api/classRoomApi";

export const useClassRooms = () => {
  return useQuery<ClassRoom[]>({
    queryKey: ["classRooms"],
    queryFn: getClassRooms,
  });
};

export const useAddClassRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddClassRoomPayload) => addClassRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classRooms"] });
    },
  });
};

export const useUpdateClassRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateClassRoomPayload) => updateClassRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classRooms"] });
    },
  });
};

export const useDeleteClassRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteClassRoom(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classRooms"] });
    },
  });
};

