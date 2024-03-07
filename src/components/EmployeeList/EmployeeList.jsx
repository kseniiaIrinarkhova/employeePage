import EmployeeCard from "../EmployeeCard/EmployeeCard";
import './EmployeeList.css'

export default function EmployeeList({ employees, selectedEmployeeId, setSelectedEmployeeId }) {
    //select employee from list
    function handleEmployeeClick(e) {
        //search for li elemet to use it Id property
        let element = e.target
        while (element.tagName !== 'LI') {
            element = element.parentNode
        }
        //change state for new ID
        setSelectedEmployeeId((id) => id = element.id)
    }
    //create a list of employees
    const populatedList = employees.map((el) => {
        let isActive = false;
        //create an active property
        if (el.id == selectedEmployeeId) isActive = true;
        return <li className="employee-list-card" key={el.id} id={el.id} onClick={handleEmployeeClick}><EmployeeCard name={el.name} job={el.job} img={el.img} isActive={isActive} key={el.id} /></li>
    })

    return (
        <>
            <ul>
                {populatedList}
            </ul>
        </>
    );
}