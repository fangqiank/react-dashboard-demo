import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries,Legend} from '@syncfusion/ej2-react-charts'
import {ChartHeader} from '../../components/ChartHeader'
import {areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

export const Area = () => {
	const {currentMode} = useStateContext()

	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<ChartHeader 
				category='Area' 
				title='Inflation Rate in Percentage' 
			/>
			<div className='w-full'>
				<ChartComponent 
					id='charts' 
					primaryXAxis={areaPrimaryXAxis}
					primaryYAxis={areaPrimaryYAxis}
					chartArea={{border:{width:0}}}
					background={currentMode === 'dark' ? '#33373e' : '#fff'}
					legendSettings={{background: '#fff'}}
				>
					<SeriesCollectionDirective>
						{areaCustomSeries.map((item, ind) => (
							<SeriesDirective
								key={ind}
								{...item} 
							/>						
						))}
					</SeriesCollectionDirective>

					<Inject services={[SplineAreaSeries, DateTime, Legend]} />
				</ChartComponent>
			</div>
		</div>
	)
}
