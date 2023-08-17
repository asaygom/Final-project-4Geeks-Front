const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      user: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
        trainer_id: "",
        is_active: false,
        subscription_date: "",
      },
      listOfUsers: [],
      equipment: {
        name: "",
        description: "",
        status: "",
        is_active: true,
        photo_link: ""
      },
      listOfEquipments: [],
      exercise: {
        name: "",
        description: "",
        sets: 0,
        repetitions: 0,
        weight: 0,
        is_completed: false,
        equipment_id: null,
        equipment_issue: "",
        routine_id: null,
        photo_link: ""
      },
      listOfExercises: [],
      token: null
    },
    actions: {
      getUsers: () => {
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfUsers: data }))
          .catch((error) => console.log(error));
      },
      getEquipment: () => {
        fetch("http://localhost:5000/equipment", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfEquipments: data }))
          .catch((error) => console.log(error));
      },
      handleChangeEquipment: (event) => {
        const store = getStore();
        if (event.target.name === "is_active"){setStore({
          equipment: {
            ...store.equipment,
            [event.target.name]: event.target.checked,
          },
        });}
        else{
        setStore({
          equipment: {
            ...store.equipment,
            [event.target.name]: event.target.value,
          },
        });}
      },
      handleSubmitEquipment: (event) => {
        event.preventDefault();
        const store = getStore();
        if (store.equipment) {
          fetch("http://localhost:5000/equipment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.equipment)
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
        setStore({
          equipment: {
            name: "",
            description: "",
            status: "",
            is_active: false,
            photo_link: ""
          },
        });
      },
      cleanEquipmentInfo: ()=>{
        setStore({
          equipment: {
            name: "",
            description: "",
            status: "",
            is_active: false,
            photo_link: ""
          },
        });
      },
     getEquipmentInfo: (id) => {
        fetch("http://localhost:5000/equipment/"+id, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ equipment: data }))
          .catch((error) => console.log(error));
      },
      updateEquipmentInfo: (event,id) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/equipment/"+id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.equipment)
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }, 
      deleteEquipment: (id)=>{
        fetch("http://localhost:5000/equipment/"+id,{
            method: "DELETE",
        }).then((response)=> response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
      },


      getExercise: () => {
        fetch("http://localhost:5000/exercise", { // Cambiado el endpoint a "/exercise"
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => setStore({ listOfExercises: data })) // Cambiado a "listOfExercises"
        .catch((error) => console.log(error));
      },

      handleChangeExercise: (event) => {
        const store = getStore();
        if (event.target.name === "is_completed") {setStore({
          exercise: {
            ...store.exercise,
            [event.target.name]: event.target.checked,
                },
            });
        } else {
            setStore({
                exercise: {
                    ...store.exercise,
                    [event.target.name]: event.target.value,
              },
            });}
      },
  

      handleSubmitExercise: (event) => {
        event.preventDefault();
        const store = getStore();
        if (store.exercise) {
            fetch("http://localhost:5000/exercise", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(store.exercise) 
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
        setStore({
            exercise: { 
                name: "",
                description: "",
                sets: "",
                repetitions: "",
                weight: "",
                is_completed: false,
                equipment_id: "",
                equipment_issue: "",
                routine_id: "",
                photo_link: ""
            },
        });
      },


      cleanExerciseInfo: () => {
        setStore({
            exercise: {
                name: "",
                description: "",
                sets: "",
                repetitions: "",
                weight: "",
                is_completed: false,
                equipment_id: "",
                equipment_issue: "",
                routine_id: "",
                photo_link: ""
            },
        });
      },
      getExerciseInfo: (id) => {
          fetch("http://localhost:5000/exercise/" + id, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
          })
          .then((response) => response.json())
          .then((data) => setStore({ exercise: data }))
          .catch((error) => console.log(error));
      },
      updateExerciseInfo: (event, id) => {
          event.preventDefault();
          const store = getStore();
          fetch("http://localhost:5000/exercise/" + id, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(store.exercise)
          })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      deleteExercise: (id) => {
          fetch("http://localhost:5000/exercise/" + id, {
              method: "DELETE",
          }).then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
    

      newUser: (nu) => {
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nu),
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfUsers: data }))
          .catch((error) => console.log(error));
      },
      handleOnChange: (e, fieldName) => {
        const store = getStore();
        setStore({
          user: {
            ...store.user,
            [fieldName]: e.target.value,
          },
        });
      },
      login: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/login",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.user),
          })
          .then((response) => response.json())
          .then((data) => {return(
          sessionStorage.setItem("token", data.access_token),
          setStore({
            token: data.access_token
          }))}
          )
          .catch((error) => console.log(error));
      },
      handleChangeLogin: (event) => {
        const store = getStore();
        setStore({
          user: {
            ...store.user,
            [event.target.name]: event.target.value,
          }
        });
      },
      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        if(token && token!=="" && token!==undefined){setStore({token: token})}
      },
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({token: null})
      },
      getUserInfo: () => {
        const store = getStore();
        fetch("http://localhost:5000/userinfo", {
          method: "GET",
          headers: { "Authorization": "Bearer "+ store.token}
        })
          .then((response) => response.json())
          .then((data) => setStore({ user: data }))
          .catch((error) => console.log(error));
      }
    },
  };
};

export default getState;
