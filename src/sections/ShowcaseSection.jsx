import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* First Project */}
          <a
            href="https://phoenix-beige.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            ref={rydeRef}
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Phoenix AI chat App" />
            </div>
            <div className="text-content">
              <h2>Phoenix - An User-Friendly AI Chat App</h2>
              <p className="text-white-50 md:text-xl">
                An app built with ReactJS, TailwindCSS, & Appwrite for a fast,
                user-friendly experience.
              </p>
            </div>
          </a>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://github.com/anshikaPandey11/anon-ecommerce-website-master/tree/main/anon-ecommerce-website-master"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#f0b7c7]">
                <img src="/images/project2.png" alt="Ecommerce" />
              </div>
              <h2>
                Responsive E-Commerce Website built with HTML, CSS & JavaScript
              </h2>
            </a>

            <a
              href="https://github.com/anshikaPandey11/HandSignDetectionASL"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-[#030002]">
                <img src="/images/project3.jpg" alt="Rides App" />
              </div>
              <h2>
                A Real-time Hand Sign Detection project that classifies American
                Sign Language (ASL) letters.
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
