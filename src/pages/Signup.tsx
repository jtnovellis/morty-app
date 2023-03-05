import { useRef } from 'react';
import { Input, Button } from '../components';

interface SignupProps {}
export function Signup({}: SignupProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!name || !email || !password) return;

    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
      <div>
        <label htmlFor='username'>Name:</label>
        <Input type='text' id='username' placeholder='Jairo Toro' required ref={nameRef} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <Input type='email' id='email' placeholder='jairotoro@host.com' required ref={emailRef} />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <Input
          type='password'
          id='password'
          placeholder='************'
          required
          ref={passwordRef}
        />
      </div>
      <Button type='submit'>Sign Up</Button>
    </form>
  );
}
