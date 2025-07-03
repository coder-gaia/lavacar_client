import client from './client';

export interface LoginResponse {
  _id: string;
  email: string;
  role: string;
  token: string;
}

export const loginAdmin = async (
  credentials: { email: string; password: string; }
): Promise<LoginResponse> => {
  const response = await client.post<LoginResponse>('/auth/login', credentials);
  return response.data;
};
