type InputProps = React.ComponentProps<'input'>
const CustomInput = ({...rest}: InputProps) => {
  return <input {...rest} />
}

export default CustomInput