import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b border-default bg-white/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-primary" />
          </a>


          <div className="hidden sm:flex items-center gap-4">
            <Button href="https://forms.gle/uunftAqJqn2ZFQzFA" size="small">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
