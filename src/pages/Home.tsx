import React, { useEffect, useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { Employee } from '../types/Employee';
import { getEmployees } from '../services/employeeService';

const Home: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    const handleAddEmployee = () => {
        setShowForm(true);
    };

    const handleEditEmployee = (id: number) => {
        // Logic to edit employee
    };

    const handleDeleteEmployee = async (id: number) => {
        // Logic to delete employee
        // Optionally update state after deletion
    };

    const handleFormSubmit = (employee: Employee) => {
        setEmployees([...employees, employee]);
        setShowForm(false);
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <button onClick={handleAddEmployee}>Add Employee</button>
            {showForm && (
                <EmployeeForm onSubmit={handleFormSubmit} />
            )}
            <EmployeeList 
                employees={employees} 
                onEdit={handleEditEmployee} 
                onDelete={handleDeleteEmployee} 
            />
        </div>
    );
};

export default Home;