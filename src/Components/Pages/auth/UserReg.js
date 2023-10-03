import { Alert, Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserReg = () => {
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
          first_name:data.get('firstName'),
          last_name:data.get('lastName'),
          email:data.get('email'),
          password:data.get('password'),
          confirm_password:data.get('passwordConfirmation'),
          tc:data.get('tc')
        }
        if(actualdata.first_name && actualdata.last_name && actualdata.email && actualdata.password && actualdata.tc !== null){
            if (actualdata.password === actualdata.confirm_password){
                document.getElementById('registration-form').reset()
                setError({status:true,msg:'Registration Successfully',type:'success'})
                navigate('/login')
            }
            else{
                setError({status:true,msg:"Password and Confirm Password are dosen't match",type:'error'})
            }
    }
        else{
          setError({status:true,msg:'All Fields are Required',type:'error'})
        }
      }
      return (
        <>
          <Box component='form' noValidate sx={{mt:1}} id='registration-form'onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='firstName' name='firstName' label='First Name'/>
            <TextField margin='normal' required fullWidth id='lastName' name='lastName' label='Last Name'/>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'/>
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'/>
            <TextField margin='normal' required fullWidth id='passwordConfirmation' name='passwordConfirmation' label='Confirm Password' type='password'/>
            <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc'/>} label='I agree to term and condition'/>
            <Box textAlign='center'>
                <Button type='submit'variant='contained' sx={{mt:3,mb:2,px:5,py:1}}> Sing Up</Button>
            </Box>
            <Box sx={{textAlign:'center',mt:5}}>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
            </Box>
          </Box>
        </>
      )
    }
    

export default UserReg
