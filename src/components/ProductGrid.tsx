
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: any[];
  categoryIcons: Record<string, any>;
}

const ProductGrid = ({ products, categoryIcons }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const CategoryIcon = product.categoryId ? categoryIcons[product.categoryId] : Star;
        
        return (
          <Link 
            key={`${product.categoryId || "all"}-${product.id}`}
            to={`/product/${product.categoryId || "all"}/${product.id}`}
            className="group"
          >
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.log(`Image failed to load: ${product.image}`);
                    e.currentTarget.src = "https://placehold.co/400x400?text=Product";
                  }}
                />
                {product.limitedEdition && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                    Limited
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <Badge
                    className={cn(
                      "bg-black/60 backdrop-blur-md border-none text-white flex items-center gap-1",
                      product.categoryColor && `bg-gradient-${product.categoryColor} bg-clip-text text-transparent`
                    )}
                  >
                    <CategoryIcon className="w-3 h-3" />
                    {product.categoryName || "VibeMerch"}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="pt-4 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#D946EF] transition-colors truncate">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm text-white/70 mt-1 line-clamp-2 h-10">
                  {product.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-4">
                <Badge variant="outline" className="bg-white/10 text-white/80 border-none">
                  {product.badge}
                </Badge>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
