import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import employees from '../../data/employees';
import './EmployeeList.css'

export default function EmployeeList() {

    const populatedList = employees.map((el)=>{ 
        let isActive = false;
        if(el.img == "Taylor") isActive = true;

        return <EmployeeListItem name={el.name} key={el.id} job={el.job} img={el.img} isActive={isActive}/>})

    return (
        <>
            <ul>
                {populatedList}
            </ul>
        </>
    );
}