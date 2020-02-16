import React from 'react';

const Child = () => {
    
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(json=>{
                console.log(json)
                setData(json)
            })
    },[])

    return ( 
        <>
        {data.map(item=>(
            <li>{item.title}</li>
        ))}
        </>
     );
}
 
export default Child;