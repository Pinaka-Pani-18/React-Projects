import Navbar from "./components/Navbar/Navbar.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
