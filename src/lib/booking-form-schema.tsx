import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Il nome è obbligatorio'),
  email: z.string().email('Email non valida'),
  date: z
    .string()
    .min(1, 'La data è obbligatoria'),
  time: z.string().min(1, "L'orario è obbligatorio"),
  guests: z.number().min(1, 'Almeno un ospite').max(20, 'Massimo 20 ospiti'),
  note: z.string().optional()
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
