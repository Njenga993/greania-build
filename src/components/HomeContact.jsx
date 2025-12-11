// src/components/HomeContact.jsx
import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../styles/home-contact.css"; // Keep the component-specific styles

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
                <p><a href="tel:+254757657217">+254 757 657 217</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-content">
                <h3>Email</h3>
                <p><a href="mailto:info@greaniabuild.com">info@greaniabuild.com</a></p>
                <p><a href="mailto:quotes@greaniabuild.com">quotes@greaniabuild.com</a></p>
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

            <button type="submit" className={`submit-btn ${loading ? "sending" : ""}`} disabled={loading}>
              {loading ? "Sending..." : <>Send Message <FiSend /></>}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;