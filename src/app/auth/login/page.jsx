'use client'
import React, { useState } from 'react';
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Card, FieldError, Form, Input, InputGroup, Label, TextField, toast } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            ...userData,

            callbackURL: '/',
        });
        console.log("Login user data:", { data, error })


        if (error) {
            setError(error.message);
            return;
        } else {
            toast.success("Logged in successfully!")
        }
        // callbackURL not working, so I've to manually redirect
        window.location.href = '/'

    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header Container */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        Log into your account</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>


                    <TextField
                        className='max-w-64 w-full'
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField className="w-full max-w-64" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-64 rounded-xl"
                                type={isVisible ? "text" : "password"}
                            //   value={isVisible ? "87$2h.3diua" : "••••••••"}
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <Link href='/auth/signup'>
                        <p>Not a member? <span className='text-blue-500'>Register Now</span> </p>

                    </Link>


                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Login
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;