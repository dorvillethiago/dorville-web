'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	email: z.string().email(),
	phone: z.string().min(10).max(11),
	message: z.string().min(10).max(200)
})

type Schema = z.infer<typeof schema>

export default function Form() {
	const inputClasses =
		'bg-transparent transition-colors border-b-2 outline-none border-[#D3D3D3] focus:border-primary'

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Schema>({
		mode: 'all',
		criteriaMode: 'all',
		resolver: zodResolver(schema)
	})

	function onSubmit(data: Schema) {
		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center justify-between xl:flex-row gap-20 xl:gap-20 max-w-screen-2xl mx-auto px-10"
		>
			<div className="w-full xl:w-2/4 h-full" id="form-container">
				<h4 className="font-medium text-4xl">Fale Conosco</h4>
				<div className="mt-10 flex flex-col gap-10" id="fields">
					<fieldset className="flex flex-col gap-2">
						<label htmlFor="email">Email</label>
						<input
							{...register('email')}
							type="email"
							className={inputClasses}
							id="email"
						/>
					</fieldset>
					<fieldset className="flex flex-col gap-2">
						<label htmlFor="phone">Phone</label>
						<input
							{...register('phone')}
							type="text"
							className={inputClasses}
							id="phone"
						/>
					</fieldset>
					<fieldset className="flex flex-col gap-2">
						<label htmlFor="message">Mensagem</label>
						<textarea
							className={`${inputClasses} bg-red-500 min-h-[100px] resize-none`}
							id="message"
						/>
					</fieldset>
					<button
						type="button"
						className="bg-primary rounded-xl w-full py-4 transition-colors text-background"
					>
						Enviar
					</button>
				</div>
			</div>
			<div className="w-full flex justify-center items-center">
				<Image
					width={793}
					height={509}
					src="/form-illustration.svg"
					alt="Form Illustration"
				/>
			</div>
		</form>
	)
}
