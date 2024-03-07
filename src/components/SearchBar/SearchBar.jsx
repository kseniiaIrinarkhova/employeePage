import './SearchBar.css';

export default function SearchBar({ filter, setFilter, setSelectedEmployeeId }){
    const finished =(e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            setFilter(e.target.value)
            setSelectedEmployeeId(undefined)
        }
    }
    return (
        <form action="search" className="search" >
            <input type="text" className="query" placeholder="Enter employee name" onKeyDown={(e) => finished(e)} />
        </form>
    );
}