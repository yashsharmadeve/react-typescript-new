type ListProps<T> = {
    // items: string[] | number[]
    items: T[]
    // onClick: (value:string | number) => void
    onClick: (value:T) => void
}

const List = <T extends {}>({items,onClick}: ListProps<T>) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((el,i)=>
            <div key={i} onClick={()=> onClick(el)}>{el}</div>
        )}
    </div>
  )
}

export default List 