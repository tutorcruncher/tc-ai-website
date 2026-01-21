interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function ContentBlock({
  title,
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: ContentBlockProps) {
  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
          {title}
        </h2>
        <div className="text-muted-dark leading-relaxed">{children}</div>
      </div>
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
