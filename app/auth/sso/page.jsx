import SsoComp from '@/app/componetns/SsoComp'
import React, { Suspense } from 'react'

export default function page() {
    return (
        <div>
            <Suspense>
                <SsoComp />
            </Suspense>
        </div>
    )
}
