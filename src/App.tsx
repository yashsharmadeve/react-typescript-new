import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const [data,setData] = useState<{first: string,last: string}>({})
  useEffect(()=>{
    // personName
    setData(personName)
  },[])

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Pricess',
      last: 'Diana'
    }
  ]

  const [first, setfirst] = useState<number>(0)

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/products').then(res => res.json()).then(res=>console.log(res))
  // },[])
  // function handleClick(num:number){
  //   return num*3;
  // }
  // const memValue = useMemo(()=>handleClick(first),[first])
  const memValue = useCallback(()=> {
    setfirst(first+1);
  },[first])

  return (
    <>
     {/*1*/} <Greet name='Yash' messageCount={5} isLoggedIn={true} /> {/** string,number,boolean */}
     {/*2*/} <Person name={data} /> {/** object*/}
     {/*3*/} <PersonList names={nameList} /> {/* array of object */}
     <button onClick={memValue}>Click Me {first}</button>
     {/*4*/} <Status status='error' /> {/* union of string or conditional string */}
     {/*5*/} <Heading>Hey Yash</Heading> {/* Children Props and destructuring */}
    </>
  )
}

export default App
