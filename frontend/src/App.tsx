
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import Card from './components/Card'

function App() {


  return (


      <div className='p-4'>


   <div className='flex justify-end  gap-4'>



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

          <div className='flex  gap-4 '>
            
            
        <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First Tweet"/>    
         </div>
        
          
    </div>



 
    
  )
}

export default App
