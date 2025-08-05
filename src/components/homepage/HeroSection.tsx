import { Button } from "../ui/button";

const HeroSection = () => {
  return <section
        id="hero"
        className="relative w-full bg-[url('/src/assets/hero-background.jpg')] bg-cover bg-center text-white py-32"
      >
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black/50 z-0" />

         <div className="container relative z-10 mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Benvenuti al Little Lemon Restaurant
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Cucina autentica, ingredienti freschi e un’esperienza
            indimenticabile.
          </p>
          <Button
            className="text-white my-4 text-3xl cursor-pointer shadow-2xl"
            size="xl"
            onClick={() => (window.location.href = '/prenotazione')}
          >
            Prenota ora il tuo tavolo
          </Button>
          
        </div>
      </section>
};

export default HeroSection;
