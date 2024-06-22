import { memo } from "react";

type Props = { // use type while building applications and interface while using libraries
  name: string,
  messageCount?: number, // ? this means this is optional
  isLoggedIn: boolean
}

const Greet = (props: Props) => {
  console.log('rendered');
  
  return (
    <h2>
    {
      props.isLoggedIn ? 
      `Welcome ${props.name}!! You have ${props.messageCount ? props.messageCount : 0} unread messages`
      : 'Welcome Guest'
    }
    </h2>
  )
}

export default memo(Greet)