import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { bookingSchema } from "@/lib/booking-form-schema";
import { log } from "console";
import { CheckCircle, Clock, Mail, User } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import z from "zod";

const ConfermaPrenotazione = () => {
  const location = useLocation();
  type BookingData = z.infer<typeof bookingSchema>;

  const bookingData = location.state as BookingData | undefined;
  console.log(bookingData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!bookingData) {
      navigate("/", { replace: true });
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  /* get e formatting date */
  const dateObj = new Date(bookingData?.date);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // i mesi partono da 0
  const year = dateObj.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return (
    <section className="flex flex-col  md:flex-row md:justify-between h-screen bg-primary/10 ">
      {/* Colonna sinistra: Titolo */}
      <div className="flex flex-col justify-center items-center md:w-1/2 space-y-4 py-12">
        <div className="text-primary">
          <p className="text-5xl md:text-4xl font-bold font-secondary">
            Little Lemon
            <span className="uppercase block font-sans text-sm">
              restaurant
            </span>
          </p>
        </div>
        {/* <CheckCircle className="w-16 h-16 text-green-500 mb-4" /> */}
        <div className="text-center mt-8">
          <h1 className="text-5xl font-bold text-primary text-center">
            Prenotazione Confermata!
          </h1>
          <p className="mt-4 text-xl">Grazie! Ti aspettiamo 🍋</p>
        </div>
        <div className="text-center mt-4">
          <Link to="/">
            <Button className="mt-4 cursor-pointer text-2xl" size="xl">
              Torna alla Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Colonna destra: Dettagli prenotazione */}
      <div className="flex flex-col md:w-1/2 w-full item-center">
        <Card className="bg-white shadow-lg rounded-none h-full items-center justify-center px-5">
          <CardContent className="space-y-6 w-full text-primary ">
            <CardTitle className="text-4xl mb-5">
              Dettagli Prenotazione
            </CardTitle>

            <div className="flex flex-col lg:flex-row w-full ">
              <div className="flex flex-col items-start gap-6 py-6 text-xl w-full ">
                <div className="flex py-2 px-4 bg-primary/25 text-primary rounded-xl gap-2 ">
                  <User className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Nome:</span>
                </div>

                <span className="uppercase text-3xl font-bold">
                  {bookingData.name}
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 py-6 text-xl w-full  ">
                <div className="flex py-2 px-4 bg-primary/25 text-primary rounded-xl gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Email:</span>
                </div>

                <span className="uppercase text-3xl font-bold">
                  {bookingData.email}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row ">
              <div className="flex flex-col items-start gap-6 py-6 text-xl w-1/2 ">
                <div className="flex py-2 px-4 bg-primary/25 text-primary rounded-xl gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Data e Ora:</span>
                </div>

                <span className="uppercase text-3xl font-bold">
                  {formattedDate}
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 py-6 text-xl w-1/2 ">
                <div className="flex py-2 px-4 bg-primary/25 text-primary rounded-xl gap-2">
                  <User className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Persone:</span>
                </div>

                <span className="uppercase text-3xl font-bold">
                  {bookingData.guests}
                </span>
              </div>
            </div>

            {bookingData.note && (
              <div className="bg-primary/10 rounded-xl px-4">
                <div className="flex flex-col  items-start gap-6 py-6 text-xl w-1/2 ">
                  <div className="flex py-2 px-4 bg-primary/25 text-primary rounded-xl gap-2">
                    <span className="font-medium">Note:</span>
                  </div>
                  <p>{bookingData.note}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConfermaPrenotazione;
