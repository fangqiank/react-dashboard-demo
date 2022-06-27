import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

export const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{color: currentColor, width: 2}}
			tooltipSettings={{
				visible: true,
				format: '${x} : data${y}',
				trackLineSettings:{visible:true}
			}}
			markerSettings={{
				visible: ['All'],
				size: 2.5,
				fill: currentColor,
			}}
			dataSource={data}
			xName='x'
			yName='y'
			type={type}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}
