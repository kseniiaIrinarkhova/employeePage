import './EmployeeCard.css'
import king from '../../images/King.png'
import jones from '../../images/Jones.png'
import lee from '../../images/Lee.png'
import monroe from '../../images/Monroe.png'
import taylor from '../../images/Taylor.png'
import williams from '../../images/Williams.png'

const employeePhotos = {
    "King": king,
    "Jones": jones,
    "Lee": lee,
    "Monroe": monroe,
    "Taylor": taylor,
    "Williams": williams
};

export default function EmployeeCard({ job, name, img, isActive, size }) {
    let className = "card-photo";
    if (isActive) className += " active";
    let cardClassName = "employee-card";

    if (size) cardClassName += " doubled";
    return (
        <>
            <div className={cardClassName} >
                <div className={className} ><img src={employeePhotos[img]} alt={name} /></div>
                <div className="card-info">
                    <h4>{name}</h4>
                    <p>{job}</p>
                </div>
            </div>
        </>
    );

}