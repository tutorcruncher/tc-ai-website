export function Footer() {
  return (
    <footer className="py-6 px-4 bg-white border border-t">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-dark">
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} TutorCruncher AI
        </div>
      </div>
    </footer>
  );
}
