import BasicInformation from '@/components/basicInformation/BasicInformation'
import Vacation from '@/components/vacation/Vacation'

export const tabs = [
	{ id: 1, title: 'Основная информация', content: <BasicInformation /> },
	{ id: 2, title: 'Отпуск', content: <Vacation /> },
]