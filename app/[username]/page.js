"use client"

import Axios from '../../Helpers/Axios'
import { Center, Spinner, Box, Text } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { toaster } from "@/components/ui/toaster"

export default function UsernameVerification({ params }) {


    const { username } = React.use(params)

    console.log('params ',)

    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {

        if (username) {
            handleVerify(username)
        }

    }, [username])

    const handleVerify = async (username) => {
        if (!username) {
            return alert('Please enter a username')
        }

        const res = await Axios.get(`/sponsor/validate/${username}`)

        if (!res?.data?.ok) {

            toaster.create({
                title: 'Sponsor verification failed',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

            setPageLoading(false)

        }
        else {

            Cookies.set('sponsor', username)

            toaster.create({
                title: 'Sponsor verified',
                description: "",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

            setTimeout(() => {
                window.location.href = `/`
            }, 500)
        }
    }

    return (
        <Center h={'100vh'}>
            {pageLoading ? <Spinner /> : <Box>
               <Text>Invalid sponsor Link</Text> 
            </Box>}
        </Center>
    )
}
