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
        photo_link: ""
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
      routine: {
        name: "",
        weekday: "",
        completed_percentage: 0,
        is_completed: false,
        is_active: true,
        training_plan_id: null
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
        attendance: false
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
        attendance: false
      },
      listOfMembers: [],
      listOfActivesTrainers: [],
      listOfActivesMembers: [],
      listOfWorkingEquipments: [],
      listOfMalfunctionEquipments: [],
      listOfNotWorkingEquipments: []
    },
    actions: {
      getUsers: () => {
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfUsers: data.data }))
          .catch((error) => console.log(error));
      },
      getMembers: () => {
        fetch("http://localhost:5000/member", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfMembers: data.data }))
          .catch((error) => console.log(error));
      },
      getActivesMembers: () => {
        fetch("http://localhost:5000/active_member", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfActivesMembers: data.data }))
          .catch((error) => console.log(error));
      },
      getTrainers: () => {
        fetch("http://localhost:5000/trainer", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfTrainers: data.data }))
          .catch((error) => console.log(error));
      },
      getActivesTrainers: () => {
        fetch("http://localhost:5000/active_trainer", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfActivesTrainers: data.data }))
          .catch((error) => console.log(error));
      },
      getEquipment: () => {
        fetch("http://localhost:5000/equipment", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfEquipments: data.data }))
          .catch((error) => console.log(error));
      },
      getEquipmentSummary: () => {
        fetch("http://localhost:5000/status_equipment_summary", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfWorkingEquipments: data.data.working_equipment, listOfMalfunctionEquipments: data.data.malfunction_equipment, listOfNotWorkingEquipments: data.data.not_working_equipment }))
          .catch((error) => console.log(error));
      },
      handleChangeEquipment: (event) => {
        const store = getStore();
        if (event.target.name === "is_active") {
          setStore({
            equipment: {
              ...store.equipment,
              [event.target.name]: event.target.checked,
            }
          });
        } else {
          setStore({
            equipment: {
              ...store.equipment,
              [event.target.name]: event.target.value,
            }
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
            body: JSON.stringify(store.equipment)
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
            .catch((error) => {
              toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
              console.log(error);
            });
        }
        setStore({
          equipment: {
            name: "",
            description: "",
            status: "",
            is_active: false,
            photo_link: ""
          }
        });
      },
      cleanEquipmentInfo: () => {
        setStore({
          equipment: {
            name: "",
            description: "",
            status: "",
            is_active: false,
            photo_link: ""
          }
        });
      },
      getEquipmentInfo: (id) => {
        fetch("http://localhost:5000/equipment/" + id, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
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
          body: JSON.stringify(store.equipment)
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
          })
          .catch((error) => console.log(error));
      },
      deleteEquipment: (id) => {
        fetch("http://localhost:5000/equipment/" + id, {
          method: "DELETE"
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
          })
          .catch((error) => console.log(error));
      },

      handleChangeExercise: (event) => {
        const store = getStore();
        if (event.target.name === "is_completed") {
          setStore({
            exercise: {
              ...store.exercise,
              [event.target.name]: event.target.checked,
            }
          });
        } else {
          setStore({
            exercise: {
              ...store.exercise,
              [event.target.name]: event.target.value,
            }
          });
        }
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
          }
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
          }
        });
      },
      getExerciseInfo: (id) => {
        fetch("http://localhost:5000/exercise/" + id, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
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
          method: "DELETE"
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
          body: JSON.stringify(store.user)
        })
          .then((response) => response.json())
          .then((data) =>{ 
            if (data.error) {
              toast.error(data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
            }else{
            toast.success(data.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
          setStore({
            user: {
              name: "",
              last_name: "",
              email: "",
              password: "",
              role: "",
              trainer_id: "",
              is_active: true,
              subscription_date: ""
            }
          });}
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            })
            console.error(err.message);
          });
      },
      handleChangeUser: (event) => {
        const store = getStore();
        if (event.target.value==="trainer"){
          setStore({
            trainer: {
              ...store.trainer,
              [event.target.name]: event.target.value
            }
          });
        }else{
        setStore({
          user: {
            ...store.user,
            [event.target.name]: event.target.value
          }
        });}
      },
      login: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.userLoggedIn)
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              toast.error(data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
            }else{
            return (
              sessionStorage.setItem("token", data.access_token),
              sessionStorage.setItem("user", JSON.stringify(data.user)),
              setStore({
                token: data.access_token,
                userLoggedIn: data.user
              })
            )};
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            })
            console.error(err.message);
          });
      },
      handleChangeLogin: (event) => {
        const store = getStore();
        setStore({
          userLoggedIn: {
            ...store.userLoggedIn,
            [event.target.name]: event.target.value
          }
        });
      },
      trainerLogin: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/trainer_login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.userLoggedIn)
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              toast.error(data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
            }else{
            return (
              sessionStorage.setItem("token", data.access_token),
              sessionStorage.setItem("user", JSON.stringify(data.user)),
              setStore({
                token: data.access_token,
                trainer: data.user
              })
            )};
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            })
            console.error(err.message);
          });
      },
      handleChangeTrainerLogin: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.userLoggedIn,
            [event.target.name]: event.target.value
          }
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
            attendance: false
          }
        });
      },
      getUserInfo: () => {
        const store = getStore();
        fetch("http://localhost:5000/userinfo", {
          method: "GET",
          headers: { Authorization: "Bearer " + store.token }
        })
          .then((response) => response.json())
          .then((data) => setStore({ user: data }))
          .catch((error) => console.log(error));
      },
      getExercise: () => {
        fetch("http://localhost:5000/exercise", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ listOfExercises: data.data });
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },

      getRoutine: () => {
        fetch("http://localhost:5000/routine", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfRoutines: data.data }))
          .catch((error) => console.log(error));
      },

      getTrainingPlan: () => {
        fetch("http://localhost:5000/trainigplan", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ trainingPlanList: data });
            console.log(data);
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },
      signupTrainer: (event, notify) => {
        event.preventDefault();
        const store = getStore();
          fetch("http://localhost:5000/trainer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.trainer)
          })
            .then((response) => response.json())
            .then((data) =>{ 
              if (data.error) {
                toast.error(data.error, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                })
              }else{
              toast.success(data.msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            });
            setStore({
              trainer: {
                name: "",
                last_name: "",
                email: "",
                password: "",
                role: "trainer",
                is_active: true,
                attendance: false
              }
            });}
            })
            .catch((err) => {
              toast.error(err.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              })
              console.error(err.message);
            });
      },
      handleChangeTrainer: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.trainer,
            [event.target.name]: event.target.value
          }
        });
      },
    }
  };
};
export default getState;
