import Header from "../Header/Header";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeContacts from "../EmployeeContacts/EmployeeContacts";
import './EmployeePage.css'

export default function EmployeePage({ employee }) {
    return (
        <div className="page">
            <Header title="Employee" />
            <div className="employee">
                <EmployeeCard name={employee.name} job={employee.job} img={employee.img} size="b" />
                <EmployeeContacts contacts={employee.contacts} />
            </div>
        </div>
    );
}