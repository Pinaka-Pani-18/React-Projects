import Navbar from "./components/Navbar/Navbar.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default App;
