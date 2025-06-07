
import { useCount } from './context/UserContext';
import Nav from './components/Nav';
import Btn from './components/Btn';
function App() {

const { count} = useCount();
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Shubham Ashish {count}
        </h1>
       <Nav/>
      </div>
      <div>
        <Btn/>
      </div>
     
    </>
  )
}

export default App
