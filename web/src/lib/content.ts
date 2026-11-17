// All copy and image paths for the site, taken from the Figma file.
// Placeholder copy from Figma (lorem ipsum, sample clients, sample phone) is marked TODO.

const L = "/figma/landing";
const A = "/figma/about";
const S = "/figma/servicedetails";
const C = "/figma/casestudy";

export const site = {
  name: "Mars & Co",
  email: "hello.marsandco@gmail.com",
  footerEmail: "mars@email.com", // TODO: real address (Figma placeholder)
  phone: "(603) 555-4444", // TODO: real number (Figma placeholder)
  address: "Road 06, House 18, Gulshan, Dhaka, Bangladesh",
  footerBlurb:
    "A creative studio building bold brands and digital experiences that stand out and stand for something.", // TODO: confirm (Figma has lorem ipsum)
  logo: `${L}/imgGroup2.svg`,
  logoWhite: `${L}/imgGroup.svg`,
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Facebook", href: "#" },
];

export const aiIcons = [
  { src: `${L}/imgGroup86.svg`, label: "Claude" },
  { src: `${L}/imgGroup87.svg`, label: "ChatGPT" },
  { src: `${L}/imgGroup88.svg`, label: "Gemini" },
  { src: `${L}/imgGroup89.svg`, label: "Perplexity" },
];

export const services = [
  {
    slug: "branding",
    title: "Branding",
    short: "We find the idea, the angle and the reasons people should care.",
    body: "We build brands that cut through noise, earn trust, and scale with ambition. Whether you’re launching a company, a product, or a new category, we give you the strategic foundation to grow.",
    items: [
      "Brand Identity",
      "Corporate Identity",
      "Brand Strategy",
      "Motion Graphics",
      "Graphic Design",
      "Startup Branding",
      "Pitch Deck Design",
    ],
    image: `${S}/imgRectangle34624714.webp`,
  },
  {
    slug: "experience-design",
    title: "Experience Design",
    short: "Intuitive, good-looking interfaces that people actually enjoy using.",
    body: "Websites, apps and products designed around real people. We map the journey, prototype fast and craft interfaces that feel effortless and convert.",
    items: ["UI/UX Design", "Website Design", "Product Design", "Design Systems", "Prototyping", "Usability Testing"],
    image: `${S}/imgRectangle34624715.webp`,
  },
  {
    slug: "marketing",
    title: "Marketing",
    short: "Campaigns that get noticed, remembered and acted on.",
    body: "From launch campaigns to always-on social, we turn your brand story into marketing that reaches the right people and moves the numbers that matter.",
    items: ["Campaign Strategy", "Social Media", "Performance Marketing", "SEO", "Email Marketing", "Analytics"],
    image: `${S}/imgRectangle34624716.webp`,
  },
  {
    slug: "content",
    title: "Content",
    short: "Stories, visuals and motion that give your brand a voice.",
    body: "Photography, video, motion and copy produced with one clear voice, so every touchpoint looks and sounds unmistakably like you.",
    items: ["Copywriting", "Photography", "Video Production", "Motion Design", "Illustration", "Content Strategy"],
    image: `${S}/imgRectangle34624717.webp`,
  },
  {
    slug: "tech-advisory",
    title: "Tech Advisory",
    short: "The right technology choices, made early and made well.",
    body: "We help you choose, plan and build the technology behind your brand — from web platforms to product architecture — so it scales with you.",
    items: ["Web Development", "Platform Selection", "Technical Audits", "Product Architecture", "AI Integration"],
    image: `${S}/imgRectangle34624718.webp`,
  },
];

export const servicePreview = `${S}/imgRectangle34624706.webp`;

export type Work = {
  slug: string;
  client: string;
  subtitle: string;
  tag: string;
  industry: string;
  region: string;
  service: string;
  image: string;
};

const card = "/figma/work/card.webp";

