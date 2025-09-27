import React from 'react'

export default function SpecialService() {
    return (
        <div className="h-[80vh] bg-black text-white flex">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center relative px-8 md:px-10 lg:px-19">
                {/* Logo */}
                {/* Main Content */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                        WHERE FASHION MEETS FREEDOM
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed text-gray-300 text-left md:text-justify">
                        <p>
                            We believe that fashion should be an expression of individuality
                            and personal style, not conformity to trends or societal
                            expectations.
                        </p>
                        <p>
                            Our brand is built on the principle that everyone deserves to feel
                            confident and comfortable in their own skin, regardless of their
                            size, shape, or background.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-1 flex items-center justify-center relative m-5">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/34003906/pexels-photo-34003906.jpeg"
                        alt="Fashion model on stairs"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay to ensure text readability if needed */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            </div>
        </div>
    )
}
