import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className="container px-10 mt-4 md:mt-10">
        <h1 className="text-3xl font-semibold">
          Next JS auth using middleware and cookie
        </h1>

        <h2 className="text-xl font-medium mt-10">Public route :</h2>
        <ul>
          <li>
            🚀
            <i
              className="font-medium text-orange-500 hover:underline hover:cursor-pointer"
              onClick={() => router.push('login')}
            >
              Login
            </i>
          </li>
          <li>
            🚀
            <i
              className="font-medium text-orange-500 hover:underline hover:cursor-pointer"
              onClick={() => router.push('register')}
            >
              Register
            </i>
          </li>
        </ul>
        <h2 className="text-xl font-medium mt-10">Private route :</h2>
        <ul>
          <li>
            🔏
            <i
              className="font-medium text-orange-500 hover:underline hover:cursor-pointer"
              onClick={() => router.push('me')}
            >
              Me
            </i>
          </li>
          <li>
            🔏
            <i
              className="font-medium text-orange-500 hover:underline hover:cursor-pointer"
              onClick={() => router.push('dashboard')}
            >
              Dashboard
            </i>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
