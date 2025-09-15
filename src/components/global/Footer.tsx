import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo e descrizione */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <a
              href="/"
              className="text-5xl md:text-5xl font-bold font-secondary "
            >
              Little Lemon
              <span className="uppercase block font-sans text-sm">
                restaurant
              </span>
            </a>
          </div>
          <p>
            Il miglior ristorante italiano in città. Cucina tradizionale,
            ingredienti freschi e atmosfera accogliente.
          </p>
        </div>

        {/* Orari di apertura */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Orari di apertura</h3>
          <ul>
            <li>Lun - Ven: 12:00 - 22:00</li>
            <li>Sab: 12:00 - 23:00</li>
            <li>Dom: Chiuso</li>
          </ul>
        </div>

        {/* Indirizzo */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Indirizzo</h3>
          <address className="not-italic">
            Via Roma 123
            <br />
            00100 Roma, Italia
            <br />
            Tel: +39 06 1234567
          </address>
        </div>

        {/* Social & Contatti */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contatti</h3>
          <ul>
            <li>Email: info@littlelemon.it</li>
            <li>Telefono: +39 06 1234567</li>
            <li className='flex gap-4 mt-4'>
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6 hover:text-secondary transition" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 hover:text-secondary transition" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 hover:text-secondary transition" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 text-center text-sm">
        © {new Date().getFullYear()} Little Lemon. Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export default Footer;
