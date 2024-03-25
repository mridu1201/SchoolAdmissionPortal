import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons"; 
import api from "../../services/axiosInstances";
import API_ENDPOINTS from "../../services/axiosEndpoints";
import { useStates } from "../../services/States";

export default function EditUser() {
    let navigate = useNavigate();
    const uid=localStorage.getItem('userId');
  
    // const [user, setUser] = useState({
    //   firstname:"",
    //   lastname:"",
    //   email:"",
    //   age:"",
    // });
  
    // const { firstname,lastname,email,age } = user;
    const {
        setEmail,
        setFirstname,
        setLastname,
        setAge,
        onEdit,
        loadUser,
      } = useStates();
  
    // const onInputChange = (e) => {
    //   setUser({ ...user, [e.target.name]: e.target.value });
    // };
  
    useEffect(()=>{
        loadUser();
    },[])




  
    return (
    //   
    <>
    <main className="body2">
  <Link to='/profile'><ArrowLeftOutlined className="back-icon"/></Link>
  <form className="food-form" onSubmit={onEdit}>
    <h1>👤</h1> <br />
    <input type="text" 
    placeholder="First Name" 
    name='firstname'
    onChange={(e)=>setFirstname(e.target.value)}
    />
    <br/>
    <input type="text" 
    placeholder="Last Name" 
    name='lastname'
    onChange={(e)=>setLastname(e.target.value)}
    />
    
    <br />
    <input type="text" 
    placeholder="Email" 
    name='lastname'
    onChange={(e)=>setEmail(e.target.value)}
    />
    <br />
    <input type="text" 
    placeholder="Age" 
    name='lastname'
    onChange={(e)=>setAge(e.target.value)}
    />
    <input type="submit" defaultValue="Submit" id="submit" />
  </form>
</main>

    </>
   
  
    );
  }
  