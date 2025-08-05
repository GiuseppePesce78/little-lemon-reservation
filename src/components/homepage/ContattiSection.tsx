import { Button } from "../ui/button";

const ContattiSection = () => {
  return <section id="contatti" className=" pt-40 pb-20">
        <div className="container mx-auto text-center ">
          <Button
            className="my-4 text-3xl cursor-pointer"
            size="xl"
            onClick={() => (window.location.href = '/prenotazione')}
          >
            Prenota ora il tuo tavolo
          </Button>
        </div>
      </section>
};

export default ContattiSection;
