import React, { Suspense } from 'react'

export default function page() {
    return (
        <div>
            <Suspense>
                <Sso />
            </Suspense>
        </div>
    )
}
