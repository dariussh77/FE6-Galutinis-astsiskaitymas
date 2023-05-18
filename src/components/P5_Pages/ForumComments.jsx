import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ForumComments = () => {
    const {id}=useParams();
    const [currentQ, setcurrentQ]=useState();
    
    useEffect(()=>{
        fetch(`http://localhost:7777/questions/${id}`)
            .then(res=>res.json())
            .then(data=>setcurrentQ(data));
    },[]);
    return ( 
        <main>
            { currentQ&&<h2>{currentQ.question}</h2> }
                      
        </main>
     );
}
 
export default ForumComments;