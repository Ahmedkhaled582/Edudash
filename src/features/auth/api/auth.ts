"use server";
import { cookies } from "next/headers";
import { AxiosError } from "axios";
import { AuthActionResult, AuthResponse, RegisterPayload, SchoolRegisterPayload } from "@/features/auth/types/auth.types";
import serverAxios from "@/lib/axios/serveraxios";

async function postAuth(
  endpoint: string,
  payload: object
): Promise<AuthActionResult> {
  try {
    const res = await serverAxios.post<AuthResponse>(endpoint, payload);

    const token = res.data.token;
    if (token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return { success: true, data: res.data };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    console.error(`${endpoint} error:`, error?.response?.data || error.message);

    return {
      success: false,
      error: error?.response?.data?.message || error.message || "Something went wrong",
    };
  }
}

export const signupAction = async (data: RegisterPayload) =>
  postAuth("Accounts/register-user", data);

export const schoolRegisterAction = async (data: SchoolRegisterPayload) =>
  postAuth("Accounts/school-register", data);


export const loginAction = async (data: {
  userName: string;
  password: string;
  schoolId: string;
}) => postAuth("Accounts/login", data);


export async function getProfile() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token || token === "undefined" || token === "null") {
      return {
        user: null,
        token: null,
      };
    }

    const response = await serverAxios.get("Accounts/user-data");
    return {
      user: response.data || null,
      token,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return { user: null, token: null };
      }
    }

    return {
      user: null,
      token: null,
    };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("role");
}