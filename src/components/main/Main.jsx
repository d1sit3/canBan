import { Route, Routes } from 'react-router-dom'
import Card from '../card/Card'
import './main .css'
import TaskDetail from '../task/Task';
const Main = (props) =>{
    return(
        <main className='main'>
            <Routes>
                <Route exact path={'/'} element = {<Card {...props}/>}/>
                <Route path={'/tasks/:taskId'} element={<TaskDetail {...props}/>}/>
            </Routes>            
        </main>
    )
}
export default Main