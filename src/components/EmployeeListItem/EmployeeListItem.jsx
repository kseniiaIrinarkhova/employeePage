import king from '../../images/King.png'
import jones from '../../images/Jones.png'
import lee from '../../images/Lee.png'
import monroe from '../../images/Monroe.png'
import taylor from '../../images/Taylor.png'
import williams from '../../images/Williams.png'
import './EmployeeListItem.css'

const employeePhotos = {
    "King": king,
    "Jones": jones,
    "Lee": lee,
    "Monroe": monroe,
    "Taylor": taylor,
    "Williams": williams
};


export default function EmployeeListItem({ job, name, img, isActive }) {
    let className = "photo";
    if(isActive) className += " active";
     
    return (
        <>
            <li className="employee-list-card" >
                <div className={className} ><img src={employeePhotos[img]} alt={name} /></div>
                    <div className="info">
                        <h4>{name}</h4>
                        <p>{job}</p>
                    </div>
            </li>
        </>
    );
}