import React from 'react';

function EmployeeDetails({ employee }) {
  return (
    <div>
      <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
      <p>{`Address: ${employee.address}`}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default EmployeeDetails;
