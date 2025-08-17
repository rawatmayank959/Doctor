// App.jsx
import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Helmet>
        <title>Amrutam Doctor Portal</title>
        <meta
          name="description"
          content="Join Amrutam – Grow your practice with instant consultations, flexible timings, and trusted patient connections."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Join Amrutam – Grow Your Practice
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Connect with thousands of patients, offer instant calls, and manage your
          practice with ease.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      {/* Why Doctors Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Doctors Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Instant Call", desc: "Connect with patients instantly via secure calls." },
            { title: "Wallet", desc: "Track earnings and manage payouts seamlessly." },
            { title: "Flexible Timing", desc: "Set your own consultation hours." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Join Our Circle of Care</h2>
        <ol className="max-w-2xl mx-auto space-y-6 text-left">
          <li className="p-4 bg-white shadow rounded-xl">
            1. Sign up with your professional details.
          </li>
          <li className="p-4 bg-white shadow rounded-xl">
            2. Verify your credentials securely.
          </li>
          <li className="p-4 bg-white shadow rounded-xl">
            3. Start consulting and growing your practice!
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-bold mb-10">What Doctors Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Dr. A Sharma", text: "Amrutam helped me reach more patients easily." },
            { name: "Dr. R Mehta", text: "Simple, intuitive, and effective platform." },
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-6 shadow rounded-xl">
              <p className="italic mb-4">“{t.text}”</p>
              <p className="font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "How do I join Amrutam?", a: "Simply sign up, verify your credentials, and start consulting." },
            { q: "Can I set my own timings?", a: "Yes, you have full flexibility to manage your schedule." },
            { q: "How are payments handled?", a: "Payments are processed securely via your wallet." },
          ].map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl shadow">
              <p className="font-semibold">{faq.q}</p>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Let’s Connect</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows="4"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Download App CTA */}
      <section className="py-16 px-6 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Download the Amrutam App</h2>
        <p className="mb-6">Available on both Play Store and App Store</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
            Play Store
          </a>
          <a href="#" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
            App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© 2025 Amrutam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
