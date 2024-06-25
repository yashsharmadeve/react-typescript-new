import Greet from "../Greet"

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name} {/* using React.ComponentProps<typeof Greet - we can use propTypes of Greet> */}
    </div>
  )
}

export default CustomComponent