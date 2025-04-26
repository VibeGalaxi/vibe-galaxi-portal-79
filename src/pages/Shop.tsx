
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "@/data/products";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { Category } from "@/components/CategoryBadge";
import { Star, Coffee, Shirt, Asterisk } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "vibemerch": Star,
  "t-shirts": Shirt,
  "hoodies": Asterisk,
  "mugs": Coffee
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [showLimited, setShowLimited] = useState<boolean>(false);
  
  // Parse category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Get all products from selected category or all categories
  const allProducts = selectedCategory 
    ? categories.find(c => c.id === selectedCategory)?.products || []
    : categories.flatMap(category => 
        category.products.map(product => ({
          ...product,
          categoryId: category.id,
          categoryName: category.name,
          categoryColor: category.color
        }))
      );
  
  // Apply filters
  const filteredProducts = allProducts.filter(product => {
    // Filter by badge
    const badgeMatch = selectedBadges.length === 0 || selectedBadges.includes(product.badge);
    
    // Filter by limited edition
    const limitedMatch = !showLimited || product.limitedEdition;
    
    return badgeMatch && limitedMatch;
  });
  
  // Get unique badges for filter options
  const allBadges = Array.from(new Set(allProducts.map(p => p.badge)));
  
  // Change the selected category
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    
    if (categoryId) {
      searchParams.set("category", categoryId);
    } else {
      searchParams.delete("category");
    }
    
    setSearchParams(searchParams);
  };
  
  // Update badge filters
  const handleBadgeToggle = (badge: string) => {
    setSelectedBadges(prev => 
      prev.includes(badge)
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  };
  
  // Toggle limited edition filter
  const handleLimitedToggle = () => {
    setShowLimited(prev => !prev);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      {/* Hero Banner */}
      <div className="relative h-72 bg-gradient-to-r from-[#1A1F2C] to-[#2A2F4C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1200x400/1A1F2C/FFFFFF?text=Premium+Collection')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron text-gradient font-bold mb-4">Collections</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Explore our premium selection of unique products designed for the digital age
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <ProductFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              badges={allBadges}
              selectedBadges={selectedBadges}
              onBadgeToggle={handleBadgeToggle}
              showLimited={showLimited}
              onLimitedToggle={handleLimitedToggle}
            />
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-orbitron text-white">
                {selectedCategory 
                  ? categories.find(c => c.id === selectedCategory)?.name 
                  : "All Products"}
                <span className="text-white/60 text-lg ml-2">({filteredProducts.length})</span>
              </h2>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid 
                products={filteredProducts}
                categoryIcons={categoryIcons}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Star className="w-12 h-12 text-white/20" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-white/60 max-w-md">
                  Try adjusting your filters or browse all categories to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
