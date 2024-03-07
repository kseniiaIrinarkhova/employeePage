import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";

export default function HomePage({employees, selectedEmployeeId, setSelectedEmployeeId }) {
    return (
        <div className="page">
            <Header title ="Employee Directory" />
            <SearchBar selectedEmployeeId={selectedEmployeeId} onSelectedEmployeeChanged={setSelectedEmployeeId} />
            <EmployeeList employees={employees} selectedEmployeeId={selectedEmployeeId} onSelectedEmployeeChanged={setSelectedEmployeeId} />
        </div>
    );
}