import React from 'react'
import {ChartsHeader} from '../../components/ChartsHeader'
import {Stacked} from '../../components/charts/Stacked'

export const Stacked = () => {
	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<ChartsHeader
				category='Stacked'
				title='Revenue Breakdown' 
			/>
			<div className="w-full">
				<Stacked />
			</div>
		</div>
	)
}
