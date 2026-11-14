"use client"

import { AuthForm, AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client"
import Image from "next/image"

export default function SignInPage() {
    const handleSignIn = async (data: AuthFormData) => {
        const { data: SignInResponse, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        })

        console.log("sign in response", SignInResponse, error)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">

            {/* Logo */}
            <div className="mb-8">
                <Image
                    src="/logo.png"
                    alt="HireLoop Logo"
                    width={180}
                    height={180}
                    className="h-auto w-44 object-contain"
                    priority
                />
            </div>

            <AuthForm mode="signin" onSubmit={handleSignIn} />
             </div>
            )
}