import React from 'react'
import {ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'

import {scheduleData} from '../data/dummy'
import {Header} from '../components/Header'

export const Calendar = () => {
	const [scheduleObj, setScheduleObj] = React.useState(null)

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p1-0 bg-white rounded-3xl'>
			<Header category='App' title='Calendar' />
			<ScheduleComponent
			 height='650px'
			//  ref={schedule => setScheduleObj(schedule)}
			 selectedDate={new Date(2022, 1, 1)}
			 eventSettings={{dataSource: scheduleData}}
			//  dragStart={arg => arg.navigation.enable = true}
			>
				<ViewsDirective>
					{['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map(item => (
						<ViewDirective key={item} option={item}/>
					))}

				</ViewsDirective>
		
				<Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
			</ScheduleComponent>
		</div>
	)
}
