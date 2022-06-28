import React from 'react'
import {KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban'
import {kanbanData, kanbanGrid} from '../data/dummy'
import {Header} from '../components/Header'

export const Kanban = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='App' title='Kanban' />
			<KanbanComponent
				id='kanban'
				keyField='Status'
				dataSource={kanbanData}
				cardSettings={{
					contentField: 'Summary',
					headerField: 'Id',
				}}
			>
				<ColumnsDirective>
					{kanbanGrid.map((item, ind) => (
						<ColumnDirective
							key={ind} 
							{...item}
						/>
					))}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	)
}
