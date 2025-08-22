import React, { useState } from 'react';
import { Employee } from '../types/Employee';

interface EmployeeFormProps {
  employee?: Employee;
  onSubmit: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSubmit }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [position, setPosition] = useState(employee ? employee.position : '');
  const [department, setDepartment] = useState(employee ? employee.department : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee: Employee = {
      id: employee ? employee.id : Date.now(), // Generate a new ID if creating a new employee
      name,
      position,
      department,
    };
    onSubmit(newEmployee);
    setName('');
    setPosition('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <button type="submit">{employee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;