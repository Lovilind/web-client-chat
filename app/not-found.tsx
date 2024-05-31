import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center  bg-indigo-500 bg-cover bg-fixed bg-bottom"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 -mt-52 text-center text-gray-50">
            <div className="relative ">
              <h1 className="relative text-9xl font-bold">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
            </div>
            <h5 className="-mr-10 -mt-3 font-semibold text-gray-300">
              잘못된 경로로 접근하셨습니다.
            </h5>
            <p className="mb-6 mt-2 text-gray-100"></p>
            <Link
              href={'/'}
              className="rounded-full bg-primary px-5 py-3 text-sm font-medium tracking-wider text-gray-50 shadow-sm hover:opacity-70 hover:shadow-lg"
            >
              메인페이지로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
