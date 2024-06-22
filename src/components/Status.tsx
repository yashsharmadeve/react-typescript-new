import { useEffect, useState } from "react";

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    const [message, setMessage] = useState<string>('');
    
  useEffect(() => {
    if (props.status === 'loading') {
      setMessage('Loading...');
    } else if (props.status === 'success') {
      setMessage('Data fetched successfully');
    } else if (props.status === 'error') {
      setMessage('Error fetching data');
    }
  }, [props.status]); 
  return (
    <div>Status is {message}</div>
  )
}

export default Status