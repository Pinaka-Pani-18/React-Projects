/* eslint-disable react/prop-types */
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const ContactCard = ({ contacts }) => {
  return (
    <>
      <div className="mt-5">
        {contacts.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-3 flex h-[60px] w-[360px] items-center  justify-between rounded-md bg-yellow px-2.5 text-black"
            >
              <div className="flex items-center ">
                <HiOutlineUserCircle className=" text-4xl  text-orange" />
                <div className="ml-3">
                  <h4 className=" -mb-1 text-base font-medium">{item.name}</h4>
                  <p className="text-sm font-normal">{item.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiEdit className=" cursor-pointer text-3xl" />
                <FaTrash className="cursor-pointer text-2xl" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactCard;
