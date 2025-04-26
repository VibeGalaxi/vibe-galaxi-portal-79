
import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  const Icon = category.icon;
  
  return (
    <Badge 
      className={cn(
        "bg-black/60 backdrop-blur-md border-none text-white flex items-center gap-1",
        category.color && `bg-gradient-to-r ${category.color}`,
        className
      )}
    >
      <Icon className="w-3 h-3" />
      {category.name}
    </Badge>
  );
};

export default CategoryBadge;
