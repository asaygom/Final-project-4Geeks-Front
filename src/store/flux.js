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
        subscription_date: ""
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
      token: null,
      listOfExercises: [],
      trainingPlanList: [],
      trainer: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        // role: "",
        is_active: true,
        attendance: false
      },
      listOfTrainers: []
    },
    actions: {
      getUsers: () => {
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfUsers: data.data }))
          .catch((error) => console.log(error));
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
            photo_link: "",
          }
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
      signupUser: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.user),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
        setStore({
          user:  {
            name: "",
            last_name: "",
            email: "",
            password: "",
            role: "",
            trainer_id: "",
            is_active: true,
            subscription_date: ""
          }
        })
      },
      handleChangeUser: (event) => {
        const store = getStore();
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
          body: JSON.stringify(store.user),
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
          user: {
            ...store.user,
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
          body: JSON.stringify(store.trainer),
        })
          .then((response) => response.json())
          .then((data) => {
            return (
              sessionStorage.setItem("token", data.access_token),
              sessionStorage.setItem("user", JSON.stringify(data.user)),
              setStore({
                token: data.access_token,
                trainer: data.user,
              }),
              console.log(store.trainer.name)
            );
          })
          .catch((error) => console.log(error));
      },
      handleChangeTrainerLogin: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.trainer,
            [event.target.name]: event.target.value,
          },
        });
      },
      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token, user: user });
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setStore({ token: null });
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
            setStore({ listOfExercises: data.data });
            console.log(data);
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },
      getTrainingPlan: () => {
        fetch("http://localhost:5000/trainigplan", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ trainingPlanList: data });
            console.log(data);
          })
          // .then(() => console.log()
          .catch((error) => console.log(error));
      },
      signupTrainer: (event) => {
        event.preventDefault();
        const store = getStore();
        fetch("http://localhost:5000/trainer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store.trainer),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
        setStore({
          trainer:  {
            name: "",
            last_name: "",
            email: "",
            password: "",
            // role: "",
            is_active: true,
            attendance: false
          }
        })
      },
      handleChangeTrainer: (event) => {
        const store = getStore();
        setStore({
          trainer: {
            ...store.trainer,
            [event.target.name]: event.target.value,
          }
        });
      }
    },
  };
};
export default getState;
