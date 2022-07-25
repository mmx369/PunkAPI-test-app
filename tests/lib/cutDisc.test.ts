import { cutDiscription } from '../../src/lib/cutDisc'

describe('cutDisc function test', () => {
  it('Should return a string equal to 143 symbols if argument has more then 140 symbols', () => {
    const dummyStr =
      'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.'
    const result = cutDiscription(dummyStr)
    expect(result.length).toEqual(143)
  })

  it('Should return the same string if argument has less then 140 symbols', () => {
    const dummyStr = 'A titillating, neurotic'
    const result = cutDiscription(dummyStr)
    expect(result).toEqual(dummyStr)
  })
})
