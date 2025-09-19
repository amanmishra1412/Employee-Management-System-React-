import React, { useState } from "react";

const Login = ({handleLogin}) => {

    // console.log(handleLogin);
    

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
        // console.log(`email is: ${email}`);
        // console.log(`pass is: ${pass}`);
        handleLogin(email, pass)
        setEmail('')
        setPass('')
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[#111] text-white">
            <div className="border-2 border-red-400 p-10 rounded-xl bg-[#1a1a1a]">
                <h2 className="text-center text-white mb-5 text-3xl">Login</h2>
                <form onSubmit={(e)=>{
                    sendForm(e)
                }} className="flex flex-col gap-4">
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} value={email} type="email" placeholder="Enter Your Email" className="outline-none bg-transparent border-[1px] border-white px-4 py-3 rounded-full text-white text-sm placeholder-white/70 focus:outline-none" required/>
                    <input onChange={(e)=>{
                        setPass(e.target.value);
                    }} value={pass} type="password" placeholder="Enter Your Password" className="outline-none bg-transparent border-[1px] border-white px-4 py-3 rounded-full text-white text-sm placeholder-white/70 focus:outline-none" required/>
                    <button type="submit" className="px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg transition" >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
