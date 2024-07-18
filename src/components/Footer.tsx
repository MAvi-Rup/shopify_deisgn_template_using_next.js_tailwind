"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import InstagramIcon from "./SVG/InstagramIcon";

const Footer = () => {
  const companyLinks: string[] = [
    "About Us",
    "Our Store",
    "Contact Us",
    "Size Guide",
    "My Account",
  ];

  const customerServiceLinks = [
    "Privacy Policy",
    "Refund Policy",
    "Shipping and Return",
    "Terms and Conditions",
    "Advance Search",
    "Theme FAQs",
    "Store Locations",
  ];

  const socialLinks = [
    { key: "1", name: "Facebook", icon: <InstagramIcon /> },
    { key: "2", name: "Instagram", icon: <InstagramIcon /> },
    { key: "3", name: "Twitter", icon: <InstagramIcon /> },
    { key: "4", name: "GitHub", icon: <InstagramIcon /> },
    { key: "5", name: "Dribbble", icon: <InstagramIcon /> },
  ];

  return (
    <footer className="bg-white mt-16 mb-20 md:mb-5">
      <div className="mx-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img className="w-24" src="./logo.jpg" alt="Logo" />

            <p className="mt-4 text-gray-500">
              268 St, South New York/NY 98944, United States.
              <br /> +222-1800-2628 <br /> blueskytechcompany@gmail.com
            </p>

            <ul className="mt-8 flex gap-4">
              {socialLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition opacity-75 hover:opacity-100"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="company">
                <AccordionTrigger>Company</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {companyLinks.map((item) => (
                      <li key={item} className=" opacity-75 hover:opacity-100">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900 no-underline"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="customer-service">
                <AccordionTrigger>Customer Service</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {customerServiceLinks.map((item) => (
                      <li key={item} className="opacity-75 hover:opacity-100">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="newsletter">
                <AccordionTrigger>Newsletter</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p className="text-sm text-gray-500 mb-4">
                      Enter your email address to get $10 off your first order
                      and free shipping. Updates information on Sales and
                      Offers.
                    </p>
                    <input
                      className="w-full p-2 border-2 border-amber-950 rounded-full mb-2"
                      placeholder="Enter Your Email..."
                      type="text"
                    />
                    <button className="w-full py-2 px-4 bg-black text-white rounded-full text-center">
                      SUBSCRIBE
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden md:block lg:hidden">
            <p className="font-semibold text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* page offset */}

          <div className="hidden md:block lg:hidden">
            <p className="font-semibold text-gray-900">Customer Service</p>

            <ul className="mt-6 space-y-4 text-sm">
              {customerServiceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block lg:hidden">
            <p className="font-semibold text-gray-900">Sign Up to Newsletter</p>

            <div className="mt-6 space-y-4 text-sm">
              <p className="mt-4 text-gray-500">
                Enter your email address to get $10 off your first order and
                free shipping. Updates information on Sales and Offers.
              </p>
              <section className="flex gap-4">
                <input
                  className="w-full p-3 border-2 border-amber-950 rounded-full"
                  placeholder="Enter Your Email..."
                  type="text"
                />
                <button className="py-2 md:py-4 px-8 bg-black text-white rounded-full text-center">
                  SUBSCRIBE
                </button>
              </section>
            </div>
          </div>

          <div className="hidden col-span-2 lg:grid lg:grid-cols-4 gap-8">
            <div>
              <p className="font-semibold text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Customer Service</p>

              <ul className="mt-6 space-y-4 text-sm">
                {customerServiceLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <p className="font-semibold text-gray-900">
                Sign Up to Newsletter
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <p className="mt-4 text-gray-500">
                  Enter your email address to get $10 off your first order and
                  free shipping. Updates information on Sales and Offers.
                </p>
                <section className="flex gap-4 pt-5 md:pt-10">
                  <input
                    className="w-full p-3 border-2 border-amber-950 rounded-full"
                    placeholder="Enter Your Email..."
                    type="text"
                  />
                  <button className="py-2 md:py-4 px-8 bg-black text-white rounded-full text-center">
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
            <img src="./payment.jpg" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
