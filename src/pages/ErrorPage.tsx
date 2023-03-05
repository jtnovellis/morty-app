interface ErrorPageProps {
  error?: string;
}
export function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className='text-center font-bold text-xl mt-28'>
      Something went wrong: {error || '404'}
    </div>
  );
}
