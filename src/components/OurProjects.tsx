import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const headingEl = headingRef.current;
        const sectionEl = sectionRef.current;

        if (headingEl && sectionEl) {
            const words = headingEl.textContent?.split(" ") || [];
            headingEl.innerHTML = words
                .map(
                    (word, index) =>
                        `<span class="inline-block mr-2 fade-up word-${index}" style="perspective: 1000px;">${word}</span>`
                )
                .join("");

            gsap.fromTo(
                ".fade-up",
                { opacity: 0, y: 60, rotationX: 90, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: "top 70%",
                        end: "bottom 30%",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="bg-black text-white min-h-[40vh] flex flex-col justify-center relative px-6">
            {/* Top-left label */}
            <div className="absolute top-6 left-6 text-xs text-gray-400 tracking-wide">
                Portfolio
            </div>

            <div className="text-center "> {/* Set font family here */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-wide">
                    OUR
                </h1>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-wide mt-2">
                    PROJECTS
                </h1>
            </div>

        </section>
    );
};

export default OurProjects;
