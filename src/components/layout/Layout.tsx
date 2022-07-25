import { Container } from '@mui/material'
import Head from 'next/head'
import { Nav } from './Nav'

type TProps = {
  children: React.ReactNode
  title: string
}

export const Layout = ({ children, title }: TProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Nav />
      </header>

      <main>
        <Container maxWidth='lg'>
          <div>{children}</div>
        </Container>
      </main>

      <footer>
        <br />
        <hr />
        <br />
      </footer>
    </div>
  )
}
