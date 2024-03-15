import { create } from "zustand";

type MatchingId = number | null;

interface MatchingState {
  matchingId: MatchingId;
}

interface MatchingAction {
  setMatchingId: (matchingId: MatchingId) => void;
  getMatchingId: () => MatchingId;
}

export const useMatchingStore = create<MatchingAction & MatchingState>(
  (set, get) => ({
    matchingId: null,
    setMatchingId: matchingId => set({ matchingId }),
    getMatchingId: () => get().matchingId,
  }),
);