// TODO: Figma uses sample client names and one shared image. Replace with real projects.
export const work: Work[] = [
  { slug: "saff", client: "SAFF", subtitle: "95% modernized SAFF’s blueprint", tag: "Web Design", industry: "Sports", region: "Bangladesh", service: "Web Design", image: `${C}/hero.webp` },
  { slug: "stacker", client: "Stacker", subtitle: "Enhancing customer experience at Blink", tag: "Branding", industry: "Fintech", region: "USA", service: "Branding", image: card },
  { slug: "blink", client: "Blink", subtitle: "Enhancing customer experience at Blink", tag: "Branding", industry: "SaaS", region: "UK", service: "Branding", image: card },
  { slug: "pizza-hut", client: "Pizza Hut", subtitle: "Enhancing customer experience at Blink", tag: "Marketing", industry: "Hospitality", region: "USA", service: "Marketing", image: card },
  { slug: "mcdonalds", client: "McDonald's", subtitle: "Enhancing customer experience at Blink", tag: "Content", industry: "Hospitality", region: "Bangladesh", service: "Content", image: card },
  { slug: "johnson-johnson", client: "Johnson & Johnson", subtitle: "Enhancing customer experience at Blink", tag: "Branding", industry: "Healthtech", region: "USA", service: "Branding", image: card },
  { slug: "ebay", client: "eBay", subtitle: "Enhancing customer experience at Blink", tag: "Experience Design", industry: "D2C & Wellness", region: "UK", service: "Experience Design", image: card },
  { slug: "louis-vuitton", client: "Louis Vuitton", subtitle: "Enhancing customer experience at Blink", tag: "Branding", industry: "D2C & Wellness", region: "France", service: "Branding", image: card },
];

export const caseStudy = {
  title: ["95% Modernized", "SAFF’s Blueprint"],
  meta: [
    { label: "Client", value: "SAFF" },
    { label: "Year", value: "2025" },
    { label: "Deliverable", value: "Branding, Web Design, Development" },
    { label: "Industry", value: "Football" },
    { label: "Region", value: "Dhaka, BD" },
  ],
  intro: "At SAFF, elevate your football presence with our cutting-edge solutions for immersive digital experiences.",
  introBody:
    "We rebuilt the federation’s digital home from the ground up: a faster site, a cleaner structure for news and fixtures, and a visual system that finally matches the energy on the pitch.", // TODO: Figma has lorem ipsum
  hero: `${C}/hero.webp`,
  sections: [
    {
      label: "The Mission",
      text: "At SAFF, elevate your football presence with our cutting-edge solutions for immersive digital experiences.",
      images: [[`${C}/duo1.webp`, `${C}/duo2.webp`], [`${C}/wide1.webp`]],
    },
    {
      label: "The Challenges",
      text: "Bringing years of scattered content, fixtures and media into one platform that fans, press and member nations could all use with ease.",
      body: "We audited every page, rebuilt the information architecture around match days, and designed a modular system the SAFF team can update without a developer.", // TODO
      images: [[`${C}/wide2.webp`]],
    },
    {
      label: "The Impact",
      text: "A site that loads faster, reads clearer and finally feels like the home of South Asian football.",
      body: "Fans find fixtures and results in a tap, and the federation publishes news in minutes instead of days.", // TODO
      images: [[`${C}/pair1.webp`, `${C}/pair2.webp`], [`${C}/wide3.webp`]],
    },
  ],
  results: "The impact speaks for itself: more visits, longer sessions and a federation that is proud to share its digital home.", // TODO
};

export const clientLogos = [
  { src: `${L}/imgTudoLogo0101011.svg`, alt: "Tudo", w: 99, h: 46 },
  { src: `${L}/imgFitmateLogo011.svg`, alt: "Fitmate", w: 150, h: 40 },
  { src: `${L}/imgEusaHalalMartLogo.svg`, alt: "Eusa Halal Mart", w: 126, h: 48 },
  { src: `${L}/imgGroup3.svg`, alt: "Ostrich", w: 117, h: 48 },
  { src: `${L}/imgImage554.webp`, alt: "Unimart", w: 157, h: 48 },
  { src: `${L}/imgGroup116.svg`, alt: "Nibedita", w: 176, h: 36 },
  { src: `${L}/imgGroup4.svg`, alt: "Napa", w: 86, h: 48 },
  { src: `${L}/imgGroup118.svg`, alt: "FriendPay", w: 174, h: 28 },
  { src: `${L}/imgGroup119.svg`, alt: "Nibedita Bangla", w: 170, h: 48 },
  { src: `${L}/imgGroup120.svg`, alt: "USBD Ventures", w: 146, h: 40 },
];

