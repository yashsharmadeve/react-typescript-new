type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {

    // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => { // we have to write same for the onChange value as well
    //     console.log(event.target.value);
    // }

  return <input value={props.value} onChange={(e)=>props.handleChange(e)} />
}

export default Input