import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awardsData = [
  // Engineering Awards
  {
    placement: "1st Place",
    event: "Gaia Track",
    detail: "Eigen Games @ Eth Denver",
    prize: "$1,375",
    year: 2025,
    category: "Engineering",
    level: "National",
  },
  {
    placement: "1st Place",
    event: "Boundless Track",
    detail: "Eigen Games @ Eth Denver",
    prize: "$1,375",
    year: 2025,
    category: "Engineering",
    level: "National",
  },
  {
    placement: "1st Place",
    event: "Midwest Blockathon",
    detail: "Pinata Track",
    prize: "$1,000",
    year: 2025,
    category: "Engineering",
    level: "Regional",
  },
  {
    placement: "2nd Place",
    event: "XRPL Builder Residency",
    detail: "Silver Overall",
    prize: "$750",
    year: 2024,
    category: "Engineering",
    level: "National",
  },
  {
    placement: "2nd Place",
    event: "XRPL Builder Residency",
    detail: "Best Use of XRPL",
    prize: "$300",
    year: 2024,
    category: "Engineering",
    level: "National",
  },
  {
    placement: "2nd Place",
    event: "ETHGlobal SF",
    detail: "Privy Track",
    prize: null,
    year: 2024,
    category: "Engineering",
    level: "National",
  },
  {
    placement: "3rd Place",
    event: "Hack Midwest",
    detail: "BrAIn Track",
    prize: null,
    year: 2024,
    category: "Engineering",
    level: "Regional",
  },
  {
    placement: "2nd Place",
    event: "K-STATE Programming Competition",
    detail: "Advanced Division",
    prize: null,
    year: 2023,
    category: "Engineering",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "KU Engineering Design",
    detail: "Mechanical Engineering",
    prize: null,
    year: 2023,
    category: "Engineering",
    level: "State",
  },
  {
    placement: "4th Place",
    event: "KU Engineering Design",
    detail: "Civil Engineering",
    prize: null,
    year: 2022,
    category: "Engineering",
    level: "State",
  },
  {
    placement: "3rd Place",
    event: "FTC Regionals",
    detail: "INSPIRE Award",
    prize: null,
    year: 2024,
    category: "Engineering",
    level: "Regional",
  },
  {
    placement: "1st Place",
    event: "FTC Regionals",
    detail: "CONNECT Award",
    prize: null,
    year: 2024,
    category: "Engineering",
    level: "Regional",
  },
  {
    placement: "2nd Place",
    event: "FTC State",
    detail: "Motivate Award",
    prize: null,
    year: 2024,
    category: "Engineering",
    level: "State",
  },
  // Recognition Awards
  {
    placement: "Featured",
    event: "Times Square Billboard",
    detail: "Eth Denver",
    link: "https://x.com/eigenlayer/status/1917993534449434967",
    prize: null,
    year: 2025,
    category: "Recognition",
    level: "National",
  },
  {
    placement: "Featured",
    event: "College DAO Blog",
    detail: "March Feature",
    link: "https://collegedao.org/blog/march-feature",
    prize: null,
    year: 2025,
    category: "Recognition",
    level: "National",
  },
  // Business Awards
  {
    placement: "1st Place (National Champion)",
    event: "BPA Nationals",
    detail: "Research Team",
    prize: null,
    year: 2024,
    category: "Business",
    level: "National",
  },
  {
    placement: "3rd Place Nationals",
    event: "BPA Nationals",
    detail: "Digital Media Production",
    prize: null,
    year: 2024,
    category: "Business",
    level: "National",
  },
  {
    placement: "5th Place Nationals",
    event: "BPA Nationals",
    detail: "Multimedia Promotion Video",
    prize: null,
    year: 2023,
    category: "Business",
    level: "National",
  },
  {
    placement: "7th Place Nationals",
    event: "BPA Nationals",
    detail: "Presentation Management Team",
    prize: null,
    year: 2023,
    category: "Business",
    level: "National",
  },
  {
    placement: "9th Place Nationals",
    event: "BPA Nationals",
    detail: "Branding and Promotion Team",
    prize: null,
    year: 2023,
    category: "Business",
    level: "National",
  },
  {
    placement: "National Ambassador Torch",
    event: "BPA NLC Conference",
    detail: "Anaheim",
    prize: null,
    year: 2023,
    category: "Business",
    level: "National",
  },
  {
    placement: "2nd Place",
    event: "BPA State",
    detail: "Spreadsheet Applications",
    prize: null,
    year: 2022,
    category: "Business",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "BPA State",
    detail: "Video Production Team",
    prize: null,
    year: 2022,
    category: "Business",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "BPA State",
    detail: "Presentation Management Team",
    prize: null,
    year: 2024,
    category: "Business",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "BPA State",
    detail: "Digital Media Production",
    prize: null,
    year: 2024,
    category: "Business",
    level: "State",
  },
  {
    placement: "3rd Place",
    event: "BPA State",
    detail: "Presentation Management Team",
    prize: null,
    year: 2023,
    category: "Business",
    level: "State",
  },
  {
    placement: "Statesman Torch Award",
    event: "BPA State Conference",
    detail: null,
    prize: null,
    year: 2022,
    category: "Business",
    level: "State",
  },
  // Math/Science Awards
  {
    placement: "Qualifier",
    event: "AIME (American Invitational Mathematics Examination)",
    detail: "3x Qualifier",
    prize: null,
    year: null, 
    category: "Math/Science",
    level: "National",
  },
  {
    placement: "Honor Roll",
    event: "AMC 10",
    detail: "Score: 121.5",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "National",
  },
  {
    placement: "Best Score",
    event: "AIME",
    detail: "Score: 7",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "National",
  },
  {
    placement: "USAMO Index",
    event: "USAMO",
    detail: "Score: 175",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "National",
  },

  // Science
  {
    placement: "3rd Place",
    event: "Duke Virtual Science Tournament",
    detail: null,
    prize: null,
    year: 2021,
    category: "Math/Science",
    level: "National",
  },
  {
    placement: "Top 6 Finisher",
    event: "Science Olympiad Regionals",
    detail: "6 Events",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "Regional",
  },
  {
    placement: "2nd Place",
    event: "Science Olympiad State",
    detail: "Codebusters",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "Science Olympiad State",
    detail: "Experimental Design",
    prize: null,
    year: null,
    category: "Math/Science",
    level: "State",
  },
  {
    placement: "2nd Place Team",
    event: "Science Olympiad State",
    detail: null,
    prize: null,
    year: null,
    category: "Math/Science",
    level: "State",
  },
  // Speaking Awards
  {
    placement: "NSDA National Qualifier",
    event: "NSDA Nationals",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2024,
    category: "Speaking",
    level: "National",
  },
  {
    placement: "Runner-Up",
    event: "NSDA Nationals Three Trails",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2024,
    category: "Speaking",
    level: "National",
  },
  {
    placement: "State Semifinalist",
    event: "Forensics",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "1st Place",
    event: "Ad Astra",
    detail: "Extemporaneous Speech",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "1st Place",
    event: "Ad Astra",
    detail: "Impromptu Speech",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "3rd Place",
    event: "BVN",
    detail: "Extemporaneous Speech",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "3rd Place",
    event: "BVN",
    detail: "Duo Interpretation",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "Quarterfinalist",
    event: "J. Matt Hill",
    detail: "Open Division",
    prize: null,
    year: 2022,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "Quarterfinalist",
    event: "WaRU",
    detail: "Open Division",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "Quarterfinalist",
    event: "BVC",
    detail: "Open Division",
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "2nd Place",
    event: "NSDA Qualifier",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2024,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "4th Place",
    event: "BVC",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2024,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "3rd Place",
    event: "LFS",
    detail: "Extemporaneous Speaking",
    prize: null,
    year: 2024,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "State Qualifier",
    event: "Speech and Debate",
    detail: "All 5 Seasons",
    prize: null,
    year: null,
    category: "Speaking",
    level: "State",
  },
  {
    placement: "Participant",
    event: "Sunflower State Debate",
    detail: "KDC & 2-Speaker Team",
    prize: null,
    year: "2022–2024",
    category: "Speaking",
    level: "State",
  },
  {
    placement: "1st Place",
    event: "Novice BVW",
    detail: "2nd Place Speaker",
    prize: null,
    year: 2021,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "6th Place",
    event: "Novice WaRU",
    detail: "9th Place Speaker",
    prize: null,
    year: 2021,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "1st Place",
    event: "JV ONW",
    detail: null,
    prize: null,
    year: 2022,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "1st Place",
    event: "JV Lansing",
    detail: "2nd Place Speaker",
    prize: null,
    year: 2022,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "1st Place",
    event: "Open Blue Valley",
    detail: "3rd Place Speaker",
    prize: null,
    year: 2022,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "3rd Place",
    event: "Open BVN",
    detail: "8th Place Speaker",
    prize: null,
    year: 2022,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "1st Place",
    event: "Open ONW",
    detail: null,
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "Regional",
  },
  {
    placement: "3:3 Record",
    event: "Kansas Debate Classic",
    detail: null,
    prize: null,
    year: 2023,
    category: "Speaking",
    level: "State",
  },
];

