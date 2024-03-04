import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';
import employees from '../../data/employees';
export default function EmployeeContacts({id}) {
    const employee = employees.filter((el)=>el.id == id)[0];
    return (
        <>
            <EmployeeInfo title="Call Office" info={employee.phone.office} />
            <EmployeeInfo title="Call Mobile" info={employee.phone.mobile} />
            <EmployeeInfo title="SMS" info={employee.phone.mobile} />
            <EmployeeInfo title="Email" info={employee.email} />
        </>
    );
}