import React from 'react';

const MainContents = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section aria-labelledby="hero-title" className="mb-12">
        <h1 id="hero-title" className="text-4xl font-bold">
          Benvenuti al Little Lemon
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Un ristorante mediterraneo con un tocco moderno.
        </p>
      </section>

      <section aria-labelledby="booking-title" className="mb-12">
        <h2 id="booking-title" className="text-2xl font-semibold">
          Prenota un tavolo
        </h2>
        {/* Qui inserirai il tuo form */}
      </section>

      <section aria-labelledby="menu-title" className="mb-12">
        <h2 id="menu-title" className="text-2xl font-semibold">
          Il nostro menù
        </h2>
        {/* Cards piatti o lista */}
      </section>
    </main>
  );
};

export default MainContents;
