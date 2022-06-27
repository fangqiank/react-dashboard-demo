import React from 'react'
import {GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport,PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'

import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import {Header} from '../components/Header'

export const Orders = () => {
	const editing = {
		allowDeleting: true,
		allowEditing: true,
	}

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='page' title='Orders'/>
			<GridComponent
				id='gridGroup'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				contextMenuItems={contextMenuItems}
				editSettings={editing}
			>
				<ColumnsDirective>
					{ordersGrid.map((item, ind) => (
						<ColumnDirective 
							key={ind}
							{...item} 
						/>
					))}
				</ColumnsDirective>

				<Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
			</GridComponent>
		</div>
	)
}
