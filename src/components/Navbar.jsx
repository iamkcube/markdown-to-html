import React from 'react'

export default function Navbar({downloadFile,saveProgress}) {
  return (
	<div className="flex justify-between px-4 py-2 bg-gray-600">
		<h1 className='font-bold text-3xl'>Markdown</h1>
		<div className="flex gap-4">
			<button className='bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-600' onClick={downloadFile}>Download</button>
			<button className='bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-600' onClick={saveProgress}>Save</button>
		</div>
	</div>
  )
}
// import React from •react
// export const NavBar = () {
// return (
// <div className='f1ex justify-between px-4 py-2 Obg-gray-6ØØ'
// classNmez •text-2x1 tracking-widest •text-white •
// (div flex •text-white" >
// <button Z bg-orange-6øø p-2 mr-2 rounded-md Ohover:bg-orange-seø'
// (button cLassNme=• 'bg-orange-6øø p-2 rounded-nø O hover:bg-orange-wø•
// export default Navbar;