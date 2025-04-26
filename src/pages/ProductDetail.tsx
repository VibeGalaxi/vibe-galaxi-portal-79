
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Star, ArrowLeft, ShoppingBag, Heart, Share, Info, Check } from "lucide-react";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const category = categories.find(cat => cat.id === categoryId);
  const product = category?.products.find(p => p.id === Number(productId));

  if (!product) {
    return <div>Produs negăsit</div>;
  }

  const similarProducts = category?.products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selectează o mărime",
        description: "Te rugăm să selectezi o mărime înainte de a adăuga în coș",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Adăugat în coș",
      description: `${product.name} (${selectedSize}) a fost adăugat în coșul tău`,
      action: (
        <Link to="/#category-slider" className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
          Vezi coșul
        </Link>
      ),
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Selectează o mărime",
        description: "Te rugăm să selectezi o mărime înainte de a continua",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Procesăm comanda ta",
      description: "Vei fi redirecționat către pagina de checkout",
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Adăugat la favorite",
      description: `${product.name} a fost adăugat la lista ta de favorite`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copiat",
      description: "Link-ul produsului a fost copiat în clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 to-cosmic-800 text-white">
      <PremiumNavbar />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Înapoi la colecții</span>
        </Link>
      </div>
      
      {/* Main Product Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="overflow-hidden rounded-2xl cursor-zoom-in">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 transition-transform duration-500 ease-out group-hover:scale-125"
                />
              </div>
              
              {product.limitedEdition && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-neon-pink to-neon-blue px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-neon animate-pulse-neon z-10">
                  Ediție Limitată
                </div>
              )}
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-orbitron mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-neon-blue" />
                Caracteristici Cosmice
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-neon-pink mr-2 mt-0.5 flex-shrink-0" />
                  <span>Material premium de pe Planete îndepărtate</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-neon-pink mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tehnologie avansată de respirație și reglare termică</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-neon-pink mr-2 mt-0.5 flex-shrink-0" />
                  <span>Rezistent la Pete și Paradoxuri Temporale</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-neon-pink mr-2 mt-0.5 flex-shrink-0" />
                  <span>Inserții Cuantice pentru Durabilitate Extinsă</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gradient-to-r from-neon-pink to-neon-blue px-3 py-1 rounded-full text-xs font-medium">
                  {product.badge}
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {category?.name}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-4 sm:w-5 h-4 sm:h-5 ${star <= 4 ? 'text-neon-pink fill-neon-pink' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-white/60">4.0 (42 recenzii)</span>
              </div>
              
              <p className="text-xl sm:text-2xl font-orbitron mb-6">
                <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">169.00 CR</span>
                <span className="text-white/40 ml-2 text-base sm:text-lg line-through">199.00 CR</span>
              </p>
              
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">{product.description}</p>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mt-4">
                  Designul nostru {product.name} este mai mult decât îmbrăcăminte - este o experiență vibratorie 
                  concepută pentru a-ți amplifica vibrația personală și a te conecta cu dimensiunile superioare ale VibeGalaxi.
                </p>
              </div>
            </div>
            
            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium mb-3">Selectează mărimea</h3>
              <div className="flex flex-wrap gap-3">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                      selectedSize === size 
                        ? 'border-neon-pink bg-neon-pink/20 text-white' 
                        : 'border-white/20 bg-white/5 text-white/60 hover:border-white/40 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-neon-blue mt-2 text-sm">Mărime selectată: {selectedSize}</p>
              )}
            </div>
            
            {/* Quantity Selection */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-medium mb-3">Cantitate</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-10 bg-white/10 rounded-l-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      -
                    </button>
                    <div className="w-12 h-10 bg-white/5 flex items-center justify-center border-y border-white/10">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-10 h-10 bg-white/10 rounded-r-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-white/60 text-sm">În stoc: 25 bucăți</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="premium-button flex-1 flex items-center justify-center gap-2 py-3 sm:py-4"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Adaugă în coș</span>
              </button>
              
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-white hover:bg-white/90 text-cosmic-900 px-6 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Cumpără acum</span>
              </button>
            </div>
            
            {/* Wishlist and Share */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleAddToWishlist}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Heart className="w-5 h-5" />
                <span>Adaugă la favorite</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Share className="w-5 h-5" />
                <span>Distribuie</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Section */}
      <div className="bg-cosmic-800 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-orbitron font-bold mb-8 sm:mb-10 text-center">Detalii despre produs</h2>
            
            <div className="space-y-6 sm:space-y-10">
              <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-orbitron mb-4">Descriere</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base sm:text-lg">
                    {product.name} face parte din Colecția VibeGalaxi de îmbrăcăminte și accesorii premium create pentru 
                    exploratorii universurilor digitale și fizice. Design-ul nostru unic combină estetica futuristă cu funcționalitate 
                    de ultimă generație, creând o piesă versatilă care se potrivește atât pentru aventurile tale zilnice cât și pentru 
                    călătoriile tale inter-dimensionale.
                  </p>
                </div>
              </div>
              
              <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-orbitron mb-4">Specificații</h3>
                <ul className="space-y-3 text-sm sm:text-base text-white/80">
                  <li className="flex justify-between pb-2 border-b border-white/10">
                    <span>Material</span>
                    <span className="text-white">Cosmic Cotton™ și Quantum Fiber</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-white/10">
                    <span>Tehnologii</span>
                    <span className="text-white">NFC, AR-enabled, Glow-in-the-dark</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-white/10">
                    <span>Origine</span>
                    <span className="text-white">Fabricat în VibeGalaxi</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-white/10">
                    <span>Îngrijire</span>
                    <span className="text-white">Spălare la 30°C, Nu folosiți înălbitor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-orbitron font-bold mb-8 sm:mb-10 text-center">Produse similare</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {similarProducts?.map(similarProduct => (
            <Link 
              key={similarProduct.id} 
              to={`/product/${categoryId}/${similarProduct.id}`} 
              className="glass-card p-4 sm:p-6 hover:translate-y-[-5px] transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  src={similarProduct.image} 
                  alt={similarProduct.name} 
                  className="w-full h-48 sm:h-60 object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="font-orbitron font-bold text-base sm:text-lg mb-2 group-hover:text-neon-pink transition-colors">
                {similarProduct.name}
              </h3>
              
              <p className="text-white/60 mb-4 line-clamp-2 text-sm sm:text-base">{similarProduct.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-neon-blue font-orbitron text-sm sm:text-base">169.00 CR</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">{similarProduct.badge}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="bg-cosmic-800 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-orbitron font-bold mb-2 text-center">Ce spun Vibonauții</h2>
          <p className="text-center text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Experiențele autentice ale membrilor comunității VibeGalaxi care au încercat deja {product.name}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Quantum",
                avatar: "A",
                text: "Am purtat tricoul la ultimul festival de muzică electronică și toată lumea m-a întrebat de unde îl am. VibeGalaxi are cel mai tare merch!"
              },
              {
                name: "Maria Nebula",
                avatar: "M",
                text: "NFC-ul integrat în design îmi permite să-mi partajez profilul social cu un simplu tap. Calitatea materialului este extraordinară."
              },
              {
                name: "David Vortex",
                avatar: "D",
                text: "Sunt colecționar de ediții limitate și pot spune că acest produs depășește cu mult așteptările. Detaliile sunt incredibile!"
              }
            ].map((review, index) => (
              <div key={index} className="glass-morphism p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue flex items-center justify-center font-bold text-sm sm:text-base">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">{review.name}</h4>
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-neon-pink fill-neon-pink" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="relative py-12 sm:py-16 px-6 sm:px-8 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 backdrop-blur-sm border border-white/10 rounded-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-pink/0 via-neon-pink/50 to-neon-blue/0" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-pink/0" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-4xl font-orbitron font-bold mb-4">
              Pregătește-te pentru următorul <span className="text-neon-pink">Vibe Drop</span>
            </h2>
            <p className="text-white/70 max-w-2xl mb-6 sm:mb-8 text-sm sm:text-base">
              Abonează-te la newsletter-ul nostru pentru a fi primul care află despre lansările exclusive și reduceri speciale pentru membrii comunității.
            </p>
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
              <input 
                type="email" 
                placeholder="Adresa ta de email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-neon-pink/50"
              />
              <button className="premium-button text-sm sm:text-base whitespace-nowrap">
                Abonează-te
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
