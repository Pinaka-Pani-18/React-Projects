/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
const InputForm = ({ handleOpen, filterContacts }) => {
  return (
    <div className="mt-5 flex items-center  text-center">
      <div className=" relative flex flex-grow">
        <input
          onChange={filterContacts}
          type="text"
          placeholder="Search Contact"
          className=" h-[40px] w-[305px] rounded-md border border-white bg-transparent px-9 placeholder:text-white"
        />
        <FiSearch className="absolute left-2 top-2 text-2xl text-red " />
      </div>

      <AiFillPlusCircle
        className="cursor-pointer text-5xl text-white"
        onClick={handleOpen}
      />
    </div>
  );
};

export default InputForm;
