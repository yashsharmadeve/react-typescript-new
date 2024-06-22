import { memo } from "react"


type PersonList = {
    names: {
        first: string,
        last: string
    }[]
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