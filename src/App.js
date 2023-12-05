// import { useFormik } from 'formik';
// import './App.css';
// import * as yup from "yup";

// function App() {

//   const formik = useFormik({
//     initialValues : {
//       name :"",
//       email :"",
//       contactNo :"",
//       interestedArea :"",
//       qualification: "",
//       gender :""
//     },
//     onSubmit : (valuesofformik,event) => {
//       event.preventDefault();
//        return console.log(valuesofformik);

//     },
//     validationSchema : yup.object({  // For validation we use validation schema !!!
//        name: yup.string().required("enter your name please!"),
//        email: yup.string().email().required("please enter your email"),
//        contactNo: yup.string().max(10,"please enter up to 10 numbers").required("please enter your contactNo."),
//        interestedArea: yup.string().required("please enter your interseted area"),
//        qualification: yup.string().required("please enter your qualification"),
//        gender: yup.string().required("please enter your gender")

//     })
//   })
//   return (
//     <div >
//       <h3 >Join Our Team At SKDEV </h3>
//       <form onSubmit={formik.handleSubmit} >
//         <input
//         type='text'
//         name='name'
//         onChange={formik.handleChange}
//         value={formik.values.name} // for controlled components using valuses!!!
//         placeholder='Name'
//         onBlur={formik.handleBlur}
//           />
//           { formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
//           <input
//         type='text'
//         name='email'
//         onChange={formik.handleChange}
//         value={formik.values.email}
//         placeholder='Email'
//         onBlur={formik.handleBlur}
//           />
//           { formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
//           <input
//         type='text'
//         name='contactNo'
//         onChange={formik.handleChange}
//         value={formik.values.contactNo}
//         placeholder='ContactNo'
//         onBlur={formik.handleBlur}
//           />
//           { formik.touched.contactNo && formik.errors.contactNo && <p style={{color:"red"}}>{formik.errors.contactNo}</p>}
//           <input
//         type='text'
//         name='interestedArea'
//         onChange={formik.handleChange}
//         value={formik.values.interestedArea}
//         placeholder='Interserted Area'
//         onBlur={formik.handleBlur}
//           />
//           { formik.touched.interestedArea && formik.errors.interestedArea && <p style={{color:"red"}}>{formik.errors.interestedArea}</p>}
//           <input
//         type='text'
//         name='qualification'
//         onChange={formik.handleChange}
//         value={formik.values.qualification}
//         placeholder='Qualification'
//         onBlur={formik.handleBlur}
//           />
//           { formik.touched.qualification && formik.errors.qualification && <p style={{color:"red"}}>{formik.errors.qualification}</p>}

//           <button   type='submit'>submit</button>

//       </form>
//     </div>
//   );
// }

// export default App;

// 2 ..... Todo project using chai aur react!!!

// import React from "react";
// import { useState, useEffect } from "react";
// import { TodoProvider } from "./contexttodoproject";
// import { Todoform, Todoitems } from "./contexttodoproject/component";

// const App = () => {
//   const [todos, settodos] = useState([]);

//   const addTodo = (todo) => {
//     settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const updateTodo = (id, todo) => {
//     settodos((prev) =>
//       prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
//     );
//   };

//   const deleteTodo = (id) => {
//     settodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const togglecomplete = (id) => {
//     settodos((prev) =>
//       prev.map((prevtodo) =>
//         prevtodo.id === id
//           ? { ...prevtodo, completed: !prevtodo.completed }
//           : prevtodo
//       )
//     );
//   };

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos")); //here we  use local storage to get items from local storage and we use JSON.parse because in local storage all values are placed in stringds formate !!

//     if(todos && todos.length > 0) {
//      settodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//    localStorage.setItem("todos",JSON.stringify(todos))
//    console.log(todos);
//   }, [todos])

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, togglecomplete }}
//     >
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//         <h3 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todo</h3>
//         <div className="mb-4">
//         <Todoform />
//         </div>
//         <div className="flex flex-wrap gap-y-3">
//           {todos.map((todo) => (
//             <div className= "w-full" key = {todo.id}>
//             <Todoitems todo={todo} />
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// };

// export default App;

// 3.... Weather project using react !!!!!!!!

import axios from "axios";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { citiesname } from "./weatherProject/Autocomplete";


const App = () => {
  const Apikey = "f57529452525f50869155094a91ea50c";

  // const [inputcityname, setinputcityname] = useState("");
  const [inputValue, setInputValue] = React.useState('');
  const [data, setdata] = useState({});

  // `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=f57529452525f50869155094a91ea50c`

  const findweather = (cityname) => {
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}&&units=metric`;
    axios.get(ApiUrl).then((res) => {
      setdata({
        ...data,
        Temp: res.data.main.temp,
        Humidity: res.data.main.humidity,
        name: res.data.name,
      });
    });
  };

  const handleSearch = () => {
    findweather(inputValue);
   
  };
  // const handleChange = (event,selectedvalue) => {
  //    setinputcityname(selectedvalue)
     
  // }

  return (
    <div>
      <div>
        {/* <input placeholder='enter your city' onChange={(e) => setinputcityname(e.target.value) } value={inputcityname} /> */}
        <Autocomplete
          id="combo-box-demo"
          options={citiesname.map((option) => option.label )}
          freeSolo
          disableClearable
          // getOptionLabel={(option) => option.label }
          inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="city" color="secondary" 
            />
          )}
        //  onChange={handleChange}
        //  value={(inputcityname.label)}
        />

        <Button
          variant="outlined"
          size="small"
          color="secondary"
          startIcon={<Search fontSize="small" />}
          onClick={handleSearch}
        >
          Search
        </Button>
        {/* <IconButton variant = 'outlined' aria-label='Search' color='secondary'> <SearchOutlined /> </IconButton> */}

        <div>
          <h1>{data.name}</h1>
          <p>Temp : {data.Temp} .C</p>
          <p>Huminidity : {data.Humidity}</p>
          <p>{inputValue}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
