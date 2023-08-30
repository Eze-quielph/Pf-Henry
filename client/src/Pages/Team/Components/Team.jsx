import BaseLayout from "../../../Components/BaseLayout";
import imgTeam1 from './../../../../public/images/imgTeam1.webp';
import imgTeam2 from './../../../../public/images/imgTeam2.webp';
import imgTeam3 from './../../../../public/images/imgTeam3.webp';
import imgTeam4 from './../../../../public/images/imgTeam4.webp';
import imgTeam5 from './../../../../public/images/imgTeam5.webp';
import imgTeam6 from './../../../../public/images/imgTeam6.webp';
import imgTeam7 from './../../../../public/images/imgTeam7.webp';
import imgTeam8 from './../../../../public/images/imgTeam8.webp';
import arrow from './../../../../public/images/arrow.svg';
import React from 'react'
import { useRef } from "react";

function Team() {
    const teamSection = useRef(null);

    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <BaseLayout>
            <div className="bg-black p-28 text-white font-sans text-lg">
                <div className="text-center h-screen grid grid-col-3 gap-24 place-content-center p-28 -mt-14">

                    <h1 className="font-bold text-6xl text-[#54E360]">SpootChat Team</h1>
                    <p className="px-[10vw] text-4xl">We're a cross-disciplinary team that loves to create great experiences and make meaningful connections between <span className="underline decoration-[#54E360]">listeners and creators</span> . Learn more about our design community below and browse the latest opportunities on our team.
                    </p>
                    <div>
                        <button className="bg-white text-black p-5 rounded-full font-bold tracking-wider animate-bounce hover:bg-[#54E360]" onClick={() => scrollDown(teamSection)}>
                            <img className="w-6 h-6" src={arrow} alt="" srcset="" />
                        </button>
                    </div>

                </div>

                <div ref={teamSection}>
                    <h1 className="mt-28 mb-14 font-bold text-4xl text-[#54E360]">Who we are</h1>

                    <div class="grid grid-cols-3 gap-32">
                        <div className="bg-white p-5 text-black rounded-xl">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover hover:animate-[scale(0.5)]" src={imgTeam1} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Senior Service Designer</p>
                            <h1 className="font-bold">Grace Kwon</h1>
                            <p className="my-2">Meet Grace Kwon, Senior Service Designer for Business Affairs in Brooklyn.</p>
                        </div>

                        <div className="bg-white p-5 text-black rounded-xl">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover" src={imgTeam2} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Product Designer</p>
                            <h1 className="font-bold">René Simonsson</h1>
                            <p className="my-2">Meet René Simonsson, Product Designer I for the Sharing team in Stockholm.</p>
                        </div>

                        <div className="bg-white p-5 text-black rounded-xl ">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover" src={imgTeam3} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Product Designer</p>
                            <h1 className="font-bold">Elias Lind</h1>
                            <p className="my-2">Meet Elias Lind, Product Designer for the Data Collection team in Gothenburg.</p>
                        </div>

                        <div className="bg-white p-5 text-black rounded-xl ">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover" src={imgTeam5} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Intern Product Designer</p>
                            <h1 className="font-bold">Simeon Fadahunsi</h1>
                            <p className="my-2">Meet Simeon Fadahunsi, Summer Intern Product Designer for the Content team in Stockholm.</p>
                        </div>

                        <div className="bg-white p-5 text-black rounded-xl ">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover" src={imgTeam6} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Senior Product Designer</p>
                            <h1 className="font-bold">Vandana Pai</h1>
                            <p className="my-2">Meet Vandana Pai, Senior Product Designer for the Freemium team in New York.</p>
                        </div>

                        <div className="bg-white p-5 text-black rounded-xl ">
                            <div className="h-80 w-full">
                                <img className="h-full w-full objet-cover" src={imgTeam8} alt="" srcset="" />
                            </div>
                            <p className="my-4 bg-black text-white p-2">Senior Product Designer</p>
                            <h1 className="font-bold">Katia Chepovetsky</h1>
                            <p className="my-2">Meet Kavita Chepovetsky, Senior Product Designer for the Freemium team in New York. </p>
                        </div>

                    </div>
                </div>

                <div className="my-14">
                    <h1 className="mt-28 mb-14 font-bold text-4xl text-[#54E360]">Our Disciplines</h1>
                    <div className="grid gap-16 grid-cols-2 grid-rows-2">
                        <div className="border-solid border border-[#54E360] p-8 rounded-xl hover:bg-[#54E360] hover:text-black">
                            <h1 className="my-7 font-bold text-2xl">Product Design</h1>
                            <p className="my-3">Product Designers at SpootChat focus on delivering the best experience possible for listeners, creators and external partners across all of our products and markets. We bring fulfilment and value to listeners and creators, and make it easy for people to enjoy Spotify every day, exactly how they want. </p>
                        </div>

                        <div className="border-solid border border-[#54E360] p-8 rounded-xl hover:bg-[#54E360] hover:text-black">
                            <h1 className="my-7 font-bold text-2xl">Editorial Design</h1>
                            <p className="my-3">Editorial Design at SpootChat focuses on art direction and collaborates with our product, brand, marketing, and content practices. The team builds audience-specific, culture-defining brands and product experiences for SpootChat listeners worldwide.</p>
                        </div>

                        <div className="border-solid border border-[#54E360] p-8 rounded-xl hover:bg-[#54E360] hover:text-black">
                            <h1 className="my-7 font-bold text-2xl">Internal Tools Design</h1>
                            <p className="my-3">Our Internal Tools experts create the technology that enables Spotify to learn quickly and scale easily. We build the frameworks, capabilities, and platforms needed to welcome the world's listeners, supporting rapid growth in our users and business.</p>
                        </div>

                        <div className="border-solid border border-[#54E360] p-8 rounded-xl hover:bg-[#54E360] hover:text-black">
                            <h1 className="my-7 font-bold text-2xl">Design Ops</h1>
                            <p className="my-3">Design Ops supports our practice and community by turning down design pain and dialing up design joy. We infuse best-in-class program management with design thinking to improve the pillars of our practice: tools and systems; learning and inspiration; and culture and community. </p>
                        </div>
                    </div>


                </div>
            </div>
        </BaseLayout>
    )
}

export default Team;