import React from 'react'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

export const NavButton = ({title, customFunc, icon, color, dotColor}) => {
	return (
		<TooltipComponent content={title} position='BottomCenter'>
			<button
				type='button'
				style={{color: color}}
				className='relative text-xl rounded-full p-3 hover:bg-light-gray'
				onClick={() => customFunc()}
			>
				<span
					style={{background: dotColor}}
					className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
				>
					{icon}
				</span>
			</button>
		</TooltipComponent>
	)
}
