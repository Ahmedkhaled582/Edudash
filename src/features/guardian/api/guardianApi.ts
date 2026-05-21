import clientAxios from "@/lib/axios/clientaxios";

export interface Guardian {
  id: number;
  name: string;
  relation: string;
  phone: string;
  occupation: string;
  address: string;
  studentId: number;
  studentName: string;
  studentProfile: string;
}

export interface AddGuardianPayload {
  name: string;
  relation: string;
  phone: string;
  occupation: string;
  address: string;
  studentId: number;
}

export interface UpdateGuardianPayload {
  id: number;
  name: string;
  relation: string;
  phone: string;
  occupation: string;
  address: string;
  studentId: number;
}

export const getGuardians = async (): Promise<Guardian[]> => {
  const res = await clientAxios.get<Guardian[]>("/api/Guardians/get-guardians");
  return res.data;
};

export const addGuardian = async (data: AddGuardianPayload) => {
  const res = await clientAxios.post("/api/Guardians/add-guardian", data);
  return res.data;
};

export const updateGuardian = async (data: UpdateGuardianPayload) => {
  const res = await clientAxios.put("/api/Guardians/update-guardian", data);
  return res.data;
};

export const deleteGuardian = async (id: number) => {
  const res = await clientAxios.delete(`/api/Guardians/delete-guardian/${id}`);
  return res.data;
};

