'use client';
import { useState } from 'react';
import ProfileBox from './ProfileBox';
import Image from 'next/image';

const ProfilePageContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <section>
      <button onClick={handleIsEdit}>X</button>
      <div className="px-6">
        <div className="flex w-full justify-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt="profile-image"
              width={150}
              height={150}
              className="max-h-[150px] max-w-[150px] rounded-full border-none shadow-xl"
            />
          </div>
        </div>
        <div className="mt-2 text-center">
          <h3 className="mb-1 text-2xl font-bold leading-normal text-slate-700">
            유저명
          </h3>
          <div className="mb-2 mt-0 text-xs font-bold uppercase text-slate-400">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
            이메일@주소.com
          </div>
        </div>
      </div>
      <ProfileBox isEdit={isEdit} handleIsEdit={handleIsEdit} />
    </section>
  );
};

export default ProfilePageContainer;
