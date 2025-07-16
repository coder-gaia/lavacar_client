import client from './client';

export interface Booking {
  observation?: string;
  _id: string;
  clientName: string;
  service: { _id: string; name: string; price: number; duration: number; };
  dateTime: string;
  status: string;
}

export const fetchBookings = async (all = false): Promise<Booking[]> => {
  const params = all ? { all: true } : {};
  const response = await client.get<Booking[]>('/booking', { params });
  return response.data;
};

export const completeBooking = async (bookingId: string): Promise<Booking> => {
  const response = await client.patch<Booking>(`/booking/${bookingId}/complete`);
  return response.data;
};

export const createBooking = async (
  payload: { clientName: string; serviceId: string; dateTime: string; observation?: string; }
): Promise<Booking> => {
  const response = await client.post<Booking>('/booking', payload);
  return response.data;
};


export const fetchAvailableSlots = async (date:string, serviceId:string): Promise<string[]> => {
  const response = await client.get<string[]>('/booking/slots', {
    params: {date, serviceId}
  });
  return response.data;
}