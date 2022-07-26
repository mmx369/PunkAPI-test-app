import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { cutDiscription } from '../../lib/cutDisc'
import { IBeer } from '../../types/IBeer'

type TProps = {
  beer: IBeer
}

export const CardBeer = ({ beer }: TProps) => {
  if (!beer.image_url) {
    beer.image_url =
      'https://www.carlsberg.com/media/1298/card_regular_1883.jpg?anchor=center&mode=crop&width=480&height=630'
  }

  return (
    <div>
      <Link href='/details/[id]' as={`/details/${beer.id}`}>
        <a>
          <Card elevation={1} sx={{ height: '550px' }}>
            <CardHeader title={`${beer.name}`} subheader={beer.name} />
            <CardMedia title={beer.name}>
              <Image
                src={beer.image_url}
                width={200}
                height={200}
                objectFit='contain'
                alt={beer.name}
              />
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Name: <strong>{beer.name}</strong>
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Description: {cutDiscription(beer.description)}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </div>
  )
}
