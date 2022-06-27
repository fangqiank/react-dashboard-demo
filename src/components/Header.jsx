import React from 'react'

export const Header = ({category, title}) => {
	return (
		<div className='mb-10'>
			<p className='text-lg text-gray-400'>{category}</p>
			<p className='tex-3xl font-extrabold tracking-tighter text-slate-900'>
				{title}
			</p>
		</div>
	)
}
