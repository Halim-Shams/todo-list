import React, {useState} from 'react';
import Clock from './Clock';

function AddTask(props) {
	const [task, setTask] = useState('');

	const taskHandler = (e) => {
		setTask(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setTask('');
		props.onAddTask(task);
		console.log(task);
	};

	return (
		<div className='w-6/12 flex flex-col gap-28 items-center py-[4.5rem] pt-12 justify-center mx-auto rounded-lg bg-yellow-200/20'>
			<Clock />
			<form onSubmit={submitHandler} className='w-full text-center'>
				<input
					value={task}
					onChange={taskHandler}
					className='w-9/12 pb-1 text-center text-3xl bg-transparent text-gray-900/80 font-bold placeholder:font-extralight border-b border-yellow-300/30 focus:border-b-2 focus:border-yellow-300/70 outline-none'
					type='text'
					placeholder='What do you wanna do?'
				/>
			</form>
		</div>
	);
}

export default AddTask;
