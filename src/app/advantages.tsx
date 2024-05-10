'use client'
import type React from 'react'
import { useAnimate, motion, stagger } from 'framer-motion'
import { useEffect } from 'react'

type AdvantageCardType = {
	title: string
	icon: React.ReactNode
	description: string
}

const AdvantageCardList: AdvantageCardType[] = [
	{
		title: 'Agilidade',
		icon: (
			<svg
				width="20"
				height="26"
				viewBox="0 0 20 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Flash Icon</title>
				<path
					d="M16.158 2.67775C16.4478 2.0088 16.2317 1.22755 15.6375 0.797866C15.0433 0.368179 14.233 0.407241 13.6781 0.885757L1.1067 11.8233C0.615629 12.2529 0.438843 12.9414 0.669647 13.5469C0.90045 14.1524 1.48974 14.5625 2.14286 14.5625H7.61831L3.84197 23.3223C3.55224 23.9912 3.76831 24.7725 4.3625 25.2022C4.9567 25.6318 5.76697 25.5928 6.32188 25.1143L18.8933 14.1768C19.3844 13.7471 19.5612 13.0586 19.3304 12.4531C19.0996 11.8477 18.5152 11.4424 17.8571 11.4424H12.3817L16.158 2.67775Z"
					fill="url(#paint0_linear_16_33)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16_33"
						x1="10"
						y1="0.499573"
						x2="10"
						y2="25.5005"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#07AAEF" />
						<stop offset="1" stopColor="#601CE9" />
					</linearGradient>
				</defs>
			</svg>
		),
		description:
			'Desenvolvimento rápido, entregas pontuais e resultados excepcionais. abordagem focada na agilidade.'
	},
	{
		title: 'Segurança',
		icon: (
			<svg
				width="16"
				height="20"
				viewBox="0 0 16 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Lock Icon</title>
				<path
					d="M5.14286 5.84375V7.625H10.8571V5.84375C10.8571 4.20352 9.57857 2.875 8 2.875C6.42143 2.875 5.14286 4.20352 5.14286 5.84375ZM2.85714 7.625V5.84375C2.85714 2.89355 5.16071 0.5 8 0.5C10.8393 0.5 13.1429 2.89355 13.1429 5.84375V7.625H13.7143C14.975 7.625 16 8.69004 16 10V17.125C16 18.435 14.975 19.5 13.7143 19.5H2.28571C1.025 19.5 0 18.435 0 17.125V10C0 8.69004 1.025 7.625 2.28571 7.625H2.85714Z"
					fill="url(#paint0_linear_16_27)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16_27"
						x1="8"
						y1="0.5"
						x2="8"
						y2="19.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#07AAEF" />
						<stop offset="1" stopColor="#601CE9" />
					</linearGradient>
				</defs>
			</svg>
		),
		description:
			'Segurança assegurada por testes rigorosos. Proteção garantida para seus dados e de seus clientes.'
	},
	{
		title: 'Acessibilidade',
		icon: (
			<svg
				width="26"
				height="18"
				viewBox="0 0 26 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Money Icon</title>
				<path
					d="M2.88889 0.375C1.29549 0.375 0 1.66426 0 3.25V14.75C0 16.3357 1.29549 17.625 2.88889 17.625H23.1111C24.7045 17.625 26 16.3357 26 14.75V3.25C26 1.66426 24.7045 0.375 23.1111 0.375H2.88889ZM5.77778 14.75H2.88889V11.875C4.48229 11.875 5.77778 13.1643 5.77778 14.75ZM2.88889 6.125V3.25H5.77778C5.77778 4.83574 4.48229 6.125 2.88889 6.125ZM20.2222 14.75C20.2222 13.1643 21.5177 11.875 23.1111 11.875V14.75H20.2222ZM23.1111 6.125C21.5177 6.125 20.2222 4.83574 20.2222 3.25H23.1111V6.125ZM13 4.6875C14.1493 4.6875 15.2515 5.14185 16.0641 5.9506C16.8768 6.75935 17.3333 7.85625 17.3333 9C17.3333 10.1437 16.8768 11.2406 16.0641 12.0494C15.2515 12.8581 14.1493 13.3125 13 13.3125C11.8507 13.3125 10.7485 12.8581 9.93587 12.0494C9.12321 11.2406 8.66667 10.1437 8.66667 9C8.66667 7.85625 9.12321 6.75935 9.93587 5.9506C10.7485 5.14185 11.8507 4.6875 13 4.6875Z"
					fill="url(#paint0_linear_16_30)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16_30"
						x1="13"
						y1="0.375"
						x2="13"
						y2="17.625"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#07AAEF" />
						<stop offset="1" stopColor="#601CE9" />
					</linearGradient>
				</defs>
			</svg>
		),
		description:
			'Soluções flexíveis, permitindo que você alcance seus objetivos sem comprometer seu orçamento.'
	}
]

const AdvantageCard = ({ title, icon, description }: AdvantageCardType) => (
	<motion.li
		initial={{
			x: 50,
			opacity: 0
		}}
		whileHover={{
			scale: 1.05,
			rotate: -2,
			cursor: 'pointer'
		}}
		id="advantage"
		className="flex flex-col gap-4 max-w-[340px]"
	>
		<div className="bg-secondary p-3 w-12 h-12 rounded-md grid place-items-center">
			{icon}
		</div>
		<p className="font-medium">{title}</p>
		<p>{description}</p>
	</motion.li>
)

export default function Advantages() {
	const [scope, animate] = useAnimate()
	useEffect(() => {
		animate(
			'li',
			{
				x: 0,
				opacity: 1
			},
			{
				delay: stagger(0.2)
			}
		)
	}, [animate])
	return (
		<>
			<motion.h4
				initial={{
					x: -50,
					opacity: 0
				}}
				animate={{
					x: 0,
					opacity: 12
				}}
				className="min-[780px]:hidden max-w-screen-2xl mx-auto px-10 font-medium text-2xl"
			>
				É aqui onde as coisas acontecem.
			</motion.h4>
			<ul
				ref={scope}
				className="max-w-screen-2xl mx-auto px-10 my-7 gap-x-5 gap-y-10 flex-wrap flex justify-between"
			>
				{AdvantageCardList.map((advantage) => (
					<AdvantageCard key={advantage.title} {...advantage} />
				))}
			</ul>
		</>
	)
}
