import Header from "../Header/Header";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import employees from '../../data/employees';
import EmployeeContacts from "../EmployeeContacts/EmployeeContacts";
import './EmployeePage.css'

export default function EmployeePage() {
    return (
        <div className="page">
            <Header title="Employee" />
            <div className="employee">
            <EmployeeCard name={employees[1].name} job={employees[1].job}  img={employees[1].img} size="b" />
            <EmployeeContacts id={2} />
            </div>
        </div>
    );
}