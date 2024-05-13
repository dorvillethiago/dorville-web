import Image from 'next/image'

export default function Cta() {
	return (
		<section className="my-32 px-10 py-20 flex flex-col justify-center items-center gap-10 relative">
			<Image
				width={1440}
				height={245}
				priority
				className="absolute object-cover h-full w-full"
				src="/alternative-tech-background.jpg"
				alt="Tech Background"
			/>
			<div className="mix-blend-multiply w-full h-full absolute bg-gradient-to-r from-light-primary to-accent" />
			<h4 className="text-4xl text-background z-10 text-center">
				Não fique no passado, venha conosco para o futuro.
			</h4>
			<button
				className="bg-background text-primary py-4 px-8 rounded-xl z-10"
				type="button"
			>
				Conecte-se ao futuro
			</button>
		</section>
	)
}
