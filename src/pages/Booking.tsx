import { useState } from "react"
import { ADMButton, BookingWrapper, Button, DurationInfo, FormGroup, Input, Label, ObservationInput, OptionDescription, Select } from "./BookingStyles"
import { serviceDurations } from "../utils/services"
import { Link, useNavigate } from "react-router-dom";

const Booking = () => {

  const [name, setName] = useState('');
  const [observation, setObservation] = useState('');
  const [service, setService] = useState('');
  const [dateTime, setDateTime] = useState('');
  const navigate = useNavigate();

  const handleConfirm = () => {
    if(!name || !service || !dateTime) return;
    navigate('/confirm', { state: { name, service, dateTime } });
  }

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
          onChange={e => setName(e.target.value)}/>
      </FormGroup>

      <FormGroup>
        <Label>Tipo de Serviço</Label>
        <Select  value={service} onChange={e => setService(e.target.value)}>
          <option value="">Selecione</option>
          <option value="interior">Limpeza Interior - R$50</option>
          <option value="exterior">Limpeza Exterior - R$50</option>
          <option value="inferior">Limpeza Inferior - R$40</option>
          <option value="completa">Limpeza Completa - R$80</option>
          <option value="premium">Limpeza Premium - R$100</option>
        </Select>
        {service && (
          <>
            <OptionDescription>
              {service === "interior" && "Apenas limpeza interna do veículo."}
              {service === "exterior" && "Apenas limpeza externa do veículo."}
              {service === "inferior" && "Limpeza da parte inferior do carro."}
              {service === "completa" && "Limpeza interna e externa."}
              {service === "premium" && "Completa + limpeza inferior."}
            </OptionDescription>
              <DurationInfo>
              Tempo estimado: {serviceDurations[service]}
            </DurationInfo>
          </>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Observação</Label>
          <ObservationInput 
            placeholder="Insira uma observação, se achar necessário." 
            value={observation} 
            onChange={(e) => setObservation(e.target.value)}>
          </ObservationInput>
      </FormGroup>
      <FormGroup>
        <Label>Data e Hora</Label>
          <Input
            type="datetime-local"
            value={dateTime}
            onChange={e => setDateTime(e.target.value)}/>
      </FormGroup>

      <Button onClick={handleConfirm}>Confirmar Agendamento</Button>
      <Link to="/login"><ADMButton>Admin</ADMButton></Link>
    </BookingWrapper>
  )
}

export default Booking