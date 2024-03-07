import './SearchBar.css';

export default function SearchBar({ filter, setFilter, setSelectedEmployeeId }){
    //event hendler for typing in input field 
    const search =(e) => {
        //if user pressed Enter - change states!
        if (e.keyCode === 13) {

            e.preventDefault();
            //use text from search field as nre state for filter
            setFilter((filter)=> filter = e.target.value)
            //change selected employee state to undefined
            setSelectedEmployeeId(undefined)
        }
    }
    return (
        <form action="search" className="search" >
            <input type="text" className="query" placeholder="Enter employee name" onKeyDown={(e) => search(e)} />
        </form>
    );
}