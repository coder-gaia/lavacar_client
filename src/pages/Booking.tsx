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
  Select,
  Message,
  FormLayout,
  Column
} from "./BookingStyles";
import { useNavigate, Link } from "react-router-dom";
import { fetchServices, type Service } from "../api/service";
import { fetchAvailableSlots } from "../api/booking";

const Booking = () => {
  const [name, setName] = useState("");
  const [observation, setObservation] = useState("");
  const [service, setService] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [date, setDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [timeSlot, setTimeSlot] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(() => console.error("Erro ao buscar serviços"));
  }, []);

  useEffect(() => {
    if (service && date) {
      fetchAvailableSlots(date, service)
        .then(setAvailableSlots)
        .catch(() => console.error("Erro ao buscar horários disponíveis"));
    } else {
      setAvailableSlots([]);
    }
    setTimeSlot("");
  }, [service, date]);

  const handleConfirm = () => {
    const selectedService = services.find(s => s._id === service);
    if (!name || !service || !timeSlot || !selectedService) return;

    navigate("/confirm", {
      state: {
        name,
        serviceId: selectedService._id,
        serviceName: selectedService.name,
        duration: selectedService.duration,
        dateTime: timeSlot,
        observation,
      },
    });
  };

  return (
    <BookingWrapper>
      <h1>LavaCar Fast</h1>
      <Message>Agendamento de Serviço</Message>

      <FormLayout>
        <Column>
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
                  {services.find((s) => s._id === service)?.description}
                </OptionDescription>
                <DurationInfo>
                  Tempo estimado: {services.find((s) => s._id === service)?.duration} min
                </DurationInfo>
              </>
            )}
          </FormGroup>
        </Column>

        <Column>
          <FormGroup>
            <Label>Data</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={!service}
            />
          </FormGroup>

          <FormGroup>
            <Label>Horário</Label>
            <Select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              disabled={!date || !availableSlots.length}
            >
              <option value="">Selecione um horário</option>
              {availableSlots.map((slot) => {
                const dt = new Date(slot);
                return (
                  <option key={slot} value={slot}>
                    {dt.toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </option>
                );
              })}
            </Select>

            {!availableSlots.length && date && (
              <OptionDescription>
                Nenhum horário disponível nesta data.
              </OptionDescription>
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
        </Column>
      </FormLayout>

      <Button onClick={handleConfirm}>Confirmar Agendamento</Button>
      <Link to="/login" style={{ display: 'block', marginTop: '1rem' }}>
        <ADMButton>Admin</ADMButton>
      </Link>
    </BookingWrapper>
  );
};

export default Booking;
