"use client";

import InstagramIcon from "./SVG/InstagramIcon";

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="mx-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <img className="w-24" src="./logo.jpg" alt="" srcset="" />

            <p className="mt-4 text-gray-500">
              268 St, South New York/NY 98944, United States.
              <br /> +222-1800-2628 <br /> blueskytechcompany@gmail.com
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Our Store{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Size Guide{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 hover:translate-x-4 hover:scale-110 duration-300"
                  >
                    {" "}
                    My Account{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold  text-gray-900">Customer Service</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Shipping and Return{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Term and Codition{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Advance Search{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Theme FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Store Locations{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <p className="font-medium text-gray-900">Sign Up to Newsletter</p>

              <div className="mt-6 space-y-4 text-sm">
                <p className="mt-4 text-gray-500">
                  Enter your email address to get $10 off your first order and
                  free shipping.Updates information on Sales and Offers.
                </p>
                <section className=" flex gap-4 mt-5">
                  <input
                    className=" w-full p-3 border-2 border-amber-950 rounded-full"
                    placeholder="Enter Your Email..."
                    type="text"
                  />
                  <button className="py-2 md:py-4 px-8 bg-black text-white rounded-full text-center ">
                    SUBSCRIBE
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 flex flex-wrap justify-between items-center mt-4 mx-0 md:mx-8">
          <div>
            <p className="text-xs text-gray-500">
              &copy; 2024 Umino Store. All Rights Reserved
            </p>
          </div>
          <div>
            <img src="./payment.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
