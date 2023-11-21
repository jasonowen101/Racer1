import React from 'react';

function JobDetails({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default JobDetails;
