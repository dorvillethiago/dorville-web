const Service = ({ text }: { text: string }) => (
	<li className="p-7 rounded-xl bg-secondary hover:bg-gradient-to-tr from-light-primary to-accent hover:text-background hover:scale-105 transition-all cursor-pointer">
		{text}
	</li>
)

export default function Services() {
	return (
		<section className="max-w-screen-2xl mx-auto px-10 pt-8">
			<h4 className="font-medium text-4xl">
				Possuímos uma variedade extensa de serviços em tecnologia.
			</h4>
			<ul className="gap-4 flex flex-wrap mt-16">
				<Service text="Desenvolvimento Web" />
				<Service text="Consultoria de TI" />
				<Service text="Aplicativos Mobile" />
				<Service text="Dashboards Interativos" />
				<Service text="Integração de Sistemas" />
				<Service text="Aplicações Desktop" />
			</ul>
		</section>
	)
}
