'use client'
import { tabs } from '@/utils/tabs'
import { FC } from 'react'
import ContentComponent from '../content/ContentComponent'

interface TabsProps {
	activeTab: number
	setActiveTab: (tab: number) => void
}

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
	const handleTabClick = (tabId: number) => {
		setActiveTab(tabId)
	}

	return (
		<div className='w-[311px] mt-[52px]'>
			<div className='flex'>
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => handleTabClick(tab.id)}
						className={`${
							activeTab === tab.id
								? 'border-b-3 border-solid border-[rgb(0,71,187)] text-[#E1E3E6]'
								: 'border-b-1 border-gray-600 text-[#B0B1B6] hover:text-gray-500'
						} whitespace-nowrap uppercase p-[10px_16px] border-b-2 font-medium text-sm focus:outline-none`}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div className='hidden'>
				<ContentComponent activeTab={activeTab} />
			</div>
		</div>
	)
}

export default Tabs
