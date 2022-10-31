import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {
	return (
		<div className='flex flex-col gap-6 items-center text-3xl font-bold h-screen w-full py-2'>
			<AddTask />
			<TaskList />
		</div>
	);
}

export default App;
