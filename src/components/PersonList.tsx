import { memo } from "react"
import { Name } from "./Person.types"

// First Method
// type PersonList = {
//     names: {
//         first: string,
//         last: string
//     }[]
// }

// Second Method 
type PersonList = {
    names: Name[] // using Name from import
}

const PersonList = (props: PersonList) => {
  return (
    <div>
        {
            props.names.map((item,i)=>
                <h2 key={i}>{item.first} {item.last}</h2>
            )
        }
    </div>
  )
}

export default memo(PersonList)