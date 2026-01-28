import React, { useState } from "react";

function ApplyForm({ onSubmit }){
  const [formData, setFormData] = useState({ title: "", company: "", location: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ title: "", company: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} />
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  )
}

export default ApplyForm
