import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';

function App() {

  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)
  const count = tasks.filter((task) => task.status === 'backlog').length;
  const count1 = tasks.filter((task) => task.status === 'done').length;
    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer count={count} count1={count1} />
    </div>
    </BrowserRouter>
  );
}


export default App