import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  impactStats,
  howItWorksSteps,
  coreValues,
  whyChooseUsItems,
} from "@/data/aboutData";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Globe,
  Users,
  Compass,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      
      {/* 1. Page Hero Header Section */}
      <section className="relative bg-gray-950 text-white overflow-hidden py-20 lg:py-28 border-b border-gray-800/80">
        {/* Decorative Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 filter saturate-150"
          style={{
            backgroundImage: `url('/images/SunsetPhotography.avif')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} /> Empowering Group Travel
            </span>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            About Tourunity
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Connecting travelers worldwide. Discover breathtaking destinations,
            join group tours, and create unforgettable memories together.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-7 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <Link to="/destinations" className="flex items-center gap-2">
                <span>Explore Destinations</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-900 rounded-full px-6 py-3 text-sm font-medium transition-all"
            >
              <a href="#our-story">Read Our Story</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Key Impact Metrics Bar */}
      <section className="py-12 bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map(({ label, value, icon: Icon }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-3">
                  <Icon size={24} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  {value}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section id="our-story" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Card Showcase */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=80"
                  onError={(e) => {
                    e.currentTarget.src = "/images/PhotographerClickingPics.jpg";
                  }}
                  alt="Group of travelers enjoying a journey together"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-gray-950 text-white p-6 rounded-2xl shadow-xl border border-gray-800 hidden sm:block max-w-xs">
                <p className="text-2xl font-bold text-white">Since 2025</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Building meaningful group travel experiences worldwide.
                </p>
              </div>
            </div>

            {/* Right Column: Story Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                How Tourunity Came to Life
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Founded by passionate explorers, Tourunity was born from a simple
                belief: travel is best experienced together. We realized that planning group trips, reuniting with loved ones, or finding trusted travel companions often felt fragmented and stressful.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We built Tourunity to solve this—a platform designed specifically
                for group travel where users can explore handpicked destinations, join curated tour groups, and manage bookings seamlessly.
              </p>

              {/* Value Checkpoints */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span>Curated Destinaton Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span>Verified Group Tours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span>Seamless Group Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. How It Works (Discover → Join → Travel) */}
      <section className="py-16 lg:py-24 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="px-3.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold uppercase tracking-wider">
              Simple Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              How Tourunity Works
            </h2>
            <p className="text-gray-600 text-base">
              Three simple steps to unlock your next group adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map(({ step, title, description, icon: Icon }) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-green-600">
                      {step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="px-3.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-gray-600 text-base">
              Guided by a commitment to quality, community, and responsible travel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Why Choose Tourunity Section */}
      <section className="py-16 lg:py-24 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="px-3.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold uppercase tracking-wider">
              Why Tourunity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Designed for Memorable Group Journeys
            </h2>
            <p className="text-gray-600 text-base">
              Everything you need for effortless, well-curated trips with friends and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUsItems.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs flex gap-5 items-start hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Meet the Founder Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Meet the Founder
            </h2>
            <p className="text-gray-600 text-base">
              The passion and engineering behind Tourunity.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center text-4xl font-extrabold shadow-md border-4 border-white">
              VR
            </div>
            <h3 className="text-xl font-bold text-gray-900">Vikas Rajput</h3>
            <p className="text-xs font-semibold text-green-600 mt-1 uppercase tracking-wider">
              Founder & Software Engineer
            </p>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Dedicated to building seamless software solutions that bring people together through the power of group travel.
            </p>
          </div>

        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-900 to-green-950/40 rounded-3xl p-10 lg:p-16 border border-gray-800 text-center space-y-6 overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Ready to Join Your Next Adventure?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Explore featured destinations or sign up to join group tours with fellow travelers worldwide.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3.5 text-base font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Link to="/destinations">Explore Destinations</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-900 rounded-full px-8 py-3.5 text-base font-medium cursor-pointer"
                >
                  <Link to="/signup">Join Tourunity Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

