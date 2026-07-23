import { featureCards, whyChooseUsItems } from "@/data/aboutData";
import {
  CircleCheckBig,
  Footprints,
  Globe,
  Handshake,
  Heart,
  LayoutGrid,
  Lightbulb,
  Map,
  Users,
  UsersRound,
} from "lucide-react";

// --- Reusable Components ---

// 1. Reusable Section Header Component
const SectionHeader = ({ title, description, className = "" }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="w-24 h-1 bg-secondary mx-auto"></div>
    {description && (
      <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-600">
        {description}
      </p>
    )}
  </div>
);

// 2. Reusable Feature Card Component (for "What We Offer")
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  iconBgColor,
  iconColor,
  alternate = false,
}) => (
  <div className={`${alternate ? 'bg-white bg-opacity-10 backdrop-blur-sm' : 'bg-white'} rounded-xl shadow-md overflow-hidden transition-all duration-300 feature-card`}>
    <div className="p-8">
      <div
        className={`w-16 h-16 rounded-full ${iconBgColor} flex items-center justify-center text-${iconColor} mb-6`}
      >
        <Icon className={`text-${iconColor}`} />{" "}
        {/* Apply color class directly to icon if needed */}
      </div>
      <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <CircleCheckBig size={16} color="#05b829" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// 3. Reusable "Why Choose Us" Item Component
const WhyChooseItem = ({
  iconClass: Icon,
  title,
  description,
  bgColorClass,
}) => (
  <div className="flex">
    <div className="mr-6">
      <div
        className={`w-16 h-16 rounded-full ${bgColorClass} flex items-center justify-center text-white`}
      >
        <Icon className="text-white" size={28} />
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// 4. Reusable Mission Value Card Component
const MissionValueCard = ({
  icon: Icon,
  title,
  description,
  iconClassName = "",
}) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center">
    <div className="text-4xl mb-4">
      <Icon className={iconClassName} /> {/* Pass the full className string */}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p>{description}</p>
  </div>
);

// --- Main About Component ---
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full bg-neutral-900 h-[calc(100vh-120px)] bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url('/images/PhotographerClickingPics.jpg')`,
          filter: "brightness(0.9)", // Note: Adjusted from 0.6 for better visibility
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="z-10">
          <h3 className="text-7xl font-bold text-white">About Us</h3>
          <p className="text-white font-semibold text-2xl text-center">
            For explorers everywhere.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Using Reusable SectionHeader */}
          <SectionHeader title="Our Story" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div
                  className="bg-gray-200 border-2 border-dashed border-white rounded-xl w-full h-96 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://plus.unsplash.com/premium_photo-1661963552124-2569fbf9359d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D)",
                  }}
                ></div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg border-1 border-b-gray-700 border-r-gray-700">
                  <p className="text-2xl font-bold opacity-90 z-10 text-white">
                    Since 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                How It All Began
              </h3>
              <p className="mb-6 text-gray-700">
                Founded by a team of passionate travelers, Tourunity was born
                from a simple idea: travel should be more than just seeing new
                places—it should be about creating lasting memories with the
                people who matter most.
              </p>
              <p className="mb-6 text-gray-700">
                Inspired by our own experiences of reuniting with loved ones
                across the globe, we set out to make group travel accessible,
                meaningful, and fun for everyone.
              </p>
              <p className="text-gray-700">
                Today, we continue to be driven by the joy of bringing people
                together through shared travel experiences, creating connections
                that last a lifetime.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full mr-3 overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"></div>

                    {/* Centered Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                      <Globe
                        size={52}
                        strokeWidth={2.5}
                        absoluteStrokeWidth
                        className="text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">50+</p>
                    <p className="text-gray-600">Destinations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-3 relative overflow-hidden">
                    {/* Users Icon - White fill */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-200"></div>
                    <UsersRound
                      size={52}
                      strokeWidth={2.5}
                      absoluteStrokeWidth
                      className="text-white relative z-10"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">10,000+</p>
                    <p className="text-gray-600">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <hr className="my-16 border-t border-gray-200" />

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 mission-bg text-black">
        <div className="container mx-auto px-4">
          {/* Using Reusable SectionHeader */}
          <SectionHeader title="Our Mission" className="text-black" />

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-10 text-black">
              At Tourunity, we believe travel has the power to connect hearts
              and create lifelong bonds.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 md:p-12">
              <p className="text-xl md:text-2xl italic text-black">
                "Our mission is to design personalized, immersive tours that not
                only showcase breathtaking destinations but also foster
                meaningful connections among friends, families, and
                communities."
              </p>
              <p className="mt-8 text-lg text-black">
                Whether you're reuniting with loved ones or exploring new
                horizons, we're here to make every moment extraordinary.
              </p>
            </div>

            {/* Using Reusable MissionValueCard */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <MissionValueCard
                icon={Heart}
                title="Connect Hearts"
                description="We create experiences that bring people closer together through shared adventures."
                iconClassName="text-red-500 fill-current" // Pass full className string
              />
              <MissionValueCard
                icon={Map}
                title="Discover Together"
                description="We curate journeys that reveal the authentic beauty of destinations."
                iconClassName="text-amber-300" // Pass full className string
              />
              <MissionValueCard
                icon={Handshake}
                title="Travel Responsibly"
                description="We're committed to sustainable tourism that preserves our planet."
                iconClassName="text-gray-600" // Pass full className string
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <hr className="my-16 border-t border-gray-200" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet the Team"
            description="The passionate travelers behind Tourunity"
          />
          <div className="flex justify-center mt-12">
            {[
              {
                name: "Vikas Rajput",
                role: "Founder & CEO, Designer, Software Engineer, Head of Operations",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="text-center flex flex-col items-center justify-center"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  {/* placeholder avatar */}
                  <span className="text-5xl text-gray-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500 text-base max-w-xs text-center whitespace-pre-line">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Using Reusable SectionHeader */}
          <SectionHeader
            title="What We Offer"
            description="Specialized tourism services designed to bring people together through unforgettable travel experiences"
          />

          {/* Using Reusable FeatureCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {featureCards?.map(
              (
                { icon, iconBgColor, description, features, iconColor, title },
                idx,
              ) => (
                <FeatureCard
                  key={idx}
                  icon={icon}
                  title={title}
                  description={description}
                  features={features}
                  iconBgColor={iconBgColor}
                  iconColor={iconColor}
                  alternate={idx % 2 === 0}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <hr className="my-16 border-t border-gray-200" />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Using Reusable SectionHeader */}
          <SectionHeader
            title="Why Choose Us"
            description="What makes Tourunity the perfect choice for your next adventure"
          />

          {/* Using Reusable WhyChooseItem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {whyChooseUsItems?.map(
              ({ iconClass, title, description, bgColorClass }, idx) => (
                <WhyChooseItem
                  key={idx}
                  iconClass={iconClass}
                  title={title}
                  description={description}
                  bgColorClass={bgColorClass}
                />
              ),
            )}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Join Us on a Journey of Connection
              </h3>
              <p className="text-xl mb-8">
                Where every destination is a chance to reconnect, rediscover,
                and celebrate the beauty of togetherness.
              </p>
              <button className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                Plan Your Adventure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
