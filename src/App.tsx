import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>main content</div>
      <Footer />
    </div>
  );
}

export default App;
