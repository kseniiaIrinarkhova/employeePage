export default function EmployeeListItem({key,job,name}){
    return(
        <>
        <li key={key}>
        {/* <div className="pic"><img src={props.photo} alt={props.name}/></div> */}
                <h4>{name}</h4>
                <p>{job}</p>
        </li>
        </>
    );
}