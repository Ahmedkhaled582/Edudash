import clientAxios from "@/lib/axios/clientaxios";

export interface Exam {
  id: number;
  name: string;
  examDate: string;
  startTime: string;
  endTime: string;
  maxMarks: number;
  passingMarks: number;
  subjectId: number;
  classId: number;
}

export interface AddExamPayload {
  name: string;
  examDate: string;
  startTime: string;
  endTime: string;
  maxMarks: number;
  passingMarks: number;
  subjectId: number;
  classId: number;
}

export interface UpdateExamPayload {
  id: number;
  name: string;
  examDate: string;
  startTime: string;
  endTime: string;
  maxMarks: number;
  passingMarks: number;
  subjectId: number;
  classId: number;
}

export const getExams = async (): Promise<Exam[]> => {
  const res = await clientAxios.get<Exam[]>("/api/Exams/Get-Exams");
  return res.data;
};

export const addExam = async (data: AddExamPayload) => {
  const res = await clientAxios.post("/api/Exams/add-exam", data);
  return res.data;
};

export const updateExam = async (data: UpdateExamPayload) => {
  const res = await clientAxios.put("/api/Exams/update-exam", data);
  return res.data;
};

export const deleteExam = async (id: number) => {
  const res = await clientAxios.delete(`/api/Exams/delete-exam/${id}`);
  return res.data;
};
