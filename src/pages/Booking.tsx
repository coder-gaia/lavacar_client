import { useEffect, useState } from "react";
import {
  ADMButton,
  BookingWrapper,
  Button,
  DurationInfo,
  FormGroup,
  Input,
  Label,
  ObservationInput,
  OptionDescription,
  Select
} from "./BookingStyles";
import { useNavigate, Link } from "react-router-dom";
import { fetchServices, type Service } from "../api/service";

const Booking = () => {
  const [name, setName] = useState("");
  const [observation, setObservation] = useState("");
  const [service, setService] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [dateTime, setDateTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(() => console.error("Erro ao buscar serviços"));
  }, []);

  const handleConfirm = () => {
    const selectedService = services.find(s => s._id === service);
    if (!name || !service || !dateTime || !selectedService) return;

    navigate("/confirm", {
      state: {
        name,
        serviceId: selectedService._id,
        serviceName: selectedService.name,
        duration: selectedService.duration,
        dateTime,
        observation,
      },
    });
  };

  return (
    <BookingWrapper>
      <h1>LavaCar Fast</h1>
      <h2>Agendamento de Serviço</h2>

      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          placeholder="Seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Tipo de Serviço</Label>
        <Select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Selecione</option>
          {services.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name} - R${s.price}
            </option>
          ))}
        </Select>

        {service && (
          <>
            <OptionDescription>
              {services.find((s) => s._id === service)?.name}
            </OptionDescription>
            <DurationInfo>
              Tempo estimado: {services.find((s) => s._id === service)?.duration} min
            </DurationInfo>
          </>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Observação</Label>
        <ObservationInput
          placeholder="Insira uma observação, se achar necessário."
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Data e Hora</Label>
        <Input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </FormGroup>

      <Button onClick={handleConfirm}>Confirmar Agendamento</Button>
      <Link to="/login">
        <ADMButton>Admin</ADMButton>
      </Link>
    </BookingWrapper>
  );
};

export default Booking;
