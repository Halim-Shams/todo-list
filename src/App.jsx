import {useState} from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {
	const [taskList, setTaskList] = useState([]);

	const onAddTask = (task) => {
		setTaskList((prevTasks) => {
			return [...prevTasks, task];
		});
	};

	return (
		<div className='flex flex-col gap-6 items-center text-3xl font-bold h-screen w-full py-2 bg-cover bg-[url("https://source.unsplash.com/random")]'>
			<AddTask onAddTask={onAddTask} />
			<TaskList taskList={taskList} />
		</div>
	);
}

export default App;
