import { BsFillPlayCircleFill } from 'react-icons/bs';

export default function Card({img, name, info, artist}) {


  return (
    <div>
      <div className="relative flex w-46 flex-col rounded-xl bg-neutral-900 bg-clip-border  shadow-md hover:bg-neutral-900 dark:bg-stone-900 dark:border-neutral-800 dark:hover:bg-neutral-800">
        <div className="relative mx-4 mt-4 h-600 overflow-auto rounded-xl bg-neutral bg-clip-border text-neutral-800 shadow-lg">
          <img className="w-40 h-40 rounded-lg"src={img} alt="profile-picture" />
        </div>
        <div>
        <BsFillPlayCircleFill color='#54E35F' fontSize="3rem" position="relative"  className='browse-in'/> 
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr text-neutral-700 bg-clip-text font-sans text-sm font-medium leading-relaxed text-transparent antialiased">
            {artist}
          </p>
          <p className="block bg-gradient-to-tr text-neutral-700  bg-clip-text font-sans text-sm font-medium leading-relaxed text-transparent antialiased">
            {info}
          </p>
        </div>
      </div>
    </div>
  );
}
