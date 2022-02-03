import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, TextField, Grid } from '@mui/material'


export default function Home() {
  return (
    <Container maxWidth='sm' >
      <Grid spacing={4}>
        <TextField fullWidth/>
      </Grid>
    </Container>
  )
}
