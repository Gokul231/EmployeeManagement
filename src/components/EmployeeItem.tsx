import React from 'react';
import { Employee } from '../types/Employee';

interface EmployeeItemProps {
  employee: Employee;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-item">
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <button onClick={() => onEdit(employee.id)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default EmployeeItem;