import { useEffect, useState } from "react";
import { fetchBookings, completeBooking, type Booking } from "../api/booking";
import {
  DashboardWrapper,
  Table,
  Th,
  Td,
  CompleteButton,
  ToggleButton
} from "./AdmDashboardStyles";

const AdmDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchBookings(showAll).then(setBookings);
  }, [showAll]);

  const handleComplete = async (id: string) => {
    await completeBooking(id);
    setBookings(prev => prev.filter(bk => bk._id !== id));
  };

  return (
    <DashboardWrapper>
      <h1>Dashboard Admin</h1>
      <ToggleButton onClick={() => setShowAll(a => !a)}>
        {showAll ? "Mostrar só pendentes" : "Mostrar todos"}
      </ToggleButton>

      <Table>
        <thead>
          <tr>
            <Th>Cliente</Th>
            <Th>Tipo de Limpeza</Th>
            <Th>Data</Th>
            <Th>Hora</Th>
            <Th>Ação</Th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(bk => {
            const data = new Date(bk.dateTime);
            return (
              <tr key={bk._id}>
                <Td>{bk.clientName}</Td>
                <Td>{bk.service.name}</Td>
                <Td>{data.toLocaleDateString("pt-BR")}</Td>
                <Td>{data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</Td>
                <Td>
                  {bk.status === "pending" ? (
                    <CompleteButton onClick={() => handleComplete(bk._id)}>
                      Concluir
                    </CompleteButton>
                  ) : (
                    "Concluído"
                  )}
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DashboardWrapper>
  );
};

export default AdmDashboard;
