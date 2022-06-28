import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/dummy'
import { Header } from '../components/Header'

export const Customers = () => {
	const selectionSettings = {persistSelection: true}
	const toolbarOptions = ['Delete']
	const editing = {
		allowDeleting: true,
		allowEditing: true,
	}
	return (
		<div className='m-2 md:m-10 mt-24 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Customer'/>

			<GridComponent
				dataSource={customersData}
				enableHover={false}
				allowPaging
				pageSettings={{pageSize: 5}}
				selectionSettings={selectionSettings}
				toolbar={toolbarOptions}
				editSettings={editing}
				allowSorting
			>
				<ColumnsDirective>
					{customersGrid.map((item, ind) => (
						<ColumnDirective
							key={ind}
							{...item} 
						/>
					))}
				</ColumnsDirective>

				<Inject services={[Page, Sort, Filter, Selection, Edit, Toolbar, Edit]}/>
			</GridComponent>
		</div>
	)
}
