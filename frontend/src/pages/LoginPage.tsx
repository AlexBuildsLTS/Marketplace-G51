// src/pages/LoginPage.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { LoginForm } from "@/components/auth/LoginForm";

export function LoginPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="mb-6 text-2xl text-center">Login</h2>
          <LoginForm onSignUpClick={() => {}} />
        </div>
      </div>
    </Layout>
  );
}
