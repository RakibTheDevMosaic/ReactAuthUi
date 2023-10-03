import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [error,setError] = useState({
    status:false,
    msg:'',
    type:''
  });
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualdata = {
      email:data.get('email'),
      password:data.get('password'),
    }
    if(actualdata.email && actualdata.password){
      document.getElementById('login-form').reset()
      setError({status:true,msg:'Login Successfully',type:'success'})
      navigate('/profile')
    }
    else{
      setError({status:true,msg:'All Fields are Required',type:'error'})
    }
  }
  return (
    <>
      <Box component='form' noValidate sx={{mt:1}} id='login-form'onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'/>
        <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'/>
        <Box textAlign='center'>
            <Button type='submit'variant='contained' sx={{mt:3,mb:2,px:5,py:1}}> Login</Button>
        </Box>
        <NavLink to='/resetpassword' >Forgot Password ?</NavLink>
        <Box sx={{textAlign:'center',mt:5}}>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
        </Box>
      </Box>
    </>
  )
}

export default UserLogin
