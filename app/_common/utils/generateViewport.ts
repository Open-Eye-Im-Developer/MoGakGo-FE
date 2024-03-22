interface generateViewportProps {
  lightColor: string;
  darkColor: string;
}

export const generateViewport = ({
  lightColor,
  darkColor,
}: generateViewportProps) => {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: lightColor },
      { media: "(prefers-color-scheme: dark)", color: darkColor },
    ],
  };
};
