import React from 'react'
import { format } from 'date-fns'

export const Footer = () => {
	return (
		<div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {format(Date.now(), 'yyyy')} - All Rights Reserved
    </p>
  </div>
	)
}
