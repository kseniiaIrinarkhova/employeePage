import EmployeeCard from "../EmployeeCard/EmployeeCard";
import employees from '../../data/employees';
import './EmployeeList.css'

export default function EmployeeList() {

    const populatedList = employees.map((el)=>{ 
        let isActive = false;
        if(el.img == "Taylor") isActive = true;

        return <li className="employee-list-card" key={el.id}><EmployeeCard name={el.name} job={el.job} img={el.img} isActive={isActive} /></li>
})

    return (
        <>
            <ul>
                {populatedList}
            </ul>
        </>
    );
}