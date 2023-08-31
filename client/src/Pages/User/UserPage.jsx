import BaseLayout from "../../Components/BaseLayout";
import { songs } from "../../data";
import Card from "./Card";

export default function UserPage (){

    return(
        <BaseLayout>
        <div className="bg-black">
            <h1 className="text-white mt-16 font-bold ml-8 text-2xl mb-6">Canciones del momento</h1>
            <div  className="flex justify-evenly overflow-hidden p-12 flex-wrap flex-row gap-12 sm:gap-24 md:gap-2 bg-black mt-12 px-6 md:px-20 ">
            {songs.map((song)=>(
                <Card key={song.image} img={song.image} name={song.name} info={song.description} artist={song.artist}/>
           ))}
            </div>
        </div>
        </BaseLayout>
    )
}