export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm">
      {children}
    </span>
  );
}
