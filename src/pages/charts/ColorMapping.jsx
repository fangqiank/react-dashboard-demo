import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip,Legend, RangeColorSettingDirective, RangeColorSettingsDirective} from '@syncfusion/ej2-react-charts'

import {colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping} from '../../data/dummy'
import {ChartsHeader} from '../../components/ChartsHeader'
import { useStateContext } from '../../contexts/ContextProvider'

export const ColorMapping = () => {
	const {currentMode} = useStateContext()

	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<ChartsHeader 
				category="Color Mappping" 
				title="USA CLIMATE - WEATHER BY MONTH"
			/>
			<div className="w-full">
				<ChartComponent
					id='charts'
					primaryXAxis={ColorMappingPrimaryXAxis}
					primaryYAxis={ColorMappingPrimaryYAxis}
					chartArea={{border: {width: 0}}}
					legendSettings={{mode: 'Range', background: '#fff'}}
					tooltip={{enable: true}}
					background={currentMode === 'dark' ? '#33373e' : '#fff'}
				>
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={colorMappingData[0]}
							name="USA"
							xName='x'
							yName='y'
							type='Column'
							cornerRadius={{
								topLeft: 10,
								topRight: 10,
							}} 
						/>
					</SeriesCollectionDirective>

					<RangeColorSettingsDirective>
						{rangeColorMapping.map((item, ind) => (
							<RangeColorSettingDirective
								key={ind}
								{...item} 
							/>
						))}
					</RangeColorSettingsDirective>

					<Inject services={[ColumnSeries, Category, Tooltip, Legend]}/>
				</ChartComponent>
			</div>
		</div>
	)
}
