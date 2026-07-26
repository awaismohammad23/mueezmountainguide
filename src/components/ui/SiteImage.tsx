import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "loading"> & {
  priority?: boolean;
};

export function SiteImage({
  priority = false,
  fetchPriority,
  decoding,
  quality = 75,
  ...props
}: SiteImageProps) {
  if (priority) {
    return (
      <Image
        {...props}
        priority
        quality={quality}
        fetchPriority={fetchPriority ?? "high"}
        decoding={decoding ?? "sync"}
      />
    );
  }

  return (
    <Image
      {...props}
      loading="lazy"
      quality={quality}
      fetchPriority={fetchPriority ?? "auto"}
      decoding={decoding ?? "async"}
    />
  );
}
