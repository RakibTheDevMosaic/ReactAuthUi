import { Button, CssBaseline, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ChangePass from "./auth/ChangePass";


const Profile = () => {
    const navigate = useNavigate();
    const handlelogout = ()=>{
        navigate('/login')
    }
  return (
    <>
      <CssBaseline/>
      <Grid container>
        <Grid item sm={4} sx={{backgroundColor:'gray',p:5,color:"white"}}>
            <h1>Welcome! Rakib </h1>
            <Typography variant="h5" sx={{fontWeight:'bold'}}>Name: Rakib </Typography>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>Email: RakibTheDevMosaic@gmail.com</Typography>
            <Button variant="contained" color="error" size="large" onClick={handlelogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm={8}>
            <ChangePass/>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile
