
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {


  return (
    <div>

      <Button 
         variant="primary" 
         startIcon= {<PlusIcon  size={"md"}/>}
        text="Add content " 
        size="md" 
        onClick={() => alert("Button clicked!")} 
        />


            <Button 
         variant="secondary" 
         startIcon="*"
        text="Share " 
        size="md" 
        onClick={() => alert("Button clicked!")} 
        />

    </div>
    
  )
}

export default App
