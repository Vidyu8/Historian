import React, { useState } from 'react';
import '../styles/mysteries.css'; // Import the CSS file for styling

const Mysteries = () => {
    // State to manage the visibility of each section's content
    const [showBigStoneRings, setShowBigStoneRings] = useState(false);
    const [showBermuda, setShowBermuda] = useState(false);
    const [showPatrick, setShowPatrick] = useState(false);
    const [showBeale, setShowBeale] = useState(false);
    const [showAtlantis, setShowAtlantis] = useState(false);

    return (
        <div className="unsolved-history-container">
            <header>
                <h1>Unsolved Historical Mysteries</h1>
                <p>Delve into the depths of the unknown.</p>
            </header>
            <br />
            <br />
            <br />
            <br />
            {/* Big Stone Rings Section */}
            <section 
                className={`section ${showBigStoneRings ? 'active' : ''}`} 
                id="big-stone-rings"
            >
                <div className="section-title" onClick={() => setShowBigStoneRings(!showBigStoneRings)}>
                    <h2>The Big Stone Rings of Jordan and Syria</h2>
                </div>
                {showBigStoneRings && (
                    <div className="section-content">
                        <p>
                            Across the arid plains of Jordan and Syria lie enigmatic ancient structures known as the Big Stone Rings, mysterious circular formations of low stone walls that date back as far as 4500 BCE. These rings predate the Roman Empire and are among the most intriguing remnants of early human civilization in the region. Their construction is remarkable for its precision, with some of the rings spanning an astonishing 1,450 feet in diameter. Even with modern technology, replicating such large-scale arrangements with similar accuracy would pose significant challenges, raising questions about the advanced techniques or knowledge possessed by their creators.
                        </p>
                        <img 
                            src="https://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2014/11/circle3.jpg" 
                            alt="Big Stone Rings"
                        />
                        <p>
                            Despite their impressive size and symmetry, the rings are surprisingly low, standing only a few feet high. What makes them even more puzzling is the absence of clear openings, such as doors or gaps in their walls. If they were used as enclosures for animals or storage, the lack of entry points would render them impractical for such purposes. This has left archaeologists and historians stumped, as their intended use does not align with conventional architectural functions like shelter or containment.
                        </p>
                        <p>
                            The rings’ layout and sheer scale suggest they were designed for something far more significant than utilitarian needs. Some researchers speculate that they may have held ceremonial or religious importance, perhaps serving as sacred spaces for rituals or gatherings. Others suggest they might have had an astronomical purpose, aligning with celestial events or seasons, much like other ancient structures such as Stonehenge. However, without written records or clear evidence, these theories remain speculative.
                        </p>
                        <p>
                            Adding to the mystery, the rings are found in open plains, where they are exposed to the elements, yet they have endured for millennia. This durability highlights the skill of their builders and the importance these structures must have held. Their creators clearly invested considerable time and effort into their construction, suggesting that the rings served a purpose central to their way of life.
                        </p>
                        <p>
                            The lack of definitive answers about the Big Stone Rings has made them a topic of fascination for historians, archaeologists, and enthusiasts alike. They offer a glimpse into the ingenuity of ancient civilizations and their ability to undertake massive projects despite limited tools and resources. Yet, these stone circles also remind us of how much remains unknown about our collective past, challenging modern scholars to uncover the secrets they still hold.
                        </p>
                        <p>
                            In the end, the Big Stone Rings of Jordan and Syria stand as silent witnesses to an ancient world, their purpose shrouded in mystery. Whether they were places of worship, social gathering sites, or something entirely different, their enduring presence sparks curiosity and wonder, urging us to continue seeking answers about the lives and cultures of those who came before us.
                        </p>
                    </div>
                )}
            </section>

            {/* Oklahoma Bermuda Triangle Section*/}
            <section 
                className={`section ${showBermuda ? 'active' : ''}`} 
                id="Bermuda-Triangle"
            >
                <div className="section-title" onClick={() => setShowBermuda(!showBermuda)}>
                    <h2>Oklahoma’s Bermuda Triangle</h2>
                </div>
                {showBermuda && (
                    <div className="section-content">
                        <p>
                        In the remote and windswept Beaver Dunes Park of Oklahoma lies a mysterious region often referred to as “Oklahoma’s Bermuda Triangle.” Known for its sandy hills and scenic hiking trails, the area also has a dark reputation steeped in eerie disappearances and unexplained phenomena. Tales of its sinister past date back to the 1500s when Spanish explorer Francisco Coronado ventured into the area. Despite warnings from Native Americans about the dunes being dangerous, Coronado reportedly pressed forward, only to lose several members of his expedition without a trace.
                        </p>
                        <img 
                            src="https://thumbs.dreamstime.com/b/vector-map-bermuda-triangle-schematic-79735513.jpg" 
                            alt="Bermuda Triangle on map"
                        />
                        <p>
                        The ominous reputation of the dunes did not fade with time. In 1897, a Pioneer woman was reported to have vanished in the area under mysterious circumstances. Decades later, in 1987, a tourist disappeared without leaving a single clue behind. These incidents have fueled speculation and fear, with many wondering if something otherworldly lies beneath the sands. Local lore speaks of a "Shaman's Portal," a mythical gateway that swallows those who stray too far. This theory aligns with Native American legends, which have long described the region as a place where the boundaries between worlds blur. 
                        </p>
                        <p>
                        Adding to the mystery are reports of extraterrestrial connections. Some theorists suggest that a UFO may have crashed in the dunes long ago, its wreckage buried beneath the sands. They believe that unusual energy from this crash might explain the disappearances and strange phenomena reported in the area. Eyewitness accounts further deepen the intrigue, with locals claiming to have seen men in military uniforms digging in the dunes at night, as if searching for something hidden. These secretive activities have left residents and visitors with more questions than answers, sparking rumors of government involvement.
                        </p>
                        <p>
                        Theories about the dunes range from the paranormal to the scientific. While some attribute the disappearances to natural phenomena, like unstable sand or sinkholes, others are convinced that the area is a hotspot for supernatural activity. The concept of the Shaman's Portal, in particular, has captivated many, drawing parallels to other mysterious locations around the world, like the Bermuda Triangle itself.
                        </p>
                        <p>
                        Today, Beaver Dunes Park remains a popular destination for hikers and adventurers, but its eerie reputation persists. Stories of the vanished linger in local memory, and the unexplained sightings and strange occurrences continue to draw curious visitors hoping to uncover the truth. Whether the legends are rooted in fact or fueled by imagination, Oklahoma's Bermuda Triangle serves as a chilling reminder of the mysteries that can still lurk in even the most unassuming places.
                        </p>
                        <p>
                        In the end, the dunes hold their secrets tightly, refusing to give up answers to the puzzles they’ve created over centuries. Whether it’s a portal to another dimension, a hidden UFO site, or just the tricks of nature, the haunting tales of Beaver Dunes Park ensure its place in the annals of the unexplained. 
                        </p>
                    </div>
                )}
            </section>

            {/* St.Patrick resting place section */}
            <section 
                className={`section ${showPatrick ? 'active' : ''}`} 
                id="st-patrick"
            >
                <div className="section-title" onClick={() => setShowPatrick(!showPatrick)}>
                    <h2>St Patricks final resting place</h2>
                </div>
                {showPatrick && (
                    <div className="section-content">
                        <p>
                        The mystery of St. Patrick’s final resting place is one of the most enduring enigmas surrounding Ireland’s patron saint. While St. Patrick is universally celebrated for bringing Christianity to Ireland in the 5th century, the exact location of his grave has sparked debate for centuries. Tradition in Northern Ireland holds that St. Patrick is buried at Down Cathedral in Downpatrick, County Down. A large stone slab inscribed with his name marks the supposed site, attracting pilgrims and visitors from around the world. Yet, not everyone agrees that this is his true final resting place.
                        </p>
                        <img 
                            src="https://www.saintpatrickcentre.com/wp-content/uploads/2022/03/grave.jpg" 
                            alt="st patrick grave"
                        />
                        <p>
                        Another legend places St. Patrick’s grave in Glastonbury Abbey in Somerset, England. According to medieval monks at Glastonbury, St. Patrick returned to Britain after his mission in Ireland, spending his final years as the abbey’s first abbot. This theory aligns with the fact that St. Patrick was born in Roman Britain, making it plausible that he might have wished to return to his homeland before his death. The abbey itself has long been a focal point of myth and legend, including claims of ties to King Arthur, which adds to the intrigue surrounding its association with St. Patrick.
                        </p>
                        <p>
                        The lack of concrete evidence to definitively confirm either location fuels the ongoing mystery. In Ireland, Down Cathedral remains a deeply significant site, with its grave marker serving as a symbol of St. Patrick’s enduring legacy. However, the story from Glastonbury, while less prominent, cannot be entirely dismissed. Medieval records from the abbey describe St. Patrick as a central figure in its history, and his connection to Roman Britain lends some credibility to this alternate narrative.
                        </p>
                        <p>
                        This dual claim to St. Patrick’s burial site highlights the complex interplay of history, legend, and national identity. For Ireland, St. Patrick is a symbol of cultural pride, and the idea of his grave being located outside the country is difficult to accept. For England, particularly Glastonbury, a connection to St. Patrick enhances the abbey’s already rich history and status as a spiritual landmark.
                        </p>
                        <p>
                        Ultimately, the question of where St. Patrick is buried remains unanswered. Archaeological investigations have provided no definitive proof to confirm one site over the other. What is clear, however, is that both Down Cathedral and Glastonbury Abbey honor the memory of a man whose influence transcends borders. St. Patrick’s life and mission continue to inspire, and the mystery of his final resting place only adds to the mystique of his remarkable legacy. Whether he rests in the rolling hills of Ireland or the historic grounds of Glastonbury, his impact on the world is undeniable.
                        </p>
                    </div>
                )}
            </section>

            {/* Beale Treasure Section */}
            <section 
                className={`section ${showBeale ? 'active' : ''}`} 
                id="beale-treasure"
            >
                <div className="section-title" onClick={() => setShowBeale(!showBeale)}>
                    <h2>The Beale Treasure</h2>
                </div>
                {showBeale && (
                    <div className="section-content">
                        <p>
                        The Beale Treasure is one of the most tantalizing mysteries in the world of lost treasures, shrouded in cryptic codes, rumors, and intrigue. First brought to public attention in 1885 through the publication of *The Beale Papers* by James B. Ward, the story claims that a man named Thomas J. Beale buried a massive hoard of gold, silver, and jewels somewhere in Bedford County, Virginia. According to the tale, Beale left behind three coded ciphers that, if deciphered, would reveal the treasure's location, its contents, and the names of the individuals who stood to inherit it. 
                        </p>
                        <img 
                            src="https://minutemedia-ressh.cloudinary.com/image/upload/v1644497767/shape/cover/sport/cipher-no-12x-1-bf44c9bfb3408869253548b7ae68f1a6.png" 
                            alt="beale treasure mysterious code"
                        />
                        <p>
                        Of the three ciphers, only one has been decoded, and it was cracked using the Declaration of Independence as a key. This deciphered text describes the treasure’s value and its existence but provides no specifics on its hiding place. The other two ciphers, which presumably contain the location and beneficiaries, remain unsolved, fueling endless speculation and debate about their authenticity and the treasure’s reality.  
                        </p>
                        <p>
                        Over the years, many have questioned whether the Beale Treasure is real or simply an elaborate hoax. Cryptographer Jim Gillogly conducted an analysis of the ciphers and suggested they may lack structure, hinting at a possible fabrication. However, he also admitted that hidden layers within the codes couldn’t be entirely ruled out. The mystery deepened in 2001 when a website called “BeSolved” claimed to have cracked the ciphers. Their solutions, however, failed to align with known cipher methodologies and could not be independently verified, leaving treasure hunters no closer to the prize.
                        </p>
                        <p>
                        Adding to the intrigue are the connections between Ward, Beale, and Freemasonry. Ward’s ties to the Masonic Order, along with hidden Masonic symbols embedded within the ciphers, have led some to speculate that the entire treasure story is either a Masonic allegory or a puzzle designed for members of the secretive organization. This theory has attracted not only treasure hunters and cryptographers but also skeptics who believe the mystery may be more symbolic than literal.
                        </p>
                        <p>
                        Despite the doubts, the allure of the Beale Treasure persists. Adventurers have scoured the countryside of Bedford County for clues, often risking life and limb in their search. One such treasure hunter, Daniel Cole, tragically died in 2001 while on an expedition to locate the treasure, a grim reminder of the lengths to which some will go in pursuit of this elusive prize.
                        </p>
                        <p>
                        To this day, the Beale Treasure remains one of the most enduring unsolved mysteries, captivating the imaginations of treasure seekers and codebreakers alike. Whether it lies buried beneath the Virginia soil or exists only as a masterful hoax, the legend of the Beale Treasure ensures its place as a timeless story of adventure, mystery, and human curiosity.
                        </p>
                    </div>
                )}
            </section>
            {/* Unfinished Tale of Atlantis */}
            <section 
                className={`section ${showAtlantis ? 'active' : ''}`} 
                id="atlantis"
            >
                <div className="section-title" onClick={() => setShowAtlantis(!showAtlantis)}>
                    <h2>The unfinished tale of Atlantis</h2>
                </div>
                {showAtlantis && (
                    <div className="section-content">
                        <p>
                        The legend of Atlantis, one of the greatest mysteries of the ancient world, originates from the writings of the Greek philosopher Plato. In his dialogues *Timaeus* and *Critias*, Plato describes Atlantis as a powerful and advanced civilization that ultimately met its downfall, sinking beneath the ocean due to divine punishment. The tale of Atlantis has captured imaginations for centuries, inspiring countless theories about its existence and location. However, there is an often-overlooked element of the story that adds to its mystery—Plato never finished it.
                        </p>
                        <img 
                            src="https://media.sciencephoto.com/image/c0150238/800wm" 
                            alt="Platos map of Atlantis"
                        />
                        <p>
                        The dialogue *Critias*, which recounts much of the Atlantis tale, abruptly ends mid-sentence. Plato had planned to expand on the story in a third dialogue, *Hermocrates*, but this work was never written or has been lost to history. Scholars have long debated why Plato left this narrative incomplete. Some suggest it may reflect a deliberate philosophical choice, symbolizing the limitations of human knowledge or the unattainable nature of perfection. Others speculate that Plato may have abandoned the project due to waning interest, other priorities, or even his death.
                        </p>
                        <p>
                        The unfinished state of the Atlantis story leaves us with more questions than answers. Was Atlantis purely a metaphor for the dangers of hubris and the fragility of civilizations, as many believe? Or did Plato base his account on historical or mythological sources passed down through oral traditions? Some theorists argue that Atlantis could have been inspired by real places or events, such as the volcanic destruction of the Minoan civilization on the island of Thera (modern-day Santorini). Others take a more speculative approach, imagining Atlantis as an ancient, highly advanced society lost to time.
                        </p>
                        <p>
                        Despite its unfinished nature, the tale of Atlantis has resonated across cultures and generations. Writers, historians, and explorers have all sought to uncover the truth behind the myth. From Renaissance thinkers to modern-day archaeologists, the allure of Atlantis remains a powerful force, driving exploration and fueling debates about the intersection of myth and reality.
                        </p>
                        <p>
                        Despite its unfinished nature, the tale of Atlantis has resonated across cultures and generations. Writers, historians, and explorers have all sought to uncover the truth behind the myth. From Renaissance thinkers to modern-day archaeologists, the allure of Atlantis remains a powerful force, driving exploration and fueling debates about the intersection of myth and reality.
                        </p>
                        <p>
                        Plato’s decision—or inability—to complete his story has only deepened its mystique. Some suggest that leaving Atlantis as an open-ended narrative allows readers to ponder its meaning and draw their own conclusions. In this way, Plato's incomplete tale serves as an enduring enigma, challenging us to reflect on the nature of human ambition, the rise and fall of civilizations, and the mysteries that lie beneath the surface of history.
                        </p>
                        <p>
                        Whether Atlantis was a historical reality, a moral allegory, or simply a figment of Plato’s imagination, its unfinished story ensures its place as one of the most captivating and enduring legends in human history. The gaps in the narrative invite us to explore, question, and dream—perhaps the very outcomes Plato intended.
                        </p>
                    </div>
                )}
            </section>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
    );
}

export default Mysteries;


