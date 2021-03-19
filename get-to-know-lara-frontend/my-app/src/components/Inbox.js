import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

function Inbox() {

    const classes = useStyles();

    const [mails, setMails] = useState({})


    let result;
    const fetchUser = async () => {
        await fetch('http://localhost/get-to-know-lara/get-to-know-lara-backend/public/api/mail/inbox', {
            method : 'GET',
            headers : {
                 'Content-Type' : 'application/json',
                 'Accept' : 'application/json',
                 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
              
            },
        }) 
        .then((response) => {
            return result = response.json(); 
            
    })
        .then((data) => {
            setMails(data['mail'])
            localStorage.setItem("mail",JSON.stringify(data['mail']))
        })

    }

    useEffect(() => {
        fetchUser();
        if (localStorage.getItem("mail")){
          setMails(JSON.parse(localStorage.getItem("mail")))

      }
    }, [setMails])


  return (


     <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>subject</TableCell>
           <TableCell align="right">Message</TableCell>
           <TableCell align="right">Sent</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {Object.keys(mails).map(key => (
         
           <TableRow key={mails[key].subject}>
             <TableCell component="th" scope="row">
               {mails[key].subject}
             </TableCell>
             <TableCell align="right">{mails[key].message}</TableCell>
             <TableCell align="right">{mails[key].sent}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
  );
}

export default Inbox;