import React, { useState } from 'react';

import PageNav from "../components/pageNav";
import PageTitle from "../components/pageTitle";
import Footer from '../components/footer';

export default function UserPage({orderProduct}) {
    const secUser = {
        secTitle: 'Get Started!',
        secSub: '',
    }
    
    return(
        
        <>
            <section id='userPage'>
                <PageNav orderProduct={orderProduct}/>
                <div className="wrapper3">
                    <PageTitle secTitle={secUser.secTitle} secSub={secUser.secSub}/>
                    <LoginForm />
                </div>
                
                    
               
            </section>
        </>
    )
}


const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = (formType) => {
    setIsSignUp(formType === 'signUp');
  };

  return (
    <div className="flex justify-center items-center min-h-fit">
      <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => toggleForm('signIn')}
            className={`px-4 py-2 rounded-l ${!isSignUp ? 'bg-yellow-500 text-white' : 'bg-transparent text-yellow-600 border border-yellow-200'} transition-colors`}
          >
            Sign In
          </button>
          <button
            onClick={() => toggleForm('signUp')}
            className={`px-4 py-2 rounded-r ${isSignUp ? 'bg-yellow-500 text-white' : 'bg-transparent text-yellow-600 border border-yellow-200'} transition-colors`}
          >
            Sign Up
          </button>
        </div>
        <form>
          {isSignUp ? (
            <>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <label className="block text-center text-gray-600 mt-2">Name</label>
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <label className="block text-center text-gray-600 mt-2">Email</label>
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <label className="block text-center text-gray-600 mt-2">Password</label>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <label className="block text-center text-gray-600 mt-2">Email</label>
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <label className="block text-center text-gray-600 mt-2">Password</label>
              </div>
            </>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

