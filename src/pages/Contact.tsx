function Contact() {
  return (
    <>
      <main className="bg-ozp-background h-screen min-w-screen max-w-screen flex flex-row justify-start items-start px-6 lg:px-0 lg:pl-6 lg:pl-20">
        <div id="contact-container" className="w-full flex flex-col items-start mt-28 lg:mt-36 md:min-w-1/2 lg:min-w-1/2">
          {/* Title */}
          <div className="w-full flex flex-col items-start">
            <h1 className="text-xl lg:text-3xl font-normal font-ozpPrimary text-center text-white">
              <span>//</span>CONTACT
            </h1>
            <p className="text-sm font-normal font-ozpPrimary text-left pt-4 text-gray-500 lg:text-lg">
              Have a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full flex flex-grow h-full items-start flex-col mt-10 px-0 lg:mt-16">
            <form action="#" className=" w-full h-full flex flex-col">
              <div id="name ">
                <input
                  type="text"
                  id="email"
                  className="w-full h-14 border-gray-600 border-t-2 bg-ozp-background placeholder-gray-500 text-white font-ozpPrimary text-lg lg:text-md outline-none"
                  placeholder="NAME"
                  required
                />
              </div>
              <div id="email">
                <input
                  type="email"
                  id="email"
                  className="w-full h-14 border-gray-600 border-t-2 bg-ozp-background placeholder-gray-500 text-white font-ozpPrimary text-lg lg:text-md outline-none"
                  placeholder="EMAIL"
                  required
                />
              </div>
              <div id="subject">
                <input
                  type="text"
                  id="subject"
                  className="w-full h-14 border-gray-600 border-t-2 bg-ozp-background placeholder-gray-500 text-white font-ozpPrimary text-lg lg:text-md outline-none"
                  placeholder="SUBJECT"
                  required
                />
              </div>
              <div id="message" className="sm:col-span-2">
                <textarea
                  id="message"
                  rows={8}
                  className="w-full border-gray-600 border-y-2 bg-ozp-background placeholder-gray-500 py-3 text-white font-ozpPrimary text-lg lg:text-md outline-none"
                  placeholder="MESSAGE"
                ></textarea>
              </div>
              <div className="flex justify-end w-full mt-10">
                <button
                  type="submit"
                  className="w-28 h-10 border-gray-500 border-2 text-gray-500 font-ozpPrimary text-md lg:text-md hover:bg-white hover:text-ozp-background hover:border-white transition-all duration-150"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="contact-image" className="w-full h-full flex-grow hidden md:flex flex-col items-end justify-end relative overflow-hidden">
          <img src="/img/contact_map.png" className="absolute min-w-[70rem] h-auto bottom-0 right-0 transform translate-x-[35%] translate-y-[30%] object-cover" alt="contact" />
        </div>
      </main>
    </>
  );
}

export default Contact;
