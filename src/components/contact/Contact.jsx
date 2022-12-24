import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sjsfgql",
        "template_r1cje85",
        form.current,
        "rxOefMrXN4iLfdfhj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for reaching out to me, will get back to you soon!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail} method="post">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
