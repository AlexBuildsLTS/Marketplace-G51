// src/pages/RegisterPage.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export function RegisterPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="mb-6 text-2xl text-center">Register</h2>
          <RegisterForm
            onSignInClick={() => {
              /* handle sign in click */
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
