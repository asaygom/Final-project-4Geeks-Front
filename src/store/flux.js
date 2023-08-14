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
      },
      listOfEquipments: [],
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
      newUser: (nu) => {
        console.log(JSON.stringify(nu));
        fetch("http://localhost:5000/register", {
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

        console.log(store, fieldName);
      },
    },
  };
};

export default getState;
