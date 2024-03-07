
import './App.css'
import HomePage from './components/HomePage/HomePage';
import EmployeePage from './components/EmployeePage/EmployeePage';
import employees from './data/employees';
import { useState } from 'react';

function App() {

const[selectedEmployeeId, setSelectedEmployeeId] = useState(undefined);
  return (
    <>
      <div className="container">
        <HomePage employees={employees} selectedEmployeeId={selectedEmployeeId} setSelectedEmployeeId={setSelectedEmployeeId}/>
        <EmployeePage employee={employees.find((el)=> el.id == selectedEmployeeId)}/>
      </div>
    </>
  )
}

export default App
