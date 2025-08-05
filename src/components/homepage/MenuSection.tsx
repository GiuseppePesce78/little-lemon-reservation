import React from "react";

const MenuSection = () => {
  return <section
        id="menu"
        className="block py-20 md:pt-24 md:h-[500px] relative overflow-visible w-full bg-[url('/src/assets/background-menu-section.jpg')] bg-cover bg-center"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-20 text-white md:text-5xl font-nunito">
            Il nostro Menu
          </h2>

          {/* Wrapper delle card posizionato fuori */}
          <div className="md:absolute md:left-1/2 transform md:-translate-x-1/2  md:bottom-[-3rem] w-full max-w-6xl px-4">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full md:w-1/3">
                <img
                  src="/src/assets/antipasti.jpg"
                  alt="Antipasti"
                  className="w-full h-42 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Antipasti</h3>
                  <p className="text-sm text-muted-foreground">
                    Bruschette, carpacci e stuzzichini freschi.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full md:w-1/3">
                <img
                  src="/src/assets/primi-piatti.jpg"
                  alt="Primi Piatti"
                  className="w-full h-42 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Primi Piatti</h3>
                  <p className="text-sm text-muted-foreground">
                    Pasta fresca fatta in casa, risotti e specialità.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full md:w-1/3">
                <img
                  src="/src/assets/dolci.jpg"
                  alt="Dolci"
                  className="w-full h-42 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dolci</h3>
                  <p className="text-sm text-muted-foreground">
                    Tiramisù, panna cotta, gelati artigianali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
};

export default MenuSection;
