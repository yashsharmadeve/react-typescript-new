
type RandomNumberType = {
    value:number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RanNumProps = PositiveNumber | NegativeNumber | Zero

const RandomNumber = ({value,isPositive,isNegative,isZero}: RanNumProps) => {
  return (
    <div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
    </div>
  )
}

export default RandomNumber