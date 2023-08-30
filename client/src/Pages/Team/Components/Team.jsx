import BaseLayout from "../../../Components/BaseLayout";
import React from 'react'

function Team() {
    return (
        <BaseLayout>
            <div className="bg-black p-28 text-white font-sans text-lg">
                <div className="text-center">
                    <h1 className="font-bold text-6xl text-[#54E360] mt-14 mb-14">SpootChat Team</h1>
                    <p className="px-[10vw] text-2xl">We're a cross-disciplinary team that loves to create great experiences and make meaningful connections between <span className="underline decoration-[#54E360]">listeners and creators</span> . Learn more about our design community below and browse the latest opportunities on our team.</p>
                </div>
                <div>
                    <h1 className="mt-28 mb-14 font-bold text-4xl text-[#54E360]">Who we are</h1>
                    <div class="grid grid-cols-4 gap-4">

                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Team;