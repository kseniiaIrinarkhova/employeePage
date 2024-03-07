import Header from "../Header/Header";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeContacts from "../EmployeeContacts/EmployeeContacts";
import './EmployeePage.css'

export default function EmployeePage({ employee }) {
    let employeeInfo = <><h1>Please select employee to see contact inforation!</h1></>;
    if (employee){
        employeeInfo = <><EmployeeCard name={employee.name} job={employee.job} img={employee.img} size="b" />
            <EmployeeContacts contacts={employee.contacts} /></>;
    }
    return (
        <div className="page">
            <Header title="Employee" />
            <div className="employee">
                {employeeInfo}
            </div>
        </div>
    );
}