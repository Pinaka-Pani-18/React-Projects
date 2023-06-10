/* eslint-disable react-hooks/exhaustive-deps */
import ContactCard from "./components/ContactCard";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useState } from "react";
import { useEffect } from "react";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  async function getContacts() {
    try {
      const contactRef = collection(db, "contacts");

      const collectionSnapshots = await getDocs(contactRef);

      const collectionList = collectionSnapshots.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setContacts(collectionList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="m-auto max-w-[360px] py-2  text-white">
        <Navbar />
        <InputForm handleOpen={handleOpen} />
        <ContactCard contacts={contacts} />
      </div>
      <AddAndUpdateContact isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default App;
