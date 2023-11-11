import Image from "next/image";
import AuthForm from "./_components/AuthForm";

export default function Home() {
    return (
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:max-auto sm:w-full ms:max-w-md"> 
            <Image
            alt="logo"
            height={"48"}
            width={"48"}
            className="mx-auto w-auto"
            src="/images/logo.png"
            />
            <h2 className="ht-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
            </h2>
        </div>
        <AuthForm />
      </div>
    )
  }
  