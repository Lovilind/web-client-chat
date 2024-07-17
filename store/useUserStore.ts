import { create } from 'zustand';
import { devtools, DevtoolsOptions } from 'zustand/middleware';

interface UserState {
  isLogin: boolean;
  setIsLogin: (bool: boolean) => void;
}

const initialUserState: Omit<UserState, 'setIsLogin'> = {
  isLogin: false,
};

const createStore = (
  set: (
    partial: Partial<UserState> | ((state: UserState) => Partial<UserState>),
    replace?: boolean,
  ) => void,
): UserState => ({
  ...initialUserState,
  // setIsLogin: (bool: boolean) => set({ isLogin: false }),
  setIsLogin: (bool: boolean) => set({ isLogin: bool }),
});

const devtoolsOptions: DevtoolsOptions = { name: 'userStore' };

const useUserStore = create<UserState>()(
  devtools(createStore, devtoolsOptions),
);

export default useUserStore;
