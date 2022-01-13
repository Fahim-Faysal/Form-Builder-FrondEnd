import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const FormView = () => {
      const [final, setFinal] = useState([])

      useEffect(() => {
            fetch('http://localhost:4000/finalform')
                  .then(res => res.json())
                  .then(data => setFinal(data))
      }, [final])
      return (
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                              <TableRow>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Ammount</TableCell>
                                    <TableCell align="right">Made At</TableCell>
                                    <TableCell align="right">About</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {final.map((row) => (
                                    <TableRow
                                          key={row?._id}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                          <TableCell align="right">
                                                {row?.text}
                                          </TableCell>
                                          <TableCell align="right">{row?.number}</TableCell>
                                          <TableCell align="right">{row?.date}</TableCell>
                                          <TableCell align="right">{row?.textArea}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );

};

export default FormView;