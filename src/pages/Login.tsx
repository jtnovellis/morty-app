import { useRef } from 'react';
import { Input, Button } from '../components';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { logUser } = useUser();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) return;

    logUser({ email, password });
    navigate('/');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
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
        <Button type='submit'>Log In</Button>
      </form>
    </>
  );
}
