import { useState } from "react"
import { Link } from "react-router-dom"
import CommonForm from "../../components/common/form"
const initialState ={
    email:"",
    password:"",
}
export const AuthLogin=()=>{
    const [formData,setFormData]=useState(initialState);
    const onSubmit=()=>{
        console.log(formData);
    }
    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
           <h1 className="text-3xl font-bold tracking-tight text-foreground  ">
           Sign in to your account
            </h1> 
            <p className="mt-2">Don't have an account</p>
            <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/register'>Login</Link>
        </div>
        <CommonForm formControls={loginFormControl} buttonText={'Sign In'}
        formData={formData} setFormData={setFormData} 
        onSubmit={onSubmit}/>
        </div>
    )
}

export const loginFormControl=[
    {
        name:"email",
        label:  "Email",
        placeholder: "Enter your your email",
        componentType:"input",
        type:"email",
    },
    {
        name:"password",
        label:  "Password",
        placeholder: "Enter your password",
        componentType:"input",
        type:"password",
    },
    
]