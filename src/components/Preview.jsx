import React from 'react'

export default function Preview({html}) {
  return (
	<div className='w-1/2 bg-gray-800 ml-1'>
		<div className='preview bg-transparent'>
		<div className='prose prose-invert' dangerouslySetInnerHTML={{__html: html}} />
		</div>
	</div>
  )
}
