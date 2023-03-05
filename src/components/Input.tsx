import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-3 px-2 bg-slate-500 outline-none rounded-lg w-full ${className}`}
      ref={ref}
      {...rest}
    />
  );
});
