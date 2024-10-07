import { ImageLoaderPropsWithConfig } from "next/dist/shared/lib/image-config";

function normalizeSrc(src: string): string {
  return src[0] === "/" ? src.slice(1) : src;
}

function imgLoader({ src, width }: ImageLoaderPropsWithConfig): string {
    console.log('loader', new Date())
  const baseUrl = process.env.NODE_ENV === "development" ? "/" : "portfolio";
  return `${baseUrl}${normalizeSrc(src)}?imwidth=${width}`;
}

export default imgLoader;
