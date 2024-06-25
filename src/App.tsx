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
import Private from './components/auth/Private'
import Profile from './components/auth/Profile'
import List from './components/generics/List'
import RandomNumber from './components/restriction/RandomNumber'
import Toast from './components/templateliterals/Toast'
import CustomButton from './components/html/Button'
import CustomInput from './components/html/Input'
import CustomComponent from './components/html/CustomComponent'
import Text from './components/polymorphic/Text'

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
     {/*13*/} <Private isLoggedIn={true} component={Profile} /> {/* Private Component - used for authentication in typescript React.ComponentType */}
     {/*14*/} <List items={nameList} onClick={(item)=>console.log(item)} /> {/* generics - means extends can take any type of datatype */}
     {/*15*/} <RandomNumber value={10} isPositive /> {/* Restricted Props - means make conditional */}
     {/*16*/} <Toast position='center' /> {/* Template Literals to many props as one and show as value and Exclude to make many as one */}
     {/*17*/} <CustomButton variant='primary' onClick={()=>console.log('clicked')}>My Button</CustomButton> {/* Wrapping HTML Element - use to pass Component Props so that we don't have to configure every props - used Omit, React.ComponentProps<''> */}
     {/*18*/} <CustomInput type='text' onChange={(e)=>console.log(e.target.value)} /> {/* Wrapping HTML Element - use to pass Component Props so that we don't have to configure every props */}
     {/*19*/} <CustomComponent isLoggedIn name='Yash' /> {/* Using React.ComponentProps<typeof otherComponent> - using this we can use the propTypes of other element */}
     {/*20*/} <Text as='h1' size='lg'>Label</Text> {/* Use Html element - with html element and their attribute */}
     {/*20*/} <Text as='p' size='md'>Label</Text> {/* Using React.ComponentProps<typeof otherComponent> - using this we can use the propTypes of other element */}
     {/*20*/} <Text as='label' htmlFor='yash' size='sm' color='primary'>Label</Text> {/* Using React.ComponentProps<typeof otherComponent> - using this we can use the propTypes of other element */}
    </>
  )
}

export default App
