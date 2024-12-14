import { Button, Input } from '@chakra-ui/react'
import { useRef } from 'react'

const InputText = ({search}) => {

  const inputRef = useRef();

  return (

    <div className="input">
      <Input ref={inputRef} placeholder="Enter City Name" size='lg'/>
      <Button size="lg" colorScheme='blue' variant="outline" onClick={() => search(inputRef.current.value)}>Submit</Button>
    </div>
    
  )
}

export default InputText