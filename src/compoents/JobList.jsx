import React, { useState } from "react";
import JobCard from "./JobCard";
import ApplyForm from "./ApplyForm";

function JobList() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "HP", location: "US" },
    { id: 2, title: "Backend Engineer", company: "CodeWorks", location: "New York" },
    { id: 3, title: "Game Developer", company: "TCL", location: "Bangalore" },
    { id: 4, title: "Cloud Computing", company: "Google", location: "Kolkata" },
    { id: 5, title: "Cyber Security", company: "Colour textiles", location: "Africa" }
  ]);

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  }

 
  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map(job => (job.id === id ? updatedJob : job)));
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  }

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          {...job}
          onDelete={() => deleteJob(job.id)}
          onUpdate={(updatedJob) => updateJob(job.id, updatedJob)}
        />
      ))}
      <h3>Add a New Job</h3>
      <ApplyForm onSubmit={addJob} />
    </div>
  )
}

export default JobList
