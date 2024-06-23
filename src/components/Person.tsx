import { memo } from "react";
import { PersonProp } from "./Person.types";

// type PersonProp = {
//     name: {
//         first: string,
//         last: string
//     }
// }
const Person = (props: PersonProp) => {
    
  console.log('rendered');
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default memo(Person)