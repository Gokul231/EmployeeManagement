# Employee Management App

This is a simple CRUD application for managing employee data. The application allows users to create, read, update, and delete employee records.

## Features

- Add new employees
- View a list of employees
- Edit employee details
- Delete employees
- View detailed information about each employee

## Technologies Used

- React
- TypeScript
- CSS
- JSON Server (for mock API)

## Project Structure

```
employee-management-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── EmployeeForm.tsx
│   │   ├── EmployeeList.tsx
│   │   └── EmployeeItem.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── EmployeeDetails.tsx
│   ├── services
│   │   └── employeeService.ts
│   ├── types
│   │   └── Employee.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── main.css
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd employee-management-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.

## API

This application uses a mock API for employee data. You can set up a JSON server to simulate API requests. Create a `db.json` file in the root directory with the following structure:

```json
{
  "employees": []
}
```

Then, run the JSON server with:
```
json-server --watch db.json --port 5000
```

## License

This project is licensed under the MIT License.