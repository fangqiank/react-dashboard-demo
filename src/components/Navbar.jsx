import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { NavButton } from './NavButton'
import {Cart} from './Cart'
import {Chat} from './Chat'
import {Notification} from './Notification'
import {UserProfile} from './UserProfile'

import { useStateContext } from '../contexts/ContextProvider'

export const Navbar = () => {
	const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext()

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	},[])

	useEffect(() => {
		screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)
	},[screenSize])

	const handleActiveMenu = () => setActiveMenu(!activeMenu)

	return (
		<div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
			<NavButton
				title='Menu'
				customFunc={handleActiveMenu}
				color={currentColor}
				icon={<AiOutlineMenu />} 
			/>
				<div className="flex">
					<NavButton
						title='Cart'
						customFunc={() => handleClick('cart')}
						color={currentColor}
						icon={<FiShoppingCart />}
					/>
					<NavButton
						title='Chat'
						customFunc={() => handleClick('chat')}
						dotColor='#03c9d7'
						icon={<BsChatLeft />}
					/>
					<NavButton
						title='Notifications'
						customFunc={() => handleClick('notification')}
						dotColor='rgb(254, 201, 15)'
						icon={<RiNotification3Line />}
					/>

				<TooltipComponent
					content="Profile" 
					position="BottomCenter"
				>
					<div 
						className='flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onclick={() => handleClick('userProfile')}
					>
						<img 
							className='rounded-full w-8 h-8'
							src={avatar}
							alt='user=profile'
						/>
						<p>
							<span className='text-gray-400 text-14'>Hi,</span>{' '}
							<span className='text-gray-400 font-bold ml-1 text-14'>
								Zhangsan
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>

				{isClicked.cart && (<Cart />)}
				{isClicked.chat && (<Chat />)}
				{isClicked.notification && (<Notification />)}
				{isClicked.userProfile && (<UserProfile />)}
		</div>
	</div>	
)
}
