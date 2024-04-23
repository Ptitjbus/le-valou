import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function JoinPage() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16 sm:px-52">
                    <Card>
                        <div className="p-10 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-32  md:p-16">
                            <div className="z-10 flex flex-col items-center">
                                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    Envie de nous rejoindre ?
                                </span>
                                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                    Rejoignez-nous sur nos réseaux sociaux pour être tenu au courant des dernières actualités
                                </span>
                                <div className="flex gap-5 mt-16">
                                    <Link
                                        href={"https://www.instagram.com/levavalou/"}
                                        target="_blank"
                                    >
                                        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                            <Instagram size={20} />
                                        </span>{" "}
                                    </Link>
                                    <Link
                                        href={"https://www.linkedin.com/in/valentin-gassend/"}
                                        target="_blank"
                                    >
                                        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                            <Linkedin size={20}/>
                                        </span>{" "}
                                    </Link>
                                    <Link
                                        href={"mailto:valentin.gassend@gmail.com"}
                                        target="_blank"
                                    >
                                        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                            <Mail size={20} />
                                        </span>{" "}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
				</div>
			</div>
		</div>
	);
}