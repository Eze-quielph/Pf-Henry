import BaseLayout from "../../../Components/BaseLayout";

const About = () => {
    return (
        <BaseLayout>
            <div className="bg-black p-28 text-white">
                <h1 className="text-white font-bold text-left text-4xl mt-14 mb-14">About SpootChat</h1>
                <p className="text-left">SpootChat's platform revolutionized music listening forever when we launched in 2008. Our move into podcasting brought innovation and a new generation of listeners to the medium, and in 2022 we entered the next audio market primed for growth with the addition of audiobooks.</p>
                <p className=" text-left">Today, more listeners than ever can discover, manage and enjoy over 100 million tracks, 5 million podcast titles, and 350,000 audiobooks on Spotify. We are the world's most popular audio streaming subscription service with more than 551 million users, including 220 million subscribers in more than 180 markets.</p>
                <h1 className="font-bold text-left text-4xl mt-14 mb-14">Our mission</h1>
                <p className="text-left"><span className="font-bold">Our mission</span> is to unlock the potential of human creativity—by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.
                </p>
                <div className="flex flex-row mt-7 mb-7">
                    <div className="basis-1/3 p-7">
                        <h1 className="font-bold text-2xl mt-7 mb-7">Sustainability</h1>
                        <p>Lowering emissions isn't something we do on the side. It's an integrated part of everyday business.</p>
                    </div>
                    <div className="basis-1/3 p-7">
                        <h1 className="font-bold text-2xl mt-7 mb-7">Time to Play Fair</h1>
                        <p>When competition is fair, both consumers and companies win. Learn about our efforts to even the playing field for all developers.</p>
                    </div>
                    <div className="basis-1/3 p-7">
                        <h1 className="font-bold text-2xl mt-7 mb-7">SpootChat Loud & Clear</h1>
                        <p>Artists deserve clarity about the economics of music streaming. This site sheds light on the global streaming economy and royalty system.</p>
                    </div>

                </div>
            </div>
        </BaseLayout >
    )

}
export default About; 