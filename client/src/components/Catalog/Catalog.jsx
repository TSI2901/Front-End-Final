import { useEffect, useState } from 'react'


function Catalog() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3030/jsonstore`)
        .then(response => response.json())
        .then(data => {
            setStudents(Object.values(data))
        })
        .catch(err => console.log(err))
    },[])
    console.log(students)

    return(
        <h1>catalog</h1>
    )
}
export default Catalog