import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';



export default function Search(props) {

const [text, setText] = useState('')

const inputText = (e) => {
  setText(e.target.value)
  props.searchText(text)

}



const checkKey = (e) => {
  if (e.key === 'Backspace') {
    props.allData()
  }
}

const style = {
  searchicon: {color: '#7c5fe9'}
}



  return (
    <div>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Szukaj wyjazdu"
        inputProps={{ 'aria-label': 'search trips' }}
        value={text}
        onKeyDown={checkKey}
        onChange={inputText}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
      style={style.searchicon}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

    </Paper>
    </div>
  )
}
