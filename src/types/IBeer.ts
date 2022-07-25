export interface IBeer {
  id: number
  image_url: string
  name: string
  description: string
  tagline?: string
  abv?: number
  food_pairing?: string[]
}
