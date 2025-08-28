import Axios from '@/Helpers/Axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { toaster } from "@/components/ui/toaster"
import PaymentForm from './PaymentForm'
import { Button } from '@chakra-ui/react'
import { Provider } from '@/components/ui/provider'

export default function JoinForm() {

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const [intent, setIntent] = useState(Cookies.get('intent'))
    const [token, setToken] = useState(Cookies.get('token'))

    useEffect(() => {


        if (intent) {
            console.log('Intent: ', intent)
            setStep(2)
        } else {
            setStep(1)
        }

    }, [intent])


    const handleSubmitForm = async () => {
        const sponsor = Cookies.get('sponsor')

        if (!firstName || !lastName || !email || !phone) {
            return alert('All fields are required!')
        }

        setLoading(true)
        const res = await Axios.post('/contact/store7x', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            sponsorId: sponsor,
            country: '',
            contactHost: 'go7x'
        })

        if (res?.data?.ok) {

            Cookies.set('intent', res?.data?.intent?.client_secret)
            Cookies.set('token', res?.data?.token)

            setIntent(res?.data?.intent?.client_secret)
            setToken(res?.data?.token)

            setStep(2)

        } else {

            console.log('Join form Error: ', res?.data?.msg)
            alert(res?.data?.msg)
        }

        setLoading(false)

    }

    return (
        <div>
            <div
                id="two-setp-order-Pdp_9qtIPk"
                className="c-order c-wrapper two-setp-order-Pdp_9qtIPk"
            >
                <div className="container-order-form-two-step ctwo-setp-order-Pdp_9qtIPk">
                    <div className="form-title">
                        <div className="form-step">
                            <span className="form-heading active">Step #1</span>
                            <span className="form-sub-heading">
                                Contact Details
                            </span>
                        </div>
                        <div className="form-step">
                            <span className="form-heading active">Step #2</span>
                            <span className="form-sub-heading">Billing Info</span>
                        </div>
                    </div>
                    <div className="divider-form">
                        <i style={{ left: step == 2 ? '70%' : '25%' }} className="fas fa-caret-up caret-up" />
                    </div>
                    <div
                        className="form-body"
                        id="div-ctwo-setp-order-Pdp_9qtIPk"
                    >
                        <div>
                            {step == 1 ? <>

                                <section className="info">
                                    <input
                                        style={{ color: 'black' }}
                                        onChange={e => setFirstName(e.target.value)}
                                        value={firstName}
                                        type="text"
                                        name="name"
                                        placeholder="First Name..."
                                        className="form-input input"
                                    />

                                    <input
                                        style={{ color: 'black' }}
                                        onChange={e => setLastName(e.target.value)}
                                        value={lastName}
                                        type="text"
                                        name="name"
                                        placeholder="Last Name..."
                                        className="form-input input"
                                    />

                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        style={{ color: 'black' }}
                                        type="text"
                                        name="email"
                                        placeholder="Email Address..."
                                        className="form-input input"
                                        autoComplete="new"
                                    />
                                    <input
                                        onChange={e => setPhone(e.target.value)}
                                        style={{ color: 'black' }}
                                        value={phone}
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number..."
                                        className="form-input input"
                                        autoComplete="off"
                                    />
                                </section>

                                <section>
                                    <button onClick={handleSubmitForm} className="form-btn" data-v-bb614710="">
                                        {loading ? <span className="main-text" data-v-bb614710="">
                                            Please Wait...
                                        </span> : <span className="main-text" data-v-bb614710="">
                                            Go To Step #2
                                        </span>}
                                        {/* <br data-v-bb614710="" />
                                    <span className="sub-text" data-v-bb614710="" /> */}
                                    </button>
                                </section>

                            </> : <div style={{ color: 'black' }}>

                                {/* <pree>{Cookies.get('intent')}</pree> */}

                                {intent && <PaymentForm clientSecret={intent} />}


                            </div>}

                            <section className="order-form-footer">
                                <span>
                                    We Respect Your Privacy &amp; Information.
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
