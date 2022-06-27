import React from 'react'
import {dropdownData} from '../data/dummy'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'

export const DropDown = ({currentMode}) => {
	return (
		<div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
			<DropDownListComponent 
				id="time" 
				fields={{text: 'Time', value: 'Id'}}
				style={{border:'none', color:(currentMode === 'Dark')  && '#fff'}}
				value='1'
				dataSource={dropdownData}
			>
			</DropDownListComponent>
		</div>
	)
}
