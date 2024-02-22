import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_ertkrqf";
    const templateId = "template_vg25gps";
    const publicKey = "UKWU8Gt6AkUnsIqV2";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      user_email: email,
      user_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailform">
      <div className="flex flex-col text-white   w-5/6 mx-auto">
        <div className="m-2">
          <label for="fname">Name: </label>
          <input
            className="m-1 flex outline-none bg-black text-white border-b-2 p-1  w-[98%]"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="m-2">
          <label for="fname">Email</label>
          <input
            className="m-1 flex outline-none bg-black text-white border-b-2 p-1  w-[98%]"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-2">
        <label for="fname">Message</label>
        <textarea
          className="m-1 flex outline-none bg-black text-white border-b-2 p-1 w-[98%]"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        </div>
        <button className="m-4 p-4 border-2 w-[99%] mx-auto"type="submit">Send Email</button>
      </div>
    </form>
  );
};

export default Contact;
