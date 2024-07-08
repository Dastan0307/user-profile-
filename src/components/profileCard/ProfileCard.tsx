import Image from 'next/image'
import profileImage from '../../../public/Avatar.png'
import Tabs from '../tabs/Tabs'
import { FC } from 'react'

interface ProfileCardProps {
	activeTab: number
    setActiveTab: (tab: number) => void
}

const ProfileCard:FC<ProfileCardProps> = ({ activeTab, setActiveTab }) => {
	return (
		<div className='w-full h-full max-h-[384px] bg-bgcolor rounded-[12px] p-[40px_40px_20px_40px]'>
			<div className='w-[606px] h-[160px] flex justify-between items-center'>
				<Image src={profileImage} alt='profile]' width={160} height={160} />
				<h3 className='w-[398px] text-[#E1E3E6] text-4xl font-bold'>
					Иванов
					<br />
					Иван Иванович
				</h3>
			</div>
			<p className='text-[#E1E3E6] flex flex-col ml-[210px]'>
				<span>UI/UX designer</span>
				<span className='mt-[16px]'>Россия, Красноярск</span>
			</p>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	)
}

export default ProfileCard
