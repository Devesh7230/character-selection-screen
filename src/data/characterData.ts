import { Character } from "../types";
import AmmaCharacter from "../assets/images/Amma_Character.png";
import AmmaWeapon from "../assets/images/Amma_Weapon.jpg";
import DeveshCharacter from "../assets/images/Devesh_Character.png";
import DeveshWeapon from "../assets/images/Devesh_Weapon.jpg";
import GeetaCharacter from "../assets/images/Geeta_Character.png";
import GeetaWeapon from "../assets/images/Geeta_Weapon.avif";
import JugalCharacter from "../assets/images/Jugal_Character.png";
import JugalWeapon from "../assets/images/Jugal_Weapon.jpg";
import KomalCharacter from "../assets/images/Komal_Character.png";
import KomalWeapon from "../assets/images/Komal_Weapon.jpg";
import KrishanCharacter from "../assets/images/Krishan_Character.png";
import KrishanWeapon from "../assets/images/Krishan_Weapon.jpg";
import KunikaCharacter from "../assets/images/Kunika_Character.png";
import KunikaWeapon from "../assets/images/Kunika_Weapon.jpg";
import MaheshCharacter from "../assets/images/Mahesh_Character.png";
import MaheshWeapon from "../assets/images/Mahesh_Weapon.avif";
import ManjulaCharacter from "../assets/images/Manjula_Character.png";
import ManjulaWeapon from "../assets/images/Manjula_Weapon.jpg";
import PawanCharacter from "../assets/images/Pawan_Character.png";
import PawanWeapon from "../assets/images/Pawan_Weapon.avif";
import ShalineeCharacter from "../assets/images/Shalinee_Character.png";
import ShalineeWeapon from "../assets/images/Shalinee_Weapon.jpg";
import ShantiCharacter from "../assets/images/Shanti_Character.png";
import ShantiWeapon from "../assets/images/Shanti_Weapon.jpg";
import VinodCharacter from "../assets/images/Vinod_Character.png";
import VinodWeapon from "../assets/images/Vinod_Weapon.jpg";
import VinitCharacter from "../assets/images/Vinit_Character.png";
import VinitWeapon from "../assets/images/Vinit_Weapon.jpg";

