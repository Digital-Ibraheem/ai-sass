import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p className='text-6xl text-green-500'>Hello AI SaaS</p>;
      <Link href='/sign-in'>
        <Button>Login</Button>
      </Link>{' '}
      <Link href='/sign-up'>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
