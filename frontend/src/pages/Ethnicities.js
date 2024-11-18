import React, { useState } from 'react';
import '../styles/ethnicities.css';

const ethnicities = {
  africa: {
    Zulu: {
      description: "The Zulu people of South Africa are known for their rich cultural heritage, including their vibrant dances, beadwork, and oral traditions.",
      image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6489594ccd4726001cb122e7.jpg",
    },
    Maasai: {
      description: "Indigenous to Kenya and Tanzania, the Maasai are semi-nomadic pastoralists famous for their distinctive red attire and beadwork.",
      image: "https://historica.world/wp-content/uploads/2021/08/historica-masai-women-scaled-1-1600x997.jpg",
    },
    Berber: {
      description: "The Berbers, or Amazigh people, are indigenous to North Africa. They are known for their unique language and intricate carpet weaving.",
      image: "https://www.marrakech-desert-trips.com/wp-content/uploads/2024/02/Traditional-Moroccan-Berber-clothing-.jpg",
    },
    Hausa:{
      description:"Predominantly found in Nigeria and Niger, the Hausa are known for their trade networks, traditional Hausa architecture, and their influence on Islamic culture in West Africa.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q2G9QV59qbxqV0Hn_WpxhktV41pRlF2z6Q&s",
    },
    Himba:{
      description:"The Himba people of Namibia are semi-nomadic and are recognized for their ochre-painted skin and intricate hairstyles, symbolizing their cultural identity and status.",
      image:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Namibie_Himba_0717a.jpg",
    }
  },
  asia: {
    Han: {
      description: "The Han are the largest ethnic group in China and the world, known for their contributions to art, literature, and philosophy.",
      image: "https://images.chinahighlights.com/allpicture/2022/01/e2223139580b485ab7e57ed5_cut_800x500_10.jpg",
    },
    Mongols: {
      description: "Descendants of the Mongol Empire, they are famous for their nomadic lifestyle and historical legacy.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Mongolian_musicians_in_Paris.jpg",
    },
    Ainu: {
      description: "Indigenous to Japan’s Hokkaido region, the Ainu are known for their animist beliefs and intricate wood carvings.",
      image: "https://www.tokyoreview.net/wp-content/uploads/2020/03/Ainu-People.jpg",
    },
    Pashtun:{
      description:"The Pashtuns of Afghanistan and Pakistan are known for their Pashto language, poetry, and the traditional code of conduct known as Pashtunwali.",
      image:"https://c8.alamy.com/comp/F2W6W7/quetta-23rd-sep-2015-people-in-traditional-pashtun-dresses-pose-for-F2W6W7.jpg",
    },
    Bedouin:{
      description:"Nomadic Arab people living in deserts across the Arabian Peninsula, the Bedouins are known for their hospitality, camel herding, and oral poetry traditions.",
      image:"https://www.mountainvalleyholidays.com/uploads/0000/1/2023/10/14/bedouin-legacy-in-oman.jpg",
    },
  },
  europe:{
    Celtic:{
      description:"Found in Ireland, Scotland, and Wales, Celtic people are known for their traditional music, Gaelic languages, and ancient druidic roots.",
      image:"https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MjA0NTY3NzAwMTg3MDA0/history-of-ireland-life-in-celtic-ireland.jpg",
    },
    Romani:{
      description:"The Romani, or Gypsy  people, have a nomadic heritage and are known for their vibrant music, dance, and storytelling.",
      image:"https://covinnus.com/wp-content/uploads/2019/12/Roma-women.jpg",
    },
    Slavic:{
      description:"Slavs, including Russians, Poles, and Serbs, have a rich history of folklore, traditional dances, and Orthodox Christian influence.",
      image:"https://t3.ftcdn.net/jpg/06/26/57/88/360_F_626578827_4if7RzZpTX5ttHETauP2StAbedmrGYyd.jpg",
    },
    Basque:{
      description:"Indigenous to Spain and France, the Basques are known for their unique Euskara language, strong cultural identity, and sports like Basque pelota.",
      image:"https://exploreelko.com/wp-content/uploads/2022/03/basque-culture.jpg",
    },
    Sami:{
      description:"Indigenous to the Arctic regions of Norway, Sweden, Finland, and Russia, the Sámi are known for their reindeer herding, joik singing, and colorful traditional clothing.",
      image:"https://images.ctfassets.net/7mmwp5vb96tc/2B5NzeHMrMcIuTpllrxJ3S/7300970ab7bbc870cdefdd272340073b/Sami_Culture_Kjollefjord_Norway_HGR_54857_1920_Photo_Orjan_Bertelsen.jpg",
    },
  },
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);

  // Function to toggle category display
  const toggleEthnicities = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedEthnicity(null); // Reset selected ethnicity when switching categories
    }
  };

  // Function to toggle ethnicity information display
  const toggleEthnicityInfo = (ethnicity, description, image) => {
    if (selectedEthnicity?.ethnicity === ethnicity) {
      setSelectedEthnicity(null);
    } else {
      setSelectedEthnicity({ ethnicity, description, image });
    }
  };

  const categories = ['africa', 'asia','europe'];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Explore Ethnicities Around the World</h1>
      </header>

      {/* Category Selection */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleEthnicities(category)}
            className="category-btn"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Ethnic Group Buttons */}
      {selectedCategory && (
        <div className="ethnicity-buttons">
          {Object.entries(ethnicities[selectedCategory]).map(([ethnicity, { description, image }]) => (
            <button
              key={ethnicity}
              onClick={() => toggleEthnicityInfo(ethnicity, description, image)}
              className="ethnicity-btn"
            >
              {ethnicity}
            </button>
          ))}
        </div>
      )}

      {/* Ethnicity Information */}
      {selectedEthnicity && (
        <div className="ethnicity-info">
          <h3>{selectedEthnicity.ethnicity}</h3>
          <p>{selectedEthnicity.description}</p>
          <img
            src={selectedEthnicity.image}
            alt={selectedEthnicity.ethnicity}
            className="ethnicity-image"
          />
        </div>
      )}
    </div>
  );
};

export default App;
