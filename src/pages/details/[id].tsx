import { Box, Button, Grid, Typography } from '@mui/material'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { IBeer } from '../../types/IBeer'
import styles from './[id].module.scss'

type TProps = {
  beer: IBeer
}

export default function ItemsDetails({ beer }: TProps) {
  const router = useRouter()

  if (!beer.image_url) {
    beer.image_url =
      'http://distribuzionemoderna-lemmon.softecspa.net/distribuzione-moderna/lemmon/media/images/files/31d3/50a3/-fef/1-43/59-8/b06-/c5ca/215a/e6d7/original/Immagine.png?1528983963'
  }

  return (
    <>
      <Layout title={`Bear Test App | ${beer.name}`}>
        <main className={styles.root}>
          <Button
            sx={{ margin: '5px' }}
            variant='outlined'
            color='primary'
            size='small'
            onClick={() => router.back()}
          >
            back
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <Box className={styles.img}>
                <Image
                  src={beer.image_url}
                  alt={beer.name}
                  width={300}
                  height={300}
                  objectFit='contain'
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography variant='h6'>{beer.name}</Typography>
                  <Typography variant='subtitle2'>Abv: {beer.abv}</Typography>
                  <Typography gutterBottom variant='subtitle2'>
                    {beer.tagline}
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    {beer.description}
                  </Typography>
                  <Typography variant='subtitle2'>
                    Food Pairing:
                    <ul style={{ padding: '0', margin: '0' }}>
                      {beer.food_pairing?.map((el, i) => (
                        <li key={i} style={{ listStyleType: 'none' }}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const beerId = ctx.params!.id as string

  const data = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)

  const [beer] = await data.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return { props: { beer } }
}
