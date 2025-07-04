import { useEffect, useState } from "react";
import { fetchBookings, completeBooking, type Booking } from "../api/booking";
import {
  DashboardWrapper,
  Table,
  Th,
  Td,
  CompleteButton,
  ToggleButton,
  Title
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
      <Title>Dashboard Admin</Title>
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
            <Th>Observação</Th>
            <Th>Ação</Th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(bk => {
            const data = new Date(bk.dateTime);
            return (
              <tr key={bk._id}>
                <Td data-label="Cliente"><span>{bk.clientName}</span></Td>
                <Td data-label="Tipo de Limpeza"><span>{bk.service.name}</span></Td>
                <Td data-label="Data"><span>{data.toLocaleDateString("pt-BR")}</span></Td>
                <Td data-label="Hora"><span>{data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span></Td>
                <Td data-label="Observação"><span>{bk.observation?.trim() || "Sem observação"}</span></Td>
                <Td data-label="Ação">
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