export const characterData: Character[] = [
  {
    id: "Idiot",
    name: "Devesh Yadav",
    element: "Geo",
    level: "70/90",
    friendshipLevel: 10,
    description: "A mysterious Idiot who tries to navigate a world that is clearly far too complicated for him.",
    stats: {
      maxHp: 16476,
      atk: 1616,
      def: 898,
      elementalMastery: 0,
      maxStamina: 240,
    },
    images: {
      profileThumb: DeveshCharacter,
      mainRender: DeveshCharacter,
      weaponRender: DeveshWeapon,
    },
    weapon: {
      name: "Volleyball",
      type: "Dremas", 
      rarity: 2,
      baseAtk: 542,
      subStat: "CRIT Rate",
      subStatValue: "18.2%",
      refinement: 1,
      description: "Armed with nothing but a volleyball and a delusional dream of becoming the 'Volleyball King,' a total idiot sets out to achieve the absolute nothing he’s good at.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Judgmental Samaritan", 
        description: "Always helps others when he can, but silently judges them the entire time.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Envious Saboteur", 
        description: "Constantly compares himself to others, triggering his own depression; who needs enemies with a mind like this?", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Bridge Burner", 
        description: "An idiot's social cycle: he either breaks his bonds with others, or they break their bonds with him.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Smiling Solitude", 
        description: "Wears a permanent, idiotic grin, masking an invisible wall of absolute loneliness whenever he is alone.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Fool's Fortune", 
        description: "Divine luck favors this idiot in times of dire need—honestly, it's probably the only reason he's still alive.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Hypocrite's Descent", 
        description: "Slowly morphing into the exact thing he used to hate. He wants to stop, but you can't expect much from an idiot, can you?", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Panda's Sanctuary", 
        description: "Instantly purges and forgets any negative thoughts concerning his Panda.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Transparent Mind", 
        description: "Incapable of hiding thoughts from Panda, knowingly hurting her because his mind is an open book.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Simp Reflex", 
        description: "His body is even stupider than his brain; its blind devotion to Panda unlocks boundless, idiot strength for her sake.", 
        isLocked: false 
      },
      { 
        id: 4, 
        name: "Iron Fast", 
        description: "Possesses the random ability to fast for two days straight without collapsing.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Anxious Futurist", 
        description: "Perpetually confused, he ruins his present by obsessively overthinking an unpredictable future.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Gluttonous Amnesia", 
        description: "All existential dread and sadness instantly vanish the second food enters his stomach.", 
        isLocked: true 
      },
    ],
    profile: {
      storyText: "A simple, ordinary man plagued by endless problems and completely unremarkable features, yet somehow beloved by luck itself. The day he met Panda, the love of his life, his world changed; from that day on, he becomes a little less of an idiot each day—but make no mistake, he is still very much an idiot.",
      voiceActor: "Devesh Yadav 🤓",
      birthday: "6 Feburary 2003",
      region: "Pink City",
    },
  },
  {
    id: "Panda",
    name: "Komal Gupta",
    element: "Electro",
    level: "90/90",
    friendshipLevel: 8,
    description: "A cute little panda who seemingly only knows how to eat and sleep all day, living as lazy as can be. Yet, because of an accelerated maturity, they understand complex situations with a surprisingly calm and sharp mind—but beware, if anyone dares to wrong them, they will witness the rare, terrifying fury of a true Kung Fu Panda.",
    stats: {
      maxHp: 15889,
      atk: 2218,
      def: 720,
      elementalMastery: 100,
      maxStamina: 240,
    },
    images: {
      profileThumb: KomalCharacter,
      mainRender: KomalCharacter,
      weaponRender: KomalWeapon,
    },
    weapon: {
      name: "5 Min Rule",
      type: "Time",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT DMG",
      subStatValue: "66.2%",
      refinement: 1,
      description: "No person, no item, no god, and no cosmic entity possesses the power to tether this mind to negativity for more than five minutes. Past that mark, all despair is utterly obliterated.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Maternal Friction", 
        description: "Destined to always locks horns with her mother; finding themselves on the same page remains an impossible cosmic anomaly.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Guardian Shadows", 
        description: "Backed by two constants: her idiot, silently clearing obstacles from her path, and her mischievous brother, who proves reliable... well, most of the time.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Panda's Vintage", 
        description: "Possesses a natural, panda-like charm that ages like fine wine. With every passing day, her beauty, cuteness, and grace only grow more radiant.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Former Softie, Current Menace", 
        description: "Permanently loses the ability to accept fake apologies. Enemies who have previously caused sadness or betrayal are locked out of receiving any aid or mercy forever.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "The 'Main Character' Energy", 
        description: "She is, and always will be, her own favorite person.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Unfettered Sovereignty", 
        description: "Unlocks ultimate independence. Rejects all traditional 'Compulsory Marriage' debuffs, granting her 100% freedom to live exactly how she wants, dependent on no one.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Relentless Ambition", 
        description: "When chasing her career, fatigue and time cease to exist. She will sacrifice everything to execute a killer performance and secure her independence.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Surgical Rhetoric", 
        description: "A master of debate who speaks with absolute precision—except on moody days. She calmly dissects problems and delivers the definitive countermove, wasting zero energy.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Karmic Threshold", 
        description: "The ultimate ally. To win her friendship is to be blessed by fortune; to betray her or walk away is to invite absolute misfortune.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Silent Fortress", 
        description: "She will never voice her burdens to anyone. Choosing to fight her battles entirely alone, she refuses to lean on others or weigh them down with her problems.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Normal Attack: Kaagli Chamched Fury", 
        description: "Fires up to 4 consecutive verbal arguments, followed by an immediate crying session, a long nap, and endless reel scrolling.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Financial Autonomy", 
        description: "Passively increases career drive. The character refuses to ask anyone for permission, turning all hard work into pure, unadulterated personal freedom.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Born under the heavy gaze of misfortune, her life was a gauntlet of bouncing accidents, bitter family strife, and cruel betrayals by those she showed the most kindness. At the absolute peak of her despair, when half her body succumbed to paralysis, the eyes of an Archon finally looked upon her. Granted a Vision, her misfortune was rewritten into fortune the moment she met her idiot—the only entity in the entire cosmos who truly mattered.",
      voiceActor: "Komal Gupta ",
      birthday: "7 July 2025",
      region: "Churu",
    },
  },
  {
    id: "ATM",
    name: "Kunika Yadav",
    element: "Hydro",
    level: "70/90",
    friendshipLevel: 5,
    description: "A fiercely loyal sister who always supports her brother, though she comes pre-installed with a highly volatile 'mischief protocol' that can trigger sudden moodiness anywhere, anytime. Fortunately, her tantrums have one ultimate hard-counter: a single death glare from her mother.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: KunikaCharacter,
      mainRender: KunikaCharacter,
      weaponRender: KunikaWeapon,
    },
    weapon: {
      name: "Dog Princess",
      type: "Claymore",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT Rate",
      subStatValue: "33.1%",
      refinement: 1,
      description: "Among the canine tribes, she is revered as the eternal matriarch. Countless generations of dogs have been fed, sheltered, and saved by her hands—yet ultimately, she is the only one who remains to tell their tales to the new pups.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Unsung Labor", 
        description: "Works tirelessly around the household all day long, though she is cursed with a passive debuff that makes her efforts completely invisible to the rest of the party.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Attention Deficit", 
        description: "Increases action speed but reduces focus; she will abruptly abandon a highly critical task the split-second a new, shiny distraction appears.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Impact Asymmetry", 
        description: "One side of her cheek remains notably flat—scholars debate whether this is a medical anomaly or the physical residue of a mother's heavy, loving slap.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Partners in Crime", 
        description: "As the youngest child, she forms a unbreakable pact with her father. The two orchestrate top-secret deals so quietly that the rest of the household never catches on.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Karmic ATM", 
        description: "Her bank account resists absolute zero. Whenever her funds run low, a sudden burst of financial magic occurs, spontaneously generating currency out of nowhere.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Stagnant Calorie Curse", 
        description: "Permanently attempts to initiate a fat-loss protocol, but her metabolic defenses are too stubborn to allow any actual progress.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Naïve Trust", 
        description: "Trusts others far too easily, a dangerous trait that frequently allows opportunistic targets to use her kindness for their own gain.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Fickle Ambition", 
        description: "Possesses weak long-term goals and a fragile drive to complete them. Left entirely to her own devices, she is easily derailed by her immediate surroundings.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Digital Lifeline", 
        description: "Her phone is her life force. Passively drives an insatiable, endless desire to upgrade to a better, faster device at all times.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Main Character Delusion", 
        description: "Blinds her to the hardships of those around her, trapping her in a perpetual state of mind where she believes she is the cosmos's primary victim.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Vault of Secrets", 
        description: "Refuses to badmouth others. Once a secret enters her ears, it is safely locked away in an inescapable vault with zero chance of leakage.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Aesthetic Gossip", 
        description: "Possesses a natural love for juicy rumors. Will happily sacrifice task efficiency and speed just to ensure everything looks pretty and well-organized.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Being the younger sister of the Fool, she naturally inherited some of his less-than-stellar qualities—which is honestly nothing to brag about. On the bright side, she is destined to become the sister-in-law of the Panda, so there is hope for her yet. Crucially, she serves as the 'Idiot's Personal ATM,' regularly dispensing charitable donations to keep him from absolute financial ruin.",
      voiceActor: "Kunika Yadav",
      birthday: "16 September 2008",
      region: "3 Sector",
    },
  },
  {
    id: "Women Empowerment Leader",
    name: "Geeta Devi",
    element: "Pyro",
    level: "90/90",
    friendshipLevel: -5,
    description: "A mother driven by a fierce desire to provide the absolute best for her children. However, due to deeply ingrained, volatile flaws, her attempts to express love and care frequently manifest as sharp, accidental damage to the very ones she wishes to protect.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: GeetaCharacter,
      mainRender: GeetaCharacter,
      weaponRender: GeetaWeapon,
    },
    weapon: {
      name: "The Belt",
      type: "Claymore",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT Rate",
      subStatValue: "33.1%",
      refinement: 1,
      description: "A master of improvisational combat, she can transform any household object into a lethal weapon. While her arsenal is vast, she favors this metallic instrument above all else for its superior reach, echoing acoustic signature, and the distinct, geometric patterns it leaves on the backs of unfortunate targets.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Public Diplomacy, Domestic Rule", 
        description: "Adopts a completely different persona in public. Demands total obedience from household members, punishing any action that threatens to bring external shame to her banner.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Localized Tyranny", 
        description: "Unleashes a terrifying death glare capable of instantly silencing any target, though this crowd-control effect is strictly limited to indoor domains.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Acerbic Tongue", 
        description: "A passive curse that causes her verbal attacks to deal maximum emotional piercing DMG to those closest to her, hitting where it hurts the most.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Unseen Foundation", 
        description: "Silently carries crushing burdens and hardships that others take for granted. When the family faced absolute ruin, she transformed herself into an unyielding pillar of survival, taking on a weight no one asked her to bear.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Pride's Concession", 
        description: "Fiercely despises owing anyone favors, yet cruel circumstances occasionally force her to rely on outside help—inflicting a severe debuff that forces her to lower her head before those who assist her.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "The Pitied Youngest", 
        description: "As the youngest sibling of her generation, her capabilities are perpetually doubted by her peers, cloaking her past in a tragic history that invites unwanted pity.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Filial Paradox", 
        description: "Traps her children in a permanent state of confusion, making them simultaneously love her fiercely and resent her deeply.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Generational Despotism", 
        description: "Raised under the absolute doctrine of parental infallibility, she aggressively attempts to force the same archaic rules onto a new, hyper-connected generation, creating an unbridgeable ideological clash.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Crisis Mitigation Strategy", 
        description: "Possesses a brilliant, hyper-vigilant mind for future crises. She is always prepared with contingency plans, single-handedly ensuring the family’s survival through worst-case scenarios.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Infallible Sovereignty", 
        description: " Grants absolute immunity to admitting fault. No matter the evidence, she is right, has always been right, and will remain right until the end of time.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Financial Amnesia", 
        description: "Whenever financial data or monetary transactions are explained to her, she triggers an immediate memory wipe, completely forgetting the details.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Matriarch's Shield", 
        description: "Refuses to back down if her family is threatened. In word-for-word verbal combat, her win rate is 100%. The only entities possessing the authority to override her commands are her own mother and father.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "A formidable mother forged in the fires of relentless hardship, she remains unbreakable for the sake of her household. Having stared down countless crises, she has never once retreated. She completely suppresses personal desires and luxury, ruthlessly prioritizing absolute survival above all else.",
      voiceActor: "Geeta Devi",
      birthday: "???",
      region: "Shikar Pura",
    },
  },
  {
    id: "1st Generation Robot",
    name: "Mahesh Yadav",
    element: "Dendro",
    level: "10/90",
    friendshipLevel: 2,
    description: "A man executing a strictly hardcoded directive: maximize personal earnings. Outside of revenue-generating tasks, his processors are exclusively dedicated to his favorite daily protocol—analyzing and organizing the morning news.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: MaheshCharacter,
      mainRender: MaheshCharacter,
      weaponRender: MaheshWeapon,
    },
    weapon: {
      name: "The Morning Edition",
      type: "Catalyst",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT Rate",
      subStatValue: "33.1%",
      refinement: 1,
      description: "Rumor has it he has undergone intensive newspaper tactical training for over 30 years—boasting reloading speeds and accuracy lethal enough to erase any target from existence. ...Just kidding. This character lacks the coding required to harm a single ant, so let's not talk about weaponized violence.",
    },
    constellations: [
      { 
        id: 1, 
        name: "The Human ATM", 
        description: "Expectations from the party are low; allies and family members alike primarily interface with him when requesting immediate financial transactions.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Static Presence", 
        description: "Despite sporadic attempts to assert his authority, a passive atmospheric dampener ensures that no one takes his commands seriously—a reality his processors have fully accepted.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Illicit Confectionery", 
        description: "Possesses a severe weakness for sugary treats. Since domestic protocols forbid them, he must consume them in high-stealth, unmonitored zones.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Stoic Algorithm", 
        description: "Completely suppresses emotional outputs due to a lack of compatible receivers in his environment. Simply carries out the tasks expected of him by external entities.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Vetoed Pacifism", 
        description: "Attempts to implement peaceful resolutions through his own unique methods, though his negotiation sequences are instantly overridden and shut down by the rest of the household.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Cinematic Hibernation", 
        description: "Maintains a sacred bond with his television. No matter the labor expended during the day, he must boot up a movie—only to trigger an immediate, unskippable sleep cycle within five minutes of runtime.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Apathy Field", 
        description: "Passively ignores 100% of the ambient drama, conflicts, and superficial chaos unfolding in his immediate surroundings.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Revenue Priority", 
        description: "Allocates all mental processing power strictly to economic gains. Non-profitable external variables can promptly go step into an abyss.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Absolute Pacifist", 
        description: "An unbreakable system restriction prevents him from inflicting harm on any living entity, under any circumstances.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Unsolicited Guidance", 
        description: "Triggers an automatic response to dispense unprompted life advice. These calculations are mathematically incorrect most of the time, further lowering his credibility stats.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Affection Hierarchy", 
        description: "Prioritizes party utility based on deep-rooted coding: Grants a permanent buff to his daughter first, followed by his wife (who fiercely defends him outside the domestic zone), then himself, and... occasionally his son.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Silent Archive", 
        description: "Never voices his personal dreams or desires. Having processed countless instances where others failed him, his system has permanently deleted all expectations from humanity.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "A steadfast man of simple, unyielding focus. He has spent his entire existence executing a singular, looping function: generate income. Nothing more, nothing less.",
      voiceActor: "Mahesh Yadav",
      birthday: "7 July ???",
      region: "Hasa Ka Vaas",
    },
  },
  {
    id: "Sarpanch",
    name: "Krishan Lal Yadav",
    element: "Hydro",
    level: "90/90",
    friendshipLevel: -9,
    description: "An elder patriarch who once ruled his domain like an absolute monarch, entirely unaccustomed to hearing the word 'no.' Though age has begun to mellow his temper, his pride remains entirely untouched—for a lion may grow old, but its ego never fades.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: KrishanCharacter,
      mainRender: KrishanCharacter,
      weaponRender: KrishanWeapon,
    },
    weapon: {
      name: "Divine Devotion",
      type: "Polearm",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT Rate",
      subStatValue: "33.1%",
      refinement: 1,
      description: "A symbol of unshakeable spiritual conviction. As the decades pile up, his absolute trust in the divine grows exponentially stronger, channeling ancient faith to ground his unyielding presence.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Saccharine Venom", 
        description: "Replaces direct criticism with heavily sugar-coated dialogue. Targets who manage to successfully decode the hidden message take massive, internal psychological DMG.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Eternal Ledger", 
        description: "Passively archives every mistake made by party members. He will selectively weaponize these recorded failures against them whenever it suits his mood.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Legacy Flex", 
        description: "Periodically boasts about his lingering influence. Buffs his own status by reminding everyone that he still possesses the ultimate connections and people still listen to him.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Domestic Theater", 
        description: "Handles internal errors quietly in private, but delivers loud, harsh public scoldings to guarantee the surrounding world knows he remains the undisputed leader of the household.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Phantom Assistance", 
        description: "Repeats the same old promises of structural aid; however, when a critical crisis actually triggers on the battlefield, his character model is nowhere to be found.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Political Network", 
        description: "Unlocks an ancient vault of wisdom, localized knowledge, and high-tier connections within the Congress Party, significantly boosting his passive perk attributes.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Bipolar Rhetoric", 
        description: "Unleashes a sudden burst of shouting and anger; the exact moment his fury meter is depleted, he instantly swaps back to calm, sweet-talking diplomacy.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Infallible Sarcasm", 
        description: "Operates on the absolute system rule that he can never be wrong. If forced to admit a mistake, his vocal outputs automatically shift into severe, biting sarcasm.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Hyper-Vigilant Flawfinder", 
        description: "Decades of accumulated authority grant him a 100% success rate in locating microscopic mistakes in pretty much anything and anyone.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Matriarch's Safehaven", 
        description: "Passively channels all his protective stats into his wife, offering her absolute care, loyalty, and emotional damage resistance in every situation.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Ambient Emissions", 
        description: "Discharges flatulence at random intervals without regard for current environmental settings, party composition, or social proximity.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Reputation Armor", 
        description: "His ultimate core stat. Grants a permanent, impenetrable shield to his social reputation; he refuses to let his public standing be compromised under any circumstances.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "An elder statesman who clings fiercely to the echoes of his past glory. Anchored by an ever-deepening faith in the gods, he walks the twilight of his reign as a stubborn ruler, yet a deeply devoted husband.",
      voiceActor: "Krishan Lal Yadav",
      birthday: "???",
      region: "Shikar Pura",
    },
  },
  {
    id: "Doting Mother",
    name: "Shanti Devi",
    element: "Anemo",
    level: "90/90",
    friendshipLevel: -6,
    description: "A matriarch whose love for her children is fiercely unequal. She commands the household with a gentle yet unyielding wind, ensuring every generation understands the absolute sanctity, weight, and importance of parental devotion.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: ShantiCharacter,
      mainRender: ShantiCharacter,
      weaponRender: ShantiWeapon,
    },
    weapon: {
      name: "The Sovereign Keychain",
      type: "Catalyst",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT Rate",
      subStatValue: "33.1%",
      refinement: 1,
      description: "Holds the absolute keys to the kingdom—safeguarding every critical document, deed, and financial asset of the family. Though age may slow her physical movement to a crawl, the clinking of these keys reminds the entire domain exactly who still rules.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Clandestine Subsidies", 
        description: "Passively slips rare items and resources to her absolute favorite party member in secret, regardless of whether they actually need the assistance.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Unfiltered Verdict", 
        description: "Bypasses all diplomatic filters to speak her mind with absolute bluntness. She strictly rejects outside opinions, listening exclusively to her chosen favorite.", 
        isLocked: true 
      },
      { 
        id: 3, 
        name: "Matriarch's Sanctuary", 
        description: "Provides an emotional safehaven for her grandchildren. Passively listens to their grievances and provides tailored advice, boosting their morale and resistance stats.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Daily Check-In Loop", 
        description: "Triggers an unskippable communication sequence 2 to 3 times a day to monitor and update her beloved daughter's current wellness status.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Lineage of Favoritism", 
        description: "Increases the level of normal and elemental attacks for characters she personally dotes on, transferring her matriarchal authority directly into their combat damage.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Ironclad Succession", 
        description: "When Shanti Devi is on the field, the current active 'favorite' character receives an unbreakable barrier. Her presence ensures her legacy can never be challenged.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Venerable Aura", 
        description: "Exudes a passive psychological pressure that strikes fear into everyone around her, completely bypassing the need for physical strength or vocal outbursts.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Charming Matriarch", 
        description: "Her inherently cute and deeply caring demeanor forces surrounding allies to naturally love and protect her at all costs.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Filial Indignation", 
        description: "Enters a state of severe resentment and deals increased counter-DMG whenever an enemy or party member shows disrespect toward parental figures.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Blind Affection", 
        description: "Her judgment is completely blinded by her love for her children, making her entirely immune to seeing any flaws or negative traits in them.", 
        isLocked: true 
      },
      { 
        id: 5, 
        name: "Vintage Devotion", 
        description: "As the clock ticks and she grows older, her capacity for unconditional love expands exponentially, reinforcing her healing and support attributes.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Geeta's Shield", 
        description: "Instantly absorbs 100% of the damage and pain directed toward Geeta Devi. Shanti Devi's ultimate system law is simple: she will dismantle reality before she allows her favorite child to suffer.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "The undisputed star of her eyes is Geeta Devi. Shanti Devi directs the absolute peak of her maternal doting toward her, refusing to let even a shred of discomfort or pain touch her favorite child's world.",
      voiceActor: "Shanti Devi",
      birthday: "???",
      region: "???",
    },
  },
  {
    id: "The Golden Brother",
    name: "Vinit Gupta",
    element: "Geo",
    level: "85/90",
    friendshipLevel: 10,
    description: "Komal’s absolute favorite person in the world and her ultimate emotional anchor. Between managing his office duties, he spends approximately 90% of his free energy teasing his sister, leaving the house, or demanding she serve him while he remains entirely stationary.",
    stats: {
      maxHp: 20272,
      atk: 1724,
      def: 838,
      elementalMastery: 272,
      maxStamina: 240,
    },
    images: {
      profileThumb: VinitCharacter,
      mainRender: VinitCharacter,
      weaponRender: VinitWeapon,
    },
    weapon: {
      name: "The Couch Potato's Edge",
      type: "Sword",
      rarity: 5,
      baseAtk: 608,
      subStat: "CRIT DMG",
      subStatValue: "66.2%",
      refinement: 1,
      description: "A blade forged from pure, unyielding laziness. It grants the wielder the unique ability to manipulate the surrounding environment into doing his bidding, allowing him to command others to fetch items that are already within his arm's reach.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Hydration Delegation", 
        description: "Even when a water bottle is sitting directly next to him, his system triggers a command that forces Komal to stand up, walk over, and serve him.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Accidental Whistleblower", 
        description: "When telling jokes, he has a 50% chance to leak Komal's top-secret data. While he processes this as a harmless joke, it automatically triggers a delayed 'Mother's Lecture' debuff on Komal later in the day.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Sweet-Talking Manipulation", 
        description: "Increases the level of his persuasive traits by 3. He can smoothly butter up his sister with maximum affection to get his chores done with zero resistance.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Matriarchal Awakening", 
        description: "Unlocks an advanced clarity protocol. Having shed his old blind spots, he now successfully processes and acknowledges when his mother is in the wrong, aligning his tactical choices with his sister.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Churu's Golden Boy", 
        description: "Increases the level of his Elemental Burst by 3. As the first-born grandson of the maternal house (Nanihal), he possesses an unresolvable 'Unlimited Childhood Love' aura that makes maternal uncles target Komal with playful jealousy.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "The Pillar of Everything", 
        description: "When Komal is in the party, Vinit provides an unbreakable, absolute safety shield. His presence completely negates her emotional distress and multiplies her combat morale to infinity.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Normal Attack: Constant Provocation", 
        description: "Executes up to 5 consecutive poking gestures and teasing remarks, triggering a minor annoyance status effect on his sister every two minutes.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Elemental Skill: Office Escapism", 
        description: "Instantly teleports out of the domestic zone to hang out outside, dropping all chore aggro entirely onto his sister.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Elemental Burst: Vulnerable Confession", 
        description: "When his sadness meter peaks, he drops his defensive armor entirely and sheds tears exclusively in his sister’s safe zone, shedding all psychological stress in exchange for deep emotional bonding.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "The Maturity Upgrade", 
        description: "Passively evolves over time. Transitions from his historical naive state into a wise, reliable decision-maker who steps up to command and steer critical family choices.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Absolute Kaamchor", 
        description: "Sprinting and physical chore execution stamina consumption is increased by 500%. He will expend more energy trying to avoid a task than it would take to actually do it.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Empathetic Resonance", 
        description: "Possesses a passive radar that instantly reads and understands Komal's mental state without her having to utter a single word, granting her immediate, quiet comfort.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Born in Churu as the highly celebrated first prince of his maternal family, Vikku grew up swimming in unlimited doting. Though he carries a legendary streak of laziness and a bad habit of spilling family secrets in jest, he has matured into a fiercely protective, deeply understanding, and emotionally solid anchor who serves as his sister's entire universe.",
      voiceActor: "Vinit Gupta",
      birthday: "20 March 2002",
      region: "Churu",
    },
  },
  {
    id: "Amma",
    name: "Urmila Gupta",
    element: "Anemo",
    level: "90/90",
    friendshipLevel: 10,
    description: "The sweetest, most pure-hearted soul to ever grace the household. A fun-loving protector who became a child among children, wrapped everyone in infinite warmth, and stood as an absolute shield against any harsh words or rolling pins.",
    stats: {
      maxHp: 99999, // Unmatched life force of love
      atk: 0,       // Refuses to ever harm a soul
      def: 9999,    // Absolute defensive shield for her kids
      elementalMastery: 500,
      maxStamina: 240,
    },
    images: {
      profileThumb: AmmaCharacter,
      mainRender: AmmaCharacter,
      weaponRender: AmmaWeapon,
    },
    weapon: {
      name: "Sacred Aarti Book",
      type: "Catalyst",
      rarity: 5,
      baseAtk: 0,
      subStat: "Healing Bonus",
      subStatValue: "100%",
      refinement: 5,
      description: "A devotional book infused with decades of daily prayers. It does zero damage to enemies, but every evening after prayers, it disperses a soothing wave of unconditional peace and blessed prasad to all family members.",
    },
    constellations: [
      { 
        id: 1, 
        name: "The Consoling Hug", 
        description: "When division, strife, or worldly worries surround the party, Amma sits beside the active character, completely neutralizing their sadness and replacing it with pure, comforting love.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Secret Mattress Subsidies", 
        description: "Passively slips a fresh stack of 100-rupee notes directly under Komal’s pillow. This financial blessing bypasses 'Baba’s' radar entirely and is reserved exclusively for the youngest favorites.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "The Golden Swap", 
        description: "In times of family financial strain, she quietly sacrifices her real gold bangles to safeguard her children's future, replacing them with clever duplicates in the vault so no one worries.", 
        isLocked: false 
      },
      { 
        id: 4, 
        name: "Silver Adornments of Favor", 
        description: "Equips Komal with unique, legendary-tier silver hair clips and traditional anklets (payal), granting her a permanent boost to beauty, grace, and happiness.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "World Cup Companionship", 
        description: "When physical health declines, she joins her favorite grandchild to share a small mobile screen, cheering through intense India vs. Australia cricket matches, freezing that beautiful moment in time forever.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "First-Born Star of the Heavens", 
        description: "As the oldest sibling of her own family tree, she was the first to answer the sky's call. She now watches over the entire party from above, casting a permanent constellation of starlight that protects the household from all harm.", 
        isLocked: false 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Normal Attack: Sacred Evening Prasad", 
        description: "Performs her beautiful evening rituals and distributes blessed sweets. Instantly cures all party members of spiritual fatigue and negative emotional statuses.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Elemental Skill: Belan Deflection Shield", 
        description: "Rushes to the scene the exact moment she hears a child crying. Deploys a gentle gale that instantly deflects incoming scoldings or airborne rolling pins (belan) thrown by mothers.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Elemental Burst: Culinary Comforts", 
        description: "Stands in the kitchen creating customized, delicious home-cooked meals for the entire family. Every dish consumed restores 100% HP and fills the home with the comforting aroma of nostalgia.", 
        isLocked: false 
      },
      { 
        id: 4, 
        name: "The Veggie-Cutting Sanctuary", 
        description: "While sitting together in the living room chopping vegetables, she breaks down isolation barriers. Forces all family members out of their separate rooms to sit together and share meals as one unit.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Playful Mirroring", 
        description: "A lovely, child-like talent. Whatever trend, video, or game her grandchildren enjoy on their phones, Amma immediately boots up on her own screen just to laugh and play along with them.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Youngest Favoritism Aura", 
        description: "Channels an extra, massive layer of protective armor and unconditional love specifically to Papa and Komal, simply because they are the precious youngest of their generations.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Originally hailing from the warmth of UP, Amma was a legendary woman of unmatched purity. From packing her bags to be with her family during tough times, to hiding sweets and silver for her favorite little ones, she spent her life growing and nurturing her family. Though her phone grew silent and she has now moved on to watch from the heavens, her laughter, her sweet scoldings captured on video, and her pure love remain permanently engraved as the ultimate treasure of the household.",
      voiceActor: "Urmila Gupta (Amma)",
      birthday: "17 March",
      region: "UP / Churu",
    },
  },
  {
    id: "Nani (Manju) / The Travelling Matriarch",
    name: "Manjula Rajvanshy",
    element: "Hydro",
    level: "88/90",
    friendshipLevel: 5,
    description: "A post-retirement nomad who believes she possesses flawless worldly wisdom, despite consistently misreading the room. She splits her time between being an incredibly supportive pillar for Komal's family and initiating accidental legendary-tier drama everywhere else.",
    stats: {
      maxHp: 19850,
      atk: 1680,
      def: 795,
      elementalMastery: 310,
      maxStamina: 240,
    },
    images: {
      profileThumb: ManjulaCharacter,
      mainRender: ManjulaCharacter,
      weaponRender: ManjulaWeapon,
    },
    weapon: {
      name: "The Wanderer's Heavy Trunk",
      type: "Claymore",
      rarity: 5,
      baseAtk: 641,
      subStat: "Energy Recharge",
      subStatValue: "55.1%",
      refinement: 2,
      description: "A heavy, unbreakable suitcase packed for endless house-hopping. It grants the wielder infinite stamina to travel from one relative's house to another, though it drastically reduces the defensive stats of her own home base.",
    },
    constellations: [
      { 
        id: 1, 
        name: "The Nomadic Retirement", 
        description: "Upon entering retirement, she automatically leaves her home base to visit maternal uncles and relatives. This provides her with an endless invitation buff but leaves her own domestic lane completely undefended.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "The Kaleshi Bhua Protocol", 
        description: "When interacting with extended family members (especially the Delhi branch), she activates a passive aura that triggers immediate, dramatic disputes (Kalesh), earning her a permanent 100% resentment rating from nephews and nieces.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Blinded Maternal Missteps", 
        description: "When managing the eldest uncle (Bade Mama), her decision-making accuracy drops to 0%. She will systematically execute the worst possible choices regarding his career and marriage, believing it to be helpful.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Chhote Mama's Firefighting", 
        description: "When Nani's bad decisions create a catastrophic tier crisis, Chhote Mama is summoned from his passive state to instantly resolve 100% of the active trouble before immediately disappearing again.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "The Ultimate Favorite", 
        description: "Channels 95% of her positive elemental energy directly into Shalinee Gupta (Mummy), offering her unparalleled emotional backing, fierce protection, and absolute, unmatched favoritism.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Reverse Duniyadari Mentorship", 
        description: "When Komal is in the proximity, Nani's 'Flawless Worldly Wisdom' trait is overridden. Komal steps in to patiently explain how the world actually works, temporarily stabilizing Nani's tactical decision-making.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Normal Attack: Festive Revelry", 
        description: "Executes a series of vibrant gestures, instantly joining weddings, birthdays, and festivals with high energy, filling her camera roll with endless videos of joyous celebrations.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Elemental Skill: Flawless Self-Conviction", 
        description: "Enters an unshakeable state of mind where she remains 100% convinced that whatever she is doing is absolutely right, making her completely immune to internal self-doubt.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Elemental Burst: Domestic Regret", 
        description: "A heavy emotional wave that triggers when reflecting on the past. Deals internal Hydro DMG as she realizes her constant traveling left home-front duties unattended during critical years.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "The Roorkee Roots", 
        description: "Passively draws upon her old-school Uttar Pradesh foundations, giving her a stubborn, deeply rooted defense stat that refuses to bend during arguments.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Generational Grandchild Buffer", 
        description: "Provides a constant stream of affection, treating Komal and Vinit with pure kindness and festive treats, acting as a soft, loving sanctuary away from parental stress.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Maternal Filter Deflection", 
        description: "When Mummy (Shalinee Gupta) unleashes an 80% negative output stream, Komal is there for rescue Nani.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Hailing originally from Roorkee, Manju is a colorful personality who loves to fully immerse herself in life's celebrations, foods, and family gatherings. While her ultimate weakness lies in her questionable management of her sons' lives and an accidental talent for causing dramatic family kalesh, her core remains deeply loving. To Komal, Vikku, and Shalinee Gupta, she remains an endlessly sweet, celebratory, and supportive figure who is always ready to enjoy the next big milestone.",
      voiceActor: "Manjula Rajvanshy",
      birthday: "28 February ???",
      region: "Roorkee, UP",
    },
  },
  {
    id: "Mummy (Shalu)",
    name: "Shalinee Gupta",
    element: "Electro",
    level: "90/90",
    friendshipLevel: 4,
    description: "The absolute epicenter of domestic weather. Equipped with a voice that can shatter sound barriers, an legendary talent for executing tactical bias, and a deeply entrenched refusal to ever admit an error, she rules her household domain with an iron, unpredictable will.",
    stats: {
      maxHp: 22100,
      atk: 1850,
      def: 912,
      elementalMastery: 120,
      maxStamina: 240,
    },
    images: {
      profileThumb: ShalineeCharacter,
      mainRender: ShalineeCharacter,
      weaponRender: ShalineeWeapon,
    },
    weapon: {
      name: "The Ballen",
      type: "Claymore",
      rarity: 5,
      baseAtk: 674,
      subStat: "ATK%",
      subStatValue: "49.6%",
      refinement: 3,
      description: "A legendary kitchen artifact that serves more as a symbol of absolute authority than an actual cooking tool. It mostly used to attack her daughter and shelding her son from harm and completely neglates any complaints regarding making tiffin for daughter or meal prep when her daughter his hungery.",
    },
    constellations: [
      { 
        id: 1, 
        name: "Strategic Public Alliances", 
        description: "While she will freely scold Komal inside house, she triggers an absolute protective shield during extended family weddings. Shalu will fiercely take her daughter's stand in public, leaving distant relatives completely stunned.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Flawless Image Mirage", 
        description: "Maintains a permanent internal delusion that all relatives view her as an incredibly sweet, innocent, and fun-loving soul, completely ignoring the fact that society actually considers her a serial debater.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Infallible Ego Armor", 
        description: "Increases the level of her defensive barrier by 3. Grants absolute, 100% immunity to ever admitting a mistake, which occasionally inflicts a long-term communication freeze on Papa and Vikku.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Selective Kaamchori Protocol", 
        description: "When domestic chores stack up too high, her system effortlessly redirects 100% of the workload onto komal while she successfully maintains an supervisory posture.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Unnecessary Intervention", 
        description: "Forces her to speak up and voice heavy opinions in situational moments where her input was absolutely not requested by anyone.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Asymmetrical Favoritism", 
        description: "The ultimate peak of her kit. Distributes battlefield favors, rewards, and lighter chores with massive generational bias, ensuring the family balance of power remains entirely skewed.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Normal Attack: High-Decibel Decimation", 
        description: "Executes a rapid succession of vocal scoldings, generating sudden sonic shockwaves that clear out the living room within seconds.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Elemental Skill: Instant Kalesh Trigger", 
        description: "Channels a bolt of pure friction into the household atmosphere, instantly turning a minor misunderstanding into a full-scale, dramatic family dispute.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Elemental Burst: The Tiffin Ultimatum", 
        description: "Deploys a high-voltage household decree regarding food, lunchboxes, and dinner timelines. Deals continuous psychological Electro DMG to any party member who dares to complain about the menu.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Sardarshahar Nomadic Hardening", 
        description: "Only star inher eyes is one person and that is his brother", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Delayed-Action Auditory Debuff", 
        description: "Only need topic wherre komal is slightly wrong in her point of view, Shalu archives that data and releases a massive, unskippable lecture targeted at Komal exactly 4 hours later.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "The Relentless Motherhood Paradox", 
        description: "Despite thousands of visible flaws, an aggressive daily shouting schedule, and an unmatched streak of avoiding chores, she remains an irreplaceable, load-bearing pillar of the entire family structure.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Born on a crisp February day in Sardarshahar before charting her territory in Churu, Shalu is a whirlwind of a maternal figure. Her days are heavily fueled by shouting matches, high-tier favoritism, and an ironclad rule over the kitchen menu. Yet beneath the thunderous storms and the thousands of things that drive her children crazy, she holds a sacred line: she will never let an outsider look down on her own. In the grand theater of relatives, she will unexpectedly draw her blade and stand as her daughter’s ultimate defender.",
      voiceActor: "Shalinee Gupta",
      birthday: "16 February 1980",
      region: "Sardarshahar / Churu",
    },
  },
  {
    id: "Papa (Banti) / The Hardworking Provider",
    name: "Pawan Gupta",
    element: "Pyro",
    level: "89/90",
    friendshipLevel: 8,
    description: "A split-personality provider who alternates between an incredibly silent, hyper-industrious workaholic and a volatile evening element. Driven by an absolute obsession with financial security, he floats between being the ultimate fun-loving helper and a highly fragile target for neighborhood gossip.",
    stats: {
      maxHp: 21500,
      atk: 1910,
      def: 720, // Low base defense against manipulation
      elementalMastery: 280,
      maxStamina: 240,
    },
    images: {
      profileThumb: PawanCharacter,
      mainRender: PawanCharacter,
      weaponRender: PawanWeapon,
    },
    weapon: {
      name: "One Glass of Bear",
      type: "Claymore",
      rarity: 5,
      baseAtk: 620,
      subStat: "Physical DMG Bonus",
      subStatValue: "58.3%",
      refinement: 2,
      description: "A weapon which self harm user, after user use this weapon he will forgort his purpose basic understanding and emotionaly hurt people in her surounding ",
    },
    constellations: [
      { 
        id: 1, 
        name: "The Dr. Jekyll Phase", 
        description: "When his sobriety meter is at 100%, he possesses top-tier attributes: trustworthy, deeply helpful, exceptionally flexible, and naturally fun-loving.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "The Twilight Transformation", 
        description: "Upon activating his evening sequence, his entire kit becomes completely chaotic. All base stats flip into unpredictability, and his resistance to family arguments drops to zero.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Whispering Whispers", 
        description: "He falls into a hyper-suggestible state, allowing outside neighborhood elements to easily manipulate his tactical opinions.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "The Silent Retreat", 
        description: "When domestic shouting matches reach a specific volume, he activates an absolute silence shield, choosing to completely tune out the world until the immediate storm clears.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "Wealth Obsession Engine", 
        description: "Triggers a permanent, maddening drive to chase financial growth, treating every day as an endless entrepreneurial sprint.", 
        isLocked: true 
      },
      { 
        id: 6, 
        name: "Daughter's Silent Plea", 
        description: "When Komal is ioutside he don't enjoy eating food without sharing with her.", 
        isLocked: true 
      },
    ],
    talents: [
      { 
        id: 1, 
        name: "Normal Attack: Relentless Hustle", 
        description: "Executes a relentless sequence of working hours and money-chasing strikes, grinding through physical exhaustion to anchor the family finances.", 
        isLocked: false 
      },
      { 
        id: 2, 
        name: "Elemental Skill: The Smart-Aleck Flex", 
        description: "Attempts to showcase supreme street-smart wisdom and over-the-top cleverness, which has a 50% chance to charm allies or instantly trigger a dispute with Shalu.", 
        isLocked: false 
      },
      { 
        id: 3, 
        name: "Elemental Burst: High-Proof Kalesh", 
        description: "Unleashes an explosive evening Pyro field that clashes instantly with Mummy’s Electro aura, causing a massive Overloaded reaction that shakes the entire Churu household.", 
        isLocked: true 
      },
      { 
        id: 4, 
        name: "Rural Born, Churu Bred", 
        description: "Drawing from his origins in a mysterious village starting with 'B' and moving into the home built by Dadaji in Churu, he gains an innate ability to smoothly adjust and adapt to harsh living conditions.", 
        isLocked: false 
      },
      { 
        id: 5, 
        name: "The Soft-Hearted Ally", 
        description: "A passive trait that highlights his trustworthy nature. When a family member or stranger genuinely needs help, he will automatically drop his guards to assist them without hesitation.", 
        isLocked: false 
      },
      { 
        id: 6, 
        name: "Amma's Golden Boy Legacy", 
        description: "As the precious youngest son of the late Amma, he carries an invisible mark of ultimate love that allows him to tank immense domestic stress, even when his own choices cause it.", 
        isLocked: false 
      },
    ],
    profile: {
      storyText: "Loving and helping father which try to do his best but endup making bad sometimes, don't know how to express her felling, drink everyday can't seem to stop his this habit, hurt her daughter some times, love earning her motive his to earn more every day.",
      voiceActor: "Pawan Gupta",
      birthday: "17 September 1975",
      region: "Churu",
    },
  },
{
  id: "Nana Ji",
  name: "Vinod Gupta",
  element: "Cryo",
  level: "90/90",
  friendshipLevel: 9,
  description: "A monument of absolute peace and quiet dignity. He was a man who asked for nothing from the world except a sanctuary free of conflict—choosing to bear the heavy weight of family storms in total silence, leaving behind an enduring legacy of quiet love.",
  stats: {
    maxHp: 25000,
    atk: 0,        // Completely refuses to engage in any form of conflict
    def: 2000,     // Immense defensive capacity to endure internal pressure
    elementalMastery: 350,
    maxStamina: 120, // Spent his golden years peacefully anchored to his favorite chair
  },
  images: {
    profileThumb: VinodCharacter,
    mainRender: VinodCharacter,
    weaponRender: VinodWeapon,
  },
  weapon: {
    name: "The Canvas of Stillness",
    type: "Catalyst",
    rarity: 5,
    baseAtk: 0,
    subStat: "DEF%",
    subStatValue: "69.4%",
    refinement: 5,
    description: "A beautiful, worn artist's sketchbook. Rather than participating in the loud world, it allows the wielder to quietly draw breathtaking sketches, transforming surrounding chaos into a still, peaceful frame.",
  },
  constellations: [
    { 
      id: 1, 
      name: "The Anti-Kalesh Sanctuary", 
      description: "When domestic friction or dramatic arguments (Kalesh) trigger in the vicinity, Nana Ji creates an immediate separation barrier, gracefully stepping away to maintain absolute tranquility.", 
      isLocked: false 
    },
    { 
      id: 2, 
      name: "The Sweetened Poha Ritual", 
      description: "When cooking meals, he adds a unique sprinkling of sugar directly into the Poha. This custom recipe grants a permanent sweet comfort buff to all grandchildren in the party.", 
      isLocked: false 
    },
    { 
      id: 3, 
      name: "Abundant Kitchen Protocol", 
      description: "Increases the party's inventory limits. His passive aura ensures that the household pantry and kitchen are permanently stocked to the brim with high-tier, delicious treats.", 
      isLocked: false 
    },
    { 
      id: 4, 
      name: "Golden Mango Harvest", 
      description: "During summer cycles, he shares his absolute favorite fruit—the mango. Consuming it instantly maximizes the energy recharge of his grandchildren, filling them with pure joy.", 
      isLocked: false 
    },
    { 
      id: 5, 
      name: "The Unspoken Burden", 
      description: "Increases his internal defense stats but applies a permanent silence status. He absorbs 100% of the household's negative emotional outputs without ever uttering a single complaint.", 
      isLocked: false 
    },
    { 
      id: 6, 
      name: "The Meerut Starlight", 
      description: "Anchored deeply by his family roots tracing back toward Meerut, his gentle soul now shines permanently from the upper atmosphere, casting an unbreakable mantle of quiet protection over his loved ones.", 
      isLocked: false 
    },
  ],
  talents: [
    { 
      id: 1, 
      name: "Normal Attack: Masterpiece Sketch", 
      description: "Gently traces his pencil across paper, creating beautiful, vivid drawings that soothe the minds of all allies and freeze external stress in its tracks.", 
      isLocked: false 
    },
    { 
      id: 2, 
      name: "Elemental Skill: The Armchair Sentinel", 
      description: "Sits calmly on his designated favorite chair, browsing his mobile phone. While in this state, he generates a massive, passive wave of absolute calm that prevents anyone around him from starting a dispute.", 
      isLocked: false 
    },
    { 
      id: 3, 
      name: "Elemental Burst: Infinite Endurance", 
      description: "Converts all incoming shouting, arguments, and environmental stress into internal defensive energy. He suffers and absorbs the pressure entirely in silence to shield his children and grandchildren.", 
      isLocked: true 
    },
    { 
      id: 4, 
      name: "Grandchild Adoration", 
      description: "A passive trait that activates whenever his grandchildren are near. He unlocks a hidden reservoir of boundless affection, filling their childhoods with quiet, unshakeable warmth.", 
      isLocked: false 
    },
    { 
      id: 5, 
      name: "Tactical Separation", 
      description: "To protect the peace of the next generation, he willingly chooses to live separately during times of domestic friction, sacrificing his own comfort to ensure a calm environment.", 
      isLocked: false 
    },
    { 
      id: 6, 
      name: "The Quiet Soul's Release", 
      description: "When his internal pressure meter reaches its absolute limit, his physical form peacefully dissolves. He sheds the heavy burdens of the mortal world, leaving behind beautiful memories and an eternal, loving presence.", 
      isLocked: false 
    },
  ],
  profile: {
    storyText: "With roots connecting his family to Meerut, Nana Ji was a man of profound stillness. He expressed his beautiful inner world through his incredible sketches and his deep, gentle love for his grandchildren—whether it was filling the kitchen with good food, enjoying his uniquely sweet poha, or sharing his favorite mangoes. He lived as a quiet protector who chose to listen rather than fight, and to endure rather than complain. Though the silent weight he carried ultimately called him back to the heavens, he remains fondly remembered sitting peacefully on his chair, watching over his family with a heart full of silent, infinite love.",
    voiceActor: "Vinod Gupta (Nana Ji)",
    birthday: "25 December ??",
    region: "Meerut / Uttarakhand",
  },
},
{
  id: "The Veteran Principal / Baba",
  name: "Jugal Kishore Gupta",
  element: "Geo",
  level: "90/90", // Reflects his 86-87 years of sheer survival
  friendshipLevel: 9, // High with Komal, lower with the rest of the party
  description: "A retired school principal holding an elite 80k monthly government pension buff. Known for extreme mood swings, a stone-solid ego, and random kitchen kalesh, he rules his room like an ancient fortress—fearing no one except his youngest granddaughter's endless teasing.",
  stats: {
    maxHp: 25000,
    atk: 1950,
    def: 1500, // High structural pride defense
    elementalMastery: 80,
    maxStamina: 100, // No longer goes on morning walks since Amma's fall
  },
  images: {
    profileThumb: JugalCharacter,
    mainRender: JugalCharacter,
    weaponRender: JugalWeapon,
  },
  weapon: {
    name: "The Disciplinarian's Cane",
    type: "Polearm",
    rarity: 5,
    baseAtk: 650,
    subStat: "DEF%",
    subStatValue: "60.2%",
    refinement: 4,
    description: "An old-school instrument of absolute authority carried by veteran educators. It multiplies the wielder's rigid attitude and financial pride by 200%, making it physically impossible for him to ever say sorry.",
  },
  constellations: [
    { 
      id: 1, 
      name: "The 80k Pension Shield", 
      description: "Generates an impenetrable economic barrier funded by the government. This financial stability fuels a permanent +50% increase to his natural arrogance and strict attitude.", 
      isLocked: false 
    },
    { 
      id: 2, 
      name: "Eight-Year Silent Zone", 
      description: "Can deploy a massive communication blackout field between fathers and sons. Historically locked Papa and Tauji out of voice-chat protocols for 8 consecutive years until Komal dismantled it.", 
      isLocked: false 
    },
    { 
      id: 3, 
      name: "The Missing Brass Plate", 
      description: "Triggers a random early-morning crisis. Accuses Tauji of grand larceny over a misplaced brass plate (Peetal ki Thali). Deploys heavy domestic chaos for 10 minutes until the plate automatically spawns in his own kitchen.", 
      isLocked: false 
    },
    { 
      id: 4, 
      name: "The Room Matriarchy", 
      description: "When Tauji and Taiji leave for the shop, Baba enters a solo isolation mode inside his and Amma's room—surviving exclusively on a strict daily loop of TV, meals, and hot milk.", 
      isLocked: false 
    },
    { 
      id: 5, 
      name: "Seniority Amnesia", 
      description: "Increases the probability of forgetting short-term data by 80%. However, any attempt by family members to explain that 'you can't take this wealth to the heavens' is automatically blocked by his ego stats.", 
      isLocked: true 
    },
    { 
      id: 6, 
      name: "The Eldest Survivor's Mantle", 
      description: "As the oldest brother who outlived his entire generation, he carries the ultimate ancestral weight. Grants him unmatched health reserves, ensuring his presence remains solid for all future wedding events.", 
      isLocked: true 
    },
  ],
  talents: [
    { 
      id: 1, 
      name: "Normal Attack: Chal Hat Ja!", 
      description: "Executes a rapid vocal sweep, shouting 'Chal Hat Ja!' or 'Chal Pare Ku!' to force all surrounding party members to immediately step aside and yield the hallway.", 
      isLocked: false 
    },
    { 
      id: 2, 
      name: "Elemental Skill: Relative Hospitality Check", 
      description: "When Komal enters the domain, he instantly declares in front of distant relatives: 'Tu vapas aagyi pareshan krne?'. If Komal counters with a witty reply, Baba enters a rare, un-debuffable 'Blushing/Shy' state.", 
      isLocked: false 
    },
    { 
      id: 3, 
      name: "Elemental Burst: Grand Principal Outburst", 
      description: "Channels decades of school administration energy to shout loudly at the children. Inflicts an immediate 'Fear' status effect on Bhuas, Papas, and Taujis, causing them to avoid eye contact.", 
      isLocked: true 
    },
    { 
      id: 4, 
      name: "The Youngest Grandchild Immunity", 
      description: "A unique passive system law: Komal is completely immune to Baba's fear aura. Being the youngest and his absolute doted favorite, she can actively tease, argue, and provoke him without taking any retaliatory DMG.", 
      isLocked: false 
    },
    { 
      id: 5, 
      name: "Time's Softening Matrix", 
      description: "As the years pass and his age hits the late 80s, his rigid armor slowly erodes. He transitions from a terrifying monarch into a slightly more down-to-earth, open-minded elder.", 
      isLocked: false 
    },
    { 
      id: 6, 
      name: "Unbreakable Longevity", 
      description: "A permanent, passive blessing fueled by his granddaughter's ultimate wish. Grants Baba high-tier immunity to critical illnesses, preserving his healthy form all the way until Komal's future wedding ceremony.", 
      isLocked: false 
    },
  ],
  profile: {
    storyText: "An iron-willed patriarch and a retired school principal of Churu, Jugal Kishore Gupta is a legendary figure of old-school pride, stubbornness, and deep-rooted family history. He spent decades ruling with a loud voice, maintaining an 8-year silence with his sons, and guarding his wealth and brass plates with intense vigilance. Yet, time and the relentless affection of his youngest granddaughter have chipped away at his stone exterior. Though he still grumbles and tells everyone to get out of his way, he secretly treasures the noise, the teasing, and the lively kalesh, standing as a proud, vintage, and fiercely healthy monument of the family tree.",
    voiceActor: "Jugal Kishore Gupta (Baba)",
    birthday: "?? ?? ????",
    region: "Churu / Sardarshahar",
  },
},
];
