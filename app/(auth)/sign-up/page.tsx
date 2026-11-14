"use client"

import * as React from "react"

import { AuthForm, AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function SignUpPage() {

    const router = useRouter();
    const [error, setError] = React.useState<string | null>(null);

    const handleSignUp = async (data: AuthFormData) => {

        setError(null);

        const { data: signUpResponse, error: signUpError } = await authClient.signUp.email({
            name: data.name as string,
            email: data.email,
            password: data.password,
            callbackURL: "/",
            role: data.role, // "seeker" | "recruiter" | "admin"
        });

        console.log("signup response", signUpResponse, signUpError)

        if (signUpError) {
            // e.g. 422 "User already exists. Use another email."
            setError(signUpError.message || "Something went wrong. Please try again.");
            return;
        }

        // Refresh so server components pick up the new session cookie, then navigate.
        router.refresh();
        router.push("/");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">

            {/* Logo */}
            <div>
                <Image
                    src="/logo.png"
                    alt="HireLoop Logo"
                    width={180}
                    height={180}
                    className="h-auto w-44 object-contain"
                    priority
                />
            </div>
    
    <AuthForm mode="signup" onSubmit={handleSignUp} error={error} />
     </div>
    )
}