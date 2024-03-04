import taylor from '../../images/Taylor.png'
import './EmployeeCard.css'

export default function EmployeeCard({name, job}) {
    return (
        <>
            <div className="employee-card" >
                <div className="card-photo" ><img src={taylor} alt={name} /></div>
                <div className="card-info">
                    <h4>{name}</h4>
                    <p>{job}</p>
                </div>
            </div>
        </>
    );

}