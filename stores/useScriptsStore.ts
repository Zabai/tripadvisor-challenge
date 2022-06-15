import create from "zustand";

type ScriptsState = {
  hasGoogleMaps: boolean;
  setGoogleMaps: (loaded: boolean) => void;
};

export default create<ScriptsState>((set) => ({
  hasGoogleMaps: false,
  setGoogleMaps: (loaded) => set(() => ({ hasGoogleMaps: loaded })),
}));
