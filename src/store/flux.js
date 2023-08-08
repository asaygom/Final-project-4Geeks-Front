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
            listOfUsers: [],
            equipment: {
                name:"",
                description:"",
                status: "",
                is_active: true
            },
            listOfEquipments:[]
        }, 
        actions: {
            getUsers: ()=>{
                fetch("http://localhost:5000/user",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfUsers: data})).catch((error)=>console.log(error))
            },
            getEquipment: ()=>{
                fetch("http://localhost:5000/equipment",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfEquipments: data})).catch((error)=>console.log(error))
            }
        }  }  }

export default getState;