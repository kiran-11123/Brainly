
import './App.css'
import { Button } from './components/ui/Button'

function App() {


  return (
    <div>

      <Button 
         variant="primary" 
         startIcon="+"
        text="abc" 
        size="md" 
        onClick={() => alert("Button clicked!")} 
        />
    </div>
  )
}

export default App
