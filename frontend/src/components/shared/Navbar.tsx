// src/components/shared/Navbar.tsx
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/uiStore";
import { useAuthStore } from "@/store/authStore";
import { ShoppingCart, User, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { toggleSidebar, toggleAuthModal } = useUIStore();
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed w-full top-0 z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
            <div className="flex items-center ml-4 space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                NorthMarket
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search items..."
                className="w-full py-2 pl-10 pr-4 rounded-md bg-secondary/50 border-border/40 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="primary" className="hover:bg-transparent">
              <ShoppingCart className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </Button>
            {isAuthenticated ?
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button
                    variant="primary"
                    className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>{user?.name}</span>
                  </Button>
                </Link>
                <Button variant="secondary" onClick={logout}>
                  Sign out
                </Button>
              </div>
            : <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="primary">Sign in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary">Sign up</Button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
