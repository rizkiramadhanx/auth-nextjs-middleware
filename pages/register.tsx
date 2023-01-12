import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import { TFormRegister } from '../utils/type';

const Register = () => {
  const [formData, setFormData] = useState<TFormRegister>({
    email: '',
    password: '',
    username: '',
  });

  const router = useRouter();

  const { mutate } = useRegister();
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (e) => {
        router.replace('/dashboard');
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="flex justify-center  items-center sm:min-h-screen">
        <form className="w-3/4 sm:w-[500px] my-10 border-sky-900 p-5 rounded-md border-2 flex flex-col gap-y-2">
          <h1 className="text-center text-2xl font-bold">Register Menu</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:outline"
              id="username"
              name="username"
              type="text"
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:outline"
              id="email"
              name="email"
              type="text"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:border-sky-500 focus:outline"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
