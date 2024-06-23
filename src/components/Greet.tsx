import { memo } from "react";

type Props = { // use type while building applications and interface while using libraries
  name: string,
  messageCount?: number, // ? this means this is optional
  isLoggedIn: boolean
}

const Greet = (props: Props) => {

  const {messageCount = 0} = props

  console.log('rendered');
  
  return (
    <h2>
    {
      props.isLoggedIn ? 
      `Welcome ${props.name}!! You have ${messageCount} unread messages`
      : 'Welcome Guest'
    }
    </h2>
  )
}

export default memo(Greet)