import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, dob, phone } = formData;

    // Username validation
    if (!username) {
      alert("Please fill out the Username field.");
      return;
    }

    // Email validation
    if (!email) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Date of Birth validation
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }
    const enteredDate = new Date(dob);
    const today = new Date();
    if (enteredDate > today) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    // Phone validation
    if (!phone) {
      alert("Please fill out the Phone Number field.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    alert("Form submitted successfully!");
    setFormData({ username: "", email: "", dob: "", phone: "" });
    closeModal();
  };

  const handleClickOutside = (e) => {
    if (e.target.className === "modal") closeModal();
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>User Details Modal</h1>
      {!isModalOpen && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="open-btn" onClick={openModal}>
            Open Form
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
