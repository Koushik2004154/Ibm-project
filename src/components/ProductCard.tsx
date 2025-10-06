import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-400">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
