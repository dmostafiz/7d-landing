'use client'

import Cookies from 'js-cookie'
import Axios from '@/Helpers/Axios'


import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"

export default function SsoComp() {

    const searchParams = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        Cookies.remove('intent')
        Cookies.remove('token')


        const token = searchParams.get("_verification_token") // example: ?id=123

        if (token) {
            createPaymentIntent(token)
        }


    }, [])

    async function createPaymentIntent(token) {

        const res = await Axios.post('/uxlm/create-order-intent', {
            amount: 7
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (res?.data?.ok) {

            Cookies.set('intent', res?.data?.intent?.client_secret)
            Cookies.set('token', searchParams.get("_verification_token"))

            return window.location.href = '/'

        } else {
            setError(res?.data?.msg)
        }

        setLoading(false)
    }

    return (
        <div>
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                {loading && <span className="text-gray-500">Verifying...</span>}
                {error && <span className='text-red-500'>{error}</span>}
            </div>
        </div>
    )
}
