import client from './client';

export interface Booking {
  _id: string;
  clientName: string;
  service: { _id: string; name: string; price: number; duration: number; };
  dateTime: string;
  status: string;
}

// Busca bookings (pendentes por padrão, ou todos se all=true)
export const fetchBookings = async (all = false): Promise<Booking[]> => {
  const params = all ? { all: true } : {};
  const response = await client.get<Booking[]>('/booking', { params });
  return response.data;
};

// Marca booking como completed
export const completeBooking = async (bookingId: string): Promise<Booking> => {
  const response = await client.patch<Booking>(`/booking/${bookingId}/complete`);
  return response.data;
};

// Cria um novo booking (público)
export const createBooking = async (
  payload: { clientName: string; serviceId: string; dateTime: string; observation?: string; }
): Promise<Booking> => {
  const response = await client.post<Booking>('/booking', payload);
  return response.data;
};
