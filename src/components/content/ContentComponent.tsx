import { tabs } from '@/utils/tabs'
import { FC } from 'react'

interface ContentComponent {
	activeTab: number
}

const ContentComponent: FC<ContentComponent> = ({ activeTab }) => {
	return (
		<div className='mt-8'>
			{tabs.map(tab => (
				<div
					key={tab.id}
					className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
				>
					<div className='mt-4'>{tab.content}</div>
				</div>
			))}
		</div>
	)
}

export default ContentComponent
