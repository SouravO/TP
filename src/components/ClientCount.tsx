import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export default function ClientCount() {

    const stats = [
        { value: "20+", label: "years of experience" },
        { value: "2,500+", label: "Projects" },
        { value: "1,540k", label: "Clients" },
        { value: "80+", label: "Certifications" },
    ];

    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Create a new Intersection Observer instance
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setInView(true); // Set inView to true when the component is in view
                observer.disconnect(); // Disconnect the observer after it's triggered
            }
        }, { threshold: 0.5 }); // Trigger when 50% of the component is visible

        // Start observing the section element
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className=" text-white py-10 px-4 my-10"
        >
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="text-center py-6 border-r border-white/10 last:border-r-0"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold">
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                                    duration={3}
                                    separator=","
                                    suffix={stat.value.replace(/[0-9]/g, '')}
                                />
                            ) : (
                                "0"
                            )}
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
