import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SecondForm = (params) => {
      const { id } = useParams()
      const [fdata, setFdata] = React.useState([])
      const [info, setInfo] = useState({})
      const [success, setSuccess] = useState(false)
      const navigate = useNavigate()

      React.useEffect(() => {
            fetch(`http://localhost:4000/form/${id}`)
                  .then(res => res.json())
                  .then(data => setFdata(data))
      }, [])

      const hadleBlur = e => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            setInfo(prev => {
                  return { ...prev, [field]: value }
            })

      }

      const handleSubmit = e => {
            e.preventDefault()
            const result = { ...info }
            console.log(result);
            fetch('http://localhost:4000/finalform', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(result)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              setSuccess(true)
                        }
                  })
            navigate('/fromview')
      }

      return (
            <>
                  <form onSubmit={handleSubmit} style={{ margin: '50px' }} >
                        <Typography variant='h3'>{fdata?.name}</Typography>
                        <br />
                        <TextField
                              onBlur={hadleBlur}
                              style={{ width: '50%', marginTop: '20px' }}
                              label={fdata?.text}
                              type="text"
                              name='text'
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              variant="standard"
                        />
                        <br />
                        <TextField
                              onBlur={hadleBlur}
                              style={{ width: '50%', marginTop: '20px' }}
                              label={fdata?.number}
                              type="number"
                              name='number'
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              variant="standard"
                        />
                        <br />
                        <TextField
                              onBlur={hadleBlur}
                              style={{ width: '50%', marginTop: '20px' }}
                              label={fdata?.date}
                              type="date"
                              name='date'
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              variant="standard"
                        />
                        <br />
                        <TextField
                              onBlur={hadleBlur}
                              style={{ width: '50%', marginTop: '20px', marginBottom: '20px' }}
                              label={fdata?.textArea}
                              name='textArea'
                              multiline
                              rows={4}
                              variant="standard"
                        />
                        <br />
                        <Button variant="contained" type='submit'>Submit</Button>
                  </form>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {
                              success &&
                              <Alert style={{ width: '50%', display: 'flex', justifyContent: 'center' }} severity="success">Successfully Submitted!</Alert>
                        }
                  </div>
            </>
      );
};

export default SecondForm;