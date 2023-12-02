import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

// option used in textfield

const currencies = [
    {
      value: 1,
      label: 1,
    }
];
let newCurrencies = [];
// for (let label = 1; label < 100; label++) {
//   newCurrencies.push(...currencies);
// }
// for (let value = 1; value < 100; value++) {
//   newCurrencies.push(...currencies);
// }


// option used many times with for loop

for (let i = 0; i < 150; i++) {
    const newCurrency = {
      value: currencies[0].value + i,
      label: currencies[0].label + i,
    };
    newCurrencies.push(newCurrency);
}

// starting the function

function Input() {

  //use state  use for 2 input field and other 2 
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState('')
    const [bmi,setBmi] = useState('')
    const [healthy,setHealthy] = useState('')

// to use dom attraction we use this function

let avgBmi = (e)=>{
    e.preventDefault()
    
    if(weight===0||height===0){
        alert('Please Enter the valid value ')
    }
    else{

      // BMI Formula
        let bmi =(weight/((height*0.0254)*(height*0.0254))) 
      // Used for precision
        setBmi(bmi.toFixed(1))

        if(bmi<18.5){
            setHealthy('You are Under Weight')
        }
        else if(bmi>=18.5 && bmi<=24.9){
            setHealthy('Your Weight is Normal ')
        }
        else{
            setHealthy('You are Over Weight')
        }

    }

}


// reload function is used to reload the page
let reload = () =>{
  window.location.reload()
}


  return (
    
    <div>
      {/*  this onsubmit is used to submit the dom attraction */}
        <form onSubmit={avgBmi}>

        <Stack spacing={2} direction="row">
      <div>
    
    {/*  First Test Field */}
        <TextField
          id="outlined-select-currency"
          select
          label="Weight(kg)"
          defaultValue='9'
          helperText="Please Enter Weight in kg"

          // Use state function on first text field

          value={weight} onChange={(e)=>{setWeight(e.target.value)}}
        >
        {/*  new currency is equal to repetition of loop */}

          {newCurrencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

{/* Second text field */}

<div>
        <TextField
          id="outlined-select-currency"
          select
          label="Height(inches)"
          defaultValue='9'
          helperText="Please Enter Height in inches"

          // Use state function on first text field

          value={height} onChange={(e)=>{setHeight(e.target.value)}}
        >

          {/*  new currency is equal to repetition of loop */}

          {newCurrencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

      </Stack>
 
      {/*  submit and reload button is used */}
      
      <Stack className='buttons' spacing={2} direction="row">
      <Button className='button' type='submit' variant="contained" color='success'>Submit</Button>
      <Button type='reload' onClick={reload} variant="contained" color='success'>Reload</Button>
      </Stack>
      
      <h3>Your BMI is: {bmi}</h3>
      <h3>{healthy}</h3>
      </form>
    </div>
  )
}

export default Input
