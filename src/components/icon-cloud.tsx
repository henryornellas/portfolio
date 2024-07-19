"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  type ICloud,
  renderSimpleIcon,
  type SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2.5,
    activeCursor: "cursor",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.004,
    minSpeed: 0.002,
    shuffleTags: true,
    dragControl: true,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  
  const html = document.documentElement
  const userTheme = localStorage.getItem("theme")
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  
  const initialTheme = () => {
    if (userTheme?.includes("dark") || (!userTheme && systemTheme)) {
      return "dark"
    } else {
      return "light"
    }
  }

  const [theme, setTheme] = useState(initialTheme);
  
  function callback(mutationList: any) {
    mutationList.forEach((e: MutationRecord) => {
      if (e.type === 'attributes' && e.attributeName === 'class') {
        setTheme(html.classList.contains("dark") ? "dark" : "light")
      }
    })
  }

  const observer = new MutationObserver(callback)
  observer.observe(html, { attributes: true })

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);

  }, [iconSlugs, theme]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme)
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>{renderedIcons}</Cloud>
  );
}
