import Nav from './Nav';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg border-b-5 border-primary-foreground">
      <Nav />
    </header>
  );
};

export default Header;
