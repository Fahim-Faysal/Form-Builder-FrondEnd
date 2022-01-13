import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const GenerateForm = () => {
      const [info, setInfo] = useState({})
      const [form, setForm] = useState([]);

      const handleBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            setInfo(prev => {
                  return { ...prev, [field]: value }
            })
      }

      const handleSubmit = e => {
            e.preventDefault()
            const result = ({ ...info });
            console.log(result);
            fetch('http://localhost:4000/fdata', {
                  method: 'POST',
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(result)
            })
      }


      const handleText = () => {
            setForm([...form, <TextField onChange={handleBlur} style={{ width: '50%', margin: '10px' }} label="Text" name='text' variant="outlined" />])
      }
      const handleNumber = () => {
            setForm([...form, <TextField onChange={handleBlur} style={{ width: '50%', margin: '10px' }} label="Number" name='number' variant="outlined" />]);
      }
      const handleDate = () => {
            setForm([...form, <TextField onChange={handleBlur} style={{ width: '50%', margin: '10px' }} label="Date" name='date' variant="outlined" />]);
      }
      const handleArea = () => {
            setForm([...form, <TextField onChange={handleBlur} style={{ width: '50%', margin: '10px' }} label="TextArea" name='textArea' variant="outlined" />]);
      }
      return (
            <Container>
                  <Grid style={{ display: 'flex' }}>
                        <Grid style={{ margin: '15px' }} item xs={12} sm={12} md={6} lg={8}>
                              <TextField onChange={handleBlur} style={{ width: '50%' }} id="outlined-basic" label="Form Name" name='name' variant="outlined" />
                              {form.map((item, idx) => <Typography key={idx}>{item}</Typography>)}
                              <br />
                              <Button onClick={handleSubmit} style={{ backgroundColor: 'green', color: 'white', margin: '20px' }} variant="contained" >Generate</Button>


                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                              <Button onClick={() => handleText()} style={{ margin: '10px' }} variant="contained">Text</Button>
                              <br />
                              <Button onClick={handleNumber} style={{ margin: '10px' }} variant="contained">Number</Button>
                              <br />
                              <Button onClick={handleDate} style={{ margin: '10px' }} variant="contained">Date</Button>
                              <br />
                              <Button onClick={handleArea} style={{ margin: '10px' }} variant="contained">Texarea</Button>
                        </Grid>
                  </Grid>
            </Container>
      );
};

export default GenerateForm;