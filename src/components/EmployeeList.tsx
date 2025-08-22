import React from 'react';
import EmployeeItem from './EmployeeItem';
import { Employee } from '../types/Employee';

interface EmployeeListProps {
  employees: Employee[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <EmployeeItem 
            key={employee.id} 
            employee={employee} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;