export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
}

export interface AuthResponse {
  token: string;
  user?: User;
}

export interface AuthActionResult {
  success: boolean;
  data?: AuthResponse;
  error?: string;
}

export interface ParentRegisterData {
  occupation: string;
}

export interface StudentRegisterData {
  admissionNumber: string;
  admissionDate: string;
  academicYear: string;
  status: boolean;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  house: string;
  religion: string;
  caste: string;
  motherTongue: string;
  languagesKnown: string;
  primaryContactNumber: string;
  emailAddress: string;
  studentImage?: string;
  categoryId?: number;
  classId?: number;
  parentId?: number;
}

export interface TeacherRegisterData {
  gender: string;
  qualification: string;
  joiningDate: string;
}

export interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  tenantId: string;
  password: string;
  roleId: string;
  parent?: ParentRegisterData;
  student?: StudentRegisterData;
  teacher?: TeacherRegisterData;
}

export interface SchoolRegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  password: string;
  roleId: string;
}
