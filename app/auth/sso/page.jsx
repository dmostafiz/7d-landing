import SsoComp from '@/app/componetns/SsoComp'
import React, { Suspense } from 'react'

export default function page() {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Suspense>
                <SsoComp />
            </Suspense>
        </div>
    )
}
