import React, { createContext, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';
import api from './axiosInstances';
import API_ENDPOINTS from './axiosEndpoints';

const StatesContext = createContext();

export const States = ({ children }) => {

  const dispatch=useDispatch();

  //Register page
  const[userdetails,setUserDetails]=useState(
    {
      email:"",
      firstname:"",
      lastname:"",
      age:"",
      password:"",
    }
  );
  const[logindata,setLogindata]=useState({
    email:"",
    firstname:"",
    lastname:"",
    age:"",
    password:"",
  })


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState(0);
  const [pwderror, setPwderror] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  // Signup
  const SignUp = (uid) => {
    api
      .post(API_ENDPOINTS.SIGNUP, {
        uid:uid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        age: age,
        role:'STUDENT',
      })
      .then((res) => {
        
        let err=res.data;
        setUserDetails(res.data);
        console.log(res.data);
        if(err==='Sommething went wrong!'){
          toast.error("Account already exists")
        }
        dispatch(login({
          email :email,
          firstname: firstname,
          lastname: lastname,
          age: age
        }))        
      });      
      // Navigation
      // navigate('/home');
    };

    const handleSignin = (e) => {
      setLogindata({ ...logindata, [e.target.uid]: e.target.value })
    }
  
    
    
      // SignIn
      const SignIn = (e) => {
        e.preventDefault();      

        api
          .post(API_ENDPOINTS.LOGIN, { email, password })
          .then((res) => {

            const { token, uid, role} = res.data;
      
            localStorage.setItem('token', token);
            localStorage.setItem('userId', uid);
            localStorage.setItem('role', role);
            
            
            if (token && role==='STUDENT') {
              setError('');
              toast.success('Login Successful');
              // getRoleByUid(uid);
                     
              dispatch(login({ email }));
      
           
              navigate('/home');
            } else if(token && role==='ADMIN'){
              setError('');
              toast.success('Login Successful');
              // getRoleByUid(uid);
                     
              dispatch(login({ email }));
      
           
              navigate('/admin/dashboard');
            }else{

              setError('*Invalid Email id or Password');
            }
      
            console.log('Email:', email);
            console.log('password:', password);
          })
          .catch((error) => {
            setError('*An error occurred while logging in');
          });
      };

    //password
    const validatePassword = (password) => {
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    
      if (password.length < minLength) {
        return false;
      }
    
      if (!uppercaseRegex.test(password)) {
        return false;
      }
    
      if (!specialCharRegex.test(password)) {
        return false;
      }
    
      return true;
    };
    
    const pwdmatch = (e) => {
      e.preventDefault(e);
      if (validatePassword(password)&&password === confirmPassword) {
        SignUp();
        toast.success('Account Successfully Created');
      } else if (!((password === confirmPassword))) {
        
        toast.error('Please enter the same password');
      }else if(!(validatePassword(password)))
      {
        setPwderror('*Make sure that there are 8 characters, 1 uppercase letter, 1 speacial character')
      }
    };

    const onEdit = async (e) => {
      const uid=localStorage.getItem('userId');
      e.preventDefault();
      api
      .put(API_ENDPOINTS.EDIT_PROFILE+`/${uid}`, {
        firstname:firstname,
        lastname:lastname,
        email:email,
        age:age,
      });
      navigate("/profile");
    };
const[user,setUser]=useState()
    const loadUser =async()=>{
      const uid=localStorage.getItem('userId');
      const result =await 
      api
      .get(API_ENDPOINTS.PROFILE+`/${uid}`);
      setUser(result.data);
  }

  //Navigation
  const gotoLogin = () => {
    navigate('/login');
  };

  const gotoHomePage = () => {
    navigate('/home');
  };



  //Application

  const[name,setName]=useState("");
  const[fathername,setFathername]=useState("");
  const[mothername,setMothername]=useState("");
  const[mobile,setMobile]=useState("");
  const[dob,setDob]=useState("");
  const[aadhar,setAadhar]=useState("");
  const[emis,setEmis]=useState("");
  const[occupation,setOccupation]=useState("");
  const[address,setAddress]=useState("");
  const[parentemail,setParentemail]=useState("");
  const[gender,setGender]=useState("");
  const[application,setApplication] = useState("");
  const uid = localStorage.getItem('userId');
  const ApplicationSubmit = (e) => {
    e.preventDefault();

    api.post(API_ENDPOINTS.SUBMIT_APPLICATION+`${uid}`, {
        name: name,
        fathername:fathername,
        mothername:mothername,
        mobile: mobile,
        dob:dob,
        aadhar:aadhar,
        emis:emis,
        occupation:occupation,
        address:address,
        parentemail:parentemail,
        gender:gender,
      })
      .then((res) => {
        setApplication(res.data);
          console.log(res.data);
          toast.success("Application Successfully Submitted")
          navigate('/payment');
      })
      .catch((error) => {
        console.error(error);
        toast.error("Application already submitted");
      });
  };


  //Payment  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();


    api
      .post(API_ENDPOINTS.PAYMENT_STATUS+`${application.aid}`)
      .then((response) => {
        
        alert('Payment successful');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
      });
  };


  //Interview Scheduling
  // const[interviewDate,setInterviewDate]=useState();
  // const[interviewTime,setInterviewTime]=useState();
  // const handleInterview=(e)=>{
  //   e.preventDefault();

  //   api.post(API_ENDPOINTS.SCHEDULE_INTERVIEW);

  // }

  
  

  return (
    <div>
      <Toaster />
      <StatesContext.Provider
        value={{
          firstname,
          setFirstname,
          lastname,
          setLastname,
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
          age,
          setAge,
          SignUp,
          navigate,
          gotoLogin,
          gotoHomePage,
          pwdmatch,
          pwderror,
          setPwderror,
          error,
          setError,
          SignIn,
          handleSignin,
          onEdit,
          loadUser,
          name,
          fathername,
          mothername,
          mobile,
          gender,
          occupation,
          aadhar,
          emis,
          dob,
          address,
          parentemail,
          setName,
          setFathername,
          setMothername,
          setMobile,
          setGender,
          setOccupation,
          setAadhar,
          setEmis,
          setDob,
          setAddress,
          setParentemail,   
          ApplicationSubmit,
          handlePaymentSubmit,
          userdetails,
          setUserDetails,
          // logindata,
          // setLogindata,
          // SignUpDetails,
        }}
      >
        {children}
      </StatesContext.Provider>
    </div>
  );
};



export const useStates = () => useContext(StatesContext);
// export default connect(mapStateToProps, mapDispatchToProps)(States);
