import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4xl lg:text-4xl text-center lg:text-left mb-6">
              A Simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-purple">Get it on Chrome</button>
              <button className="btn btn-grey">Get it on Firefox</button>
            </div>
          </div>
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <div>
              <Image
                src="/website/hero-bg.png"
                alt="Hero Image"
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
