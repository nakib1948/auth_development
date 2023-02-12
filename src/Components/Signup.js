 import React,{ useContext, useState} from 'react'
 import {Button,Card, Form} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import * as yup from 'yup';
import { UserContext } from '../App';
 export default function Signup() {

   const [loggedInUser,setLoggedInUser]=useContext(UserContext)
   const formik= useFormik({
        initialValues:{
          email:'',
          password:''
        },
        validationSchema:yup.object({
          email:yup.string().email().required(),
          password: yup.string().min(6,"password must have atleast 6 characters").required(),
        }),
        onSubmit:(values,{resetForm})=>{
          console.log(values)
          localStorage.setItem("userInfo", JSON.stringify(values))
          setLoggedInUser(values)
          resetForm({values:''})
        }
   })
  
  
   return (
     <>
      
      <Card style={{marginTop:'100px'}}>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign up</h2>
           
        
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id='email' name='email' type='email' onChange={formik.handleChange} value={formik.values.email} required/>
                  
                    {formik.errors.email && <span>{formik.errors.name}</span>}
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>password</Form.Label>
                    <Form.Control id='password' name='password' type='password'  onChange={formik.handleChange} value={formik.values.password}  required/>
                    
                    {formik.errors.password && <span>{formik.errors.password}</span>}
                </Form.Group>
             
                <Button className='w-100' type="submit" style={{marginTop:'12px'}}>Sign Up</Button>
            </Form>

        </Card.Body>
      </Card>


      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to={"/login"} style={{textDecoration:'none'}}>Log In</Link> 
      </div>
     
     </>
   )
 }
 