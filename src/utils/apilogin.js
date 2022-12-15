//"https://vroom-backendsw.herokuapp.com"
const URL_PREFIX= "https://vroom-backendsw.herokuapp.com"
const  API = {
    login: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/players/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/players`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    
}
export default API