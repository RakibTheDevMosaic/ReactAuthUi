import { Alert, Box, Button,Grid,TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordResetForm = () => {
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
          password:data.get('password'),
          confirm_password:data.get('passwordConfirmation')
        } 
        if(actualdata.password && actualdata.confirm_password){
            if (actualdata.password === actualdata.confirm_password){
                document.getElementById('reset-form').reset()
                setError({status:true,msg:'Password Reset Successfully !! Login Now',type:'success'})
                setTimeout(()=>{
                    navigate('/login')
                },3000)
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
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
              <h1> Reset Password </h1>
              <Box component='form' noValidate sx={{mt:1}} id='reset-form'onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'/>
                <TextField margin='normal' required fullWidth id='passwordConfirmation' name='passwordConfirmation' label='Confirm Password' type='password'/>
                <Box textAlign='center'>
                    <Button type='submit'variant='contained' sx={{mt:3,mb:2,px:5,py:1}}> Save</Button>
                </Box>
                <Box sx={{textAlign:'center',mt:5}}>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
                </Box>
              </Box>
            </Grid>
        </Grid>
        </>
      )
    }
 

export default PasswordResetForm
