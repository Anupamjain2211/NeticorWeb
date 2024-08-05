import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d2ab025-5a21-4039-b7e4-d0c89db9019d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Take the first step, and contact us to discuss your marketing and
          business goals. Send us a message, and we will get back to you soon.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contactneticor@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 123-243-4565
          </li>
          <li>
            <img src={location_icon} alt="" />
            Neticor 16th St Near 11 Al Ghubaiba Rd Al Souq Al Kabeer Dubai
            United Arab Emirates,
             Dubai <br /> Dubai 00000, AE
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="Email"
            name="emaill"
            placeholder="Enter your email"
            required
          />
          <label>Write your message here</label>

          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
