import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-default bg-white/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-primary" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-primary hover:text-link transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-primary hover:text-link transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-primary hover:text-link transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button href="/early-access" size="small">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
