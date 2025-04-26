
import { useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { categories } from '@/data/products';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id.toString() === productId);
  
  if (!product || !category) {
    return (
      <div className="min-h-screen bg-cosmic-900 flex items-center justify-center">
        <h1 className="text-white text-2xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmic-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative group">
            <Card className="overflow-hidden border-0 bg-black/20 backdrop-blur">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00ff]/10 to-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                {product.name}
              </h1>
              <p className="text-xl text-white/80 mb-6">{product.description}</p>
              
              <div className="flex items-center gap-4 mb-8">
                {product.limitedEdition && (
                  <Badge 
                    variant="outline" 
                    className="bg-[#ff00ff]/20 text-white border-[#ff00ff]/50 animate-pulse"
                  >
                    Limited Edition
                  </Badge>
                )}
                <Badge 
                  className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-black font-medium"
                >
                  {product.badge}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 mb-8">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ff00ff] text-[#ff00ff]" />
                ))}
                <span className="text-white/70 ml-2">(128 reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-orbitron text-white mb-4">Product Features</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#00ffff]" />
                    NFC-enabled for exclusive content
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#00ffff]" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#00ffff]" />
                    Unlock digital experiences
                  </li>
                </ul>
              </div>
            </div>

            <button 
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-black font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
