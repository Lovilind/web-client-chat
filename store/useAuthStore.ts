import { create } from 'zustand';
import { devtools, DevtoolsOptions } from 'zustand/middleware';

interface AuthState {
  duplicateCheckedEmail: string | null;
  setDuplicateCheckedEmail: (email: string) => void;
  resetDuplicateCheckedEmail: () => void;
}

const initialAuthState: Omit<
  AuthState,
  'setDuplicateCheckedEmail' | 'resetDuplicateCheckedEmail'
> = {
  duplicateCheckedEmail: null,
};

const createStore = (
  set: (
    partial: Partial<AuthState> | ((state: AuthState) => Partial<AuthState>),
    replace?: boolean,
  ) => void,
): AuthState => ({
  ...initialAuthState,
  setDuplicateCheckedEmail: (email: string) =>
    set({ duplicateCheckedEmail: email }),
  resetDuplicateCheckedEmail: () => set({ duplicateCheckedEmail: null }),
});

const devtoolsOptions: DevtoolsOptions = { name: 'authStore' };

const useAuthStore = create<AuthState>()(
  devtools(createStore, devtoolsOptions),
);

export default useAuthStore;
