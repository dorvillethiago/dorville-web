'use client'
import toast from 'react-hot-toast'
import Image from 'next/image'
import Turnstile from 'react-turnstile'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { MotionH4 } from './components/framer-motion/motion-h4'
import { MotionFieldset } from './components/framer-motion/motion-fieldset'
import { MotionButton } from './components/framer-motion/motion-button'
import { useState } from 'react'
import TurnstileWidget from './components/turnstile'

const schema = z.object({
    email: z.string().email({ message: 'Email inválido' }),
    phone: z.string().min(10, 'Telefone inválido').max(11),
    message: z
        .string()
        .min(10, 'Mensagem contém menos que 11 caracteres')
        .max(200),
})

type Schema = z.infer<typeof schema>

export default function Form() {
    const [isMessageSent, setIsMessageSent] = useState(false)
    const [token, setToken] = useState<string | undefined>(undefined)
    const inputClasses =
        'bg-transparent transition-colors border-b-2 outline-none border-[#D3D3D3] focus:border-primary'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Schema>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
    })

    async function onSubmit(data: Schema) {
        if (isMessageSent) return toast.error('Mensagem já enviada')
        if (!token) {
            return toast.error('O captcha não foi preenchido')
        }
        const loading = toast.loading('Enviando mensagem...')
        const response = await fetch(
            `/api/send?email=${data.email}&phone=${data.phone}&message=${data.message}&token=${token}`
        )
        if (response.status === 200) {
            toast.dismiss(loading)
            toast.success('Mensagem enviada com sucesso')
            setIsMessageSent(true)
        }
        if (response.status !== 200) {
            toast.dismiss(loading)
            toast.error('Erro ao enviar mensagem')
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-between xl:flex-row gap-20 xl:gap-20 max-w-screen-2xl mx-auto px-10"
        >
            <div className="w-full xl:w-2/4 h-full" id="form-container">
                <MotionH4
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-medium text-4xl"
                >
                    Fale Conosco
                </MotionH4>
                <div className="mt-10 flex flex-col gap-10" id="fields">
                    <MotionFieldset
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="email">
                            Email
                            <em className="text-red-400 text-xs ml-3">
                                {errors.email?.message}
                            </em>
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            className={inputClasses}
                            id="email"
                        />
                    </MotionFieldset>
                    <MotionFieldset
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="phone">
                            Phone{' '}
                            <em className="text-red-400 text-xs ml-3">
                                {errors.phone?.message}
                            </em>
                        </label>
                        <input
                            {...register('phone')}
                            type="text"
                            className={inputClasses}
                            id="phone"
                        />
                    </MotionFieldset>
                    <MotionFieldset
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="message">
                            Mensagem{' '}
                            <em className="text-red-400 text-xs ml-3">
                                {errors.message?.message}
                            </em>
                        </label>
                        <textarea
                            {...register('message')}
                            className={`${inputClasses} min-h-[100px] resize-none`}
                            id="message"
                        />
                    </MotionFieldset>
                    <TurnstileWidget
                        onVerify={(token) => {
                            setToken(token)
                        }}
                    />
                    <MotionButton
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-primary rounded-xl w-full py-4 transition-colors text-background"
                    >
                        Enviar
                    </MotionButton>
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
