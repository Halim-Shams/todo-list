import React from 'react';
import tw from 'tailwind-styled-components';

function TaskList(props) {
	return (
		<div className='w-5/12'>
			<ul className='px-28 text-lg font-normal flex flex-col gap-2 uppercase'>
				{props.taskList.map((task) => (
					<Li>{task}</Li>
				))}
			</ul>
		</div>
	);
}

const Li = tw.li`
border px-4 py-1 text-gray-800 bg-yellow-100/30 border-yellow-500/40 border-x-0
`;

export default TaskList;
