// src/components/BookingForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "@/lib/booking-form-schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type BookingData = z.infer<typeof bookingSchema>;

type InputWithErrorProps = React.ComponentProps<typeof Input> & {
  error?: boolean;
};

export function InputWithError({
  error,
  className,
  ...props
}: InputWithErrorProps) {
  console.log(props);
  const isError = error || props["aria-invalid"] === "true";
  const isValid = !isError && !!props.value;
  return (
    <Input
      {...props}
      className={cn(
        "h-14 text-2xl rounded-md px-3 py-2",
        isError &&
          "border-red-500 focus:border-red-500 focus-visible:ring-red-200",
        isValid && "border-green-500 focus-visible:ring-green-500",
        className
      )}
    />
  );
}

export function BookingForm() {
  const form = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
    },

    shouldFocusError: false, //necessario per rimuovere il focus automatico sul primo field
  });

  const date = form.watch("date");
  const time = form.watch("time");

  const navigate = useNavigate();

  /* handlesubmit */
  const onSubmit = (data: BookingData) => {
    console.log("Dati prenotazione:", data);
    navigate("/conferma-prenotazione");
  };

  useEffect(() => {
    if (date && time) {
      form.trigger("time"); // ricalcola il refine cross-field agganciato al campo time
    }
  }, [date, time, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl px-4 py-8 space-y-6 text-center"
        noValidate
      >
        <div className="flex flex-col md:flex-row md:items-top md:gap-4 space-y-6 md:space-y-0">
          {/* Name */}
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <InputWithError
                    type="email"
                    {...field}
                    placeholder="Mario Rossi"
                    error={!!fieldState.error}
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
              render={({ field, fieldState }) => (
                <FormItem>
                  <InputWithError
                    type="email"
                    required
                    {...field}
                    placeholder="email@email.it"
                    error={!!fieldState.error}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-top md:gap-4 space-y-6 md:space-y-0">
          <div className="md:flex-1">
            <FormField
              control={form.control}
              name="time"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Orario prenotazione</FormLabel>
                  <FormControl>
                    <InputWithError
                      {...field}
                      type="time"
                      error={!!fieldState.error}
                    />
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
              render={({ field, fieldState }) => (
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
                    <InputWithError
                      type="text"
                      className="text-center"
                      required
                      {...field}
                      error={!!fieldState.error}
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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Data</FormLabel>
                  <FormControl className="flex justify-end">
                    <InputWithError
                      {...field}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      error={!!fieldState.error}
                    />
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
