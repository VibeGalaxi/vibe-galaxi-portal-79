
import { useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart, Share } from "lucide-react";
import { categories } from '@/data/products';
import PremiumNavbar from '../components/PremiumNavbar';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const { toast } = useToast();
  
  const category = categories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id.toString() === productId);
  
  if (!product || !category) {
    return (
      <div className="min-h-screen bg-cosmic-900 flex items-center justify-center">
        <h1 className="text-white text-2xl">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Product link has been copied to your clipboard.",
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Added to wishlist!",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-cosmic-900">
      <PremiumNavbar />
      
      <main className="pt-24">
        {/* Main Product Section */}
        <div className="px-4 py-12">
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

                  <div className="flex gap-4">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-black font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                    
                    <button 
                      onClick={handleWishlist}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={handleShare}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                      aria-label="Share product"
                    >
                      <Share className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="px-4 py-16 bg-gradient-to-b from-cosmic-900 to-black/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.products.slice(0, 4).map(relatedProduct => (
                <Card 
                  key={relatedProduct.id}
                  className="bg-white/5 border-0 overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-medium truncate">{relatedProduct.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details & Specs */}
        <div className="px-4 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-orbitron text-white mb-4">Product Details</h3>
                <ul className="space-y-3 text-white/80">
                  <li>Material: Premium Cotton</li>
                  <li>Style: Unisex</li>
                  <li>Care: Machine wash cold</li>
                  <li>Origin: Made in VibeGalaxi</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-orbitron text-white mb-4">Sizing Guide</h3>
                <p className="text-white/80">
                  Our products are designed to fit true to size. For a more relaxed fit, we recommend sizing up.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-orbitron text-white mb-4">Digital Features</h3>
                <ul className="space-y-3 text-white/80">
                  <li>NFC-enabled for exclusive content</li>
                  <li>AR experiences via mobile app</li>
                  <li>Monthly digital drops</li>
                  <li>Community access</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-orbitron text-white mb-4">Shipping Info</h3>
                <p className="text-white/80">
                  Free shipping on orders over $50. Express delivery available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
