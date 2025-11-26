// src/components/HomeContact.jsx
import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../styles/home-contact.css";

function HomeContact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const contactService = "service_u2y43y5";
    const contactTemplate = "template_mcnmix9";

    const autoReplyService = "service_u2y43y5";
    const autoReplyTemplate = "template_reuva7c";

    const publicKey = "1vAxsJqP1mc24_3I7";

    // We extract user_name for the autoreply
    const formData = new FormData(formRef.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");

    try {
      // 1️⃣ Send form to company inbox
      const sendToCompany = emailjs.sendForm(
        contactService,
        contactTemplate,
        formRef.current,
        publicKey
      );

      // 2️⃣ Send auto-reply to the user
      const sendAutoReply = emailjs.send(
        autoReplyService,
        autoReplyTemplate,
        {
          name: userName,
          email: userEmail,
          title: "Your Inquiry to Greania Build Solutions",
        },
        publicKey
      );

      await Promise.all([sendToCompany, sendAutoReply]);

      setStatus("Message sent successfully! We have emailed you a confirmation.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="home-contact">
      <div className="contact-container">
        {/* Contact Header */}
        <div className="contact-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <div className="divider"></div>
          <p className="section-description">
            Have a project in mind? Reach out to discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><FaPhone /></div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+254 791 554 319</p>
                <p>+254 757 657 217</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@greaniabuild.com</p>
                <p>quotes@greaniabuild.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Greania Plaza, Gilgil Road</p>
                <p>Nakuru, Kenya</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input name="user_name" type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input name="user_email" type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input name="phone" type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {loading ? "Sending..." : <>Send Message <FiSend /></>}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="contact-map">
        <iframe
          title="Greania Build Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.742345845786!2d36.07321531526192!3d-0.2829148354188666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTYnNTguNSJTIDM2wrAwNCczNS4yIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default HomeContact;
