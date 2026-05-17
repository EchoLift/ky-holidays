"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Compass,
  Camera,
  Gem,
  Headphones,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
  X,
} from "lucide-react";

type Destination = {
  title: string;
  description: string;
  duration: string;
  price: string;
  mood: string;
  palette: string;
  image?: string;
};

type Package = {
  title: string;
  duration: string;
  price: string;
  season: string;
  featured: boolean;
  image: string;
  imagePath?: string;
  highlights: string[];
};

type HotOffer = {
  title: string;
  category: string;
  price: string;
  duration: string;
  tag: string;
  description: string;
  highlights: string[];
  palette: string;
  image?: string;
};

type Testimonial = {
  name: string;
  trip: string;
  quote: string;
  rating: number;
};

type Reel = {
  title: string;
  destination: string;
  tag: string;
  gradient: string;
  image?: string;
  url: string;
};

type TravelLandingProps = {
  destinations: Destination[];
  hotOffers: HotOffer[];
  packages: Package[];
  testimonials: Testimonial[];
  reels: Reel[];
};

const whatsappNumber = "919032853518";
const phoneNumber = "919032853518";
const secondaryPhone = "+91 85220 66108";
const instagramLink = "https://www.instagram.com/ky_holidays/";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi KY Holidays, I want to plan a trip. Please share package options.",
)}`;
const callLink = `tel:+${phoneNumber}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

const gallery = [
  { title: "Beach Escape", image: "/images/gallery/beach-escape.jpg" },
  { title: "Mountain Silence", image: "/images/gallery/mountain-silence.jpg" },
  { title: "Resort Luxury", image: "/images/gallery/resort-luxury.jpg" },
  { title: "Adventure Day", image: "/images/gallery/adventure-day.jpg" },
  { title: "Nightlife Glow", image: "/images/gallery/nightlife-glow.jpg" },
  { title: "Flight Moment", image: "/images/gallery/flight-moment.jpg" },
  { title: "Couples Travel", image: "/images/gallery/couples-travel.jpg" },
  { title: "Group Travel", image: "/images/gallery/group-travel.jpg" },
];

const faqs = [
  {
    question: "How does the payment process work?",
    answer:
      "Booking confirmation requires 50% advance payment. Full payment should be completed before 3 days of departure. Payments can be made via Bank Transfer or UPI.",
  },
  {
    question: "Can packages be customized?",
    answer:
      "Yes. Dates, hotels, experiences, transport, meal plans, and sightseeing can be tailored around your budget and travel style.",
  },
  {
    question: "Do you arrange group tours?",
    answer:
      "Yes. We design family trips, student groups, corporate getaways, friends groups, and private celebrations.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "30 days before travel: 10% charges. 15-29 days: 30% charges. 7-14 days: 50% charges. Less than 7 days or no show: 100% charges. No refund applies for early departure or unused services.",
  },
  {
    question: "Do you help with visas?",
    answer:
      "Yes. We guide travelers with visa documentation, timelines, appointment support, and destination-specific requirements.",
  },
  {
    question: "Are transport and accommodation included?",
    answer:
      "Packages can include hotels, flights, airport transfers, private cabs, sightseeing, activities, and local support.",
  },
];

const whyChoose = [
  { icon: Compass, title: "Curated Experiences", copy: "Trips designed around mood, pace, and memory, not generic checklists." },
  { icon: WalletCards, title: "Affordable Luxury", copy: "Premium-feeling holidays with smart routing, seasonal deals, and honest pricing." },
  { icon: Headphones, title: "Travel Support", copy: "Real human guidance before, during, and after your journey." },
  { icon: ShieldCheck, title: "Trusted Planning", copy: "Clear inclusions, vetted stays, practical advice, and no last-minute confusion." },
  { icon: Heart, title: "Personal Touch", copy: "Honeymoons, birthdays, family comfort, and group energy handled with care." },
  { icon: Plane, title: "Seamless Logistics", copy: "Flights, hotels, transfers, visas, and activities coordinated into one smooth plan." },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-[#f4c76f]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-[0.95] text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-white/66 sm:text-lg">
        {copy}
      </p>
    </motion.div>
  );
}

function PlaceholderVisual({
  label,
  className = "",
  palette = "from-[#14213d] via-[#0f8fbf] to-[#f0b35b]",
}: {
  label: string;
  className?: string;
  palette?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${palette} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(255,178,89,0.42),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60" />
      <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/28 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/82 backdrop-blur-md">
        {label}
      </div>
    </div>
  );
}

