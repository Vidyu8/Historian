import React, { useState } from 'react';
import '../styles/darkmoments.css'; // Import the CSS file for styling

const DarkHistoryPage = () => {
    // State to manage the visibility of each section's content
    const [showYear536, setShowYear536] = useState(false);
    const [showDancingPlague, setShowDancingPlague] = useState(false);
    const [showStrangeBeauty, setShowStrangeBeauty] = useState(false);
    const [showHolocaust, setShowHolocaust] = useState(false);
    const [showBlackDeath, setShowBlackDeath] = useState(false);

    return (
        <div className="dark-history-container">
            <header>
                <h1>Dark History: Tales of Tragedy, Beauty, and Madness</h1>
                <p>Explore the darkest and most bizarre moments in human history.</p>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* Year 536 Section */}
            <section 
                className={`section ${showYear536 ? 'active' : ''}`} 
                id="year-536"
            >
                <div className="section-title" onClick={() => setShowYear536(!showYear536)}>
                    <h2>Year 536: The Worst Year to Be Alive</h2>
                </div>
                {showYear536 && (
                    <div className="section-content">
                        <p>
                            The term "worst year ever" gets tossed around frequently, especially on social media, for reasons as trivial as being disappointed by a movie or a celebrity scandal.
                            However, when you look at history through a scientific lens, the year 536 AD stands out as a contender for the title of "worst year ever."
                            According to historians and climate scientists, no other year in the long history of our planet had such a globally disastrous impact, lasting for decades.
                            Let's explore why 536 AD was a year of unprecedented calamity.
                        </p>
                        <img 
                            src="https://cdn.mos.cms.futurecdn.net/XiVjGBGVB6hLoGBTDfW5Dg-970-80.jpg.webp" 
                            alt="Year 536"
                        />
                        <h3>A Mysterious Darkness Descends</h3>
                        <p>
                            The year 536 is often described as a time when the world went dark. A Byzantine historian named Procopius wrote about a peculiar phenomenon while traveling in Sicily.
                            He described how the sun appeared "like the moon" for most of the year, emitting a feeble, dim light that lacked its usual brightness.
                            This eerie, dimmed sunlight was not just a local event; it affected vast swathes of the world, leaving people wondering if the sun would ever fully recover.
                        </p>
                        <p>
                            The cause of this strange darkness was later traced back to a massive volcanic eruption, possibly in Iceland, which spewed vast amounts of ash and aerosols into the atmosphere, blocking sunlight and cooling the Earth.
                            This volcanic event was so powerful that it triggered what is now known as the "Late Antique Little Ice Age."
                            For months, the sun’s rays were obscured, and temperatures dropped across the globe. Michael the Syrian, a 6th-century Byzantine scribe, later confirmed the widespread phenomenon, writing that the sun remained dim for 18 months, with only about four hours of feeble daylight each day.
                        </p>
                        <p>
                            This global darkness brought a series of catastrophic consequences that would shape the course of history.
                        </p>
                        <h3>Widespread Famine Strikes</h3>
                        <p>
                            The lack of sunlight wasn’t just an inconvenience; it had devastating effects on agriculture.
                            Plants rely on sunlight for photosynthesis, and without it, crops couldn’t grow. 
                            As temperatures dropped by 1.6 to 2.5 degrees Celsius (about 3 to 4.5 degrees Fahrenheit), the world plunged into a period of severe climate disruption. 
                            Crops failed across the Northern Hemisphere, leading to widespread food shortages.
                        </p>
                        <p>
                            In places like Ireland, the crop failure was so severe that it was described as a “bread failure,” which meant a shortage of essential grains for baking.
                            People in many regions faced food scarcity, which resulted in famine. 
                            The impact on agriculture lasted for several years, and many regions would not recover their crop yields for decades.
                        </p>
                        <h3>Plague Strikes the Byzantine Empire</h3>
                        <p>
                              As if the global cooling and crop failures weren't enough, the people of 536 also had to contend with disease.
                              The year 536 marked the beginning of the Plague of Justinian, a bubonic plague that would sweep through the Byzantine Empire and beyond.
                              The disease struck at a time when many were already weakened by malnutrition due to food shortages.
                        </p>
                        <p>
                             The plague, which spread rapidly, was characterized by painful buboes (swollen lymph nodes) and could incapacitate victims within hours. 
                             As the disease spread through Constantinople, the capital of the Byzantine Empire, the city became overwhelmed with death. 
                             The stench of rotting bodies filled the air as the dead were tossed into the sea or left unburied in the streets.
                        </p>
                        <p>
                             The death toll from the Plague of Justinian was staggering, killing an estimated 50 million people over the next few years. 
                             This, combined with the earlier famines, crippled the population and had long-term consequences for the Byzantine Empire's stability and its military campaigns, especially Emperor Justinian’s efforts to revive the Roman Empire.
                        </p>
                        <h3>Extreme Weather Events Around the World</h3>
                        <p>
                           The climate disruptions caused by the volcanic eruptions in 536 weren’t confined to Europe and the Mediterranean. 
                           In China, strange weather patterns emerged, including summer snow and frost in mid-summer.
                           A yellow ash-like substance rained down from the sky, further exacerbating crop failures. 
                           One chronicler from the period reported that the unseasonable cold destroyed crops, resulting in famine in several regions. In some places, as much as 70 to 80 percent of the population died due to starvation.
                        </p>
                        <p>
                            In the Americas, the Moche civilization in Peru also felt the effects of the changing climate. 
                            Known for their advanced agricultural techniques, the Moche were heavily reliant on fishing and irrigation. 
                            However, an unusually strong El Niño event in 536 caused the waters to warm, decimating the fish supply. 
                            The resulting floods destroyed irrigation systems, leaving the Moche unable to produce enough food to sustain their population. 
                            As a result, their society, once a dominant force in the region, faced severe collapse.
                        </p>
                        <h3>Volcanic Eruptions and Long-Term Climate Cooling</h3>
                        <p>
                            The volcanic eruptions that led to the darkness and cooling in 536 weren’t isolated events. 
                            There is evidence of multiple major eruptions in the years around 536, including eruptions in Iceland, North America, and possibly El Salvador. 
                            These eruptions sent ash into the upper atmosphere, creating a global cooling effect that lasted for several years.
                        </p>
                        <p>
                            Tree ring data from Icelandic trees and ice cores from Greenland confirm that the years around 536 were marked by abnormal cooling. 
                            The "Little Ice Age" that followed had profound consequences for agriculture, as the cooler temperatures persisted for decades, leading to food shortages and a general decline in living conditions worldwide.
                        </p>
                        <h3>Conclusion</h3>
                        <p>
                            The year 536 AD was undeniably a time of unimaginable suffering and hardship. The combination of darkened skies, global cooling, widespread famine, and the Plague of Justinian made it one of the worst years in recorded history. 
                            Yet, as history often shows, even the darkest times eventually give way to recovery and growth. 
                            While 536 was certainly a low point for humanity, it also set the stage for resilience and eventual resurgence. 
                            The lessons of 536 remind us of the fragility of human existence and the importance of adaptation in the face of adversity.
                        </p>

                    </div>
                )}
            </section>

            {/* Plague of Dancing Section */}
            <section 
                className={`section ${showDancingPlague ? 'active' : ''}`} 
                id="plague-of-dancing"
            >
                <div className="section-title" onClick={() => setShowDancingPlague(!showDancingPlague)}>
                    <h2>The Plague That Made People Dance to Death</h2>
                </div>
                {showDancingPlague && (
                    <div className="section-content">
                        <p>
                            Medieval Europe, notorious for its deadly disease outbreaks and devastating plagues, witnessed an unusual and baffling event in 1518—the "dancing plague" that gripped the city of Strasbourg.
                            This bizarre affliction caused hundreds of people to involuntarily dance for days on end, some even to their deaths.
                            This strange phenomenon, which has puzzled historians and scientists for centuries, raises questions about mass hysteria, social conditions, and the medical practices of the time.
                        </p>
                        <img 
                            src="https://images.immediate.co.uk/production/volatile/sites/7/2018/04/Dance-69fbc98-e1641395856755.jpg?quality=90&webp=true&resize=360,240" 
                            alt="Dancing Plague"
                        />
                        <h3>The Beginning of the Dance</h3>
                        <p>
                            The strange episode began in July 1518, when a woman named Frau Troffea stepped into the streets of Strasbourg and began dancing uncontrollably.
                            She danced without music, rhythm, or apparent reason, attracting the attention of passersby.
                            Initially, the villagers viewed it as a bizarre and perhaps amusing performance.
                            However, Frau Troffea's actions were anything but voluntary—she danced for hours, her feet becoming bruised and bloody.
                            By the next day, she continued her frenetic movements, and by the third day, more people joined in.
                        </p>
                        <p>
                            These dancers, however, were not enjoying themselves. Many were screaming in agony, unable to stop, and some died from exhaustion or heart failure, all while dancing. 
                            The situation quickly escalated into a full-fledged crisis that the city council struggled to manage.
                        </p>
                        <h3>The City's Response: Medical and Supernatural Theories</h3>
                        <p>
                            Strasbourg's city officials, desperate for a solution, turned to local physicians for a diagnosis. 
                            After ruling out astrological and supernatural causes, the doctors decided that the dancers' symptoms were the result of a condition known as "hot blood." 
                            This was based on the prevailing medical theory of the time, which held that an imbalance in the four bodily humors (blood, phlegm, yellow bile, and black bile) could lead to mental and physical disorders. 
                            According to this theory, the afflicted dancers' brains were overheating, causing them to go into a frenzied state.
                        </p>
                        <p>
                            In an attempt to treat this "hot blood," the physicians recommended the dancers keep dancing, hoping that they would eventually tire themselves out. 
                            The city hired musicians to play for the dancers, encouraging them to keep moving. Unfortunately, the music only exacerbated the situation. 
                            Instead of slowing down, the musicians played faster, causing the dancers to move even quicker, leading to more deaths and even more people joining in the "dance."
                        </p>
                        <p>
                            When this approach failed, the authorities resorted to more drastic measures, cracking down on gambling and prostitution in an effort to cleanse the city of sin, which they believed had triggered the dancing plague. 
                            This, of course, was a religious interpretation. 
                            The city's leaders, like many of their contemporaries, believed the plague was a divine punishment for the sins of the people.
                        </p>
                        <h3>A Cure Through Saint Vitus</h3>
                        <p>
                            Desperate for a solution, the city turned to religious remedies. 
                            At the time, Saint Vitus, a Christian martyr, was known for his ability to heal illnesses, particularly those that caused trembling and convulsions. 
                            The citizens of Strasbourg, hoping for a miracle, took the afflicted dancers on a pilgrimage to a shrine dedicated to Saint Vitus. 
                            Once there, a priest performed a mass, and the dancers were given blessed crosses and red shoes. 
                            Miraculously, the epidemic seemed to subside, and the dancing came to an end. 
                            This event marked the origin of the term "Saint Vitus's Dance," which came to refer to the condition, though it was never fully understood.
                        </p>
                        <h3>Theories on the Cause of the Plague</h3>
                        <p>
                            Modern scholars have proposed several theories to explain the dancing plague, but none have been definitively proven. 
                            One widely considered explanation is that the dancers were victims of ergot poisoning, caused by consuming rye bread contaminated with Claviceps purpurea, a fungus that produces hallucinogenic compounds similar to LSD. 
                            Ergot poisoning can lead to convulsions, hallucinations, and even death, which might explain the uncontrollable dancing and the agony experienced by the sufferers. 
                            However, this theory doesn't account for the highly coordinated nature of the dance, which suggests that it may not have been random convulsions but instead a group-induced behavior.
                        </p>
                        <p>
                            Another theory suggests that the outbreak was a case of mass hysteria—a psychological phenomenon where a group of people, under extreme stress, adopt similar symptoms without any physical cause. 
                            At the time, Strasbourg had suffered through numerous famines, disease outbreaks, and social unrest, which created a climate of fear and anxiety. 
                            Mass hysteria could have easily been triggered in such a tense environment, with people responding to societal pressure by acting out in the only way they could understand—through collective physical movement.
                        </p>
                        <h3>The Legacy of the Dancing Plague</h3>
                        <p>
                            Though the outbreak eventually died down, the dancing plague remains one of the strangest episodes in medieval history. 
                            Some historians believe that it may have been part of a broader trend of "dancing mania" that affected various regions in Europe, particularly in the 14th and 16th centuries. 
                            This phenomenon often involved large groups of people dancing uncontrollably in public spaces, sometimes for hours or even days, with varying degrees of violence and death.
                        </p>
                        <p>
                            While the medical understanding of the time failed to accurately explain the dancing plague, modern theories suggest that it may have been a combination of ergot poisoning and mass hysteria, possibly exacerbated by the stressful and traumatic conditions of the time.
                        </p>
                        <p>
                            The dancing plague of 1518 serves as a fascinating reminder of the strange and mysterious events that shaped medieval Europe. 
                            It also highlights the complex interplay between superstition, disease, and the human psyche. 
                            Today, it remains a source of intrigue and wonder—one of the many odd and inexplicable episodes in history that challenge our understanding of the human condition.
                        </p>
                        <h3>Conclusion</h3>
                        <p>
                            In the end, the 1518 dancing plague left an indelible mark on Strasbourg's history. 
                            Whether caused by ergot poisoning, mass hysteria, or divine intervention, it remains a captivating story of medieval Europe—a story of social chaos, medical confusion, and religious fervor, with a touch of tragic absurdity. 
                            For those who lived through it, the experience was anything but a "great time," but for modern observers, it serves as a compelling reminder of how the mind and body can sometimes be pushed to their limits in the face of fear, disease, and societal pressure.
                            <br></br>
                            What caused the dancing plague of 1518? The answer may never be fully known, but it continues to dance its way into the annals of weird history.
                        </p>
                    </div>
                )}
            </section>

            {/* Strange Beauty Trends Section */}
            <section 
                className={`section ${showStrangeBeauty ? 'active' : ''}`} 
                id="strange-beauty-trends"
            >
                <div className="section-title" onClick={() => setShowStrangeBeauty(!showStrangeBeauty)}>
                    <h2>Fatal Beauty Trends of the Victorian Era</h2>
                </div>
                {showStrangeBeauty && (
                    <div className="section-content">
                        <p>
                            Fashion and beauty trends are often linked to sacrifice, but in the Victorian era, people took the idea of "suffering for fashion" to a shocking extreme. 
                            The period, which spanned from 1837 to 1901 during the reign of Queen Victoria, was one of dramatic cultural change. 
                            While the social fabric of the time saw a move towards a more middle-class society, with greater emphasis on personal morality and social responsibility, it was also marked by bizarre and often dangerous beauty trends.  
                            Many of these trends were based on a mix of misguided medical theories, cultural obsessions with idealized beauty, and a widespread lack of understanding about hygiene and health. 
                            The result was that women in particular, desperate to fit society's beauty ideals, engaged in practices that could—and often did—prove fatal.
                        </p>
                        <img 
                            src="https://th-thumbnailer.cdn-si-edu.com/RFoULpWCDyl_vSVm_Qo_nA-_IjM=/1000x750/filters:no_upscale():focal(381x190:382x191)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b8/69/b869261f-a697-49ad-810a-7e551b5e9b77/1888_petersons_magazine_fashion_plate.jpg" 
                            alt="Strange Beauty Trends"
                        />
                        <h3>The Obsession with Tuberculosis: "Consumptive Chic"</h3>
                        <p>
                            In the 19th century, tuberculosis, also known as consumption, was an epidemic that killed millions. 
                            The disease caused a combination of symptoms—pale skin, dramatic weight loss, rosy cheeks, and fine, silky hair—that were ironically considered signs of beauty. 
                            These physical traits were romanticized as the epitome of delicate, ethereal femininity. 
                            This concept of "consumptive chic" was prevalent in Victorian beauty standards, and many women sought to replicate the appearance of those suffering from tuberculosis, believing it to be the pinnacle of aesthetic appeal.
                        </p>
                        <p>
                            The popularity of this look led to several dangerous trends. 
                            Women wore pale makeup to lighten their skin and blush to give their cheeks a rosy, feverish hue. 
                            Corsets, which were already a symbol of femininity, became even more popular, despite their well-documented health risks. 
                            The tightness of the corset compressed the ribs, making it harder to breathe and exacerbating the symptoms of tuberculosis, and in some cases, even leading to suffocation.
                        </p>
                        <p>
                            This obsession with fragile beauty led to the rise of the so-called “hourglass figure,” often achieved at great personal expense. 
                            The physical discomfort of wearing tight corsets was considered a small price to pay for the beauty and elegance they promised. 
                            Unfortunately, this beauty ideal was not just uncomfortable; it could be life-threatening, particularly for those already suffering from tuberculosis.
                        </p>
                        <h3>Arsenic Baths and Lead Cosmetics: Toxic Beauty Regimens</h3>
                        <p>
                            The desire for pale, alabaster skin led to the use of dangerous substances like arsenic in beauty products. 
                            In a period where scientific knowledge about poisons and their effects on the body was limited, arsenic was seen as a "miracle" ingredient, often marketed as a way to achieve the perfect pale complexion. 
                            Some women would bathe in arsenic-laced spring water, while others used arsenic-infused face powders, lotions, and soaps.
                        </p>
                        <p>
                            Unfortunately, arsenic is highly toxic, and prolonged exposure to it could lead to serious health problems, including vomiting, abdominal pain, skin discoloration, numbness, cancer, and death. 
                            But the full extent of arsenic’s dangers was not known during the Victorian era, and many people unknowingly exposed themselves to this poison. 
                            Arsenic wasn’t the only dangerous ingredient found in Victorian cosmetics. 
                            Lead was commonly used in skin-lightening products, and some face paints even contained radioactive materials like radium. 
                            These products often caused health issues like paralysis, nerve damage, and even death, especially when used in large quantities over long periods.
                        </p>
                        <h3>The Hazards of Lip and Eye Makeup</h3>
                        <p>
                            The obsession with beauty didn’t stop at pale skin—it extended to red lips and dramatic eyes. 
                            Since modern lipstick hadn’t yet been invented, Victorian women relied on dyes and paints to achieve a red pout. 
                            However, these lip colors often contained toxic chemicals like mercury, lead, and ammonia, which could cause a host of health problems. 
                            Mercury, for example, can cause kidney damage and other long-term health effects, while ammonia exposure could lead to respiratory issues, eye damage, and even death.
                        </p>
                        <p>
                            Eye makeup was also a dangerous endeavor. 
                            Many Victorian women used eye paints that contained lead, mercury, or antimony oxide, all of which were known to cause cancer, kidney damage, and other serious health issues.
                        </p>
                        <h3>Nightshade: Poison for Beauty</h3>
                        <p>
                            In addition to toxic cosmetics, some Victorian women used other substances to enhance their appearance. 
                            One of the more bizarre and dangerous beauty practices involved the use of nightshade, a poisonous plant. 
                            The plant's toxins cause the pupils to dilate, creating the effect of wide, seductive eyes. 
                            This practice, which was believed to enhance beauty, involved placing drops of nightshade extract in the eyes before social events. 
                            However, nightshade is highly toxic and can cause a range of serious health issues, including delirium, seizures, and even death, particularly if used excessively.
                        </p>
                        <p>
                            This dangerous practice highlights the lengths to which some women would go in order to conform to the beauty standards of the time. 
                            The use of poisonous substances was not limited to the wealthy either; lower-class women often resorted to similar measures in hopes of elevating their social status through appearance.
                        </p>
                        <h3>The endurance of corset</h3>
                        <p>
                            While some of these deadly beauty trends faded as medical knowledge improved, others persisted for much longer. 
                            Corsets, for example, remained a staple of women's fashion until the early 20th century, despite their numerous health risks. 
                            The tight compression they placed on the body caused difficulty breathing, internal organ displacement, and potential reproductive issues. 
                            Yet, the desire for a slim waistline and a fashionable silhouette kept corsets in demand well into the 1900s. 
                            It was only during World War I, when metal shortages led to the repurposing of materials for military production, that the corset was largely abandoned in favor of more comfortable undergarments.
                        </p>
                        <h3>Conclusion</h3>
                        <p>
                            The beauty trends of the Victorian era, while a reflection of the social and cultural norms of the time, also demonstrate the lengths to which people were willing to go in order to conform to idealized standards of beauty.
                            The use of dangerous substances, harmful clothing, and toxic cosmetics in pursuit of a pale, delicate appearance speaks to a time when fashion and beauty were often valued over health and well-being.
                            Though many of these practices have long been abandoned, they serve as a cautionary tale about the dangers of vanity and the lengths people will go to in order to meet societal expectations. 
                            Today, we can look back on these trends with horror, but it’s important to remember that, at the time, they were seen as aspirational, even if they came at a deadly cost.
                        </p>
                    </div>
                )}
            </section>

            {/* Holocaust Section */}
            <section 
                className={`section ${showHolocaust ? 'active' : ''}`} 
                id="rise-of-nazism"
            >
                <div className="section-title" onClick={() => setShowHolocaust(!showHolocaust)}>
                    <h2>The Holocaust: A Story of Destruction, Resistance, and Remembrance</h2>
                </div>
                {showHolocaust && (
                    <div className="section-content">
                        <p>
                            In the first half of the 20th century, Germany was widely regarded as the intellectual and cultural capital of Europe, with Jewish communities well-integrated into the social fabric of European life. Jews were active in a wide range of professions, contributing to academia, politics, the arts, and everyday life. Yet, this vibrant and flourishing Jewish presence would be decimated by the rise of one of history’s most destructive ideologies: Nazism. The Holocaust, the systematic genocide carried out by Nazi Germany, was a horrific event that reshaped Europe and marked the worst period of suffering for the Jewish people. It was a period of unparalleled destruction, and the Jewish response to the Holocaust would forever alter the course of history.
                        </p>
                        <img 
                            src="https://www.hmd.org.uk/wp-content/uploads/2018/06/Auschwitz-Rodrigo-Paredes-Flickr-1440x960.jpg" 
                            alt="Holocaust and Nazism"
                        />
                        <h3>The Rise of Nazism and the Nuremberg Laws</h3>
                        <p>
                            In the years following World War I, Germany was embroiled in economic hardship and political instability. Amid this turmoil, a fringe political movement led by Adolf Hitler, the National Socialist Workers' Party (Nazis), began to gain traction. The Nazis espoused an extreme form of racist nationalism, with anti-Semitism at the core of their ideology. Hitler's personal hatred for Jews was evident in his infamous manifesto Mein Kampf, where he described Jews as a "noxious bacillus" and declared that his primary goal upon attaining power would be the "annihilation of the Jews."
                        </p>
                        <p>
                            Despite early setbacks, including a failed coup attempt and a lack of political success in the Reichstag (German parliament), the Nazi Party gained increasing influence following the economic collapse of 1929. This instability paved the way for Hitler's rise to power. In January 1933, Hitler was appointed Chancellor of Germany. Soon after, the Reichstag Fire allowed the Nazis to abolish constitutional protections, and by 1934, Hitler had established a dictatorship.
                        </p>
                        <p>
                            The first major step in the Nazis' anti-Semitic agenda came with the Nuremberg Laws, passed in September 1935. These laws stripped Jews of their German citizenship, barred them from holding public office, and segregated them from the rest of society. Jews were reduced to second-class citizens, setting the stage for further persecution.
                        </p>
                        <h3>The Outbreak of World War II and the Early Phases of the Holocaust</h3>
                        <p>
                            As Hitler's aggressive foreign policy led to the invasion of Poland in September 1939, the world was plunged into World War II. For Jews in Nazi-occupied territories, this marked the beginning of a campaign of systematic murder. The Nazis sought not only to conquer territory but to annihilate the Jewish people. German soldiers, along with local collaborators, rounded up Jewish men, women, and children in towns across Eastern Europe, taking them to mass graves where they were executed. Within a few years, approximately 2 million Jews were murdered in this way.
                        </p>
                        <p>
                            To further isolate and control the Jewish population, the Nazis established ghettos—walled-off areas within cities and towns where Jews were forced to live in overcrowded and unsanitary conditions. Disease, starvation, and violence were rampant. In 1941, the Nazis introduced the requirement for Jews to wear the Star of David, a symbol of their identification as Jews, marking them for further persecution.
                        </p>
                        <h3>The "Final Solution" and the Death Camps</h3>
                        <p>
                            In January 1942, Nazi leadership convened the infamous Wannsee Conference to coordinate the "Final Solution"—the systematic extermination of the Jewish people. This marked the transition from mass shootings and ghettoization to the establishment of extermination camps. Jews were deported in cattle cars to camps like Belzec, Sobibor, and Treblinka, where they were murdered in gas chambers disguised as showers. The most notorious of these camps was Auschwitz-Birkenau, where Jews were not only killed but also subjected to forced labor before their eventual extermination.
                        </p>
                        <p>
                            The scale of the genocide was staggering, with approximately six million Jews murdered during the Holocaust. The killing continued throughout the war, with mass deportations, executions, and the operation of death camps continuing well into 1944. Thousands of Jews were murdered every day in an assembly-line fashion, leaving Europe bereft of the vibrant Jewish communities that had once flourished there.
                        </p>
                        <h3>Resistance and Spiritual Survival</h3>
                        <p>
                            In the face of overwhelming brutality, many Jews found ways to resist. While armed uprisings, such as those in the ghettos of Warsaw, Vilna, and Bialystok, were rare, acts of resistance were widespread. Jews engaged in sabotage, smuggling weapons, and organizing partisan groups in the forests. These guerrilla fighters, often working alongside non-Jewish resistance movements, carried out acts of sabotage against the Nazi war machine, blowing up trains and ambushing German soldiers.
                        </p>
                        <p>
                            Spiritual resistance also played a crucial role in maintaining Jewish dignity. Despite the horrific conditions in the ghettos and concentration camps, Jews continued to observe religious holidays, study the Torah, and create art, music, and literature. These acts of defiance upheld the strength of the human spirit in the face of relentless dehumanization and violence.
                        </p>
                        <h3>The Liberation and Aftermath</h3>
                        <p>
                            The tide of the war began to turn in 1944, as Allied forces made significant advances across Europe. In January 1945, the Soviet Red Army liberated Auschwitz, and by April, Allied forces had crossed the Rhine, encircling Berlin. With Hitler's suicide in April and Germany’s unconditional surrender in May 1945, the war in Europe came to an end.
                        </p>
                        <p>
                            The aftermath of the Holocaust was devastating. Six million Jews and millions of others, including Roma, disabled individuals, political dissidents, and homosexuals, had been murdered. Entire communities were wiped out, leaving villages and cities across Europe empty of Jewish life. Many survivors returned to their homes only to find their properties seized by non-Jewish neighbors. With no recourse for reclaiming their belongings, they became refugees, many of them living in displaced persons camps.
                        </p>
                        <h3>Jewish Response and the Legacy of the Holocaust</h3>
                        <p>
                            In the wake of such destruction, Jewish communities worldwide sought to care for survivors, rebuild Jewish life, and ensure that the atrocities of the Holocaust would never be forgotten. Efforts to memorialize the victims, identify the lost, and educate future generations about the horrors of the Holocaust became central to Jewish activism in the postwar years. Holocaust survivors became witnesses, sharing their stories with the world to ensure that the lessons of the Holocaust would be passed down to future generations.
                        </p>
                        <p>
                            Today, the Holocaust remains one of the most studied and solemn events in human history. Jewish communities have worked tirelessly to build thriving lives in the Americas, Israel, and Europe. However, the scars of the Holocaust remain, as do the lessons of resilience, resistance, and the need to combat hatred wherever it arises.
                        </p>
                        <p>
                            The Holocaust was not only the systematic murder of six million Jews but also an attack on humanity itself. It stands as a brutal reminder of the dangers of unchecked hatred and intolerance, and the importance of safeguarding human dignity. The Jewish response to the Holocaust—through remembrance, education, and the rebuilding of their communities—ensures that the memories of the victims will never fade and that such horrors will never be allowed to repeat.
                        </p>
                    </div>
                )}
            </section>
            {/* Year Black Death */}
            <section 
                className={`section ${showBlackDeath ? 'active' : ''}`} 
                id="black-death"
            >
                <div className="section-title" onClick={() => setShowBlackDeath(!showBlackDeath)}>
                    <h2>The Black Death</h2>
                </div>
                {showBlackDeath && (
                    <div className="section-content">
                        <p>
                        The arrival of the Black Death in Europe marked one of the most devastating pandemics in human history, eradicating millions of lives and reshaping society. Emerging in the mid-14th century, this relentless plague claimed at least a third of Europe’s population, with global fatalities potentially surpassing 200 million. Its rapid spread, coupled with limited scientific understanding and ineffective treatments, created an unparalleled disaster whose effects lingered for centuries.
                        </p>
                        <img 
                            src="https://images.aeonmedia.co/images/b055a78f-b44e-4547-82c9-fe1bb124e920/essay-prado-the-triumph-of-death.jpg?width=3840&quality=75&format=auto" 
                            alt="Holocaust and Nazism"
                        />
                        <h3>Origins and Spread of the Plague</h3>
                        <p>
                        The Black Death, caused by the bacterium Yersinia pestis, first erupted in Asia before devastating Europe. Rumors of a deadly disease sweeping through China, India, Persia, and the Middle East preceded its arrival on European shores. In 1347, ships docked in Sicily carrying crew members stricken with blackened boils oozing blood and pus. Despite immediate efforts to expel the ships, the damage was done. The plague rapidly spread along trade routes, devastating port cities and reaching far into the countryside.
                        </p>
                        <h3>Symptoms and Transmission</h3>
                        <p>
                        The disease manifested in various terrifying ways. Swollen lymph nodes, called buboes, formed in the groin or underarms, growing to the size of eggs or even apples. Victims suffered from fever, chills, vomiting, diarrhea, and unbearable pain. Death typically followed within days, though some lingered for weeks. Initially, it was believed that the disease spread through physical contact or even by spirits leaving the deceased's bodies. However, we now know it was transmitted primarily by fleas and lice, often hosted by rats.
                        </p>
                        <p>
                        Recent studies suggest human fleas and lice may have played a larger role in spreading the plague than previously believed. This theory challenges the long-held view that infected rats were the primary culprits. Simulations based on historical data reveal that human-to-human flea transmission better matches the speed and patterns of the plague's spread in Europe. Regardless, blood-sucking pests were undoubtedly central to the disease’s transmission.
                        </p>
                        <h3>Impact and Mortality</h3>
                        <p>
                        The Black Death’s effects were catastrophic. Cities like Florence saw mortality rates as high as 90%, and countless villages were wiped off the map entirely. Bodies often lay unburied due to a lack of surviving laborers. In some cases, nature reclaimed abandoned settlements, transforming once-thriving communities into ghost towns.
                        </p>
                        <p>
                        Estimates of the death toll vary. In Europe alone, fatalities ranged between 50 and 70 million, while the global death count may have reached 200 million. With the world population at approximately 500 million in the 14th century, nearly half of humanity perished.
                        </p>
                        <h3>Attempts at Treatment</h3>
                        <p>
                        Medieval medicine offered little hope against the Black Death. Bloodletting, boil-lancing, and immersions in vinegar or rosewater were common practices, yet none were effective. Worse, these methods likely exacerbated the spread of the disease by exposing others to contagious fluids. Overwhelmed by the scale of the pandemic, many doctors and priests abandoned their duties, leaving the afflicted to suffer alone.
                        </p>
                        <h3>Contributing Factors</h3>
                        <p>
                        The pandemic’s severity was heightened by Europe’s genetic susceptibility. Studies indicate that only 0.2% of the population at the time had a genetic resistance to the plague. Consequently, the disease decimated those lacking immunity. Survivors, many of whom carried the resistant gene, passed their genetic advantage to future generations. This genetic legacy explains why some modern populations, particularly Caucasian Americans, have partial resistance to plague-like diseases.
                        </p>
                        <p>
                        Compounding the devastation, other diseases like anthrax may have co-occurred with the plague, further weakening the population. Mass graves of plague victims in England revealed anthrax spores, suggesting a convergence of deadly pathogens that amplified the pandemic’s effects.
                        </p>
                        <h3>Legacy and Lessons</h3>
                        <p>
                        The Black Death irrevocably changed the course of history. The massive loss of life led to labor shortages, economic upheavals, and profound social changes. It also spurred medical advancements as societies sought to understand and combat such outbreaks. Despite its horrors, the pandemic shaped the genetic and cultural resilience of future generations.
                        </p>
                        <p>
                        Today, Yersinia pestis persists, though it is far less deadly due to antibiotics and advanced medicine. Reflecting on the Black Death serves as a reminder of the devastation unchecked diseases can unleash and underscores the importance of scientific knowledge and preparedness in preventing future pandemics.
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

export default DarkHistoryPage;
 
