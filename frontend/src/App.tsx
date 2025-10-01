
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (
    <div className='flex  min-h-screen'>

      <div className='w-72 px-4 py-2 bg-white shadow-2xl  flex flex-col'>

        <div className='text-center font-sans font-bold text-xl'>

          Second Brain
          
        </div>

      </div>

      <div className='flex-1 flex  flex-col  p-4 bg-gray-100 shadow-xl '>

       
        <div className='flex items-center justify-between mt-5'>

          <div className='text-xl font-sans font-semibold'>
            All Notes
          </div>

          <div className='flex gap-2'>

      


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

      </div>

        <div className='flex-1'>

        </div>


    </div>

    </div>
    
  )
}

export default App
