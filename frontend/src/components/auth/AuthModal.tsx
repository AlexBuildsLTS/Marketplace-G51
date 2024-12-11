import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useUIStore } from "@/store/uiStore";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useState } from "react";

export function AuthModal() {
  const { isAuthModalOpen, toggleAuthModal } = useUIStore();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={toggleAuthModal}>
      <DialogContent className="sm:max-w-[400px] p-0 bg-[#0A1929] border-[#1E3A57]">
        <DialogTitle className="sr-only">
          {isSignUp ? "Sign up to NorthMarket" : "Sign in to NorthMarket"}
        </DialogTitle>
        <div className="p-6">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00FF94]" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isSignUp ? "Sign up" : "Sign in"}
          </h2>

          {isSignUp ?
            <RegisterForm onSignInClick={() => setIsSignUp(false)} />
          : <LoginForm onSignUpClick={() => setIsSignUp(true)} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
