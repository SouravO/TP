import React from "react";
import { Play } from "lucide-react";

export default function SectionVideo() {
    return (
        <section className="relative h-[80vh] md:h-[90vh] w-full text-white overflow-hidden">
            {/* Background Video (replace with your actual mp4 URL) */}
            <video
                src="https://www.pexels.com/download/video/4036096/"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top fade to hide the border line */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-24 py-12 md:py-24">
                <h1 className="text-4xl md:text-5xl lg:text-5xl w-[50%] font-light leading-tight mb-8">
                    DISCOVER THE WORLD IN A NEW WAY
                </h1>

                <button
                    className="inline-flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full font-medium mb-8 hover:bg-gray-200 transition"
                    aria-label="Watch the video"
                >
                    <Play className="w-5 h-5" />
                    WATCH THE VIDEO
                </button>

                {/* Quote + Thumbnails */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Quote */}
                    <div className="md:flex-1">
                        <p className="text-sm md:text-base text-gray-200 mb-2 w-[70%]">
                            "Attachment to things and comfort is the main obstacle to an
                            interesting life. People, as a rule, do not realize that at any
                            time they can throw anything out of their lives. Anytime. Instantly."
                        </p>
                        <p className="text-sm text-gray-300">© Carlos Castaneda</p>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="/thumbnail1.jpg"
                                alt="Thumbnail 1"
                                className="w-full h-24 md:h-28 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg group-hover:bg-black/50 transition">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="/thumbnail2.jpg"
                                alt="Thumbnail 2"
                                className="w-full h-24 md:h-28 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg group-hover:bg-black/50 transition">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}







