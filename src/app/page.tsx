import React from 'react'
import Hero from '@/app/hero'
import Advantages from '@/app/advantages'
import Benefits from '@/app/benefits'
import Services from '@/app/services'
// import Form from '@/app/form'
import Cta from '@/app/cta'
import Footer from '@/app/components/footer'
import ContactDialog from '@/app/contact-dialog'

export default function Page() {
	return (
		<>
			<Hero />
			<Advantages />
			<Benefits />
			<Services />
			<Cta />
			{/* <Form /> */}
			<Footer />
			<ContactDialog />
		</>
	)
}
