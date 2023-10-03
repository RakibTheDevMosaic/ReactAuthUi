import { Alert, Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'


const ResetPassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
      });
      const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualdata = {
          email:data.get('email'),
        }
        if(actualdata.email){
          document.getElementById('reset-form').reset()
          setError({status:true,msg:'Password Reset Email Sent. Please, Check Your Email !!',type:'success'})
        }
        else{
          setError({status:true,msg:'Please Provide a Valid Email',type:'error'})
        }
      }
      return (
        <>
         <Grid container justifyContent='center'>
          <Grid item sm={6} xs={12}>
            <h1> Reset Password </h1>
          <Box component='form' noValidate sx={{mt:1}} id='reset-form'onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'/>
            <Box textAlign='center'>
                <Button type='submit'variant='contained' sx={{mt:3,mb:2,px:5,py:1}}> Submit</Button>
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
export default ResetPassword
