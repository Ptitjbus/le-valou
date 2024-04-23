import Header from "./header";

export default async function PoemPage() {    
    return (
      <div className="bg-zinc-50 min-h-screen">
        <Header/>  
        <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
            <section>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">Le Jardin des Cœurs Liés</h2>
                <p className="text-xl mt-4 text-zinc-600">
                    Dans le jardin secret de l&apos;amour et du partage, <br/>
                    Où les cœurs s&apos;entrelacent sans peur ni présage, <br/>
                    Le doux nectar de l&apos;amitié fructifie au grand jour, <br/>
                    Sous le ciel bienveillant, en ce tendre séjour. <br/>
                    <br/>

                    L&apos;instant se drape de soie, de sourires échangés, <br/>
                    Par deux âmes sœurs, sans jamais se déranger. <br/>
                    Ils bâtissent ensemble un édifice de confiance, <br/>
                    Laissons couler la vie, honorant chaque chance. <br/>
                    <br/>

                    Que mille fleurs s&apos;épanouissent sur ce chemin, <br/>
                    Où main dans la main, s&apos;écrivent les destins. <br/>
                    L&apos;amour, ce sculpteur, qui transforme le fer, <br/>
                    En délicates figures, tendres comme la chair. <br/>
                    <br/>

                    Partager c&apos;est offrir une parcelle de soi, <br/>
                    En écho, ce don revient, comme une loi. <br/>
                    Le cœur s&apos;embellit de toutes ses rencontres, <br/>
                    Sacré, ce lien tissé entre les âmes montre. <br/>
                    <br/>

                    Dans cet univers, créé de fils d&apos;or et d&apos;argent, <br/>
                    Chaque geste sincère se change en serment. <br/>
                    Ainsi va la vie, tissée de douceur et d&apos;émoi, <br/>
                    En partageant, en aimant, nous suivons la voie. <br/>
                    <br/>
                </p>
            </section>
            <section>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">Hymne de la création</h2>
                <p className="text-xl mt-4 text-zinc-600">
                    Au cœur du cosmos, né d&apos;un souffle éclatant, Valentin, le créateur, le premier et l&apos;omniprésent. <br/>
                    Dans l&apos;éther danse, infinie et pure création, Étoiles et mondes nés d&apos;une divine vision. <br/>
                    <br/>

                    Son outil brille, l&apos;Éclat qui façonne les ères, Forger chaque vie, chaque grain dans l&apos;univers. <br/>
                    Les dieux eux-mêmes, sa majestueuse descendance, Veillent sur la trame avec amour et clémence. <br/>
                    <br/>

                    Oh Valentin, gardien de l&apos;équilibre secret, Contre le chaos, un éclat infini projeté. <br/>
                    Chaque année renaît l&apos;hymne de la création, Célébrées par les cœurs en vaste procession. <br/>
                    <br/>

                    Les êtres chantent, dansent sous la voûte céleste, L&apos;harmonie des sphères, l&apos;œuvre jamais ne reste. <br/>
                    Valentin, éternel, dans l&apos;Éther où tout scintille, Se rappelle à chacun, l&apos;Univers est sa famille. <br/>
                    <br/>

                    Ton nom résonne, doux écho dans nos vies, Guide-nous, Grand Tisseur, à travers l&apos;infini.
                </p>
            </section>
        </article>
      </div>
    );
  }