import React from 'react';
import JobDetails from './';

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map(job => (
        <JobDetails key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
