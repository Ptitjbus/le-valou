import Link from "next/link";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-8 animate-fade-in">
              <p className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                Le wiki du Valentinisme
              </p>
            </nav>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              Le Valou
            </h1>
    
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
              <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <Link
                  href="/story"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                  <h2 className="mb-3 text-2xl font-semibold">
                  
                    Son histoire{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    Découvrez l&apos;histoire qui se cache derrière cet homme incroyable
                  </p>
                </Link>
                <Link
                  href="/poem"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                  <h2 className="mb-3 text-2xl font-semibold">
                  
                    Poèmes{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    Reccueil de poèmes en l&apos;honneur du Grand maître
                  </p>
                </Link>
                <Link
                  href="/join"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                  <h2 className="mb-3 text-2xl font-semibold">
                  
                    Nous rejoindre{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    Prêt à franchir le pas, rejoignez-nous !
                  </p>
                </Link>
                <Link
                  href="/wtf"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                  <h2 className="mb-3 text-2xl font-semibold bg-clip-text text-transparent bg-rainbow-gradient">
                  
                    Hein ???{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 ">
                    ⟊⏃⎐⏃⟟⌇ ⌿⌰⎍⌇ ⎅⟟⋏⌇⌿⟟, ⟊⏃⟟ ☊⏃⌇⌇⟒ ⋔⍜⋏ ☊⍀⏃⋏⟒
                  </p>
                </Link>
              </div>
            </div>
          </div>
      );
}
