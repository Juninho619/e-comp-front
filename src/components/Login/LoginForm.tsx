"use client"
import { loginProps } from '@/utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { schema } from '../../../validations/validationLoginForm';
import { signIn } from '@/services/auth';

const LoginForm = () => {

  const { push } = useRouter();

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)}
);
  ({
    mode: "all",
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data: loginProps) => {
    console.log(data);

    try {
      signIn(data).then((res: any) => {
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", res.data.access_token);
            push("/products");
          }
        }
      });
    } catch (error: any) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: error.response.data.message,
      });
    }
  };
  return (
    <div className="w-full">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@mail.com"
        {...register("email", {
          required: "Email is mandatory",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Please enter a valid email address",
          },
        })}
        />
        {errors?.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
           {...register("password", {
              required: "field is mandatory",
              minLength: {
                value: 8,
                message: "Should be at least 4 characters",
              },
            })}/>
              {errors?.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign in
        </button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm