// src/pages/Myths.js
import React, { useState } from 'react';
import '../styles/myths.css';

const mythsData = [
    {
        title: "The Pyramids Were Built by Slaves",
        description: "Many people believe that the Egyptian pyramids were built by slaves. However, historians have found evidence that the workers were actually paid laborers and took pride in their work.",
        debunkedFact: "Archaeologists have uncovered workers' villages and burial sites near the pyramids, indicating they were respected laborers.",
        image:"https://i.pinimg.com/736x/25/c0/5a/25c05a9fa27d6f129eed4e5da86d4166.jpg"
    },
    {
        title: "Medieval People Thought the Earth Was Flat",
        description: "The belief that people thought the Earth was flat in the Middle Ages is a common myth. In reality, educated people knew the Earth was round.",
        debunkedFact: "Ancient Greek scholars had already determined the Earth's shape centuries earlier."
    },
    {
        title: "Vikings Wore Horned Helmets",
        description: "The image of Vikings wearing horned helmets was popularized by 19th-century opera costumes but is not historically accurate.",
        debunkedFact: "No evidence has been found in Viking art or archaeological finds to support this."
    },

    {
        title: "Witches were burned at the stake in Salem",
        description: "Although the Salem witch trials of 1692 were grueling affairs, none of the 20 people put to death were burned at the stake.",
        debunkedFact: "Nineteen of the accused witches were hanged and one man was crushed with stones. "
    },
    {
        title: "Albert Einstein failed mathematics in school",
        description: "According to Time magazine, the influential physicist laughed at this grossly inaccurate allegation",
        debunkedFact: "Saying, \"Before I was fifteen I had mastered differential and integral calculus.\""
    },
    {
        title: "\"Let them eat cake!\"",
        description: "Marie-Antoinette is believed to have said this to peasants who complained about increasing bread prices",
        debunkedFact: "The writer never attributed it to Louis XVI’s wife. The work was written between 1765 and 1770, so the “great princess” to whom Rousseau credits these words could not be the Queen of Austria as she was only 10 to 15 years old at the time."
    },
    {
        title: "Christopher Columbus discovered America",
        description: "Indigenous peoples, whose ancestors had crossed a strip of land that once connected Siberia to Alaska, were already living there.",
        debunkedFact: "Irish monks and Basque whalers had landed in America before leaving shortly afterward. Not only did Christopher Columbus fail to discover anything, he also instigated colonization of the continent"
    },
    {
        title: "Einstein was the father of the atomic bomb",
        description: "While Albert Einstein did contribute, to the origins of the nuclear bomb, the American secret service eventually dismissed him from the project.",
        debunkedFact: "Physicist Julius Robert Oppenheimer, considered the true father of the atomic bomb, directed the Manhattan Project from 1942 to 1945."
    }
];

const Myths = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="myths-page">
            <header className="myths-header">
                <h1>Myth Debunking</h1>
                <p>Explore some of the most common historical myths and the real facts behind them.</p>
            </header>

            <section className="myth-list">
            {mythsData.map((myth, index) => (
                <div key={index} className="myth-item" onClick={() => toggleExpand(index)}>
                <img src={myth.image} alt={myth.title} className="myth-image" />
                <h2 className="myth-title">
                    {myth.title}
                </h2>
                <div className="myth-content" style={{ maxHeight: expandedIndex === index ? '300px' : '0', overflow: 'hidden' }}>
                    <p><strong>Description:</strong> {myth.description}</p>
                    <p><strong>Fact:</strong> {myth.debunkedFact}</p>
                </div>
            </div>
            
            ))}
            </section>

            <section className="quiz-section">
                <h2>Test Your Knowledge</h2>
                <p>Think you know your history? Take our quiz and find out!</p>
                <button onClick={() => window.location.href = '/quizzes'}>Take Quiz</button>
            </section>

            <section className="resources">
                <h2>Further Reading</h2>
                <ul>    
                    <li><a href="/regions">Regions</a></li>
                    <li><a href="/ethnicities">Ethnicities</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Myths;
 
