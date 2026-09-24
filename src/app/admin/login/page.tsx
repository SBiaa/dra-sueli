import type { Metadata } from "next";
import Image from "next/image";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 py-16 sm:px-6">
      <div className="mb-8 flex justify-center">
        <Image src="/images/icon-logo.png" alt="" width={72} height={72} className="h-16 w-auto" />
      </div>
      <h1 className="mb-6 text-center font-serif text-2xl text-brand-brown-dark">
        Painel administrativo
      </h1>
      <LoginForm />
    </div>
  );
}
