type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
