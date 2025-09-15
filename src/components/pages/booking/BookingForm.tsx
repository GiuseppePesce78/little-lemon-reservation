// src/components/BookingForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema } from '@/lib/booking-form-schema';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';

type BookingData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const form = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 2
    }
  });

  const navigate = useNavigate();
  const onSubmit = (data: BookingData) => {
    console.log('Dati prenotazione:', data);
    // qui invieresti i dati a un backend, ad esempio
    navigate('/conferma-prenotazione');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl px-4 py-8 space-y-6 text-center"
      >
        <div className="flex flex-col md:flex-row md:items-end md:gap-4 space-y-6 md:space-y-0 ">
          {/* Name */}
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  
                  <Input
                    placeholder="Mario Rossi"
                    {...field}
                    className="h-14 text-2xl"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Email */}
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    placeholder="email@example.com"
                    {...field}
                    className="h-14 text-2xl"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:gap-4 space-y-6 md:space-y-0">
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Orario prenotazione</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} className="h-14 text-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Guests */}
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero di persone</FormLabel>
                  <div className="flex justify-between items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-14 w-10 cursor-pointer"
                      aria-label="Diminuisci numero persone"
                      onClick={() => {
                        const newValue = Math.max(1, (field.value ?? 1) - 1);
                        field.onChange(newValue);
                      }}
                    >
                      −
                    </Button>

                    <Input
                      type="text"
                      value={field.value?.toString() ?? ''}
                      readOnly
                      className="h-14 text-center pointer-events-none text-2xl "
                    />

                    <Button
                      type="button"
                      onClick={() => {
                        const newValue = (field.value ?? 1) + 1;
                        field.onChange(newValue);
                      }}
                      variant="outline"
                      size="icon"
                      className="h-14 w-10 cursor-pointer"
                      aria-label="Aumenta numero persone"
                    >
                      +
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Date */}
          <div className="md:flex-1 ">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data</FormLabel>
                  <FormControl className="flex justify-end">
                    <Input type="date" {...field} className="h-14 text-end text-2xl" min={new Date().toISOString().split('T')[0]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Note */}
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="Inserisci eventuali richieste speciali (es. celiaci, allergie, etc.)"
                  className="w-full rounded-md border border-border px-3 py-2 resize-vertical focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="xl" className="w-full text-2xl uppercase">
          Prenota
        </Button>
      </form>
    </Form>
  );
}
