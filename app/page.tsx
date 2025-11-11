'use client'

import { useState } from 'react'

export default function Home() {
  const [menuFilter, setMenuFilter] = useState('all')

  const menuItems = [
    {
      name: 'Chocolate Decadence',
      category: 'chocolate',
      description: 'Rich dark chocolate layers with silky ganache',
      price: '$45',
      image: '🍫'
    },
    {
      name: 'Vanilla Rose',
      category: 'classic',
      description: 'Delicate vanilla sponge with rosewater buttercream',
      price: '$38',
      image: '🌹'
    },
    {
      name: 'Lemon Bliss',
      category: 'fruit',
      description: 'Zesty lemon curd with meringue frosting',
      price: '$40',
      image: '🍋'
    },
    {
      name: 'Red Velvet Dream',
      category: 'classic',
      description: 'Classic red velvet with cream cheese frosting',
      price: '$42',
      image: '❤️'
    },
    {
      name: 'Strawberry Fields',
      category: 'fruit',
      description: 'Fresh strawberries with champagne cream',
      price: '$48',
      image: '🍓'
    },
    {
      name: 'Hazelnut Praline',
      category: 'specialty',
      description: 'Toasted hazelnuts with caramel buttercream',
      price: '$50',
      image: '🌰'
    },
    {
      name: 'Matcha Harmony',
      category: 'specialty',
      description: 'Japanese matcha with white chocolate mousse',
      price: '$46',
      image: '🍵'
    },
    {
      name: 'Carrot Spice',
      category: 'classic',
      description: 'Spiced carrot cake with cinnamon cream cheese',
      price: '$40',
      image: '🥕'
    },
    {
      name: 'Dark Forest',
      category: 'chocolate',
      description: 'Black forest with cherry compote and whipped cream',
      price: '$44',
      image: '🍒'
    }
  ]

  const filteredMenu = menuFilter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === menuFilter)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-brown-700">Nivora</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-brown-600 hover:text-brown-800 transition">Home</a>
            <a href="#menu" className="text-brown-600 hover:text-brown-800 transition">Menu</a>
            <a href="#about" className="text-brown-600 hover:text-brown-800 transition">About</a>
            <a href="#contact" className="text-brown-600 hover:text-brown-800 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-brown-700 text-cream px-6 py-2 rounded-full hover:bg-brown-800 transition"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-brown-800 leading-tight">
                Where Two Passions<br />Create One<br />
                <span className="text-brown-600">Masterpiece</span>
              </h1>
              <p className="text-xl text-brown-600 leading-relaxed">
                Handcrafted artisan cakes and pastries, baked fresh daily with love and expertise by a devoted couple. Every creation tells our story.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#menu"
                  className="bg-brown-700 text-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-brown-800 transition shadow-lg"
                >
                  View Menu
                </a>
                <a
                  href="#about"
                  className="border-2 border-brown-700 text-brown-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-brown-50 transition"
                >
                  Our Story
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brown-200 to-brown-300 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-90">
                  🎂
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-brown-800">5.0</div>
                <div className="text-sm text-brown-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-4">
              Our Signature Cakes
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto">
              Each cake is a unique creation, made to order with the finest ingredients
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'chocolate', 'fruit', 'classic', 'specialty'].map((filter) => (
              <button
                key={filter}
                onClick={() => setMenuFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  menuFilter === filter
                    ? 'bg-brown-700 text-cream shadow-lg'
                    : 'bg-brown-100 text-brown-700 hover:bg-brown-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center text-8xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-bold text-brown-800">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-brown-600">{item.price}</span>
                  </div>
                  <p className="text-brown-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6 bg-gradient-to-br from-brown-50 to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brown-200 to-brown-300 shadow-lg flex items-center justify-center text-6xl">
                  👨‍🍳
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brown-300 to-brown-400 shadow-lg flex items-center justify-center text-6xl">
                  👩‍🍳
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brown-300 to-brown-400 shadow-lg flex items-center justify-center text-6xl">
                  🥐
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brown-200 to-brown-300 shadow-lg flex items-center justify-center text-6xl">
                  🍰
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-800">
                Crafted with Love,<br />Perfected Together
              </h2>
              <p className="text-lg text-brown-600 leading-relaxed">
                Nivora was born from a shared dream between two passionate bakers who found love in the kitchen. Each brings their own unique mastery to every creation.
              </p>
              <p className="text-lg text-brown-600 leading-relaxed">
                <strong className="text-brown-800">His expertise</strong> lies in classic French techniques and delicate pastry work, while <strong className="text-brown-800">her artistry</strong> shines through innovative flavors and stunning decorative designs.
              </p>
              <p className="text-lg text-brown-600 leading-relaxed">
                Together, we've built a home bakery where tradition meets creativity, and every cake tells a story of partnership, dedication, and the pursuit of perfection.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brown-800">5+</div>
                  <div className="text-sm text-brown-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brown-800">500+</div>
                  <div className="text-sm text-brown-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brown-800">100%</div>
                  <div className="text-sm text-brown-600">Made Fresh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-brown-800 text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-brown-200 mb-8 leading-relaxed">
            We'd love to create something special for you. All our cakes are made to order,
            ensuring the freshest and most personalized experience.
          </p>
          <p className="text-lg text-brown-200 mb-12">
            Please allow 48 hours advance notice for all orders.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brown-700 rounded-2xl p-6">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <a href="mailto:orders@nivora.com" className="text-brown-200 hover:text-cream transition">
                orders@nivora.com
              </a>
            </div>
            <div className="bg-brown-700 rounded-2xl p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-brown-200 hover:text-cream transition">
                (123) 456-7890
              </a>
            </div>
            <div className="bg-brown-700 rounded-2xl p-6">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <a href="https://wa.me/1234567890" className="text-brown-200 hover:text-cream transition">
                Chat with us
              </a>
            </div>
          </div>

          <div className="bg-brown-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-serif font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-brown-600 text-cream placeholder-brown-300 border border-brown-500 focus:outline-none focus:ring-2 focus:ring-cream"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-brown-600 text-cream placeholder-brown-300 border border-brown-500 focus:outline-none focus:ring-2 focus:ring-cream"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl bg-brown-600 text-cream placeholder-brown-300 border border-brown-500 focus:outline-none focus:ring-2 focus:ring-cream"
              />
              <textarea
                placeholder="Tell us about your cake... (flavor, size, occasion, design ideas)"
                rows={5}
                className="w-full px-6 py-4 rounded-xl bg-brown-600 text-cream placeholder-brown-300 border border-brown-500 focus:outline-none focus:ring-2 focus:ring-cream"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cream text-brown-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-brown-100 transition shadow-lg"
              >
                Send Order Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-brown-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Nivora</h3>
              <p className="text-sm leading-relaxed">
                Artisan home bakery crafting memorable celebrations, one cake at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-cream mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-cream transition">Home</a>
                <a href="#menu" className="block hover:text-cream transition">Menu</a>
                <a href="#about" className="block hover:text-cream transition">About</a>
                <a href="#contact" className="block hover:text-cream transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-cream mb-4">Hours</h4>
              <div className="space-y-2 text-sm">
                <div>Orders: By Appointment</div>
                <div>Pickup: Tue-Sat</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-cream mb-4">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-cream transition">📘</a>
                <a href="#" className="hover:text-cream transition">📷</a>
                <a href="#" className="hover:text-cream transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-brown-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Nivora Bakery. Made with ❤️ by a passionate couple.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
