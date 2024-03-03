import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";

export default function HomePage() {
    return (
        <div className="page">
            <Header title ="Employee Directory" />
            <SearchBar />
            <EmployeeList/>
        </div>
    );
}