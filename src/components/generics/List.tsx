import { memo } from "react";

type ListProps<T> = {
  // items: string[] | number[]
  items: T[]
  // onClick: (value:string | number) => void
  onClick: (value: T) => void
}

const List = <T extends {first:string, last:string}>({ items, onClick }: ListProps<T>) => { // T extends {} this means the array can be object,number,string or anything
  // T extends string | number - we can write like this well
  console.log('rendering...');
  
  return (
    <div>
      <h2>List of items</h2>
      {items.map((el, i) => {
        return (
          <div key={i} onClick={() => onClick(el)}>{el.first} {el.last}</div>
        )
      })}
    </div>
  )
}

export default memo(List) 