import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Counter {
  count: number;
  increaseCount: (by: number) => void;
}

export const useCounter = create<Counter>()(
  // devtools helps to show the state in redux dev tools chrome extensions
  // persist create a local storage and saves the state previous value even if we reload
  devtools(
    persist(
      (set) => ({
        count: 0,
        increaseCount: (by) =>
          set((state) => ({
            count: state.count + by,
          })),
      }),
      { name: "counter" }
    )
  )
);
