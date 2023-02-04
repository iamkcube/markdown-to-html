import React from 'react'

export default function Markdown({markdown, handleChange})
{
	function handleTyping(event)
	{
		handleChange(event.target.value)
	}
	return (

		<div className='bg-gray-800 w-1/2 text-white text-lg'>
			<textarea className='w-full bg-transparent h-screen outline-none' onChange={handleTyping} value = {markdown}/>
		</div>
	)
}
