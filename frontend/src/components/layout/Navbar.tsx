import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/uiStore";
import { useAuthStore } from "@/store/authStore";
import { Search, ShoppingCart, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const { toggleSidebar, toggleAuthModal } = useUIStore();
  const { isAuthenticated, user } = useAuthStore();

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="primary"
              onClick={toggleSidebar}
              className="hover:bg-transparent">
              <div className="flex flex-col space-y-1.5">
                <div className="w-4 h-0.5 bg-brand-green"></div>
                <div className="w-4 h-0.5 bg-brand-green"></div>
                <div className="w-4 h-0.5 bg-brand-green"></div>
              </div>
            </Button>
            <div className="ml-4 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-green">
                NorthMarket
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-secondary/50 border-border/40 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="primary" className="hover:bg-transparent">
              <ShoppingCart className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Button>
            {isAuthenticated ?
              <Button
                variant="primary"
                className="flex items-center space-x-2 hover:bg-transparent">
                <User className="h-5 w-5" />
                <span>{user?.name}</span>
              </Button>
            : <div className="flex items-center space-x-2">
                <Button
                  variant="primary"
                  onClick={toggleAuthModal}
                  className="text-muted-foreground hover:text-foreground hover:bg-transparent">
                  Sign In
                </Button>
                <Button
                  onClick={toggleAuthModal}
                  className="bg-brand-green hover:bg-brand-green/90">
                  Sign Up
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
