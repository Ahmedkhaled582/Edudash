import clientAxios from "@/lib/axios/clientaxios";

export interface ClassRoom {
    id: number,
    className: string,
    roomNumber: string,
    capacity: number,
    floor: string,
    isActive: boolean
}

export interface AddClassRoomPayload {
  className: string,
  roomNumber: string,
  capacity: number,
  floor: string,
  isActive: boolean
}

export interface UpdateClassRoomPayload {
  className: string,
  roomNumber: string,
  capacity: number,
  floor: string,
  isActive: boolean,
  id: number
}

export const getClassRooms = async (): Promise<ClassRoom[]> => {
  const res = await clientAxios.get<ClassRoom[]>("/api/ClassRooms/get-classrooms");
  return res.data;
};

export const addClassRoom = async (data: AddClassRoomPayload) => {
  const res = await clientAxios.post("/api/ClassRooms/add-classroom", data);
  return res.data;
};

export const updateClassRoom = async (data: UpdateClassRoomPayload) => {
  const res = await clientAxios.put("/api/ClassRooms/update-classroom", data);
  return res.data;
};

export const deleteClassRoom = async (id: number) => {
  const res = await clientAxios.delete(`/api/ClassRooms/delete-classroom/${id}`);
  return res.data;
};

