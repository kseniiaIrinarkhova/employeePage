import EmployeeCard from "../EmployeeCard/EmployeeCard";
import './EmployeeList.css'

export default function EmployeeList({ employees, selectedEmployeeId, setSelectedEmployeeId }) {
    function handleEmployeeClick(e) {
        let element = e.target
        while (element.tagName !== 'LI') {
            element = element.parentNode
        }
        setSelectedEmployeeId(element.id)
    }
    const populatedList = employees.map((el) => {
        let isActive = false;
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