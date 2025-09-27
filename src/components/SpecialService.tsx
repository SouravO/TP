import React from 'react'

export default function SpecialService() {
    return (
        <div className="bg-black text-white flex flex-col md:flex-row min-h-screen">
            {/* Left Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 lg:px-16 py-12 md:py-16">
                <div className="max-w-3xl text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-snug sm:leading-tight mb-6 sm:mb-8 W-[40%] bg-[#4361ee]">
                       WHAT SPECIAL ABOUT US
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base md:text-base leading-relaxed text-gray-300 text-left md:text-justify">
                        <p>
                            One-Stop Solution – From tiles to sanitaryware, electricals to paints, everything you need for your dream space is here.
                            <br />
                            Trusted Brands – Partnered with industry leaders like Johnson, Kajaria, Somany, Jaquar, Asian Paints, Havells, UltraTech, JSW, and many more.
                            <br />
                            Decades of Expertise – Serving customers since 1962 with a legacy of trust and excellence.
                        </p>
                        <p>
                            Quality Assurance – Only the finest, most reliable products that meet high standards of durability and style.
                            <br />
                            Customer-Centric Service – Quick deliveries, personalized guidance, and solutions tailored to your project needs.
                            <br />
                            Pan-Regional Presence – 60+ branches across Kerala, Tamil Nadu, and Karnataka.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-1 w-full md:w-auto relative h-64 sm:h-80 md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1713377037351-790690c84ced?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9ycyUyMCUyMGRhcmslMjBpbWFnZSUyMGRzfGVufDB8fDB8fHww"
                    alt="Fashion model on stairs"
                    className="w-full h-full md:h-full object-cover"
                />
                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none md:hidden"></div>
            </div>
        </div>

    )
}



// import React from "react";

// export default function SpecialService() {
//     return (
//         <div className="bg-black text-white flex flex-col md:flex-row min-h-screen items-center">
//             {/* Left Content Section */}
//             <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 lg:px-16 py-12 md:py-16 z-10">
//                 {/* Main Content */}
//                 <div className="max-w-3xl text-center md:text-left">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-snug sm:leading-tight mb-6 sm:mb-8">
//                         WHERE FASHION MEETS FREEDOM
//                     </h1>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base md:text-base leading-relaxed text-gray-300 text-left md:text-justify">
//                         <p>
//                             We believe that fashion should be an expression of individuality
//                             and personal style, not conformity to trends or societal
//                             expectations.
//                         </p>
//                         <p>
//                             Our brand is built on the principle that everyone deserves to feel
//                             confident and comfortable in their own skin, regardless of their
//                             size, shape, or background.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Image Section */}
//             <div className="flex-1 relative w-full h-64 sm:h-80 md:h-80">
//                 <img
//                     src="https://images.pexels.com/photos/34003906/pexels-photo-34003906.jpeg"
//                     alt="Fashion model on stairs"
//                     className="w-full h-full md:h-full object-cover"
//                 />
//                 {/* Optional overlay for readability */}
//                 <div className="absolute inset-0 bg-black/20 pointer-events-none md:hidden"></div>
//             </div>
//         </div>
//     );
// }
