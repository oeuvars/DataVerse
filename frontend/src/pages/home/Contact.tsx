import contact from "../../assets/images/contact/contact.webp";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/linkedin.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import React from "react";

const Contact: React.FC = () => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 914px)");

  return (
    <div id="contact">
      {isAboveSmallScreens ? (
        <section className="pt-20" id="contact">
          <div className="mb-10">
            <h1 className="text-3xl font-medium text-center mb-3">
              Ready to Get Started
            </h1>
            <p className="text-center text-lg">
              Don&apos;t wait any longer! Drop us a message and let&apos;s discuss how we
              can help your business grow.{" "}
            </p>
          </div>
          <div className="flex h-screen gap-10 mx-auto justify-center py-10">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <PhoneIcon className="w-8 h-8 my-auto"/>
                  <div className="my-auto">
                    <h1 className=" text-xl mb-2">Contact</h1>
                    <p className="font-rajdhani-medium">+91-9475484429</p>
                    <p className="font-rajdhani-medium">prembasu24@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapIcon className="my-auto w-8 h-8"/>
                  <div className="my-auto">
                    <h1 className=" text-xl mb-2">Address</h1>
                    <p className="font-rajdhani-medium">
                      10/A Durgabari Road, Dum Dum Cantonment
                    </p>
                    <p className="font-rajdhani-medium">
                      Kolkata, West Bengal - 700028, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-3xl">
                  Send a Message
                </h1>
                <form target="_blank" action="https://getform.io/f/2c59ea90-32c9-4f30-9acb-bd5cdd4bf7b3" method="post" className="bg-white/30 p-7 rounded-md shadow font-rajdhani-medium border-black">
                  <div className="flex gap-5 mb-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border px-9 py-3 outline-none rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border px-9 py-3 outline-none rounded-md"
                    />
                  </div>
                  <div className="flex justify-between mb-8">
                    <input
                      type="number"
                      placeholder="Phone"
                      className="border px-9 py-3 rounded-md outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="border px-9 py-3 rounded-md outline-none"
                    />
                  </div>
                  <textarea
                    className="w-full border rounded-md outline-none px-5 py-2"
                    placeholder="Type Message"
                  />
                  <button className="bg-black text-white  px-12 py-3 shadow-md mt-5 mx-auto flex">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              src={contact}
              alt=""
              className="rounded-md object-cover h-full overflow-hidden"
            />
          </div>
          <div className="w-full h-20 bg-white border">
            <div className="w-2/3 mx-auto flex h-full justify-between">
              <h1 className="my-auto font-rajdhani-medium text-lg">
                © 2017 Copyright: DataVerse
              </h1>
              <div className="flex gap-3">
                <button>
                  <img src={instagram} alt="" width={30} />
                </button>
                <button>
                  <img src={facebook} alt="" width={34} />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="pt-16" id="contact">
            <div className="mb-7">
              <h1 className="text-2xl font-medium text-center mb-3">
                Ready to Get Started
              </h1>
              <p className="text-center font-rajdhani-medium text-sm w-5/6 mx-auto">
                Don&apos;t wait any longer! Drop us a message and let&apos;s discuss how
                we can help your business grow.
              </p>
            </div>
            <div className="w-[87%] mx-auto justify-between">
              <div className="">
                <div className="flex gap-5 h-24">
                  <PhoneIcon className="w-6 h-6 my-auto"/>
                  <div className="my-auto">
                    <h1 className=" text-lg mb-1">Contact</h1>
                    <p className="font-rajdhani-medium text-sm">+91-9475484429</p>
                    <p className="font-rajdhani-medium text-sm">prembasu24@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-5 h-24">
                  <MapIcon className="w-6 h-6 my-auto"/>
                  <div className="my-auto">
                    <h1 className=" text-lg mb-1">Address</h1>
                    <p className="font-rajdhani-medium text-sm">
                      10/A Durgabari Road, Dum Dum Cantonment
                    </p>
                    <p className="font-rajdhani-medium text-sm">
                      Kolkata, West Bengal - 700028, India
                    </p>
                  </div>
                </div>
                <img
                src={contact}
                alt=""
                width={625}
                height={625}
                className="my-auto mt-5 mx-auto rounded-lg"
              />
                <div className="my-5">
                  <h1 className="text-center text-2xl ">
                    Send a Message
                  </h1>
                  <form target="_blank" action="https://getform.io/f/b84ca852-d8f0-497a-8db2-b73ba52c97e5" method="post" className="bg-white p-6 mt-5 border-2 font-rajdhani-medium border-black/40 rounded">
                    <div className="flex flex-col mb-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="border px-5 py-2 mb-3 outline outline-1 outline-stone-400 text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="border px-5 py-2 outline outline-1 outline-stone-400 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="border px-5 py-2 mb-3 outline outline-1 outline-stone-400 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="border px-5 py-2 mb-3 outline outline-1 outline-stone-400 text-sm"
                      />
                    </div>
                    <textarea
                      className="w-full border outline outline-1 outline-stone-400 px-5 py-2"
                      placeholder="Type Message"
                    />
                    <button className="bg-black text-white  px-5 py-3 shadow-sm mt-5 mx-auto flex text-sm">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full h-20 border">
              <div className="w-11/12 mx-auto flex h-full justify-between">
                <h1 className="my-auto font-rajdhani-medium">
                  © 2017 Copyright: DataVerse
                </h1>
                <div className="flex gap-3">
                  <button>
                    <img src={instagram} alt="" className="w-6 h-6" />
                  </button>
                  <button>
                    <img src={facebook} alt="" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Contact;
