import client from "./client";

export interface Service {
  _id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
}

export const fetchServices = async (): Promise<Service[]> => {
  const response = await client.get<Service[]>("/services");
  return response.data;
};