
import { Category } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categories: {
    id: string;
    name: string;
    icon: any;
    color: string;
    products: any[];
  }[];
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  badges: string[];
  selectedBadges: string[];
  onBadgeToggle: (badge: string) => void;
  showLimited: boolean;
  onLimitedToggle: () => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  badges,
  selectedBadges,
  onBadgeToggle,
  showLimited,
  onLimitedToggle,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-6 sticky top-4">
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            <Category className="w-5 h-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-white/70 hover:text-white hover:bg-white/10",
                !selectedCategory && "bg-white/10 text-white"
              )}
              onClick={() => onCategoryChange(null)}
            >
              All Products
            </Button>
            
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-white/70 hover:text-white hover:bg-white/10",
                    selectedCategory === category.id && "bg-white/10 text-white"
                  )}
                  onClick={() => onCategoryChange(category.id)}
                >
                  <CategoryIcon className="mr-2 h-4 w-4" />
                  {category.name}
                  <span className="ml-auto text-xs text-white/50">
                    {category.products.length}
                  </span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-white">Features</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-white font-medium">Limited Edition</p>
                <p className="text-xs text-white/60">Show only limited items</p>
              </div>
              <Switch 
                checked={showLimited}
                onCheckedChange={onLimitedToggle}
                className="data-[state=checked]:bg-gradient-to-r from-[#D946EF] to-[#1EAEDB]"
              />
            </div>
            
            <Separator className="bg-white/10" />
            
            <div className="space-y-3">
              <p className="text-white font-medium">Technology</p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className={cn(
                      "cursor-pointer border-white/20 hover:border-white/40",
                      selectedBadges.includes(badge)
                        ? "bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white border-none"
                        : "bg-white/5 text-white/70"
                    )}
                    onClick={() => onBadgeToggle(badge)}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFilters;
