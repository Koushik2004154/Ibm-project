export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Artisan Sourdough Bread',
    description: 'Handcrafted sourdough bread with a crispy crust and soft interior. Made with organic flour and fermented for 24 hours for the perfect taste.',
    category: 'Bakery',
    price: 8.99,
    image_url: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Chocolate Croissants',
    description: 'Buttery, flaky croissants filled with premium dark chocolate. Perfect for breakfast or an afternoon treat.',
    category: 'Bakery',
    price: 4.50,
    image_url: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Leather Tote Bag',
    description: 'Premium full-grain leather tote bag with spacious interior. Perfect for daily use, work, or travel. Includes multiple pockets for organization.',
    category: 'Accessories',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Classic Cotton T-Shirt',
    description: 'Soft, breathable 100% organic cotton t-shirt. Available in multiple colors. Perfect fit and exceptional comfort for everyday wear.',
    category: 'Clothing',
    price: 24.99,
    image_url: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'Blueberry Muffins (6-pack)',
    description: 'Fresh-baked blueberry muffins made with real blueberries and topped with a sweet crumble. Sold in packs of 6.',
    category: 'Bakery',
    price: 12.99,
    image_url: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Silver Chain Necklace',
    description: 'Elegant sterling silver chain necklace with adjustable length. Hypoallergenic and perfect for sensitive skin. Timeless design.',
    category: 'Accessories',
    price: 45.00,
    image_url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    name: 'Denim Jacket',
    description: 'Classic denim jacket with vintage wash. Comfortable fit with adjustable waist. Perfect for layering in any season.',
    category: 'Clothing',
    price: 68.00,
    image_url: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    name: 'Cinnamon Rolls (4-pack)',
    description: 'Warm, gooey cinnamon rolls with cream cheese frosting. Made fresh daily with premium cinnamon and butter.',
    category: 'Bakery',
    price: 14.99,
    image_url: 'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    name: 'Wool Scarf',
    description: 'Luxuriously soft merino wool scarf. Lightweight yet warm, perfect for chilly weather. Available in neutral tones.',
    category: 'Accessories',
    price: 35.00,
    image_url: 'https://images.pexels.com/photos/7679456/pexels-photo-7679456.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    name: 'Linen Summer Dress',
    description: 'Breezy linen dress perfect for summer. Lightweight, breathable fabric with a flattering A-line cut. Easy to dress up or down.',
    category: 'Clothing',
    price: 58.00,
    image_url: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '11',
    name: 'Banana Walnut Bread',
    description: 'Moist banana bread loaded with walnuts. Made with ripe bananas and a hint of cinnamon. Perfect with morning coffee.',
    category: 'Bakery',
    price: 9.99,
    image_url: 'https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    name: 'Sunglasses - Aviator Style',
    description: 'Classic aviator sunglasses with UV400 protection. Durable metal frame with adjustable nose pads for perfect fit.',
    category: 'Accessories',
    price: 42.00,
    image_url: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
