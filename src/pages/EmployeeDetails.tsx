import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/employeeService';
import { Employee } from '../types/Employee';

const EmployeeDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const data = await getEmployeeById(id);
                setEmployee(data);
            } catch (err) {
                setError('Failed to fetch employee details');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!employee) {
        return <div>No employee found</div>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Department:</strong> {employee.department}</p>
        </div>
    );
};

export default EmployeeDetails;