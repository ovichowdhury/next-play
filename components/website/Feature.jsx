import Image from "next/image";

export default function Feature() {
  return (
    <>
      <section className="bg-bookmark-white mt-20 pt-20 lg:mt-40">
        {/* Heading of the feature */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-bookmark-blue text-center">Features</h1>
          <p className="text-center text-bookmark-grey mt-4 text-lg">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image section */}
            <div className="flex flex-1 justify-center mb-10 z-10 lg:mb-0">
              <Image
                src="/website/illustration-features-tab-1.png"
                alt="Hero Image"
                height={300}
                width={400}
              />
            </div>
            {/* Content section */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Bookmark in one click
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="btn btn-purple">More Info</button>
            </div>
          </div>
          {/*Rounded rectangle for design*/}
          <div className="hidden lg:block h-60 w-2/4 absolute overflow-hidden bg-bookmark-purple rounded-r-full left-0 -bottom-24"></div>
        </div>

        {/* Feature #2 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image section */}
            <div className="flex flex-1 justify-center mb-10 z-10 lg:mb-0">
              <Image
                src="/website/illustration-features-tab-2.png"
                alt="Hero Image"
                height={300}
                width={400}
              />
            </div>
            {/* Content section */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Intelligent search
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to crawl through all of your bookmarks.
              </p>
              <button className="btn btn-purple bg-bookmark-red">
                More Info
              </button>
            </div>
          </div>
          {/*Rounded rectangle for design*/}
          <div className="hidden lg:block h-60 w-2/4 absolute overflow-hidden bg-bookmark-purple rounded-l-full right-0 -bottom-24"></div>
        </div>

        {/* Feature #3 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image section */}
            <div className="flex flex-1 justify-center mb-10 z-10 lg:mb-0">
              <Image
                src="/website/illustration-features-tab-3.png"
                alt="Hero Image"
                height={300}
                width={400}
              />
            </div>
            {/* Content section */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Share your bookmarks
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="btn btn-purple">More Info</button>
            </div>
          </div>
          {/*Rounded rectangle for design*/}
          <div className="hidden lg:block h-60 w-2/4 absolute overflow-hidden bg-bookmark-purple rounded-r-full left-0 -bottom-24"></div>
        </div>
      </section>
    </>
  );
}
