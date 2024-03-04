import "./EmployeeInfo.css";

export default function EmployeeInfo({title, info}){
    return (
            <div className="contact-info">
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
    );
}