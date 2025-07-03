import { useLocation, useNavigate } from "react-router-dom";
import {
  BookingWrapper,
  SummaryContainer,
  SummaryItem,
  Label,
  Button
} from "./BookingStyles";
import { createBooking } from "../api/booking";

interface LocationState {
  name: string;
  serviceId: string;
  serviceName: string;
  duration: number;
  dateTime: string;
  observation?: string;
}

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    name,
    serviceId,
    serviceName,
    duration,
    dateTime,
    observation
  } = location.state as LocationState;

  const handleFinish = async () => {
    try {
      await createBooking({
        clientName: name,
        serviceId,
        dateTime,
        observation,
      });
      navigate("/success", { state: { name } });
    } catch (err) {
      console.error("Erro ao agendar:", err);
      alert("Erro ao agendar. Tente novamente.");
    }
  };

  return (
    <BookingWrapper>
      <h1>Confirmação de Agendamento</h1>

      <SummaryContainer>
        <SummaryItem>
          <Label>Nome:</Label> {name}
        </SummaryItem>
        <SummaryItem>
          <Label>Serviço:</Label> {serviceName} ({duration} min)
        </SummaryItem>
        <SummaryItem>
          <Label>Data e Hora:</Label>{" "}
          {new Date(dateTime).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </SummaryItem>
        {observation && (
          <SummaryItem>
            <Label>Observação:</Label> {observation}
          </SummaryItem>
        )}
      </SummaryContainer>

      <Button onClick={handleFinish}>Finalizar</Button>
    </BookingWrapper>
  );
};

export default ConfirmBooking;
