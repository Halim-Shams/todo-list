import React from 'react';

function AddTask() {
	return (
		<div className='w-6/12 flex items-end py-20 pt-36 justify-center mx-auto rounded-lg bg-yellow-100'>
			<form className='w-full text-center'>
				<input
					className='w-9/12 pb-1 text-center text-2xl bg-transparent text-gray-900 font-bold placeholder:font-extralight border-b-2 focus:border-yellow-200 outline-none'
					type='text'
					placeholder='What do you wanna do?'
				/>
			</form>
		</div>
	);
}

export default AddTask;
