import { Box,TextField,Button,Alert } from '@mui/material'
import React, { useState } from 'react'

const ChangePass = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
      });
      const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualdata = {
          password:data.get('password'),
          confirm_password:data.get('passwordConfirmation')
        } 
        if(actualdata.password && actualdata.confirm_password){
            if (actualdata.password === actualdata.confirm_password){
                document.getElementById('changepass').reset()
                setError({status:true,msg:'Password Change Successfully !! Login Now',type:'success'})
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
      <Box sx={{display:'flex',flexDirection:'column',flexWrap:'wrap',maxWidth:600,mx:4}}>
        <h1>Change Password</h1>
      <Box component='form' noValidate sx={{mt:1}} id='changepass'onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password'/>
                <TextField margin='normal' required fullWidth id='passwordConfirmation' name='passwordConfirmation' label='Confirm New Password' type='password'/>
                <Box textAlign='center'>
                    <Button type='submit'variant='contained' sx={{mt:3,mb:2,px:5,py:1}}> Save</Button>
                </Box>
                <Box sx={{textAlign:'center',mt:5}}>
                </Box>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
              </Box>
      </Box>
    </>
  )
}

export default ChangePass
