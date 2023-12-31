import { useEffect, useState } from "react"
import {Image} from '../Images/Image'
export const ImagesList = () =>{
    const [data, setData] = useState();
    const getData = async() => {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
        const {photos} = await response.json();
        setData(photos);
        console.log(photos);
    }  
    useEffect(() => {
        getData()
    },[])
    return (
        <div id="parent">
            { 
                data?.map((e,i) =>{
                    return <Image id={e.id} imageUrl={e.url} key={i}/>
                })
            }
        </div>
    );
}