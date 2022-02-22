import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAQ() {
  return (
    <>
      <section className="bg-bookmark-white py-20">
        <div className="container">
          {/* Heading of the FAQ */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-bookmark-blue text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4 text-lg">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          {/* FAQ items */}
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            {/* item */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1 font-bold text-bookmark-blue">
                What is a Bookmark?
              </span>
              <FontAwesomeIcon
                icon={["fas", "fa-chevron-down"]}
                className="text-sm text-bookmark-purple"
              />
            </div>
            {/* item */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1 font-bold text-bookmark-blue">
                How can I request a new browser?
              </span>
              <FontAwesomeIcon
                icon={["fas", "fa-chevron-down"]}
                className="text-sm text-bookmark-purple"
              />
            </div>
            {/* item */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1 font-bold text-bookmark-blue">
                Is there a mobile app?
              </span>
              <FontAwesomeIcon
                icon={["fas", "fa-chevron-down"]}
                className="text-sm text-bookmark-purple"
              />
            </div>
            {/* item */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1 font-bold text-bookmark-blue">
                What about other Chromium browsers?
              </span>
              <FontAwesomeIcon
                icon={["fas", "fa-chevron-down"]}
                className="text-sm text-bookmark-purple"
              />
            </div>
            <button className="mt-12 flex self-center btn btn-purple">
              More Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
