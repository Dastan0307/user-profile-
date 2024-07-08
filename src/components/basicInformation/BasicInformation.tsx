import { TextField } from '@mui/material'
import styles from './BasicInformation.module.scss'

const BasicInformation = () => {
	return (
		<div className=''>
			<div className='w-[820px] h-[420px] bg-[#232324] rounded-[12px] p-[30px]'>
				<div className='w-full flex justify-between items-center'>
					<h3 className='text-[#E1E3E6] text-[24px]'>
						Персональная информация
					</h3>
					<button className='text-[#76787A] font-bold'>Изменить</button>
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
			<div className=''>
        
      </div>
		</div>
	)
}

export default BasicInformation
