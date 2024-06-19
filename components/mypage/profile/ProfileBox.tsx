import Image from 'next/image';
import React from 'react';

interface ProfileBoxProps {
  isEdit: boolean;
  handleIsEdit: () => void;
}

const ProfileBox = ({ isEdit, handleIsEdit }: ProfileBoxProps) => {
  // 닉네임, 주소, 생년월일, 프로필 사진 정보 확인 가능
  return (
    <div className="relative mt-16 w-full break-words bg-white">
      <div className="mt-6 border-t border-slate-200 py-6">
        <div className="flex flex-wrap justify-center">
          <div className="mx-auto my-6 w-full rounded-md bg-white px-6 py-4 shadow-md">
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-600">Rating</h4>
                <span className="mt-2 text-xl font-medium text-gray-800">
                  127274
                </span>
              </div>
              <div>
                <h4 className="text-sm text-gray-600">Submissions</h4>
                <span className="mt-2 text-xl font-medium text-gray-800">
                  12171
                </span>
              </div>
              <div>
                <h4 className="text-sm text-gray-600">Reviews</h4>
                <span className="mt-2 text-xl font-medium text-gray-800">
                  35
                </span>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-sm text-gray-600">User Score</h4>
              <span className="mt-2 text-xl font-medium text-gray-800">
                21%
              </span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm text-gray-600">45 Followers</h4>
              <div className="mt-2 flex items-center overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full border-2 border-white object-cover object-center text-white"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
                <img
                  className="-ml-2 inline-block h-6 w-6 rounded-full border-2 border-white object-cover object-center text-white"
                  src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm text-gray-600">250 Following</h4>
              <div className="mt-2 flex items-center overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full border-2 border-white object-cover object-center text-white"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
            <a className="mt-4 block text-blue-400 hover:underline" href="#">
              3 Collections
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
