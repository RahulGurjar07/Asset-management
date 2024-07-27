import React, { useEffect, useRef } from "react";
// import './LogoCarousel.css'; // Optional: for additional styling

const logos = [
  { src: "./swachh-indore.svg", alt: "Swachh Indore Logo" },
  { src: "./my-gov.svg", alt: "My Gov Logo" },
  { src: "./digital-india.svg", alt: "Digital India Logo" },
  { src: "./swachh-bharat.svg", alt: "Swachh Bharat Logo" },
  { src: "./india-gov-in.svg", alt: "India Gov Logo" },
  { src: "./sharkweb.svg", alt: "Sharkweb Logo" },
];

const LogoCarousel = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
