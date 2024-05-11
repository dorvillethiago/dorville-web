import React from 'react'
import Hero from '@/app/hero'
import Advantages from '@/app/advantages'
import Benefits from '@/app/benefits'
import Services from '@/app/services'
import { Cta } from '@/app/cta'

export default function Page() {
    return (
        <>
            <Hero />
            <Advantages />
            <Benefits />
            <Services />
            <Cta />
        </>
    )
}
