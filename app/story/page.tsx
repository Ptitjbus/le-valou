import Image from "next/image";
import { Navigation } from "../components/nav";
import saintValentin from './saint-valentin.webp'
import leCreateur from './le-createur.webp'

export default function Story(){
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Qui est Valentin ?
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Découvrez l&apos;histoire de Valentin, le Grand Maitre, créateur de l&apos;univers et gardien de l&apos;équilibre cosmique.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <section className="flex flex-col gap-5 sm:gap-20 sm:flex-row ">
                    <Image src={saintValentin} alt={"Le dieu valentin"} width={500} height={500}/>
                    <div className="flex gap-5 flex-col">
                        <p className="text-xl mt-4 text-zinc-400">
                            Valentin, surnommé le <strong>&nbsp;Grand Maitre</strong>, est la figure emblématique de la religion Valentinisme. Il est le 
                            <strong>&nbsp;créateur universel</strong>, l&apos;orfèvre du cosmos et l&apos;architecte divin de tous les dieux.
                            Selon les textes sacrés, Valentin aurait émergé d&apos;un néant lumineux, invoquant par sa seule volonté la trame
                            de l&apos;univers. Chaque étoile, chaque planète et chaque brin d&apos;herbe serait le fruit de ses rêves et de ses pensées.
                            Avec une précision poétique, il aurait tissé la matière, donné cadence au temps et prêté ses couleurs à l&apos;espace.
                        </p>
                        <p className="text-xl mt-4 text-zinc-400">
                            Muni de son outil légendaire, <strong>&nbsp;la pédale de vélo</strong>, Valentin aurait alors façonné les dieux, les dotant
                            chacun d&apos;une parcelle de son immense pouvoir. Ces dieux, à l&apos;image de leur créateur, régneraient sur les différentes
                            facettes de l&apos;univers, depuis les plus grands océans jusqu&apos;aux plus petites poussières cosmiques en passant par des cours de POO.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">« Be Kind & Spread Love »</h2>
                    <p className="text-xl mt-4 text-zinc-400">
                        De nos jours, Valentin continuerait de surveiller son œuvre. Cependant, loin d&apos;être un tyran céleste, il serait un être 
                        bienveillant, souhaitant que sa création jouisse de liberté, évoluant selon ses propres lois naturelles. Selons les textes, 
                        il est écrit qu&apos;un jours alors que la terre était en proie à la guerre, Valentin descendit sur terre et dit aux hommes
                        «Be Kind & Spread Love». Depuis ce jour, les hommes se sont mis à aimer et à être bienveillant les uns envers les autres.
                    </p>
                    <p className="text-xl mt-4 text-zinc-400">
                        Chaque année, lors du Solstice Cosmique, les adeptes du Valentinisme se rassemblent pour célébrer la «Danse de la Création»,
                        un festival haut en couleurs où chants et danses rappellent l&apos;harmonie de l&apos;univers originel façonné par Valentin.
                        C&apos;est un moment où chacun peut ressentir, ne serait-ce qu&apos;un instant, le frisson de sa création et de son amour.
                    </p>
                </section>
                <section className="flex flex-col items-center gap-5 sm:gap-20 sm:flex-row ">
                    <div className="flex-auto">
                        <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-xl">
                            « Respect et amour »
                        </h2>
                        <p className="text-xl mt-4 text-zinc-400">
                            Les Écritures de Lumière, textes sacrés du Valentinisme, dépeignent Valentin non seulement comme le créateur, mais aussi comme
                            le gardien de l&apos;équilibre universel, luttant contre les forces du chaos qui cherchent à détruire son œuvre.
                        </p>
                        <p className="text-xl mt-4 text-zinc-400">
                            Valentin, bien que figure créatrice suprême, est vu comme un symbole d&apos;humilité. Il enseigne que chaque créature, 
                            grande ou petite, porte en elle une étincelle de la création, et mérite respect et amour. Sa philosophie est une ode à 
                            la paix universelle, une aspiration à vivre en harmonie avec le cosmos tout entier.
                        </p>
                    </div>
                    <Image className="" src={leCreateur} alt={"Le createur"} width={300} height={300}/>
                </section>
                <section className="flex items-center justify-center sm:p-10">
                    <p className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center">
                        Ainsi, la légende de Valentin continue de captiver la foi et l&apos;esprit de ses fidèles, les inspirant à regarder le monde 
                        et ses mystères avec émerveillement et reconnaissance envers le Grand Maitre.
                    </p>
                </section>
            </div>
        </div>
    );
}