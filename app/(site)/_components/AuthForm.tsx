"use client";

import { Button } from "@/components/ui/button";
import  Input  from "@/components/ui/input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>("LOGIN");
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
            const newVariant = variant === 'LOGIN' ? "REGISTER" : "LOGIN";
            setVariant(newVariant);
    },[variant])
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        if(variant === 'REGISTER'){
            //todo: axios register
        }
        if(variant === 'LOGIN'){
            //todo: NextAuth SignIn
        }
    }
    const socialAction = (action: string) => {
        setIsLoading(true);
        //todo:: NextAuth social login
    }

    return ( 
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10">
                <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                >
                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input
                type="email"
                id="email"
                placeholder="Email"
                register={register}
                label='Email'
                />
                </div>
                <Button size={"sm"}>
                    test button
                </Button>
                </form>
            </div>
        </div>
     );
}
 
export default AuthForm;