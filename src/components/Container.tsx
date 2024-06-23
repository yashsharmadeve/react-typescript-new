type StyleProps = {
    styles: React.CSSProperties
}

const Container = (props: StyleProps) => {
  return (
    <div style={props.styles}>Container</div>
  )
}

export default Container