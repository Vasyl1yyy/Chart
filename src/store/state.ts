import { create } from 'zustand';

interface StoreState {
  data: Record<string, any>[] | null;
  setData: (data: Record<string, any>[]) => void;
  clearData: () => void;
}

export const useStore = create<StoreState>((set) => ({
  data: null,
  setData: (data) => set({ data: data }),
  clearData: () => set({ data: null }),
}));
