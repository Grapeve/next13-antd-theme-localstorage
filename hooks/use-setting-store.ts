import { create } from "zustand";
import { persist } from "zustand/middleware";

import { StorageEnum, ThemeMode } from "@/types";
import { getItem, setItem } from "@/lib/utils";

type SettingType = {
  themeColor: string;
  themeMode: ThemeMode;
};

interface settingData {
  settings: SettingType;
  setSettings: (settings: SettingType) => void;
}

export const useSettingStore = create<settingData>((set) => ({
  // getItem(StorageEnum.Settings) ||
  settings: {
    themeColor: "#5248e5",
    themeMode: ThemeMode.Light,
  },
  setSettings: (settings) => {
    set({ settings });
    setItem(StorageEnum.Settings, settings);
  },
}));
