import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";
import { useState } from "react";

export default function HomePage({ employees, selectedEmployeeId, setSelectedEmployeeId }) {
    const [filter, setFilter] = useState("");
    employees = employees.filter((employee) => employee.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div className="page">
            <Header title="Employee Directory" />
            <SearchBar filter={filter} setFilter={setFilter} setSelectedEmployeeId={setSelectedEmployeeId} />
            <EmployeeList employees={employees} selectedEmployeeId={selectedEmployeeId} setSelectedEmployeeId={setSelectedEmployeeId} />
        </div>
    );
}

