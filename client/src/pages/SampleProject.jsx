
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiCode,  FiCalendar, FiHeart, FiUser, FiMap , FiZap, FiActivity} from "react-icons/fi";

export const projectsData = [
  
{
  slug: "restaurant-reservation",
  title: "Restaurant Reservation System",
  subtitle: "Online table booking and management system",
  heroImage: "/images/project1.webp",
  projectIcon: FiCalendar,

  overview:
    "A web application that allows users to book restaurant tables online.",
  problem:
    "Manual reservations caused scheduling conflicts and inefficiency.",
  solutionSteps: [
    {
      title: "Booking Flow",
      description: "Built a date and time-based reservation flow.",
    },
    {
      title: "Data Management",
      description: "Stored and managed bookings securely in the database.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiNodedotjs, name: "Node.js", description: "Backend" },
    { icon: SiMongodb, name: "MongoDB", description: "Database" },
  ],

  result: "Streamlined the reservation process and reduced manual errors.",
  liveLink: "https://petal-plate-restaurant-frontend.onrender.com/",
  codeLink: "https://github.com/myscreencode18/Petal-Plate---Restaurant-",
}
,
{
  slug: "wedding-website",
  title: "Wedding Website",
  subtitle: "A full-featured website for wedding events and stories",
  heroImage: "/images/project2.webp",
  projectIcon: FiHeart,

  overview:
    "A responsive wedding website designed to share events, stories, and galleries.",
  problem:
    "Couples needed a digital way to share wedding details with guests.",
  solutionSteps: [
    {
      title: "Information Architecture",
      description: "Structured events, galleries, and story sections clearly.",
    },
    {
      title: "Mobile Optimization",
      description: "Ensured smooth experience across all devices.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", description: "Styling" },
  ],

  result: "Created an easy-to-share and elegant wedding experience.",
  liveLink: "https://wedwebjohn-sarah-frontend.onrender.com/",
  codeLink: "https://github.com/myscreencode18/WedWebJohn-Sarah",
}
,
{
  slug: "creator-portfolio",
  title: "Creator Portfolio Website",
  subtitle: "Portfolio for a web developer and video editor",
  heroImage: "/images/project3.webp",
  projectIcon: FiUser,

  overview:
    "A personal portfolio website designed to showcase technical and creative work.",
  problem:
    "The creator needed a professional platform to present work and skills.",
  solutionSteps: [
    {
      title: "Content Structure",
      description: "Organized projects and skills for clear navigation.",
    },
    {
      title: "Clean UI",
      description: "Designed a minimal interface focused on readability and visuals.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", description: "Styling" },
  ],

  result: "Helped present creative and technical work in a clear, professional format.",
  liveLink: "https://devframe-client.onrender.com/",
  codeLink: "https://github.com/myscreencode18/DevFrame",
}
,
  {
  slug: "travel-influencer",
  title: "Travel Influencer Website",
  subtitle: "A content-driven platform for travel storytelling",
  heroImage: "/images/project4.webp",
  projectIcon: FiMap,

  overview:
    "A website built to showcase travel stories, visuals, and experiences.",
  problem:
    "Social platforms limited long-form storytelling.",
  solutionSteps: [
    {
      title: "Content Layout",
      description: "Designed sections for stories and visual content.",
    },
    {
      title: "Performance Focus",
      description: "Optimized images and layout for faster loading.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", description: "Styling" },
  ],

  result: "Enabled better control over travel content presentation.",
  liveLink: "https://travelinfluencersitefrontend.onrender.com",
  codeLink: "https://github.com/myscreencode18/TravelInfluencerSite",
}
, 

{
  slug: "fitness-club-website",
  title: "Fitness Club Website",
  subtitle: "Website to showcase gym programs, trainers, and memberships",
  heroImage: "/images/project5.webp",
  projectIcon: FiActivity,

  overview:
    "A modern website built for a fitness club to present its programs, trainers, and membership plans.",
  problem:
    "The gym needed a clear and professional online presence to communicate its offerings.",
  solutionSteps: [
    {
      title: "Content Structure",
      description: "Organized workout programs, trainer profiles, and membership details clearly.",
    },
    {
      title: "User-Friendly Layout",
      description: "Designed a clean layout focused on readability and easy navigation.",
    },
    {
      title: "Responsive Design",
      description: "Ensured smooth experience across mobile, tablet, and desktop devices.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", description: "Styling" },
  ],

  result:
    "Created a professional platform that clearly communicates fitness programs and membership options.",
  liveLink: "https://sculpt-fitness-client.onrender.com",
  codeLink: "https://github.com/myscreencode18/Sculpt-Fitness",
}

,
{
  slug: "e-bike-landing",
  title: "E-Bike Product Landing Page",
  subtitle: "Product launch landing page for an electric bike",
  heroImage: "/images/project6.webp",
  projectIcon: FiZap,

  overview:
    "A modern landing page built to showcase an electric bike and highlight its key features.",
  problem:
    "The product needed a clear and engaging online presence for launch.",
  solutionSteps: [
    {
      title: "Layout & Visual Hierarchy",
      description: "Designed a clean layout focusing on product features and call-to-actions.",
    },
    {
      title: "Responsive Development",
      description: "Built a mobile-first, responsive interface using modern frontend tools.",
    },
  ],

  technologies: [
    { icon: SiReact, name: "React", description: "Frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", description: "Styling" },
  ],

  result: "Improved product presentation and clarity for potential customers.",
  liveLink: "https://helios-ebike-1.onrender.com",
  codeLink: "https://github.com/myscreencode18/Helios-ebike",
}

];

