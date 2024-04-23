import { Valou } from "../components/ThreeScene";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le valou | Hein ???",
  description: "⟊⏃⎐⏃⟟⌇ ⌿⌰⎍⌇ ⎅⟟⋏⌇⌿⟟, ⟊⏃⟟ ☊⏃⌇⌇⟒ ⋔⍜⋏ ☊⍀⏃⋏⟒",
};

export default function JoinPage() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />
            <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Le créateur qui veille sur l&apos;univers, il est là pour vous guider ...
            </p>
            <Valou />
		</div>
	);
}