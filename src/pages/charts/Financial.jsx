import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject, HiloSeries, Tooltip, DateTime,Zoom, Logarithmic, Crosshair} from '@syncfusion/ej2-react-charts'
import {financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import {ChartsHeader} from '../../components/ChartsHeader'

const baseDate = new Date('2017, 1, 1')

const filterValue = value => {
  if (value.x >= baseDate) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue)

export const Financial = () => {
	const {currentMode} = useStateContext()

	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<ChartsHeader
				category='Financial'
				title='PornHub Historical' 
			/>
			<div className="w-full">
				<ChartComponent
					id='charts'
					primaryXAxis={FinancialPrimaryXAxis}
					primaryYAxis={FinancialPrimaryYAxis}
					chartArea={{border: {width: 0}}} 
					tooltip={{enable: true, shared: true}}
					crosshair={{enable: true, lineType: 'Vertical', line:{width: 0}}}
					background={currentMode === 'dark' ? '#33373e' : '#fff'}
				>
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={returnValue}
							xName='x'
							yName='low'
							name='pornhub Inc'
							type='Hilo'
							low='low'
							high='high'
						/>
					</SeriesCollectionDirective>

					<Inject services={[HiloSeries, Tooltip, DateTime, Zoom, Logarithmic,Crosshair]}/>
				</ChartComponent>
			</div>
		</div>
	)
}
