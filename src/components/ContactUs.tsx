import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactUs() {
    return (
        <section className="min-h-screen  text-white p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-[#4895ef]">
                        LET'S TALK ABOUT
                        <br />
                        YOUR PROJECT
                    </h1>
                    <div className="w-full h-px bg-gray-600 mt-8"></div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-12">
                            GET IN
                            <br />
                            TOUCH
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 mt-1 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-white">info.username@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 mt-1 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</p>
                                    <p className="text-white">+1 (555) 555-0134</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-white">456 Oak Street San Francisco, CA 94102</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <h3 className="text-lg font-medium mb-8 text-gray-300">Send Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white border border-gray-700 text-white placeholder:text-gray-400 px-4 py-3 rounded focus:border-gray-500 focus:ring-gray-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white border border-gray-700 text-white placeholder:text-gray-400 px-4 py-3 rounded focus:border-gray-500 focus:ring-gray-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell Me About Your Project"
                                    rows={6}
                                    className="w-full bg-white border border-gray-700 text-white placeholder:text-gray-400 px-4 py-3 rounded focus:border-gray-500 focus:ring-gray-500 resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
