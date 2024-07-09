import { TextField } from '@mui/material'
import Image from 'next/image'
import unionRight from '../../../public/UnionRight.svg'
import profileImage from '../../../public/avatar1.png'
import avatar1 from '../../../public/Avatar2.png'
import avatar2 from '../../../public/Avatar1.png'
import avatar3 from '../../../public/Avatar4.png'
import avatar4 from '../../../public/Avatar5.png'
import avatar5 from '../../../public/Avatar6.png'
import avatar6 from '../../../public/Avatar7.png'
import avatar7 from '../../../public/Avatar8.png'
import styles from './BasicInformation.module.scss'
import NestedImages from '@/utils/NestedImages'

const BasicInformation = () => {
	return (
		<div className='w-full flex justify-between'>
			<div className='w-[820px] h-[420px] bg-bgcolor rounded-12 p-[30px]'>
				<div className='w-full flex justify-between items-center'>
					<h3 className='text-[#E1E3E6] text-[24px]'>
						Персональная информация
					</h3>
					<button className='text-[grey] font-bold'>Изменить</button>
				</div>
				<div className='flex flex-wrap justify-between '>
					<TextField
						id='outlined-basic'
						label='Имя'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Фамилия'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Отчество'
						variant='outlined'
						className={styles.inputLonge}
					/>
					<TextField
						id='outlined-basic'
						label='Дата рождения'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Дата трудоустройства'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Страна'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Город'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Должность'
						variant='outlined'
						className={styles.input}
					/>
					<TextField
						id='outlined-basic'
						label='Электронная почта'
						variant='outlined'
						className={styles.input}
					/>
				</div>
			</div>
			<div className='w-full max-w-[658px] h-[484px] bg-bgcolor rounded-12 p-30'>
				<h3 className='w-full flex justify-between items-center text-primary'>
					Загрузка сотрудника{' '}
					<span className='text-[#D77556] font-bold'>100%</span>
				</h3>
				<div className='w-full h-full max-h-[56px] flex mt-[40px]'>
					<p className='text-primary mr-[124px] flex flex-col justify-between items-start'>
						<span className='text-[grey]'>Название проекта</span> MedPoint 24
					</p>
					<p className='text-primary flex flex-col justify-between items-start'>
						<span className='text-[grey]'>Тип проекта</span> Коммерческий
					</p>
				</div>
				<div className='w-full flex mt-[40px]'>
					<div className='h-[80px] flex flex-col justify-between items-start mr-[78px]'>
						<p className='text-grey '>Ответственный</p>
						<div className='w-[183px] flex justify-between items-center'>
							<Image src={profileImage} alt='avatar' width={48} height={48} />
							<p className='text-primary'>Анна Кузнецова</p>
						</div>
					</div>
					<div className=''>
						<p className='text-grey '>Команда</p>
						<div className='flex'>
							<NestedImages />
						</div>
					</div>
				</div>
				<div className='w-full h-full max-h-[56px] flex flex-col justify-between items-start mt-[40px]'>
					<p className='text-[grey]'>Сроки работы</p>
					<p className='text-[#B0B1B6] flex'>
						03 марта 2023{' '}
						<Image
							src={unionRight}
							alt='union'
							width={18}
							height={14}
							className='mx-[11px]'
						/>{' '}
						03 марта 2023
					</p>
				</div>
				<button className='w-full h-full max-h-[40px] bg-[#0047BB] rounded-[4px] text-primary uppercase flex justify-center items-center mt-[40px]'>
					Посмотреть всю загрузку
				</button>
			</div>
		</div>
	)
}

export default BasicInformation
