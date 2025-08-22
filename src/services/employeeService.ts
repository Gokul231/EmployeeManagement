
import { Employee } from '../types/Employee';

// Mock data
let mockEmployees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Design' },
];

export const getEmployees = async (): Promise<Employee[]> => {
    // Simulate async fetch
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockEmployees]), 300);
    });
};

export const getEmployeeById = async (id: number): Promise<Employee> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = mockEmployees.find(emp => emp.id === id);
            if (employee) resolve(employee);
            else reject(new Error('Employee not found'));
        }, 300);
    });
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newEmployee = { ...employee, id: Date.now() };
            mockEmployees.push(newEmployee);
            resolve(newEmployee);
        }, 300);
    });
};

export const updateEmployee = async (id: number, employee: Employee): Promise<Employee> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = mockEmployees.findIndex(emp => emp.id === id);
            if (index !== -1) {
                mockEmployees[index] = { ...employee, id };
                resolve(mockEmployees[index]);
            } else {
                reject(new Error('Employee not found'));
            }
        }, 300);
    });
};

export const deleteEmployee = async (id: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockEmployees = mockEmployees.filter(emp => emp.id !== id);
            resolve();
        }, 300);
    });
};