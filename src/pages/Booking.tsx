import { useState } from "react"
import { ADMButton, BookingWrapper, Button, DurationInfo, FormGroup, Input, Label, OptionDescription, Select } from "./BookingStyles"
import { serviceDurations } from "../utils/services"
import { Link, useNavigate } from "react-router-dom";

const Booking = () => {

  const [name, setName] = useState('');
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
          <option value="baixo">Lavagem Inferior - R$40</option>
          <option value="completa">Completa - R$80</option>
          <option value="premium">Premium - R$100</option>
        </Select>
        {service && (
          <>
            <OptionDescription>
              {service === "interior" && "Apenas limpeza interna do veículo."}
              {service === "exterior" && "Apenas limpeza externa do veículo."}
              {service === "baixo" && "Lavagem da parte inferior do carro."}
              {service === "completa" && "Limpeza interna e externa."}
              {service === "premium" && "Completa + lavagem inferior."}
            </OptionDescription>
              <DurationInfo>
              Tempo estimado: {serviceDurations[service]}
            </DurationInfo>
          </>
        )}
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