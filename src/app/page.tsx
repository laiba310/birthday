'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Pacifico, Poppins } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

export default function Home() {
  const router = useRouter();

  const goToSurprise = () => {
    router.push('/surprise');
  };

  return (
    <main className="bg-[#fff1e6] text-gray-800 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#ffb5a7] to-[#fcd5ce] p-8 md:p-12 rounded-3xl text-white shadow-2xl text-center transition-all duration-300 relative overflow-hidden">

        {/* Floating Cute Images */}
        <div className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 opacity-90 rotate-[-12deg]">
          <Image src="/pi1.jpg" alt="cake" fill className="rounded-xl object-cover shadow-lg" />
        </div>
        <div className="absolute top-4 right-4 w-20 h-20 md:w-28 md:h-28 opacity-90 rotate-[10deg]">
          <Image src="/pi2.jpg" alt="gift" fill className="rounded-xl object-cover shadow-lg" />
        </div>
        <div className="absolute bottom-4 left-4 w-20 h-20 md:w-24 md:h-24 opacity-90 rotate-[8deg]">
          <Image src="/pi3.jpg" alt="balloon" fill className="rounded-xl object-cover shadow-lg" />
        </div>
        <div className="absolute bottom-4 right-4 w-20 h-20 md:w-24 md:h-24 opacity-90 rotate-[-8deg]">
          <Image src="/pi4.jpg" alt="memories" fill className="rounded-xl object-cover shadow-lg" />
        </div>

        {/* Main Content */}
        <h1 className={`text-4xl md:text-5xl mb-6 drop-shadow-lg ${pacifico.className}`}>
          🎂 Happy Birthday januuu!
        </h1>

        <p className={`text-lg md:text-xl font-normal ${poppins.className}`}>
          I&rsquo;ve hidden some special memories just for you…<br className="hidden sm:block" /> tap below to find them 💖
        </p>

        <button
          onClick={goToSurprise}
          className="mt-8 px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-100 transition-all shadow-md"
        >
          Open Your Surprise 💌
        </button>
      </div>
    </main>
  );
}
