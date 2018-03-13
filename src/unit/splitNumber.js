
let hash = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '0': 'zero',
}

export const numberToClass = (number) => {
  let classList = ['null','null','null','null','null','null']
  let numberArray = number.toString().split('').reverse()
  numberArray.forEach((item, index) => {
    classList[index] = hash[item]
  })
  return classList
}