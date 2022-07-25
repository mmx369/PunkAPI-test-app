import { Pagination } from '@mui/material'
import { ChangeEvent } from 'react'

type TProps = {
  totalPages: number
  page: number
  handlePaginationChange: (e: ChangeEvent<unknown>, value: number) => void
}

export const PaginationBeer = ({
  totalPages,
  page,
  handlePaginationChange,
}: TProps) => {
  return (
    <div>
      <Pagination
        count={totalPages}
        variant='outlined'
        color='primary'
        className='pagination'
        page={page}
        onChange={handlePaginationChange}
      />
    </div>
  )
}
