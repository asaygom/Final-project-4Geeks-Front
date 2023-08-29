import { toast } from "react-toastify";

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
        is_active: true,
        subscription_date: "",
        photo_link: "",
      },
      listOfUsers: [],
      equipment: {
        name: "",
        description: "",
        status: "",
        is_active: true,
        photo_link: "",
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
        photo_link: "",
        equipment_name: "",     //@@@
        routine_name:"",    //@@@
      },
      listOfExercises: [],
      trainingplan: {
        name: "",
        user_id: "",
        trainer_id: "",
        start_time: "",
        finish_time: "",
        is_completed: false,
        goal_name: "",
        goal_description: "",
        completed_percentage: 0,
        is_active: true,
        photo_link: "",
        user_name: "",
        user_lastname: "",
        trainer_name:"",
        trainer_lastname:"",
      },
      listOfTrainingPlans: [],
      routine: {
        name: "",
        weekday: "",
        completed_percentage: 0,
        is_completed: false,
        is_active: true,
        training_plan_id: null,
        photo_link: "",
      },
      listOfRoutines: [],
      token: null,
      trainingPlanList: [],
      trainer: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        role: "trainer",
        is_active: true,
        attendance: false,
        photo_link: "",
      },
      listOfTrainers: [],
      userLoggedIn: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
        trainer_id: "",
        is_active: true,
        subscription_date: "",
        photo_link: "",
        attendance: false,
      },
    },
    actions: {
      getUsers: () => {
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfUsers: data.data }))
          .catch((error) => console.log(error));
      },
      getTrainers: () => {
        fetch("http://localhost:5000/trainer", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfTrainers: data.data }))
          .catch((error) => console.log("Error al obtener entrenadores",error));
      },
      getEquipment: () => {
        fetch("http://localhost:5000/equipment", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfEquipments: data.data }))
          .catch((error) => console.log(error));
      },
      handleChangeEquipment: (event) => {
        const store = getStore();
        if (event.target.name === "is_active") {
          setStore({
            equipment: {
              ...store.equipment,
              [event.target.name]: event.target.checked,
            },
          });
        } else {
          setStore({
            equipment: {
              ...store.equipment,
              [event.target.name]: event.target.value,
            },
          });
        }
      },
      handleSubmitEquipment: (event) => {
        event.preventDefault();
        const store = getStore();
        if (store.equipment) {
          fetch("http://localhost:5000/equipment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.equipment),
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
            photo_link: "",
          },
        });
      },
      cleanEquipmentInfo: () => {
        setStore({
          equipment: {
            name: "",
            description: "",
            status: "",
            is_active: false,
            photo_link: "",
          },
        });
      },
      getEquipmentInfo: (id) => {
        fetch("http://localhost:5000/equipment/" + id, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ equipment: data }))
          .catch((error) => console.log(error));
      },
      updateEquipmentInfo: (event, id) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/equipment/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.equipment),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      deleteEquipment: (id) => {
        fetch("http://localhost:5000/equipment/" + id, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },

      handleChangeExercise: (event) => {
        const store = getStore();
        if (event.target.name === "is_completed") {
          setStore({
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
          });
        }
      },

      handleSubmitExercise: (event) => {
        event.preventDefault();
        const store = getStore();
        if (store.exercise) {
          fetch("http://localhost:5000/exercise", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization": "Bearer " + store.token },
            body: JSON.stringify(store.exercise),
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
            photo_link: "",
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
            photo_link: "",
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
          body: JSON.stringify(store.exercise),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      deleteExercise: (id) => {
        fetch("http://localhost:5000/exercise/" + id, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },


      
      handleChangeTrainingPlan: (event) => {    //@@@
        const store = getStore();
        if (event.target.name === "is_completed") {
          setStore({
            trainingplan: {
              ...store.trainingplan,
              [event.target.name]: event.target.checked,
            },
          });
        } else {
          setStore({
            trainingplan: {
              ...store.trainingplan,
              [event.target.name]: event.target.value,
            },
          });
        }
      },

      handleSubmitTrainingPlan: (event) => {
        event.preventDefault();
        const store = getStore();
        if (store.trainingplan) {
          fetch("http://localhost:5000/trainingplan", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization": "Bearer " + store.token},
            body: JSON.stringify(store.trainingplan),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
        setStore({
          trainingplan: {
            name: "",
            user_id: "",
            trainer_id: "",
            start_time: "",
            finish_time: "",
            is_completed: false,
            goal_name: "",
            goal_description: "",
            completed_percentage: 0,
            is_active: true,
            photo_link: "",
            user_name: "",
            user_lastname: "",
            trainer_name:"",
            trainer_lastname:"",
          },
        });
      },

      cleanTrainingPlanInfo: () => {
        setStore({
          trainingplan: {
            name: "",
            user_id: "",
            trainer_id: "",
            start_time: "",
            finish_time: "",
            is_completed: false,
            goal_name: "",
            goal_description: "",
            completed_percentage: 0,
            is_active: true,
            photo_link: "",
            user_name: "",
            user_lastname: "",
            trainer_name:"",
            trainer_lastname:"",
          },
        });
      },
      getTrainingPlanInfo: (id) => {
        const store = getStore();
        fetch("http://localhost:5000/trainingplan/" + id, {
          method: "GET",
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + store.token},
        })
          .then((response) => response.json())
          .then((data) => setStore({ trainingplan: data }))
          .catch((error) => console.log(error));
      },
      updateTrainingPlanInfo: (event, id) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/trainingplan/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json","Authorization": "Bearer " + store.token },
          body: JSON.stringify(store.trainingplan),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      deleteTrainingPlan: (id) => {
        const store = getStore();
        fetch("http://localhost:5000/trainingplan/" + id, {
          method: "DELETE",
          headers: { "Content-Type": "application/json","Authorization": "Bearer " + store.token },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      signupUser: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.user),
        })
          .then((response) => response.json())
          .then((data) =>{ 
          toast.success(data.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          })
          console.log(data)})
          .catch((error) => console.log(error));
        setStore({
          user: {
            name: "",
            last_name: "",
            email: "",
            password: "",
            role: "",
            trainer_id: "",
            is_active: true,
            subscription_date: "",
          },
        });
      },
      handleChangeUser: (event) => {
        const store = getStore();
        toast("test")
        setStore({
          user: {
            ...store.user,
            [event.target.name]: event.target.value,
          },
        });
      },
      login: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.userLoggedIn),
        })
          .then((response) => response.json())
          .then((data) => {
            return (
              sessionStorage.setItem("token", data.access_token),
              sessionStorage.setItem("user", JSON.stringify(data.user)),
              setStore({
                token: data.access_token,
                user: data.user,
              })
            );
          })
          .catch((error) => console.log(error));
      },
      handleChangeLogin: (event) => {
        const store = getStore();
        setStore({
          userLoggedIn: {
            ...store.userLoggedIn,
            [event.target.name]: event.target.value,
          },
        });
      },
      trainerLogin: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/trainer_login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.userLoggedIn),
        })
          .then((response) => response.json())
          .then((data) => {
            return (
              sessionStorage.setItem("token", data.access_token),
              sessionStorage.setItem("user", JSON.stringify(data.user)),
              setStore({
                token: data.access_token,
                trainer: data.user,
              })
            );
          })
          .catch((error) => console.log(error));
      },
      handleChangeTrainerLogin: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.userLoggedIn,
            [event.target.name]: event.target.value,
          },
        });
      },
      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token, userLoggedIn: user });
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setStore({
          token: null,
          userLoggedIn: {
            name: "",
            last_name: "",
            email: "",
            password: "",
            role: "",
            trainer_id: "",
            is_active: true,
            subscription_date: "",
            photo_link: "",
            attendance: false,
          },
        });
      },
      getUserInfo: () => {
        const store = getStore();
        fetch("http://localhost:5000/userinfo", {
          method: "GET",
          headers: { Authorization: "Bearer " + store.token },
        })
          .then((response) => response.json())
          .then((data) => setStore({ user: data }))
          .catch((error) => console.log(error));
      },
      getExercise: () => {
        fetch("http://localhost:5000/exercise", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ listOfExercises: data.data,
              equipment_name: data.equipment_name, // Añadiendo el nombre del equipo y rutina
              routine_name: data.routine_name, });
            console.log(data);
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },
      getTrainingPlan: () => {
        const store = getStore();
        fetch("http://localhost:5000/trainingplan", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json","Authorization": "Bearer " + store.token  // @@@
          },        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ listOfTrainingPlans: data.data,
              user_name: data.user_name, //@@@ Añadiendo el nombre del usuario y entrenador
              trainer_name: data.trainer_name, });
            console.log(data);
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },
      getRoutine: () => {
        fetch("http://localhost:5000/routine", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfRoutines: data.data }))
          .catch((error) => console.log(error));
      },

      // getTrainingPlan: () => {
      //   fetch("http://localhost:5000/trainingplan", {
      //     method: "GET",
      //     headers: { "Content-Type": "application/json" },
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setStore({ trainingPlanList: data });
      //       console.log(data);
      //     })
      //     // .then(() => console.log()
      //     .catch((error) => console.log(error));
      // },
      signupTrainer: (event, notify) => {
        event.preventDefault();
        const store = getStore();
          fetch("http://localhost:5000/trainer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.trainer),
          })
            .then((response) => response.json())
            .then((data) => {
              toast.success(data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
              console.log(data);
            })
            .catch((error) => console.log(error));
          setStore({
            trainer: {
              name: "",
              last_name: "",
              email: "",
              password: "",
              role: "trainer",
              is_active: true,
              attendance: false,
            },
          });
      },
      handleChangeTrainer: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.trainer,
            [event.target.name]: event.target.value,
          },
        });
      },
    },
  };
};
export default getState;
