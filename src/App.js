import './App.css';
import TodoList from './TodoList';

function App() {

  const data = [
    {
      name: 'H',
    },
    {
      name: 'L',
    }
  ]

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
      {
        data.map((item)=>{
          return (
            <div>{item.name}</div>
          )
        })
      }
    </div>
  );
}

export default App;
