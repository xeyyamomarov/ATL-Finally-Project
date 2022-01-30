import {TableBody,TableCell,Table as ATable,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip,Box,Avatar} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Table from 'components/Table/Table';
import { useSelector ,useDispatch} from 'react-redux';
import { getUsers } from 'store/Users/users.selectors';
import { USERS_ACTIONS } from 'store/Users';


  const style={
    fontSize:"18px",
    fontWeight:"bold",
    width:"100px"
  }
const Anniversary=()=>{
  const dispatch = useDispatch();
//  const { datas, thead } = useSelector(getUsers);
  const[isLoading,setIsLoading]=useState(false)
  const [anniversary,setAnniversary] = useState({})


  useEffect(()=>{
    axios(" http://localhost:3000/mainpage")
    .then(data => {
      setAnniversary(data.data.anniversary)
      console.log(data.data.anniversary);
    })
    .catch(err=>console.log(err))

  },[isLoading])

  console.log(anniversary);

 
  // useEffect(() => {
  //   dispatch(USERS_ACTIONS.fetchCards())
  // }, [dispatch])

    return(
    
      <Card sx={{marginBottom:2}}>
       <Card sx={{backgroundColor:"#F5F5F5",boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between",padding:0,height:"40px"}}>  
        <Typography  variant='h6' position="relative" top="5px" left="15px" color="black" gutterBottom>
         Qarşıdan gələn il dönümü
        </Typography>
        <Typography fontSize= "18px" position="relative" top="8px" right="15px"  gutterBottom>
          <Tooltip title="Refresh">
          <RefreshIcon sx={{cursor:"pointer"}} onClick={()=>{
            setIsLoading(!isLoading)
          }}/>
          </Tooltip>
        </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 ,marginBottom:2,boxShadow:"none"}}>
      <CardContent>
      {/* <TableContainer component={Paper}>
    </TableContainer>
      <TableContainer component={Paper}>
<ATable sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead sx={{background:"#F5F5F5"}}>
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
      {label.map(item=>{
        return(
          <TableCell style={style} key={item.id}>{item.label}</TableCell>
        )
      })}
    </TableRow>
  </TableHead>
  <TableBody>
    {anniversary.map((data) => (
      <TableRow
        key={data.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Avatar  sx={{marginRight:"10px"}}/>
           {data.name}
          </Box>
        </TableCell>
        <TableCell align="left">{data.year}</TableCell>
        <TableCell align="left">{data.date}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</ATable>
</TableContainer> */}
 <Table tbody={anniversary.tbody} thead={anniversary.thead} />
</CardContent>
  </Card>
  </Card>

    )
}
export default Anniversary