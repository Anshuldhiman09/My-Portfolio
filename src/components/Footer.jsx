export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-8">
      <div className="container-lg text-sm text-slate-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Anshul Dhiman</span>
        <a href="#" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
