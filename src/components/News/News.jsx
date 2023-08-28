import React from 'react'
import './News.scss'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function News() {
  return (
    <div className='news'>
        <div className="news__header">
            Aktualności
        </div>
        <div className="news__box">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} md={4}>
                    <Item>1</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>4</Item>
                </Grid>
        </Grid>
        </Box>
        </div>
    </div>
  )
}
