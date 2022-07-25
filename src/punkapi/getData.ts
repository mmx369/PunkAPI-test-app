export const getData = async (page: number, filter: string) => {
  const url =
    `https://api.punkapi.com/v2/beers?` +
    (filter ? `page=${page}&beer_name=${filter}` : `page=${page}`)
  const res = await fetch(url)
  return res.json()
}
