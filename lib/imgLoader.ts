import { ImageLoaderPropsWithConfig } from "next/dist/shared/lib/image-config";

function normalizeSrc(src: string): string {
  return src[0] === "/" ? src.slice(1) : src;
}

function imgLoader({ src }: ImageLoaderPropsWithConfig): string {
  const baseUrl = process.env.NODE_ENV === "development" ? "/" : "portfolio/";
  console.log(`${baseUrl}${normalizeSrc(src)}`)
  return `${baseUrl}${normalizeSrc(src)}`;
}

export default imgLoader;
