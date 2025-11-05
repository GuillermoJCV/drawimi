const downloadFormats = ["png", "jpeg", "webp"] as const;

type DownloadFormat = (typeof downloadFormats)[number];

export { downloadFormats };
export type { DownloadFormat };
