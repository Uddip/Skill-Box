import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Signup from '../components/Signup'
import { AuthProvider } from '../contexts/AuthContext'

function Register() {
    return (
        <AuthProvider>
            <div>
                <Header />
                <Signup />
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default Register
