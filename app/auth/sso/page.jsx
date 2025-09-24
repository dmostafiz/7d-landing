'use client'

import Cookies from 'js-cookie'
import Axios from '@/Helpers/Axios'


import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"

export default function page() {

    const searchParams = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
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
            Cookies.set('token', res?.data?.token)

            window?.location?.href = '/'

        } else {
            setError(res?.data?.msg)
        }

        setLoading(false)
    }

    return (
        <div className='h-full w-full flex items-center justify-center'>
            {loading && <span>Verifying...</span>}
            {error && <span className='text-red-500'>{error}</span>}
        </div>
    )
}
