// aboutData.js
import {
  Footprints,
  Handshake,
  Headset,
  LayoutGrid,
  Lightbulb,
  StickyNote,
  UnplugIcon,
  Users,
} from "lucide-react";

// Why Choose Us items
const whyChooseUsItems = [
  {
    iconClass: StickyNote,
    title: "Personalized Planning",
    description:
      "Tailored itineraries to suit your group's unique needs and preferences. We understand that every group is different, so we customize every aspect of your journey.",
    bgColorClass: "bg-blue-500",
  },
  {
    iconClass: Handshake,
    title: "Hassle-Free Reunions",
    description:
      "We handle all the logistics, so you can focus on reconnecting and making memories. From transportation to accommodation, we've got you covered.",
    bgColorClass: "bg-indigo-400",
  },
  {
    iconClass: Headset,
    title: "24/7 Support",
    description:
      "Our dedicated team is always here to ensure your journey is smooth and stress-free. Day or night, we're just a call away to assist you.",
    bgColorClass: "bg-red-500",
  },
  {

    iconClass: UnplugIcon,
    title: "Passion for Connection",
    description:
      "We're driven by the joy of bringing people together through shared travel experiences. Our passion is creating bonds that last beyond the journey.",
    bgColorClass: "bg-teal-500",
  },
];

// FeatureCards for "What We Offer"
const featureCards = [
  {
    icon: LayoutGrid,
    title: "Curated Tours",
    description:
      "From serene beaches to vibrant cities, our handpicked destinations cater to every traveler's dream.",
    features: [
      "Personalized itineraries for each group",
      "Hidden gems and local experiences",
      "All-inclusive packages",
    ],
    iconBgColor: "bg-blue-100",
    iconColor: "blue-400",
  },
  {
    icon: Users,
    title: "Reunion-Focused Experiences",
    description:
      "Specially designed group tours that make reuniting with friends and family seamless and memorable.",
    features: [
      "Custom reunion activities",
      "Group accommodation arrangements",
      "Shared experience planning",
    ],
    iconBgColor: "bg-red-100",
    iconColor: "red-400",
  },
  {
    icon: Lightbulb,
    title: "Local Expertise",
    description:
      "Our partnerships with local guides ensure authentic, insider experiences that go beyond the typical tourist trail.",
    features: [
      "Native guide connections",
      "Cultural immersion activities",
      "Local cuisine experiences",
    ],
    iconBgColor: "bg-teal-100",
    iconColor: "teal-400",
  },
  {
    icon: Footprints,
    title: "Sustainable Travel",
    description:
      "We're committed to eco-friendly practices, supporting local communities, and preserving the beauty of the places we visit.",
    features: [
      "Carbon-neutral travel options",
      "Community-based tourism",
      "Wildlife conservation support",
    ],
    iconBgColor: "bg-green-100",
    iconColor: "green-600",
  },
];

export { featureCards, whyChooseUsItems };