export const stats = [
  { value: 8, suffix: "+", title: "Years Experience", text: "In the web design industry field and product design.", image: `${L}/imgRectangle34624319.webp` },
  { value: 24, suffix: "", title: "Awards", text: "Recognised for craft across branding and digital.", image: `${L}/imgRectangle34624320.webp` },
  { value: 150, suffix: "+", title: "Projects Done", text: "Identities, websites and campaigns shipped.", image: `${L}/imgRectangle34624321.webp` },
  { value: 98, suffix: "%", title: "Satisfied Clients", text: "Partners who come back and bring friends.", image: `${L}/imgRectangle34624322.webp` },
]; // TODO: confirm real numbers

export const industries = [
  { title: "Fintech", text: "Innovative solutions for seamless transactions, regulatory adherence, and adaptive financial services.", image: `${L}/imgRectangle93.webp` },
  { title: "Healthtech", text: "Trusted, human-centred experiences for patients, clinicians and care providers.", image: `${L}/imgRectangle94.webp` },
  { title: "SaaS", text: "Clear positioning and product design that turns trials into loyal customers.", image: `${L}/imgRectangle95.webp` },
  { title: "D2C & Wellness", text: "Brands people love to unbox, share and come back to.", image: `${L}/imgRectangle96.webp` },
  { title: "Hospitality", text: "Cutting-edge strategies for effortless bookings, standout stays and personalised service.", image: `${L}/imgImage588.webp` },
];

export const testimonials = [
  {
    quote: "Working with this team was a pivotal moment for us. They took our ideas and crafted them into a stunning design that truly elevated our brand presence.",
    name: "Savannah Nguyen",
    role: "Nursing Assistant",
    avatar: `${L}/imgAuthorAvatar2.webp`,
  },
  {
    quote: "Sharp, responsive and genuinely invested. Mars & Co turned a messy brief into a brand our whole team is proud of.",
    name: "Ralph Edwards",
    role: "President of Sales",
    avatar: `${L}/imgAuthorAvatar1.webp`,
  },
  {
    quote: "From strategy to launch they kept every moving part pointed in the same direction. Our new site converts twice as well.",
    name: "Eleanor Pena",
    role: "Web Designer",
    avatar: `${L}/imgAuthorAvatar.webp`,
  },
]; // TODO: real testimonials (Figma has one quote + sample names)

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Branding is our core: strategy, identity, websites, campaigns and content. We like projects with room to think, question things and build something with character.",
  },
  {
    q: "What risks might impact our timeline?",
    a: "Slow feedback loops and late changes to scope are the usual suspects. We plan for both with clear milestones, shared boards and weekly check-ins so nothing sneaks up on you.",
  },
  {
    q: "How do we measure project success?",
    a: "We agree on goals before we design anything — awareness, leads, conversions or engagement — and track them after launch so you can see the return.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Absolutely! Whether you need new features, fixes, or someone to call when something feels off, we’ve got your back with flexible retainers or one-off support.",
  },
  {
    q: "Who is responsible for each deliverable?",
    a: "You get one project lead who owns the timeline, plus named designers and developers for each deliverable. No mystery hand-offs.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. We work with brands across South Asia, Europe and North America, fully remote or on-site when it helps.",
  },
];

export const insights = [
  {
    title: "The Ultimate Guide to Digital Transformation in 2026",
    text: "What actually changes when a company goes digital-first, and where to start.",
    tags: ["Digital Transformation", "Business Strategy"],
    image: `${L}/imgImage.webp`,
  },
  {
    title: "How Staff Augmentation Helps Companies Scale Faster",
    text: "Adding senior talent without the hiring lag — when it works and when it doesn’t.",
    tags: ["Business Strategy"],
    image: `${L}/imgImage1.webp`,
  },
  {
    title: "Building Scalable Software: Best Practices Every CTO Should Know",
    text: "Architecture choices that keep your product fast as you grow.",
    tags: ["Tech Advisory"],
    image: `${L}/imgRectangle93.webp`,
  },
]; // TODO: Figma uses placeholder article text

