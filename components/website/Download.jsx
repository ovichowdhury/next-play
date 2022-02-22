import Image from "next/image";

export default function Download() {
  return (
    <>
      <section className="py-20 mt-20">
        {/* Heading of the Download */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-bookmark-blue text-center">
            Download the extension
          </h1>
          <p className="text-center text-bookmark-grey mt-4 text-lg">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        {/* Cards for download */}
        <div className="container grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 mt-16 max-w-screen-lg gap-16">
          {/* Card 1 */}
          <div className="flex flex-col rounded-md shadow-md">
            {/* image section  */}
            <div className="flex flex-col items-center p-6">
              <Image
                src="/website/logo-chrome.svg"
                alt="Chrome Image"
                height={70}
                width={70}
              />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                Add to Chrome
              </h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            {/* break */}
            <hr className="border-b text-bookmark-white" />
            {/* button section */}
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple">
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col rounded-md shadow-md lg:mt-8">
            {/* image section  */}
            <div className="flex flex-col items-center p-6">
              <Image
                src="/website/logo-firefox.svg"
                alt="Chrome Image"
                height={70}
                width={70}
              />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                Add to Firefox
              </h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            {/* break */}
            <hr className="border-b text-bookmark-white" />
            {/* button section */}
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple">
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            {/* image section  */}
            <div className="flex flex-col items-center p-6">
              <Image
                src="/website/logo-opera.svg"
                alt="Chrome Image"
                height={70}
                width={70}
              />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                Add to Opera
              </h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            {/* break */}
            <hr className="border-b text-bookmark-white" />
            {/* button section */}
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