function MediaVisual({
  alt,
  image,
  label,
  className = "",
  palette = "from-[#14213d] via-[#0f8fbf] to-[#f0b35b]",
  priority = false,
}: {
  alt: string;
  image?: string;
  label: string;
  className?: string;
  palette?: string;
  priority?: boolean;
}) {
  if (!image) {
    return <PlaceholderVisual label={label} palette={palette} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-[#071017] ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.54))]" />
      <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/28 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/82 backdrop-blur-md">
        {label}
      </div>
    </div>
  );
}

function SectionBackdrop({
  image,
  overlay,
  className = "opacity-24",
}: {
  image: string;
  overlay: string;
  className?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${className}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

export function TravelLanding({
  destinations,
  hotOffers,
  packages,
  testimonials,
  reels,
}: TravelLandingProps) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const storyY = useTransform(scrollYProgress, [0.18, 0.58], [80, -80]);

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi, I want to plan a trip.%0AName: ${form.get("name")}%0ADestination: ${form.get(
      "destination",
    )}%0ABudget: ${form.get("budget")}%0ATravel month: ${form.get("month")}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/55 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border border-[#f4c76f]/35 bg-[#f4c76f]/10 text-[#f4c76f]">
              <Sparkles size={18} />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.28em]">KY Holidays</span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-white/45">Travel Company</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-white/68 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open KY Holidays on Instagram"
              className="hidden size-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071017] md:grid"
            >
              <Camera size={17} />
            </a>
            <a
              href={callLink}
              aria-label="Call KY Holidays"
              className="hidden size-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071017] md:grid"
            >
              <Phone size={17} />
            </a>
            <a
              href={whatsappLink}
              className="hidden h-11 items-center gap-2 rounded-full bg-[#f4c76f] px-5 text-sm font-black text-[#071017] shadow-[0_0_32px_rgba(244,199,111,0.28)] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-xl transition hover:bg-white/14 lg:hidden"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          className="overflow-hidden border-t border-white/10 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white/78 backdrop-blur-xl transition hover:bg-white hover:text-[#071017]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-13 items-center justify-center gap-3 rounded-2xl bg-[#f4c76f] px-5 text-sm font-black uppercase tracking-[0.16em] text-[#071017]"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-13 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-5 text-sm font-black uppercase tracking-[0.16em] text-white"
              >
                <Camera size={17} />
                Instagram
              </a>
              <a
                href={callLink}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-13 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-5 text-sm font-black uppercase tracking-[0.16em] text-white"
              >
                <Phone size={17} />
                Call
              </a>
            </div>
          </div>
        </motion.div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/hero/india-travel-hero.jpg"
            alt="Cinematic India travel hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.72),rgba(5,7,13,0.22)_48%,rgba(5,7,13,0.58)),linear-gradient(0deg,rgba(5,7,13,0.96),rgba(5,7,13,0.12)_54%,rgba(5,7,13,0.28))]" />
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[#0f8fbf]/18 blur-3xl" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/72 backdrop-blur-xl">
              <BadgeCheck size={16} className="text-[#f4c76f]" />
              Hyderabad&apos;s premium trip designers
            </div>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.86] tracking-normal text-white sm:text-8xl lg:text-9xl">
              Escape The Ordinary.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/70 sm:text-xl">
              Curated holidays, cinematic destinations, seamless planning, and personal guidance for people who want more than just a trip.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#inquiry" className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-black uppercase tracking-[0.14em] text-[#061018] transition hover:-translate-y-1 hover:bg-[#f4c76f]">
                Plan My Trip <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#destinations" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-7 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14">
                Explore Destinations
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          >
            {[
              ["4.9/5", "Traveler love"],
              ["2,033+", "Instagram community"],
              ["24/7", "On-trip support"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
                <p className="text-3xl font-black text-[#f4c76f]">{value}</p>
                <p className="mt-1 text-sm font-semibold text-white/60">{label}</p>
              </div>
            ))}
            <div className="rounded-[2rem] border border-[#f4c76f]/25 bg-[#f4c76f]/12 p-5 backdrop-blur-2xl">
              <div className="mb-3 flex text-[#f4c76f]">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-6 text-white/72">&ldquo;Stress-free, stylish, and worth every rupee.&rdquo;</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="destinations" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/india-travel-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#05070d_0%,rgba(5,7,13,0.82)_18%,rgba(5,7,13,0.88)_74%,#071321_100%),linear-gradient(90deg,rgba(5,7,13,0.92),rgba(5,7,13,0.54),rgba(5,7,13,0.92))]" />
        </div>
        <div className="relative">
          <SectionIntro
            eyebrow="Destination showcase"
            title="Seven escapes. One feeling: leave now."
            copy="From snow valleys to sacred routes and coastal weekends, choose the mood of your next story and let us shape the journey."
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl ${index === 0 ? "md:col-span-2" : ""}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              variants={fadeUp}
            >
              <MediaVisual
                alt={`${destination.title} travel package`}
                image={destination.image}
                label={destination.title}
                palette={destination.palette}
                className="absolute inset-0 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,6,12,0.95),rgba(3,6,12,0.18)_58%,rgba(3,6,12,0.28))]" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#f4c76f]">{destination.mood}</p>
                <h3 className="text-4xl font-black">{destination.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/68">{destination.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold text-white/72">
                  <span className="rounded-full bg-white/12 px-4 py-2">{destination.duration}</span>
                  <span className="rounded-full bg-white/12 px-4 py-2">{destination.price}</span>
                </div>
                <a href={whatsappLink} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#071017] transition hover:bg-[#f4c76f]">
                  Get itinerary <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#071321] px-5 py-28 sm:px-8 lg:py-40">
        <motion.div style={{ y: storyY }} className="absolute inset-x-0 top-0 h-full opacity-75">
          <MediaVisual
            alt="Cinematic India journey"
            image="/images/story/cinematic-india-journey.jpg"
            label="Cinematic India Journey"
            palette="from-[#061018] via-[#12385b] to-[#f0b35b]"
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.95),rgba(5,7,13,0.46),rgba(5,7,13,0.95))]" />
        <motion.div
          className="relative mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9 }}
          variants={fadeUp}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#f4c76f]">Immersive story</p>
          <h2 className="text-balance text-5xl font-black leading-[0.92] sm:text-7xl lg:text-8xl">
            We choreograph the feeling before we book the hotel.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-9 text-white/72">
            The first espresso at an airport gate. A quiet car window in the mountains. A table by the sea just as the sky changes color. Our work is to turn travel logistics into a story you can feel.
          </p>
        </motion.div>
      </section>

      <section id="reels" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/gallery/mountain-silence.jpg"
          overlay="bg-[linear-gradient(180deg,#071321_0%,rgba(5,7,13,0.86)_38%,#05070d_100%)]"
          className="opacity-26"
        />
        <div className="relative">
        <SectionIntro
          eyebrow="Travel reels"
          title="Social-first previews for trips people want to share."
          copy="Watch quick glimpses of our latest escapes, group trips, hill retreats, spiritual journeys, and adventure weekends."
        />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.title}
              className="group relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              variants={fadeUp}
            >
              <MediaVisual
                alt={`${reel.title} reel thumbnail`}
                image={reel.image}
                label={reel.tag}
                palette={reel.gradient}
                className="h-full rounded-[1.45rem] transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-3 rounded-[1.45rem] bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_52%)]" />
              <a href={reel.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${reel.title} on Instagram`} className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/16 text-white backdrop-blur-xl transition group-hover:scale-110">
                <Play size={22} fill="currentColor" />
              </a>
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f4c76f]">{reel.destination}</p>
                <h3 className="mt-2 text-2xl font-black">{reel.title}</h3>
                <a href={reel.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#071017] transition hover:bg-[#f4c76f]">
                  Watch reel <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7efe2] px-5 py-24 text-[#071017] sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/destinations/jack-anstey-XVoyX7l9ocY-unsplash.jpg"
          overlay="bg-[linear-gradient(90deg,rgba(247,239,226,0.94),rgba(247,239,226,0.78)),linear-gradient(180deg,#f7efe2_0%,rgba(247,239,226,0.68)_48%,#f7efe2_100%)]"
          className="opacity-28"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#b8792f]">Why choose us</p>
            <h2 className="text-balance text-4xl font-black leading-[0.96] sm:text-6xl">Premium planning, without the cold agency feeling.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group rounded-[1.6rem] border border-black/8 bg-white/72 p-6 shadow-[0_24px_80px_rgba(7,16,23,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  variants={fadeUp}
                >
                  <div className="mb-7 grid size-13 place-items-center rounded-full bg-[#071017] text-[#f4c76f]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#071017]/66">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/destinations/ladakh.jpg"
          overlay="bg-[linear-gradient(180deg,#05070d_0%,rgba(5,7,13,0.86)_35%,rgba(5,7,13,0.94)_100%)]"
          className="opacity-22"
        />
        <div className="relative">
          <SectionIntro
            eyebrow="Featured packages"
            title="Handpicked packages for every kind of traveler."
            copy="Clear pricing, thoughtful inclusions, comfortable stays, guided support, and itineraries designed to feel effortless."
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.title}
              className={`group overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-2xl backdrop-blur-xl ${pkg.featured ? "lg:col-span-2" : ""}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              variants={fadeUp}
            >
              <MediaVisual
                alt={pkg.title}
                image={pkg.imagePath}
                label={pkg.image}
                className="h-72 transition duration-700 group-hover:scale-[1.04]"
                palette={pkg.featured ? "from-[#12385b] via-[#0f8fbf] to-[#f4c76f]" : "from-[#101827] via-[#31415d] to-[#c9873a]"}
              />
              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#f4c76f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#071017]">{pkg.season}</span>
                  {pkg.featured && <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/68">Featured</span>}
                </div>
                <h3 className="text-3xl font-black">{pkg.title}</h3>
                <div className="mt-4 flex items-center gap-4 text-sm font-bold text-white/62">
                  <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {pkg.duration}</span>
                  <span>{pkg.price}</span>
                </div>
                <div className="mt-6 grid gap-3">
                  {pkg.highlights.map((highlight) => (
                    <p key={highlight} className="flex items-center gap-3 text-sm text-white/68">
                      <Gem size={15} className="text-[#f4c76f]" /> {highlight}
                    </p>
                  ))}
                </div>
                <a href={whatsappLink} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#071017] transition hover:bg-[#f4c76f]">
                  Ask for quote <MessageCircle size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7efe2] px-5 py-24 text-[#071017] sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/destinations/gokarna.jpg"
          overlay="bg-[linear-gradient(90deg,rgba(247,239,226,0.92),rgba(247,239,226,0.74)),linear-gradient(180deg,#f7efe2_0%,rgba(247,239,226,0.64)_50%,#f7efe2_100%)]"
          className="opacity-30"
        />
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#0f8fbf]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f4c76f]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#b8792f]">Upcoming hot offers</p>
              <h2 className="text-balance text-4xl font-black leading-[0.96] sm:text-6xl">
                Long weekends, seasonal escapes, and spiritual packages.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#071017]/66 lg:ml-auto">
              Fresh departures, limited seats, peak-season deals, and timely escapes curated for travelers ready to move.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hotOffers.map((offer, index) => (
              <motion.article
                key={offer.title}
                className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white/74 shadow-[0_26px_90px_rgba(7,16,23,0.12)] backdrop-blur-xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                variants={fadeUp}
              >
                <MediaVisual
                  alt={offer.title}
                  image={offer.image}
                  label={offer.tag}
                  palette={offer.palette}
                  className="h-56 transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b8792f]">{offer.category}</p>
                  <h3 className="mt-3 text-3xl font-black leading-none">{offer.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
                    <span className="rounded-full bg-[#071017] px-4 py-2 text-white">{offer.price}</span>
                    <span className="rounded-full bg-[#f4c76f] px-4 py-2 text-[#071017]">{offer.duration}</span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#071017]/66">{offer.description}</p>
                  <div className="mt-5 grid gap-2">
                    {offer.highlights.slice(0, 4).map((highlight) => (
                      <p key={highlight} className="flex items-center gap-2 text-sm font-semibold text-[#071017]/70">
                        <BadgeCheck size={15} className="text-[#0f8fbf]" /> {highlight}
                      </p>
                    ))}
                  </div>
                  <a href={whatsappLink} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#071017] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0f8fbf]">
                    Book this offer <MessageCircle size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071321] px-5 py-24 sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/gallery/group-travel.jpg"
          overlay="bg-[linear-gradient(180deg,#071321_0%,rgba(7,19,33,0.9)_42%,#071321_100%)]"
          className="opacity-20"
        />
        <div className="relative">
          <SectionIntro
            eyebrow="Traveler proof"
            title="Real trust, cinematic presentation."
            copy="Testimonials are intentionally high-contrast and elegant, helping visitors feel both desire and confidence."
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveTestimonial(index)}
                className={`mb-3 flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition ${activeTestimonial === index ? "bg-white text-[#071017]" : "bg-white/6 text-white/68 hover:bg-white/10"}`}
              >
                <span>
                  <span className="block font-black">{testimonial.name}</span>
                  <span className="text-sm opacity-70">{testimonial.trip}</span>
                </span>
                <Users size={17} />
              </button>
            ))}
          </div>
          <motion.div
            key={activeTestimonial}
            className="rounded-[2rem] border border-[#f4c76f]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] p-8 shadow-2xl backdrop-blur-2xl sm:p-12"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-8 flex text-[#f4c76f]">
              {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, index) => <Star key={index} fill="currentColor" />)}
            </div>
            <p className="text-pretty text-3xl font-black leading-tight sm:text-5xl">&ldquo;{testimonials[activeTestimonial].quote}&rdquo;</p>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.26em] text-white/46">{testimonials[activeTestimonial].trip}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/destinations/gokarna-dandeli.jpg"
          overlay="bg-[linear-gradient(180deg,#05070d_0%,rgba(5,7,13,0.86)_48%,#05070d_100%)]"
          className="opacity-24"
        />
        <div className="relative">
          <SectionIntro
            eyebrow="Photo gallery"
            title="Moments that make the group chat jealous."
            copy="Snow roads, beaches, resorts, temples, mountains, flights, and memories from trips people keep talking about."
          />
        </div>
        <div className="relative mx-auto columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              className="group break-inside-avoid overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.04 }}
              variants={fadeUp}
            >
              <MediaVisual
                alt={item.title}
                image={item.image}
                label="Gallery"
                palette={index % 2 === 0 ? "from-[#12385b] via-[#0f8fbf] to-[#f0b35b]" : "from-[#1a1f2e] via-[#9c5f3a] to-[#f4c76f]"}
                className={`${index % 3 === 0 ? "h-96" : "h-72"} rounded-[1.45rem] transition duration-700 group-hover:scale-[1.03]`}
              />
              <p className="px-3 pb-2 pt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/56">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="inquiry" className="relative overflow-hidden bg-[#f7efe2] px-5 py-24 text-[#071017] sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/gallery/couples-travel.jpg"
          overlay="bg-[linear-gradient(90deg,rgba(247,239,226,0.96),rgba(247,239,226,0.78)),linear-gradient(180deg,#f7efe2_0%,rgba(247,239,226,0.7)_52%,#f7efe2_100%)]"
          className="opacity-30"
        />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#0f8fbf]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} variants={fadeUp}>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-[#b8792f]">WhatsApp conversion</p>
            <h2 className="text-balance text-5xl font-black leading-[0.9] sm:text-7xl">One message away from your next trip.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#071017]/68">
              Send your mood, dates, and budget. We will shape it into destination options, hotel ideas, and a practical plan.
            </p>
            <a href={whatsappLink} className="mt-9 inline-flex h-14 items-center gap-3 rounded-full bg-[#071017] px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#0f8fbf]">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>
          <form onSubmit={handleInquiry} className="relative rounded-[2rem] border border-black/8 bg-white/76 p-6 shadow-[0_30px_100px_rgba(7,16,23,0.14)] backdrop-blur-xl">
            <div className="grid gap-4">
              {[
                ["name", "Your name"],
                ["destination", "Dream destination"],
                ["budget", "Approx budget"],
                ["month", "Travel month"],
              ].map(([name, placeholder]) => (
                <input
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  className="h-14 rounded-2xl border border-black/10 bg-white px-5 text-sm font-semibold outline-none transition placeholder:text-black/38 focus:border-[#0f8fbf]"
                />
              ))}
            </div>
            <button className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#f4c76f] text-sm font-black uppercase tracking-[0.14em] transition hover:bg-[#071017] hover:text-white">
              Send Inquiry <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#071321] px-5 py-20 sm:px-8 lg:py-24">
        <SectionBackdrop
          image="/images/gallery/resort-luxury.jpg"
          overlay="bg-[linear-gradient(180deg,#071321_0%,rgba(7,19,33,0.88)_44%,#071321_100%)]"
          className="opacity-20"
        />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            variants={fadeUp}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#f4c76f]">Payment terms</p>
            <h2 className="text-3xl font-black sm:text-5xl">Simple confirmation. Clear timelines.</h2>
            <div className="mt-7 grid gap-4 text-white/70">
              <p className="flex gap-3"><WalletCards className="mt-1 shrink-0 text-[#f4c76f]" /> Booking confirmation requires 50% advance payment.</p>
              <p className="flex gap-3"><CalendarDays className="mt-1 shrink-0 text-[#f4c76f]" /> 100% full payment should be completed before 3 days of departure.</p>
              <p className="flex gap-3"><ShieldCheck className="mt-1 shrink-0 text-[#f4c76f]" /> Payment can be made via Bank Transfer or UPI.</p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            variants={fadeUp}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#f4c76f]">Cancellation policy</p>
            <h2 className="text-3xl font-black sm:text-5xl">Transparent before you confirm.</h2>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-white/68 sm:text-base">
              {[
                "30 days before travel: 10% cancellation charges",
                "15-29 days before travel: 30% cancellation charges",
                "7-14 days before travel: 50% cancellation charges",
                "Less than 7 days or no show: 100% cancellation charges",
                "No refund for early departure or unused services",
              ].map((term) => (
                <p key={term} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">{term}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <SectionBackdrop
          image="/images/gallery/nightlife-glow.jpg"
          overlay="bg-[linear-gradient(180deg,#05070d_0%,rgba(5,7,13,0.9)_50%,#05070d_100%)]"
          className="opacity-18"
        />
        <div className="relative">
          <SectionIntro
            eyebrow="FAQ"
            title="Clear answers before the first message."
            copy="A modern accordion handles practical conversion doubts without turning the site into a booking engine."
          />
        </div>
        <div className="relative mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="mb-4 overflow-hidden rounded-[1.4rem] border border-white/12 bg-white/8">
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-black"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={`shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 leading-7 text-white/66">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#071321] px-5 py-20 sm:px-8">
        <SectionBackdrop
          image="/images/gallery/flight-moment.jpg"
          overlay="bg-[linear-gradient(90deg,rgba(7,19,33,0.94),rgba(7,19,33,0.72)),linear-gradient(180deg,#071321_0%,rgba(7,19,33,0.84)_50%,#071321_100%)]"
          className="opacity-22"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-[#f4c76f]">Contact</p>
            <h2 className="text-4xl font-black sm:text-6xl">Let’s plan your escape.</h2>
            <div className="mt-8 grid gap-4 text-white/68">
              <p className="flex items-center gap-3"><MapPin className="text-[#f4c76f]" /> KY Holidays, Hyderabad, Telangana</p>
              <p className="flex items-center gap-3"><MessageCircle className="text-[#f4c76f]" /> +91 90328 53518 / {secondaryPhone}</p>
              <p className="flex items-center gap-3"><Camera className="text-[#f4c76f]" /> @ky_holidays</p>
              <p className="flex items-center gap-3"><CalendarDays className="text-[#f4c76f]" /> Mon-Sat, 10 AM - 8 PM</p>
            </div>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3">
            <iframe
              title="KY Holidays Google Maps location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1239007646873!2d78.3945519!3d17.4537829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9170ac531a0f%3A0x6e7027cc3272affd!2sKY%20Holidays!5e0!3m2!1sen!2sus!4v1779003082585!5m2!1sen!2sus"
              className="h-full min-h-[336px] w-full rounded-[1.45rem]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#03050a] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.28em]">KY Holidays</p>
            <p className="mt-2 text-sm text-white/46">Your journey, our priority.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/54">
            <a href="#destinations">Destinations</a>
            <a href="#packages">Packages</a>
            <a href="#reels">Reels</a>
            <a href="#inquiry">Inquiry</a>
          </div>
          <p className="text-sm text-white/36">Copyright 2026. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 sm:left-auto sm:right-6 sm:w-auto">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram" className="grid size-14 shrink-0 place-items-center rounded-full border border-white/15 bg-black/56 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#071017]">
          <Camera size={18} />
        </a>
        <a href={callLink} aria-label="Call KY Holidays" className="grid size-14 shrink-0 place-items-center rounded-full border border-white/15 bg-black/56 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#071017]">
          <Phone size={18} />
        </a>
        <a href={whatsappLink} className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 text-sm font-black uppercase tracking-[0.12em] text-[#04140a] shadow-[0_20px_60px_rgba(37,211,102,0.32)] sm:flex-none">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </main>
  );
}
