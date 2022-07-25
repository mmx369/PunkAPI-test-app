import { Button, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './Search.module.scss'

type TProps = {
  handleSearch: (x: string) => void
}

export const Search = ({ handleSearch }: TProps) => {
  const [search, setSearch] = useState('')

  return (
    <div className={styles.root}>
      <FormControl sx={{ minWidth: '80%' }}>
        <TextField
          fullWidth
          placeholder='Search...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </FormControl>
      <Button
        variant='outlined'
        className={styles.btn}
        onClick={() => {
          handleSearch(search)
          setSearch('')
        }}
      >
        Search
      </Button>
    </div>
  )
}
