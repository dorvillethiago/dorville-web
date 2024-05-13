import Image from 'next/image'

const Content = () => (
	<div className="flex max-w-[510px] xl:max-w-[560px] flex-col gap-8 lg:gap-16">
		<h1 className="font-semibold leading-[1.2em] text-5xl xl:text-6xl 2xl:text-7xl">
			<strong className="font-semibold text-primary">Software</strong> seguro,
			ágil e acessível.
		</h1>
		<h2 className="leading-5">
			Desenvolvemos soluções tecnológicas para empresas de todos os tipos e
			portes de forma escalável.
		</h2>
		<div className="flex flex-col gap-4 lg:flex-row">
			<button
				type="button"
				className="px-5 py-3 rounded-lg bg-primary text-background w-fit"
			>
				Entrar em Contato
			</button>
			<button type="button" className="px-5 py-3 rounded-lg bg-secondary w-fit">
				Saber Mais
			</button>
		</div>
	</div>
)

export default function Hero() {
	return (
		<section className="max-w-screen-2xl mx-auto px-10 pt-8 lg:pt-16 pb-16 overflow-x-hidden flex relative flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
			<Content />
			<div>
				<Image
					width={783}
					height={458}
					placeholder="blur"
					blurDataURL=""
					alt="Girl programming picture"
					src="/programming-girl.jpg"
					className="rounded-lg min-w-[527px] shadow-2xl shadow-black/45"
					priority
				/>
			</div>
		</section>
	)
}
