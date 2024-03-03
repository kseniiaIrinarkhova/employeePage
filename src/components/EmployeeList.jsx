import EmployeeListItem from "./EmployeeListItem";
import employees from '../data/employees';

export default function EmployeeList() {

    const populatedList = employees.map((el)=>{ return <EmployeeListItem name={el.name} key={el.id} job={el.job}/>})

    return (
        <>
            <ul>
                {populatedList}
            </ul>
        </>
    );
}