const categories = ["Engineering", "Business", "Speaking", "Math/Science", "Recognition"];
const levels = ["All", "National", "State", "Regional"];

// Placement sort logic
function getPlacementRank(placement = "") {
  if (placement.includes("1st")) return 1;
  if (placement.includes("2nd")) return 2;
  if (placement.includes("3rd")) return 3;
  return 4;
}

function extractYearNum(year) {
  if (!year) return 0;
  if (typeof year === "string" && year.includes("–")) {
    const parts = year.split("–");
    return parseInt(parts[1]) || 0;
  }
  return parseInt(year) || 0;
}

function Awards() {
  const [selectedCategory, setSelectedCategory] = useState("Engineering");
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Filter
  const filteredAwards = awardsData.filter((award) => {
    const categoryMatch = award.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || award.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  // Sort
  const sortedAwards = [...filteredAwards].sort((a, b) => {
    const rankA = getPlacementRank(a.placement);
    const rankB = getPlacementRank(b.placement);
    if (rankA !== rankB) return rankA - rankB;

    const yearA = extractYearNum(a.year);
    const yearB = extractYearNum(b.year);
    return yearB - yearA; // most recent first
  });

  return (
    <div
      id="awards"
      style={{
        padding: "2rem",
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: "sans-serif",
        maxWidth: "700px",
        margin: "3rem auto",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Awards</h2>

      {/* Filter Chip */}
      <div
        style={{
          marginBottom: "1rem",
          fontSize: "0.95rem",
          fontStyle: "italic",
          color: "#555",
        }}
      >
        Showing: <strong>{selectedCategory}</strong>
        {selectedLevel !== "All" && <> + <strong>{selectedLevel}</strong></>}
      </div>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "1rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "6px 14px",
              fontSize: "0.9rem",
              backgroundColor: selectedCategory === cat ? "#333" : "#f0f0f0",
              color: selectedCategory === cat ? "#fff" : "#000",
              border: selectedCategory === cat ? "2px solid #000" : "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Level Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "1.5rem",
        }}
      >
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            style={{
              padding: "6px 14px",
              fontSize: "0.85rem",
              backgroundColor: selectedLevel === lvl ? "#333" : "#f0f0f0",
              color: selectedLevel === lvl ? "#fff" : "#000",
              border: selectedLevel === lvl ? "2px solid #000" : "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Award List */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={`${selectedCategory}-${selectedLevel}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{
            listStyle: "disc",
            paddingLeft: "1.2rem",
            lineHeight: "1.8",
            fontSize: "1rem",
          }}
        >
          {sortedAwards.map((award, idx) => {
            const parts = [
              award.placement,
              award.event,
              award.detail,
              award.prize,
              award.year,
            ].filter(Boolean);

            const content = `🏅 ${parts.join(" · ")}`;

            return (
              <li key={idx}>
                {award.link ? (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0070f3", textDecoration: "underline" }}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}


export default Awards;
