export interface FileNode {
  name: string;
  isFolder: boolean;
  children?: FileNode[];
}

export const fileTree: FileNode = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "vite.svg",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "CountryCapital.tsx",
              isFolder: false,
            },
            {
              name: "DetectScroll.tsx",
              isFolder: false,
            },
            {
              name: "Explorer.tsx",
              isFolder: false,
            },
            {
              name: "Home.tsx",
              isFolder: false,
            },
            {
              name: "Navbar.tsx",
              isFolder: false,
            },
            {
              name: "Quiz.tsx",
              isFolder: false,
            },
            {
              name: "TrafficLights.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "constants",
          isFolder: true,
          children: [
            {
              name: "fileTree.ts",
              isFolder: false,
            },
          ],
        },
        {
          name: "data",
          isFolder: true,
          children: [
            {
              name: "game-data.ts",
              isFolder: false,
            },
          ],
        },
        {
          name: "hooks",
          isFolder: true,
          children: [
            {
              name: "useScrollDetection.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "styles",
          isFolder: true,
          children: [
            {
              name: "CountryCapital.css",
              isFolder: false,
            },
            {
              name: "index.css",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: ".eslintrc.cjs",
      isFolder: false,
    },
    {
      name: ".gitignore",
      isFolder: false,
    },
    {
      name: "index.html",
      isFolder: false,
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "package-lock.yaml",
      isFolder: false,
    },
    {
      name: "postcss.config.js",
      isFolder: false,
    },
    {
      name: "README.md",
      isFolder: false,
    },
    {
      name: "tailwind.config.js",
      isFolder: false,
    },
    {
      name: "tsconfig.json",
      isFolder: false,
    },
    {
      name: "tsconfig.node.json",
      isFolder: false,
    },
    {
      name: "vite.config.ts",
      isFolder: false,
    },
  ],
};
