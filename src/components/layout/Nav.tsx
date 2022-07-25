import { AppBar, Container, Toolbar } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link href='/'>
            <a>Bear Test App - Punk API</a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
