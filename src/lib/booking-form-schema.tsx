import { z } from "zod";

/* Definisco gli orari consenti per la prenotazione */
const OPENING_HOUR = 10; // 12:00
const CLOSING_HOUR = 23; // 23:00

/* Definisco il numero minimo e massimo consentito per prenotare  */
const MIN_GUESTS = 1;
const MAX_GUESTS = 20;

export const bookingSchema = z
  .object({
    name: z
      .string()
      .min(2, "Il nome è obbligatorio")
      .nonempty("Email obbligatoria"),
    email: z
      .string()
      .nonempty("Email obbligatoria") // intercetta campo vuoto
      .refine(
        (val) => /^\S+@\S+\.\S+$/.test(val), // controlla il formato
        { message: "Email non valida" }
      ),
    date: z.string().refine(
      (d) => {
        const selectedDate = new Date(d);
        const today = new Date();

        // Azzero le ore per confrontare meglio data attuale con data selezionata
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        return selectedDate >= today;
      },
      {
        message: "La data non può essere passata",
      }
    ),
    time: z.string().refine(
      (t) => {
        if (!t) return false;
        const [hours] = t.split(":").map(Number);
        return hours >= OPENING_HOUR && hours <= CLOSING_HOUR;
      },
      {
        message: `Imposta un'ora tra le ${OPENING_HOUR}:00 e le ${CLOSING_HOUR}:00`,
      }
    ),
    guests: z
      .number()
      .min(MIN_GUESTS, { message: `Almeno ${MIN_GUESTS} persona` })
      .max(MAX_GUESTS, { message: `Massimo ${MAX_GUESTS} persone` }),
    note: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.date || !data.time) return true;
      const selectedDateAndHour = new Date(`${data.date}T${data.time}`);
      return selectedDateAndHour > new Date();
    },
    {
      message: "Impostare un orario futuro",
      path: ["time"],
    }
  );

export type BookingFormValues = z.infer<typeof bookingSchema>;
