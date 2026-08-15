import { Heart, ShoppingCart, Star, ArrowUpRight } from "lucide-react";

import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-600 shadow-md transition hover:bg-black hover:text-white"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1 text-sm">
          <Star size={16} fill="currentColor" className="text-yellow-500" />

          <span className="font-medium text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-gray-400">({product.rating.count})</span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
          >
            <ShoppingCart size={18} />

            <span className="hidden sm:inline">Add to Cart</span>

            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
