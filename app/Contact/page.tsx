"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-[#faf7f8] to-[#e9cccc] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-700 text-base md:text-lg">
          We're here to help. Reach out for inquiries, support or partnerships.
        </p>

        <form className="mt-10 grid gap-5 text-left">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-800 font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#a42a2a]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-800 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#a42a2a]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-gray-800 font-semibold">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#a42a2a]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            className="
              mt-4 w-full md:w-auto px-8 py-3 rounded-full font-semibold
              bg-[#a42a2a] text-white transition-all duration-300
              hover:shadow-[0_0_18px_rgba(164,42,42,0.50)] hover:scale-[1.03]
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
