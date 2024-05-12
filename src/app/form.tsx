'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'framer-motion'

const schema = z.object({
    email: z.string().email(),
    phone: z.string().min(10).max(11),
    message: z.string().min(10).max(200),
})

type Schema = z.infer<typeof schema>

export default function Form() {
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

    function onSubmit(data: Schema) {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-between xl:flex-row gap-20 xl:gap-20 max-w-screen-2xl mx-auto px-10"
        >
            <div className="w-full xl:w-2/4 h-full" id="form-container">
                <motion.h4
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    className="font-medium text-4xl"
                >
                    Fale Conosco
                </motion.h4>
                <div className="mt-10 flex flex-col gap-10" id="fields">
                    <motion.fieldset
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            {...register('email')}
                            type="email"
                            className={inputClasses}
                            id="email"
                        />
                    </motion.fieldset>
                    <motion.fieldset
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="phone">Phone</label>
                        <input
                            {...register('phone')}
                            type="text"
                            className={inputClasses}
                            id="phone"
                        />
                    </motion.fieldset>
                    <motion.fieldset
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            className={`${inputClasses} bg-red-500 min-h-[100px] resize-none`}
                            id="message"
                        />
                    </motion.fieldset>
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        type="button"
                        className="bg-primary rounded-xl w-full py-4 transition-colors text-background"
                    >
                        Enviar
                    </motion.button>
                </div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className="w-full flex justify-center items-center"
            >
                <Image
                    width={793}
                    height={509}
                    src="/form-illustration.svg"
                    alt="Form Illustration"
                />
            </motion.div>
        </form>
    )
}
