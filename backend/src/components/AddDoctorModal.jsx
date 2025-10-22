import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaStar } from "react-icons/fa";

export default function AddDoctorModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [spec, setSpec] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [rating, setRating] = useState(4);

  const nameRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setName(""); setExperience(""); setSpec(""); setTime("");
      setDay(""); setGender(""); setAvailability("Available"); setRating(4);
      document.body.style.overflow = "hidden";
      setTimeout(() => { if (nameRef.current) nameRef.current.focus(); }, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e) { if (e.key === "Escape") onClose(); }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSave(e) {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter doctor's name.");
    if (!spec.trim()) return alert("Please select specialization.");
    if (!time.trim()) return alert("Please enter available time.");

    const newDoctor = {
      name: name.trim(),
      exp: experience || "0-1yr",
      spec,
      time,
      day: day || "",
      gender: gender || "Male",
      rating: Number(rating) || 4,
      available: availability === "Available",
    };

    onSave(newDoctor); // parent handles API call
  }

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target.classList.contains("modal-overlay")) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="add-doctor-title">
        <div className="modal-header">
          <h2 id="add-doctor-title">Add New Doctor</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close"><FaTimes /></button>
        </div>

        <form className="modal-body" onSubmit={handleSave}>
          <div className="field">
            <label>Name</label>
            <input ref={nameRef} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Doctor name"/>
          </div>

          <div className="field">
            <label>Experience</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value="">Select experience</option>
              <option value="0-1yr">0-1yr</option>
              <option value="1-3yr">1-3yr</option>
              <option value="3-6yr">3-6yr</option>
              <option value="6-10yr">6-10yr</option>
            </select>
          </div>

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

          <div className="field">
            <label>Available Time</label>
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. 9:00 AM - 12:00 PM"/>
          </div>

          <div className="field">
            <label>Available Days</label>
            <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="e.g. Mon-Fri"/>
          </div>

          <div className="field">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label>Availability</label>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>

          <div className="rating-row">
            <div className="label">Rating</div>
            <div className="rating-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" onClick={() => setRating(i + 1)} style={{ background: "transparent", border: "none", padding: 4 }}>
                  <FaStar color={i < rating ? "#f5c45e" : "#ddd"} />
                </button>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
