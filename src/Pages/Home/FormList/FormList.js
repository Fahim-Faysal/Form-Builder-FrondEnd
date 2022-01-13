import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';

const FormList = (parmas) => {
      const { id } = useParams()
      console.log(id);
      const [fdata, setFdata] = React.useState([])

      React.useEffect(() => {
            fetch('http://localhost:4000/fdata')
                  .then(res => res.json())
                  .then(data => setFdata(data))
      }, [])

      return (
            <>
                  <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                              <TableHead>
                                    <TableRow>
                                          <TableCell align="center"><b>Name</b></TableCell>
                                          <TableCell align="left"><b>Action</b></TableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {fdata.map((row) => (
                                          <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >

                                                <TableCell align="center"><Link to={`/secondfrom/${row?._id}`} style={{ textDecoration: 'none', padding: '10px' }}>{row?.name}</Link></TableCell>
                                                <TableRow>

                                                      <TableCell align="left"><Link to={`/fromview`} style={{ backgroundColor: 'green', color: 'white', textDecoration: 'none', padding: '10px' }}>Reports</Link></TableCell>

                                                </TableRow>
                                          </TableRow>

                                    ))}
                              </TableBody>
                        </Table>
                  </TableContainer>

            </>
      );
};

export default FormList;