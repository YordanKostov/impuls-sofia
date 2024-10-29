import styles from '../style'
import {  main } from '../assets'

const Hero = () => {
  return (
    <section id="home" className="relative flex h-screen w-full">
      {/* Left side: Text section with diagonal split */}
      <div
        className="flex-1 flex flex-col justify-center p-10 text-left text-zinc-950"
        style={{
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", // Adjusted to give more space
        }}
      >
        <h1 className="font-poppins font-semibold text-[52px] leading-[1.2] sm:text-[72px]">
          Клуб по спортни танци <br className="sm:block hidden" />
          <span className="text-gradient">Импулс София</span>
        </h1>
        <p className="mt-5 max-w-[470px]">
        Присъединете се към Импулс София и открийте страстта към спортните танци! Нашите опитни треньори ще ви помогнат да развиете вашите умения и да се забавлявате в компанията на приятели. Започнете вашето танцово приключение днес!
        </p>
      </div>

      {/* Right side: Image section with matching diagonal split */}
      <div
        className="flex-1 h-full relative overflow-hidden"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} // Adjusted to create a larger overlap
      >
        <img
          src={main}
          alt="dancers"
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.1)", transformOrigin: "left center" }} // Scale the image and adjust the origin
        />
        {/* Optional gradient overlay to match style */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero
