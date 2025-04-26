
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Star } from "lucide-react";

const ProductDetail = () => {
  const { categoryId, productId } = useParams();

  // Găsim categoria și produsul
  const category = categories.find(cat => cat.id === categoryId);
  const product = category?.products.find(p => p.id === Number(productId));

  if (!product) {
    return <div>Produs negăsit</div>;
  }

  // Produse similare în aceeași categorie
  const similarProducts = category?.products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cosmic-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Imagine produs */}
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Detalii produs */}
          <div>
            <h1 className="text-4xl font-orbitron font-bold mb-4">{product.name}</h1>
            <p className="text-white/80 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <span className="bg-gradient-to-r from-neon-pink to-neon-blue px-3 py-1 rounded-full text-sm">
                {product.badge}
              </span>
              {product.limitedEdition && (
                <span className="ml-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                  Ediție Limitată
                </span>
              )}
            </div>

            {/* Produse similare */}
            <div className="mt-12">
              <h3 className="text-2xl font-orbitron mb-6">Produse similare</h3>
              <div className="grid grid-cols-3 gap-4">
                {similarProducts?.map(similarProduct => (
                  <Link 
                    key={similarProduct.id} 
                    to={`/product/${categoryId}/${similarProduct.id}`} 
                    className="group"
                  >
                    <img 
                      src={similarProduct.image} 
                      alt={similarProduct.name} 
                      className="rounded-lg hover:scale-105 transition-transform"
                    />
                    <p className="text-sm mt-2 group-hover:text-neon-pink">{similarProduct.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
