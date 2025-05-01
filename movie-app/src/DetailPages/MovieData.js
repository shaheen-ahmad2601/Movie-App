const movieData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWqX9PM9GLEy-5_b6eXvfjMAJGjxmZxIpQ8S8zCCXHA6M2hs_2DmXHztiMSBLY1ayq1k&usqp=CAU",
    title: "G20",
    videoLink: "/video1",
    rating: "4 / 5",
    description:
      "       G20 is an upcoming Indian political action thriller film starring Bollywood superstar Kangana Ranaut in the lead role as the Prime Minister of India. Set against the backdrop of the G20 Summit, the movie revolves around high-stakes diplomacy, international conspiracies, and intense political drama. The story showcases how the Indian Prime Minister takes a bold stand on the global stage, navigating pressure from world leaders while protecting national interests.",
  },
  {
    id: 2,
    image:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg?format=webp",
    title: "Gladiator",
    videoLink: "/video2",
    rating: "4.5 / 5",
    description:
      "   Gladiator is an epic historical action drama film starring Hollywood actor Russell Crowe in the lead role as a Roman general turned slave. Set against the backdrop of Ancient Rome, the movie revolves around betrayal, vengeance, and intense arena battles. The story showcases how the fallen general rises as a gladiator, earning fame and fighting for justice while challenging a corrupt emperor and seeking to honor his murdered family.",
  },
  {
    id: 3,
    image:
      "https://resizing.flixster.com/EmRtLlgMu_k4MbdFU3AH4_CBLko=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4ZDNjMTVmLTg3NDAtNDVmMS04NDI5LTQwNGM0YjIwYTQ5ZS5qcGc=",
    title: "In The Lost Lands",
    videoLink: "/video3",
    rating: "4.1 / 5",
    description: `In the Lost Lands is an upcoming epic fantasy adventure film
            starring Milla Jovovich in the lead role as a powerful sorceress
           named Gray Alys. Set in a mystical realm filled with magic, beasts,
         and treachery, the movie revolves around a queen’s desperate quest,
           dark bargains, and dangerous journeys. The story showcases how the
          mysterious sorceress embarks on a perilous mission through forbidden
          lands, facing mythical creatures and moral choices, as she seeks to
           fulfill a prophecy and claim her destiny.`,
  },
  {
    id: 4,
    image:
      "https://i.etsystatic.com/13325275/r/il/9cec30/3393446498/il_570xN.3393446498_ezqg.jpg",
    title: "Drive",
    videoLink: "/video4",
    rating: "4.3 / 5",
    description:
        `Drive is a neo-noir action drama film starring Hollywood actor Ryan
            Gosling in the lead role as a silent and skilled getaway driver. Set
            against the backdrop of Los Angeles' criminal underworld, the movie
            revolves around heists, betrayal, and violent retribution. The story
            showcases how the mysterious driver gets entangled in a deadly job
            gone wrong while trying to protect his neighbor and her son, forcing
            him to confront ruthless gangsters and embrace his dark instincts in
            a fight for survival.`,
  },
  {
    id: 5,
    image:
      "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg",
    title: "War",
    videoLink: "/video5",
    rating: "3.9 / 5",
    description:
      ` War is a high-octane Indian action thriller film starring Bollywood
            actors Hrithik Roshan and Tiger Shroff in lead roles as elite
            soldiers. Set against the backdrop of international espionage and
            covert missions, the movie revolves around loyalty, betrayal, and
            intense face-offs. The story showcases how a top intelligence agent
            goes rogue, prompting his former protégé to track him down, leading
            to explosive action sequences, stunning stunts, and a gripping game
            of cat and mouse across the globe.`,
  },
  {
    id: 6,
    image:
      "https://filmfare.wwmindia.com/content/2021/jun/action-bollywood-movies-uri-the-surgical-strike-101624867578.jpg",
    title: "URI : The Surgical Strike",
    videoLink: "/video6",
    rating: "4.8 / 5",
    description:
      `   Uri: The Surgical Strike is a patriotic Indian military action film
            starring Vicky Kaushal in the lead role as Major Vihaan Singh
            Shergill, a brave Indian Army officer. Set against the backdrop of
            the 2016 Uri attack, the movie revolves around national security,
            retaliation, and tactical warfare. The story showcases how Indian
            soldiers meticulously plan and execute a covert surgical strike
            across the border to avenge the deadly terrorist attack,
            highlighting themes of valor`,
  },
  {
    id: 7,
    image:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/32/18/89/32/19/movie_asset_9acb2f9a-ed04-4065-8f66-429b74ef8b1b.jpg?format=webp",
    title: "Long Gone Heroes",
    videoLink: "/video7",
    rating: "4.4 / 5",
    description:
      ` Long Gone Heroes is an upcoming American war action film starring
            Guy Pearce and Ben Kingsley in key roles as elite military
            operatives. Set against the backdrop of a covert mission in a
            war-torn region, the movie revolves around betrayal, hidden agendas,
            and moral conflict. The story showcases how a group of special
            forces soldiers is sent on a dangerous operation to eliminate a
            warlord, but things take a dark turn when truths about their mission
            begin to unfold, forcing them to question loyalty, honor, and
            survival.`,
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8F3Z2O5xIKEpGbdNp-8rT4oSW9aK17HJ7A&s",
    title: "Battle Game II",
    videoLink: "/video8",
    rating: "3.6 / 5",
    description:
      `     Crouching Tiger, Hidden Dragon is a critically acclaimed Chinese
            martial arts film directed by Ang Lee, starring Chow Yun-fat,
            Michelle Yeoh, and Zhang Ziyi. Set in ancient China, the movie
            combines breathtaking martial arts choreography with a compelling
            story of love, honor, and betrayal. The plot revolves around a
            stolen legendary sword, Green Destiny, and the efforts of a renowned
            warrior and a young woman to retrieve it, while`,
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-sLP21aWNULJgRD86Jbh4hw9f5frbPDqDMEY6xe1TIKn_F1MXmVGL3Wk1kH3qYp-WFs&usqp=CAU",
    title: "Carter",
    videoLink: "/video9",
    rating: "4 / 5",
    description:
      `  Carter is a South Korean action thriller film starring Joo Won in
            the lead role. The movie follows the story of Carter, a man who
            wakes up with no memory of his past and is thrust into a deadly
            mission to save a kidnapped American agent and prevent a global
            disaster. With a mysterious virus threatening the world, Carter must
            rely on his instincts, fighting his way through an intense series of
            action-packed events while uncovering dark secrets about his own
            identity.`,
  },
  {
    id: 10,
    image:
      "https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/d5f863cd13cc307123989701f8b72fdf_1280x1920.webp",
    title: "Jumanji",
    videoLink: "/video10",
    rating: "4.6 / 5",
    description:
      `   Jumanji is a 1995 fantasy adventure film based on the 1981
            children's book of the same name by Chris Van Allsburg. The movie
            stars Robin Williams, Kirsten Dunst, and Bonnie Hunt and is directed
            by Joe Johnston. The story revolves around a magical and dangerous
            board game called Jumanji, which brings wild animals, natural
            disasters, and other perilous events into the real world. When two
            children,`,
  },
  {
    id: 11,
    image:
      "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
    title: "Bloody Daddy",
    videoLink: "/video11",
    rating: "4.2 / 5",
    description:
     `Bloody Daddy is an upcoming Indian action thriller film starring
            Shahid Kapoor in the lead role. Directed by Ali Abbas Zafar, the
            film follows the story of a man caught in a deadly and high-stakes
            situation involving crime, betrayal, and survival. Shahid Kapoor
            plays a father who finds himself entangled in a dangerous underworld
            conflict after a series of unexpected events.`,
  },
];

export default movieData;
