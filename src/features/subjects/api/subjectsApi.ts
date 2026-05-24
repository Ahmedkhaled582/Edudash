import clientAxios from "@/lib/axios/clientaxios";

export interface subject {
  id: number;
  name: string;
  code: string;
  teacherId: number;
  status: boolean;
}

export interface AddSubjectPayload {
  name: string;
  code: string;
  teacherId: number;
  status: boolean;
}

export interface UpdateSubjectPayload {
  id: number;
  name: string;
  code: string;
  teacherId: number;
  status: boolean;
}


export const getSubjects = async (): Promise<subject[]> => {
  const res = await clientAxios.get<subject[]>("/api/Subjects/get-subjects");
  return res.data;
};

export const addSubject = async (data: AddSubjectPayload) => {
  const res = await clientAxios.post("/api/Subjects/add-subject", data);
  return res.data;
};

export const updateSubject = async (data: UpdateSubjectPayload) => {
  const res = await clientAxios.put("/api/Subjects/update-subject", data);
  return res.data;
};

export const deleteSubject = async (id: number) => {
  const res = await clientAxios.delete(`/api/Subjects/delete-subject/${id}`);
  return res.data;
};

