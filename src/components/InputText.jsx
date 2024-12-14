import { Button, Input } from '@chakra-ui/react'

const InputText = () => {
  return (
    <div className="input">
      <Input placeholder="Enter City Name" size='lg'/>
      <Button size="lg" colorScheme='blue' variant="outline">Submit</Button>
    </div>
    
  )
}

export default InputText