/* eslint-disable react/prop-types */
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, handleClose, handleOpen } = useDisclouse();

  const deleteContact = async (deleteId) => {
    try {
      const contactRef = collection(db, "contacts");
      await deleteDoc(doc(contactRef, deleteId));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-3 flex h-[60px] w-[360px] items-center  justify-between rounded-md bg-yellow px-2.5 text-black">
        <div className="flex items-center ">
          <HiOutlineUserCircle className=" text-4xl  text-orange" />
          <div className="ml-3">
            <h4 className=" -mb-1 text-base font-medium">{contact.name}</h4>
            <p className="text-sm font-normal">{contact.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FiEdit onClick={handleOpen} className=" cursor-pointer text-3xl" />
          <FaTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-2xl"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default ContactCard;
