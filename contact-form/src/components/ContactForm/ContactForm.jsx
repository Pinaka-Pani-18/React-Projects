import styles from "./ContactForm.module.css";
import Button from "../Button/Button.jsx";
import { MdOutlineMessage, MdCall, MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

  function onsubmitFun(e) {
    e.preventDefault();
    name = e.target[0].value;
    email = e.target[1].value;
    text = e.target[2].value;
    setName(name);
    setEmail(email);
    setText(text);
    alert("Name: " + name + "\nEmail: " + email + "\nText: " + text);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
          color={true}
        />
        <form action="" onSubmit={onsubmitFun} className={styles.formContainer}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea id="text" cols="30" rows="5"></textarea>
          </div>
          <Button text="SUBMIt" />
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="../images/Service 24_7-image.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
