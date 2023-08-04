const getState = ({ setStore, getStore, getActions }) => {  
    return { 
        store: {
            user: {
                name:"",
                last_name:"",
                email:"",
                password:"",
                role:"",
                trainer_id:"",
                is_active: false,
                subscription_date:""
            },
            listOfUsers: []
        }, 
        actions: {
            getUsers: ()=>{
                fetch("http://localhost:5000/user",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfUsers: data})).catch((error)=>console.log(error))
            }
        }  }  }

export default getState;