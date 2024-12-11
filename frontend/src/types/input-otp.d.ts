// src/@types/input-otp.d.ts
declare module "input-otp" {
  import * as React from "react";

  export interface OTPInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    // Add other props as per 'input-otp' documentation
  }

  export const OTPInput: React.FC<OTPInputProps>;

  export interface OTPInputContextType {
    slots: {
      char: string | null;
      hasFakeCaret: boolean;
      isActive: boolean;
    }[];
  }

  export const OTPInputContext: React.Context<OTPInputContextType>;
}