export const sectors = ["Fintech", "Healthtech", "SaaS", "D2C & Wellness", "Hospitality", "Other"];
export const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export const about = {
  heroTitle: ["Scale your brand", "with experts"],
  intro: "Crafting brands that people remember and businesses grow with since 2025.",
  introBody:
    "We are Mars and Co, a dynamic team of creative professionals dedicated to crafting powerful branding experiences. Our approach goes beyond traditional client relationships; we immerse ourselves in your vision, working alongside you to forge meaningful connections that resonate with your audience.",
  teamPhoto: `${A}/imgRectangle34624707.webp`,
  founders: [
    { name: "S.M. Mohiuddin Milton", text: "imagined a future that challenged convention and inspired change." },
    { name: "Atif Ahmed Akkhor", text: "transformed that vision into reality through resilience and innovation." },
    { name: "Mahbubul Akram Robee", text: "safeguarded the mission with unwavering integrity, ensuring quality never took a back seat." },
    { name: "Sadi Mohammad", text: "united people, ideas, and execution, turning individual efforts into a shared purpose." },
  ],
  values: [
    { title: "Curiosity first", text: "We ask the awkward questions early, so the work answers the right ones.", image: `${A}/imgRectangle34624319.webp` },
    { title: "Ownership, willingly", text: "We treat your brand like our own and take responsibility for the result.", image: `${A}/imgRectangle34624320.webp` },
    { title: "Depth is the shortcut", text: "Going deeper at the start saves months of guessing later.", image: `${A}/imgRectangle34624321.webp` },
    { title: "Intention in everything", text: "Every colour, word and pixel has a reason to be there.", image: `${A}/imgRectangle34624322.webp` },
    { title: "The creed", text: "Honest feedback, generous collaboration and no funny business.", image: `${A}/imgRectangle34624323.webp` },
    { title: "Tell the story", text: "Great brands are remembered for the stories they tell, not the logos they use.", image: `${A}/imgRectangle34624324.webp` },
  ],
  team: Array.from({ length: 9 }, (_, i) => ({
    image: `${A}/imgTalentCard${i === 0 ? "" : i}.webp`,
    name: ["Atif Ahmed Akkhor", "Susana Molina", "Sadi Mohammad", "Mahbubul Akram Robee", "S.M. Mohiuddin Milton", "Nadia Rahman", "Tanvir Hasan", "Farhan Kabir", "Rafiq Islam"][i],
    role: ["Co-founder", "Senior SEO Specialist", "Co-founder", "Co-founder", "Co-founder", "Brand Designer", "UX Designer", "Developer", "Motion Designer"][i],
  })), // TODO: real names/roles
  culturePhoto: `${A}/imgVideoPlayer.webp`,
  culture: ["Design", "Culture", "Office Pets", "Coffee", "Outdoors", "Focus"].map((label, i) => ({
    label,
    image: `${A}/imgRectangle${i === 0 ? "" : i}.webp`,
  })),
  stories: [
    { title: "Day in the Life", time: "1:40 mins", image: `${A}/imgStory0.webp` },
    { title: "Our Workspace", time: "2:15 mins", image: `${A}/imgStory1.webp` },
    { title: "Leadership Insights", time: "3:05 mins", image: `${A}/imgStory2.webp` },
    { title: "Visionary Conversations", time: "3:05 mins", image: `${A}/imgStory3.webp` },
    { title: "Entrepreneurial Dialogues", time: "3:05 mins", image: `${A}/imgStory4.webp` },
  ],
  signature: `${A}/imgGroup3.svg`,
  careersPhoto: `${A}/imgWorkspacePortrait.webp`,
};

export const marketIcon = `${L}/imgGroup5.svg`;
export const playIcon = `${L}/imgFrame.svg`;
export const reelPoster = `${L}/imgRectangle34624321.webp`;
