export const cutDiscription = (disc: string) => {
  return disc.length >= 140 ? `${disc.slice(0, 140)}...` : disc
}
