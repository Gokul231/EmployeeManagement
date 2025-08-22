import React, { useEffect, useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import { fetchEmployees } from '../services/employeeService';

const Home: React.FC = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            const data = await fetchEmployees();
            setEmployees(data);
        };

        getEmployees();
    }, []);

    const handleAddEmployee = () => {
        // Logic to add a new employee (e.g., navigate to EmployeeForm)
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <button onClick={handleAddEmployee}>Add Employee</button>
            <EmployeeList employees={employees} />
        </div>
    );
};

export default Home;