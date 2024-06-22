import { MotionH4 } from './components/framer-motion/motion-h4'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from './components/shadcn/carousel'

const ServiceList = [
	'Desenvolvimento Web',
	'Consultoria de TI',
	'Aplicativos Mobile',
	'Dashboards Interativos',
	'Integração de Sistemas',
	'Aplicações Desktop'
]

const Service = ({ text }: { text: string }) => (
	<li className="p-7 rounded-xl bg-secondary hover:bg-gradient-to-tr from-light-primary to-accent hover:text-background hover:scale-105 transition-all cursor-pointer">
		{text}
	</li>
)

export default function Services() {
	return (
		<section id="services" className="max-w-screen-2xl mx-auto px-10 pt-8">
			<MotionH4
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="font-medium text-4xl mb-10"
			>
				Possuímos uma variedade extensa de serviços em tecnologia.
			</MotionH4>
			<Carousel
				opts={{
					align: 'start',
					loop: true
				}}
				className="w-full"
			>
				<CarouselContent>
					{ServiceList.map((service) => (
						<CarouselItem
							key={service}
							className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
						>
							<div className="flex flex-col gap-4 aspect-square items-center justify-center p-6 rounded-md hover:bg-secondary transition-colors border-secondary border-2">
								<p className="text-lg md:text-xl font-normal">{service}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}
