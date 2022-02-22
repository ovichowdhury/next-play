export default function ContactUs() {
  return (
    <>
      <section className="bg-bookmark-purple py-20 text-white">
        <div className="container">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">
              35,000+ ALREADY JOINED
            </p>
            <h1 className="text-3xl text-center">
              Stay up-to-date with what we’re doing
            </h1>
            {/* Contact form */}
            <div className="flex flex-col sm:flex-row mt-8 gap-6">
              <input
                type="text"
                placeholder="Enter your email address"
                className="focus:outline-none text-gray-600 flex-1 px-2 py-3 rounded-md"
              />
              <button className="btn btn-purple bg-bookmark-red self-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
