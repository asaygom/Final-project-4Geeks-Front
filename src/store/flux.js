import { json } from "react-router-dom";

const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      user: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
        is_active: false, //para devolver la fecha al formato original:  new Date(suscription_date_number* 1000);
      },
      listOfUsers: [],
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

      newUser: (nu) => {
        console.log(JSON.stringify(nu));
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

        console.log(store, fieldName);
      },
    },
  };
};

export default getState;
