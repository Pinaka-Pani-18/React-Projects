/* eslint-disable react/prop-types */
import Modal from "./Modal";
import { Formik, Form, Field } from "formik";

const AddAndUpdateContact = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Formik initialValues={{ name: "", email: "" }}>
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">NAME</label>
              <Field
                name="name"
                className="h-[40px] rounded-md border-[2px] border-black px-4 "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">EMAIL</label>
              <Field
                type="email"
                name="email"
                className="h-[40px] rounded-md border-[2px] border-black px-4 "
              />
            </div>
            <button
              type="submit"
              className="mt-2 self-end rounded-md bg-orange px-5 py-2"
            >
              SUBMIT
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
