import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ConfermaPrenotazione = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
      <section className="py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Prenotazione confermata!</h1>
      <p>Grazie per aver prenotato con Little Lemon. Ti aspettiamo!</p>
    </section>
  );
};

export default ConfermaPrenotazione;
