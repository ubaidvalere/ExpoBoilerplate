import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import zustandStorage from "@/utils/zustandStorage";
import { ProductType } from "@/utils/interfaces";

export interface CartItem {
  product: ProductType;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product: ProductType, quantity: number = 1) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          // If item already exists in cart, update quantity
          set({
            items: items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          // Add new item to cart
          set({ items: [...items, { product, quantity }] });
        }
      },

      removeFromCart: (productId: number) => {
        const { items } = get();
        set({ items: items.filter((item) => item.product.id !== productId) });
      },

      updateQuantity: (productId: number, quantity: number) => {
        const { items } = get();
        if (quantity <= 0) {
          // If quantity is 0 or less, remove item from cart
          set({ items: items.filter((item) => item.product.id !== productId) });
        } else {
          // Otherwise update quantity
          set({
            items: items.map((item) =>
              item.product.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },

      clearCart: () => {
        set({ items: [] });
      },

      getCartTotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getCartItemCount: () => get().items.length,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useCartStore;
