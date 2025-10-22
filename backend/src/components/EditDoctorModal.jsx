import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaStar } from "react-icons/fa";

export default function EditDoctorModal({ isOpen, onClose, onSave, doctor }) {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [spec, setSpec] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [rating, setRating] = useState(4);

  const nameRef = useRef(null);

  // Prefill values when modal opens
  useEffect(() => {
    if (isOpen && doctor) {
      setName(doctor.name || "");
      setExperience(doctor.exp || "");
      setSpec(doctor.spec || "");
      setTime(doctor.time || "");
      setDay(doctor.day || "");
      setGender(doctor.gender || "Male");
      setAvailability(doctor.available ? "Available" : "Unavailable");
      setRating(doctor.rating || 4);

      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (nameRef.current) nameRef.current.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen, doctor]);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSave(e) {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter doctor's name.");
    if (!spec.trim()) return alert("Please select specialization.");
    if (!time.trim()) return alert("Please enter available time.");

    const updatedDoctor = {
      ...doctor,
      name: name.trim(),
      exp: experience || "0-1yr",
      spec: spec,
      time: time,
      day: day || "",
      gender: gender || "Male",
      rating: Number(rating) || 4,
      available: availability === "Available",
    };

    onSave(updatedDoctor);
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-doctor-title"
      >
        <div className="modal-header">
          <h2 id="edit-doctor-title">Edit Doctor Details</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        <form className="modal-body" onSubmit={handleSave}>
          {/* Name */}
          <div className="field">
            <label>Name</label>
            <input
              ref={nameRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Doctor name"
            />
          </div>

          {/* Experience */}
          <div className="field">
            <label>Experience</label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select experience</option>
              <option value="0-1yr">0-1yr</option>
              <option value="1-3yr">1-3yr</option>
              <option value="3-6yr">3-6yr</option>
              <option value="6-10yr">6-10yr</option>
            </select>
          </div>

          {/* Specialization */}
          <div className="field">
            <label>Specialization</label>
            <select value={spec} onChange={(e) => setSpec(e.target.value)}>
              <option value="">Select specialization</option>
              <option>Dermatologist</option>
              <option>Cardiologist</option>
              <option>Gastroenterologist</option>
              <option>Neurologist</option>
              <option>Pediatrician</option>
              <option>Orthopedist</option>
              <option>ENT</option>
            </select>
          </div>

          {/* Available Time */}
          <div className="field">
            <label>Available Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 9:00 AM - 12:00 PM"
            />
          </div>

          {/* Available Days */}
          <div className="field">
            <label>Available Days</label>
            <input
              type="text"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="e.g. Mon-Fri"
            />
          </div>

          {/* Gender */}
          <div className="field">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Availability */}
          <div className="field">
            <label>Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>

          {/* Rating */}
          <div className="rating-row" aria-hidden>
            <div className="label">Rating</div>
            <div className="rating-stars" role="radiogroup" aria-label="Rating">
              {Array.from({ length: 5 }).map((_, i) => {
                const value = i + 1;
                return (
                  <button
                    key={i}
                    type="button"
                    className="star-btn"
                    onClick={() => setRating(value)}
                    aria-label={`${value} star`}
                    aria-checked={rating === value}
                    style={{ background: "transparent", border: "none", padding: 4 }}
                  >
                    <FaStar
                      style={{
                        color: i < rating ? "#f5c45e" : "#ddd",
                        fontSize: 18,
                        filter: i < rating ? "drop-shadow(0 1px 0 rgba(0,0,0,0.06))" : "none",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
