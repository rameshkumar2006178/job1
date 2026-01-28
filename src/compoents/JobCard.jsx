import React, { useState } from "react";
import "./jobCard.css";

function JobCard({ id, title, company, location, onDelete, onUpdate }){
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title, company, location });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate({ id, ...formData })
    setIsEditing(false)
  }

  return (
    <div className="job-card">
      {isEditing ? (
        <>
          <input name="title" value={formData.title} onChange={handleChange} />
          <input name="company" value={formData.company} onChange={handleChange} />
          <input name="location" value={formData.location} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{company}</p>
          <p>{location}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default JobCard
