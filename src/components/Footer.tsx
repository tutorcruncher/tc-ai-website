export function Footer() {
  return (
    <footer className="py-6 px-4 bg-white border border-t">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-dark">
        <div className="flex gap-6">
          <a href="https://tutorcruncher.com/privacy" className="hover:text-primary transition-colors" target="_blank">
            Privacy Policy
          </a>
          <a href="https://tutorcruncher.com/tcai-privacy-policy" className="hover:text-primary transition-colors" target="_blank">
            Terms of Service
          </a>
        </div>
        <div>© {new Date().getFullYear()} TutorCruncher AI</div>
      </div>
    </footer>
  );
}
