import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerFormControl } from "../../config"
import {useDispatch} from 'react-redux';
import CommonForm from "../../components/common/form"
import { registerUser } from "../../store/auth-slice";
const initialState ={
    userName:"",
    email:"",
    password:"",
}
export const Authregister=()=>{
    const [formData,setFormData]=useState(initialState);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const onSubmit=(event)=>{
        console.log(formData);
        event.preventDefault()
        dispatch(registerUser(formData))
  .then((data) => {
    if(data?.payload?.success){
        navigate('/auth/login')
    }
    })
  .catch((error) => {
    console.error(error);

  });


    }
    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
           <h1 className="text-3xl font-bold tracking-tight text-foreground  ">
           Create new account
            </h1> 
            <p className="mt-2">Already have an account</p>
            <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login'>Login</Link>
        </div>
        <CommonForm formControls={registerFormControl} buttonText={'Sign Up'}
        formData={formData} setFormData={setFormData} 
        onSubmit={onSubmit}/>
        </div>
    )
}