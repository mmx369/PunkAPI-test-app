import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { CardBeer } from '../components/homepage/CardBeer'
import { Search } from '../components/homepage/Search'
import { Layout } from '../components/layout/Layout'
import { PaginationBeer } from '../components/PaginationBeer'
import { getAsString } from '../lib/getAsString'
import { getData } from '../punkapi/getData'
import { IBeer } from '../types/IBeer'

const Home = () => {
  const router = useRouter()

  const [page, setPage] = useState(
    parseInt(getAsString(router.query.page)) || 1
  )
  const [filter, setFilter] = useState('')
  const [totalPages, setTotalPages] = useState(13)

  const { data } = useQuery<IBeer[]>(
    ['beers', page, filter],
    () => getData(page, filter),
    {
      keepPreviousData: true,
    }
  )

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(getAsString(router.query.page)))
    }
  }, [router.query.page])

  useEffect(() => {
    if (data && data.length < 25) {
      setTotalPages(1)
    } else {
      setTotalPages(13)
    }
  }, [data])

  const handlePaginationChange = (_e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
    router.push(`?page=${value}`, undefined, { shallow: true })
  }

  const handleSearch = (f: string) => {
    setFilter(f)
  }

  return (
    <div>
      <Layout title='Bear Test App'>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={8} spacing={2}>
            <Grid item xs={12}>
              <Search handleSearch={handleSearch} />
            </Grid>
            <Grid item xs={12}>
              <PaginationBeer
                totalPages={totalPages}
                page={page}
                handlePaginationChange={handlePaginationChange}
              />
            </Grid>
            {data &&
              data?.map((beer) => (
                <Grid key={beer.id} item xs={12} sm={6} md={4}>
                  <CardBeer beer={beer} />
                </Grid>
              ))}
            <Grid item xs={12}>
              <PaginationBeer
                totalPages={totalPages}
                page={page}
                handlePaginationChange={handlePaginationChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}

export default Home
