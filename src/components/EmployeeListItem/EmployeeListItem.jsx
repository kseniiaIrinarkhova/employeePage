import king from '../../images/King.png'
import jones from '../../images/Jones.png'
import lee from '../../images/Lee.png'
import monroe from '../../images/Monroe.png'
import taylor from '../../images/Taylor.png'
import williams from '../../images/Williams.png'

const employeePhotos = {
    "King" : king,
"Jones": jones,
"Lee": lee,
"Monroe": monroe,
"Taylor": taylor,
"Williams": williams
};


export default function EmployeeListItem({key,job,name, img}){
    return(
        <>
        <li key={key}>
        <div className="pic"><img src={employeePhotos[img]} alt={name}/></div>
                <h4>{name}</h4>
                <p>{job}</p>
        </li>
        </>
    );
}