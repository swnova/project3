import { useEffect } from "react";
import ninjaApi from "./API.js";

function App()  {
    // useEffect(() => {
    //     ninjaApi.get('/');
    // }).then((response) => {
    //     console.log(response);
    // },[]);
    ninjaApi.get('/').then((response => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    }))

    return (
        <div className= "App">
        <hi>Hello</hi>
        </div>
    )
}