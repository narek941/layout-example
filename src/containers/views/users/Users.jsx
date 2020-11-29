import React, {useState,useEffect} from 'react';
import {TextField, InputAdornment} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

const Users = () => {

  const [value, setValue] = useState('');
  const [username, setUsername] = useState({});

  useEffect(() => {
    const datas= fetch(`https://api.github.com/users/${value}`)
  .then(response => response.json())
  .then(data => console.log(data));

  setUsername(JSON.stringify(datas));
    console.log(username.login)
    },[value]);
    
  return(
    <>
      <TextField
        label="Search Users"
        size='medium'
        name='userSearch'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(ev)=>{
          setValue(ev.target.value)
        }}
        value={value}
      />
      <TextField value ={username}/>
    </>
  )
}
export default Users;