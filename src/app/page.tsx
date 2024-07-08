'use client'
import { BackButton } from '@/components/button/Button'
import ContentComponent from '@/components/content/ContentComponent'
import Header from '@/components/header/Header'
import ProfileCard from '@/components/profileCard/ProfileCard'
import { useState } from 'react'

export default function Home() {
	const [activeTab, setActiveTab] = useState(1)

	return (
		<main className='w-full max-w-[1494px] flex min-h-screen flex-col'>
			<Header />
			<BackButton>Вернуться к сотрудникам</BackButton>
			<ProfileCard activeTab={activeTab} setActiveTab={setActiveTab} />
			<ContentComponent activeTab={activeTab} />
		</main>
	)
}
