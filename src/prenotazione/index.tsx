import { BookingForm } from '@/components/BookingForm';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

const Prenotazione = () => {
  return (
    <section aria-labelledby="hero-title" className="mb-12">
      <CardHeader>
        <CardTitle asChild className="mx-auto text-5xl">
          <h1>Prenota il tuo tavolo</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4">
          {/* Info Contatti */}
          <div className="w-full md:w-1/3  p-6  space-y-8 order-1 md:order-2">
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Indirizzo</h3>
                <p>Via Roma 123, Napoli</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdPhone className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Telefono</h3>
                <p>+39 081 1234567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdEmail className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>info@littlelemon.it</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdAccessTime className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Orari</h3>
                <p>Lun - Dom: 12:00 - 23:00</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 order-0 md:order-1">
            <BookingForm />
          </div>
        </div>
      </CardContent>
    </section>
  );
};

export default Prenotazione;
