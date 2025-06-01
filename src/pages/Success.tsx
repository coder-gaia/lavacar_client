import { useLocation, useNavigate } from 'react-router-dom';
import { BookingWrapper, Message, Button } from './BookingStyles';

interface LocationState {
  name: string;
}

const Success = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state as LocationState;

  const handleNewBooking = () => {
    navigate('/booking');
  };

  return (
     <BookingWrapper>
      <Message>A LavaCar Fast te aguarda, {name}!</Message>
      <Button onClick={handleNewBooking}>
        Agendar Outro Serviço
      </Button>
    </BookingWrapper>
  )
}

export default Success