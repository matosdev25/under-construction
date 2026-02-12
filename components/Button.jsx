import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
};

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  icon: Icon,
  className,
  ...props 
}) {
  const baseClasses = cn(
    'group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300',
    'hover:-translate-y-0.5 hover:shadow-lg',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    variants[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={baseClasses}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      {children}
    </button>
  );
}
