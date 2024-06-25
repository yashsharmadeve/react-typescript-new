
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string // if we want to restrict that children should be string only
}
& Omit<React.ComponentProps<'button'>,'children'> // without Omit is showing both string and React.Node so we have to use Omit to restrict to string only 
const CustomButton = ({variant,children,...rest}: ButtonProps) => {
  return (
    <button className={`with-${variant}`} {...rest}>{children}</button>
  )
}

export default CustomButton