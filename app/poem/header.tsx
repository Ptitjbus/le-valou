import { Navigation } from "../components/nav";

export default function Header() {
	
	return (
		<header
			className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
		>
			<Navigation />
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                            Recueil de poèmes
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
                            Découvrez les plus beaux poèmes en l&apos;honneur du Grand Maître Valentin
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};
