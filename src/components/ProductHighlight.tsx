
import { ReactNode } from "react";

interface ProductHighlightProps {
  headline: string;
  subhead: string;
  features: ReactNode;
  imageUrl?: string;
  reverse?: boolean;
  bgFrom?: string;
  bgTo?: string;
}

const ProductHighlight = ({
  headline,
  subhead,
  features,
  imageUrl,
  reverse,
  bgFrom = "#221F26",
  bgTo = "#1EAEDB",
}: ProductHighlightProps) => {
  return (
    <section
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center py-16 md:py-24 px-4 w-full`}
      style={{
        background: `linear-gradient(120deg, ${bgFrom} 60%, ${bgTo} 100%)`,
      }}
    >
      {imageUrl && (
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <img
            src={imageUrl}
            alt={headline}
            className="rounded-xl shadow-2xl w-72 h-72 object-cover neon-glow animate-float"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 px-0 md:px-10 text-center md:text-left">
        <h3 className="font-orbitron text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{headline}</h3>
        <p className="text-lg text-white/90 font-montserrat mb-6">{subhead}</p>
        <div className="mb-4">{features}</div>
      </div>
    </section>
  );
};

export default ProductHighlight;
