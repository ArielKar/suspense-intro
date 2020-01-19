import ghImage from "../assets/images/gh_img.jpg";
import ghSig from "../assets/images/gh_sig.svg";
import jlImage from "../assets/images/jl_img.jpg";
import jlSig from "../assets/images/jl_sig.svg";
import pmImage from "../assets/images/pm_img.jpg";
import pmSig from "../assets/images/pm_sig.svg";
import rsImage from "../assets/images/rs_img.jpg";
import rsSig from "../assets/images/rs_sig.png";

export const beatles = [
  {
    id: "beatle-1",
    name: "John Lennon",
    roles: "founder, co-lead vocalist, and rhythm guitarist"
  },
  {
    id: "beatle-2",
    name: "Paul McCartney",
    roles: "co-lead vocalist and bassist"
  },
  {
    id: "beatle-3",
    name: "Ringo Starr",
    roles: "drummer"
  },
  {
    id: "beatle-4",
    name: "George Harrison",
    roles: "lead guitarist"
  }
];

export const beatleDetails = {
  "beatle-1": {
    id: "beatle-1-details",
    fullName: "John Winston Ono Lennon",
    born: "1940-10-09T00:00:00.000Z",
    died: "1990-12-08T00:00:00.000Z",
    image: jlImage,
    signature: jlSig
  },
  "beatle-2": {
    id: "beatle-2-details",
    fullName: "Sir James Paul McCartney",
    born: "1942-06-18T00:00:00.000Z",
    died: "",
    image: pmImage,
    signature: pmSig
  },
  "beatle-3": {
    id: "beatle-3-details",
    fullName: "Sir Richard Starkey",
    born: "1940-07-07T00:00:00.000Z",
    died: "",
    image: rsImage,
    signature: rsSig
  },
  "beatle-4": {
    id: "beatle-4-details",
    fullName: "George Harrison",
    born: "1943-02-25T00:00:00.000Z",
    died: "2001-11-29T00:00:00.000Z",
    image: ghImage,
    signature: ghSig
  }
};

export const beatlesFunFacts = {
  "beatle-1": [
    "John grew up near a place called Strawberry Fields in Liverpool.",
    "In 1974, while standing on the balcony of his apartment with former flame May Pang, the pair claim to have seen a flying saucer. He referenced the event in his song 'Nobody Told Me' with the lyrics \"There's a UFO over New York and I ain't too surprised.\"",
    "After his murder in 1980, Yoko Ono had his remains cremated but never told anyone where they are. Fans think they could be at Strawberry Fields in Central Park.",
    "John's father left the family when he was just 5 years old and his heavily pregnant mother handed him over to her sister, Mimi. She once famously told him, \"The guitar's all right John, but you'll never make a living out of it.\"",
    "Lennon published three books: 'Skywriting by Word Of Mouth', 'A Spaniard in the Works' and 'In His Own Write' but he was planning on writing a collection of short stories for children next.",
    "His last performance was with Elton John onstage at Madison Square Gardens where they performed their hit duet 'Whatever Gets You Through The Night', 'Lucy in the Sky with Diamonds' and 'I Saw Her Standing There'.",
    "In later life, Lennon's eyesight became so bad that without his glasses, he was legally blind."
  ],
  "beatle-2": [
    "“Michelle” was inspired by Paul’s favorite technique for picking up girls at parties.",
    "“Yesterday” popped into Paul’s head when he woke up one morning.",
    "Until he could find words for “Yesterday”, Paul walked around the house humming “scrambled eggs…baby, I love scrambled eggs” so that he wouldn’t forget the tune.",
    "In 1989, Paul played a solo concert to a crowd of 350,000-plus in Brazil, which believed to be the largest paid audiance in recorded history",
    "On September 11, 2001, Paul was on an airplane in New York City. He looked out the window and saw one of the planes crash into the Twin Towers. Paul said that after he got off the plane, he went right to a bar to get a drink."
  ],
  "beatle-3": [
    "Ringo’s real name is Richard Starkey.",
    " Ringo began playing the drums in a hospital band at the age of 13 while recuperating from a bout of tuberculosis",
    "The drummer’s first nickname, Rings, reportedly came from his habit of wearing large amounts of jewelry, particularly on his fingers",
    "“I’m highly allergic to onions and garlic and spices,” he has said. “I’ve never had a pizza, never had a curry.”",
    "He fell into a coma at the age of 6 after a bout with appendicitis left him with a raging infection",
    "The legendary drummer is a bit of a germaphobe. He prefers to bump elbows instead of shaking others' hands.",
    "He’s a lefty, but plays a right-handed drum kit."
  ],
  "beatle-4": [
    "George Harrison turned 27 on February 25, 1970, less than two months before Paul McCartney told the world he had no future plans to work with the Beatles.",
    '"He never shut up," friend and fellow Traveling Wilbury Tom Petty once said of Harrison. "He was the best hang you could imagine."',
    "He was the first beatle to visit and play in America.",
    "EMI Films, Life of Brian’s original backer, withdrew funding for the Monty Python comedy classic just before filming began, scared that the religious subject matter would be too controversial. Harrison, a big fan and friend of the Pythons, set up his own production company—Handmade Films—to fund the project."
  ]
};
