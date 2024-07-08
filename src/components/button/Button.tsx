import Image from 'next/image'
import { FC } from 'react'
import uninoLeft from '../../../public/UnionLeft.svg'

interface BackButton {
	children: string
}

export const BackButton: FC<BackButton> = ({ children }) => {
  return (
	<button className='w-[307px] h-[40px] p-[8px_16px] flex justify-between items-center text-[rgb(118,120,122)] uppercase my-1'>
		<Image src={uninoLeft} alt='union' width={8} height={14} className='m-[5px_8px]'/>
		{children}
	</button>
  )
}
