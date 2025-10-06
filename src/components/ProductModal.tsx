import { X, MessageCircle, Mail } from 'lucide-react';
import { Product } from '../data/products';
import { useEffect } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${product.name} priced at $${product.price.toFixed(2)}`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 md:h-full min-h-[320px]">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none"
            />
          </div>

          <div className="p-8 md:p-10">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {product.category}
            </span>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-blue-400">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/1234567890?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>

              <a
                href={`mailto:shop@example.com?subject=Inquiry about ${product.name}&body=${whatsappMessage}`}
                className="flex items-center justify-center space-x-2 w-full bg-blue-400 text-white py-4 rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Contact via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
