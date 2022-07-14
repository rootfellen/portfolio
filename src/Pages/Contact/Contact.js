import React from "react";
import cl from "./Contact.module.css";
import Logo from "../../Components/Logo/Logo";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    send("service_dndq1v9", "template_02ljyo9", formData, "EVJfyodBkLr0I3t08")
      .then(() => {
        alert("Message succesfully sent");
        setFormData((prevData) => {
          return {
            ...prevData,
            from_name: "",
            from_email: "",
            message: "",
          };
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <>
      <div className={cl.contactContainer}>
        <div className="container">
          <header className="header">
            <Logo />
            <Socials />
            <Navbar />
          </header>
          <div className={cl.contactFormWrapper}>
            <form onSubmit={handleSubmit} className={cl.contactForm}>
              <label>Hello {formData.from_name}</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="from_name"
                value={formData.from_name}
              />
              <label>I will reply to: {formData.from_email}</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                name="from_email"
                value={formData.from_email}
              />
              <label>But, I will read your message first...</label>
              <textarea
                placeholder="Enter your message"
                onChange={handleChange}
                name="message"
                value={formData.message}
              />
              <button className={cl.formBtn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
