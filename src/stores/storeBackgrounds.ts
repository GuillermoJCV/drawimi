import { create } from "zustand";

interface ImageStore {
  index: number;
  images: ImageData[];
  storeFirstBackground: (first: ImageData) => void;
  push: (newImage: ImageData) => void;
  clear: () => void;
  incrementIndex: () => void;
  decrementIndex: () => void;
  getCurrentIndex: () => number;
  getImage: (index: number) => ImageData;
}

const useBackgroundStore = create<ImageStore>((set, get) => ({
  index: -1,
  images: [],
  storeFirstBackground: (firstImage) =>
    set(() => ({
      images: [firstImage],
      index: 0,
    })),
  push: (newImage) =>
    set((state) => {
      const newImages = state.images.slice(0, state.index + 1);
      newImages.push(newImage);

      return {
        images: newImages,
        index: state.index + 1,
      };
    }),
  clear: () =>
    set(() => ({
      images: [],
      index: 0,
    })),
  incrementIndex: () =>
    set((state) => ({
      index:
        state.index < state.images.length - 1 ? state.index + 1 : state.index,
    })),
  decrementIndex: () =>
    set((state) => ({
      index: state.index > 0 ? state.index - 1 : state.index,
    })),
  getCurrentIndex: () => get().index,
  getImage: (index) => get().images[index],
}));

export default useBackgroundStore;
