import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import AuthUser from './components/state/AuthUser'
import AuthUser2 from './components/state/AuthUser2'
import CounterReducer from './components/CounterReducer'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const [data,setData] = useState({})
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
     {/*2*/} <Person name={data} /> {/** object and import props from external file - use only when you have so much of types */}
     {/*3*/} <PersonList names={nameList} /> {/* array of object */}
     <button onClick={memValue}>Click Me {first}</button>
     {/*4*/} <Status status='error' /> {/* union of string or conditional string */}
     {/*5*/} <Heading>Hey Yash</Heading> {/* Children Props and destructuring */}
     {/*6*/} <Oscar><Heading>This is Component under component</Heading></Oscar> {/* React Component as Children Props and destructuring */}
     {/*7*/} <Button handleClick={(event,id)=>{console.log(event,id)}} /> {/* onClick Event Handler */}
     {/*8*/} <Input value='' handleChange={(e)=>console.log(e)} /> {/* onChange Event Handler */}
     {/*9*/} <Container styles={{display:'block',color:'red'}} /> {/* CSS Properties with proper validations */}
     {/*10*/} <AuthUser /> {/* UseState - future option -- more than two like string and null both that will change in future */}
     {/*11*/} <AuthUser2 /> {/* UseState - type assertion - like we initialize the value in beginning and it always be like it */}
     {/*12*/} <CounterReducer /> {/* UseState - type assertion - like we initialize the value in beginning and it always be like it */}
    </>
  )
}

export default App
