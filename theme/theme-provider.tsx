"use client";

import { useEffect } from "react";
import { ConfigProvider, theme } from "antd";

import { useSettingStore } from "@/hooks/use-setting-store";
import { getItem } from "@/lib/utils";

import { StorageEnum } from "@/types";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { settings, setSettings } = useSettingStore();
  const { themeColor } = settings;

  useEffect(() => {
    const settingsStorage = getItem(StorageEnum.Settings);
    setSettings({ ...settings, ...(settingsStorage as object) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
