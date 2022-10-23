import { Form, message } from 'antd'
import React, { useEffect, useState } from 'react'
import Input from 'antd/lib/input/Input'
import { Link, useNavigate } from "react-router-dom";
import "../Resources/authentication.css"
import axios from 'axios';
import Spinner from '../Components/spinner';

function Login() {
    const [loading , setloading]= useState(false)
    const navigate = useNavigate()
    const onFinish = async (Values) => {
        try {
            setloading(true)
            const response = await axios.post('/api/users/login', Values)
            localStorage.setItem('MoneyManager-users', JSON.stringify({...response.data , password:'' }))
            setloading(false)
            message.success('Login Successful')
            navigate('/')
        }
        catch (error) {
            setloading (false)
            message.error('Login Failed')
        }
    };
    useEffect(()=>{
        if(localStorage.getItem("MoneyManager-users")){
            navigate("/");
        }
    } , []); 
    return (
        <div className='register'>
          {loading && <Spinner/>}
            <div className="row justify-content-center align-items-center w-100 h-100">
                <div className="col-md-4">

                    <Form layout="vertical" onFinish={onFinish}>
                        <h1>LOGIN</h1>
                        
                        <Form.Item label="Email" name="email">

                           
                        <Input placeholder="Example : all.is.well@mail.com"/>

                        </Form.Item>
                        <Form.Item label="Password" name="password">

                           
                            <Input type="password"  placeholder="Your Password" />
                        </Form.Item>
                        <div className="d-flex justify-content-between align-content-center">
                            <Link to='/register'> Not yet registered , Click here to Register</Link>
                            <button className="secondary" type="submit">LOGIN</button>
                        </div>

                    </Form>
                </div>
                <div className="col-md-5">
                    <div className="lottie">
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_8gviyzwa.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </div>


    )

}
export default Login