const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

export function publicAsset(path: string): string {
  return `${publicUrl}/${path.replace(/^\/+/, "")}`;
}

export function publicAssetUrl(path: string): string {
  return `url(${publicAsset(path)})`;
}
