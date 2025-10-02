
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (


      <div>


      <Button 
         variant="secondary" 
         startIcon={<ShareIcon  size={"md"} /> }
        text="Share Brain" 
        size="md" 
        onClick={() => alert("Button clicked!")} 
        />

           <Button 
         variant="primary" 
         startIcon= {<PlusIcon  size={"md"}/>}
        text="Add content " 
        size="md" 
        onClick={() => alert("Button clicked!")} 
        />
          
    </div>

 
    
  )
}

export default App
