import Image from 'next/image'
import avatar from '../../../public/Avatar.png'
import logo from '../../../public/Logo.svg'
import vector from '../../../public/Union.svg'
import burger from '../../../public/burger.svg'

const Header = () => {
	return (
		<header className='w-full flex items-center justify-between'>
			<div>
				<Image src={logo} alt='logo' width={180} height={40} />
			</div>
			<div className='w-[128px] flex items-center justify-between'>
				<div className='w-[80px] h-[36px] flex justify-center items-center border-1 border-custom rounded-18'>
					<Image src={avatar} alt='logo' width={24} height={24} />
					<Image
						src={vector}
						alt='logo'
						width={14}
						height={8}
						className='cursor-pointer  m-[8px_5px]'
					/>
				</div>
				<Image
					src={burger}
					alt='logo'
					width={24}
					height={24}
					className='cursor-pointer m-[8px]'
				/>
			</div>
		</header>
	)
}

export default Header
