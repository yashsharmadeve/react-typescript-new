type HorizonalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${VerticalPosition}-${HorizonalPosition}`,'center-center'> | 'center'
}

const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast Notification Postition - {position}</div>
  )
}

export default Toast