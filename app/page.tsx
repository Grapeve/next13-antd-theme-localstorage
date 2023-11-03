"use client";

import { Button, Card } from "antd";
import { MdCircle } from "react-icons/md";

import { colorPrimarys } from "@/theme/antd/theme";
import { useSettingStore } from "@/hooks/use-setting-store";

export default function Home() {
  const { settings, setSettings } = useSettingStore();
  const { themeColor } = settings;

  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 w-[200px] mt-2">
        {Object.entries(colorPrimarys).map(([preset, color]) => (
          <Card
            key={preset}
            className="flex h-14 w-full cursor-pointer items-center justify-center"
            style={{
              backgroundColor: themeColor === color ? `${color}14` : "",
            }}
            onClick={() => setSettings({ ...settings, themeColor: color })}
          >
            <div style={{ color }}>
              <MdCircle style={{ fontSize: themeColor === color ? 24 : 12 }} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
