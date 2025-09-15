import React from "react";

const ChiSiamoSection = () => {
  return <section id="chi-siamo" className="bg-accent-primary py-20 md:py-0 ">
        <div className="container mx-auto px-4 flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          {/* Testo */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-extrabold text-primary md:text-5xl font-nunito">
              Chi siamo
            </h2>
            <p className=" text-lg leading-relaxed font-nunito font-light">
              Little Lemon è un ristorante a conduzione familiare, specializzato
              in piatti della tradizione mediterranea. Da anni portiamo in
              tavola sapori autentici, ingredienti freschi e tanta passione.
            </p>
            <p className=" text-lg leading-relaxed font-nunito font-light">
              La nostra missione è far sentire ogni ospite come a casa. Che si
              tratti di una cena romantica o di una serata tra amici, vogliamo
              offrirti un'esperienza indimenticabile.
            </p>
          </div>

          {/* Immagine */}
          <div className="md:w-1/2">
            <img
              src="/src/assets/chef.webp"
              alt="Il team del ristorante"
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
};

export default ChiSiamoSection;
