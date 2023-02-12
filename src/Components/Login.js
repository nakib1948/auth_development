import React, { useContext } from 'react'
import {Alert, Button,Card, Form} from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate= useNavigate()
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let ok=false;
    const onSubmit=(data)=>{
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if(userInfo.email===data.email && userInfo.password===data.password){
        setLoggedInUser(data)
        ok=true;
        if(ok)
        navigate('/dashboard')
        
        }
        else alert('email and password incorrect')
    }
  
  return (
    <Card style={{marginTop:'100px'}}>
    <Card.Body>
        <h2 className='text-center mb-4'>Login</h2>
       
    
        <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' {...register("email")} required/>

            </Form.Group>
            <Form.Group id='password'>
                <Form.Label>password</Form.Label>
                <Form.Control type='password' {...register("password")}  required/>
                
            </Form.Group>
         
            <Button className='w-100' type="submit" style={{marginTop:'12px'}}>Login</Button>
        </Form>

    </Card.Body>
  </Card>
  )
}
