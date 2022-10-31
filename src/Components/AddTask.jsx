import React, {useState} from 'react';

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
		<div className='w-6/12 flex items-end py-20 pt-36 justify-center mx-auto rounded-lg bg-yellow-100'>
			<form onSubmit={submitHandler} className='w-full text-center'>
				<input
					value={task}
					onChange={taskHandler}
					className='w-9/12 pb-1 text-center text-2xl bg-transparent text-gray-900 font-bold placeholder:font-extralight border-b-2 focus:border-yellow-200 outline-none'
					type='text'
					placeholder='What do you wanna do?'
				/>
			</form>
		</div>
	);
}

export default AddTask;
