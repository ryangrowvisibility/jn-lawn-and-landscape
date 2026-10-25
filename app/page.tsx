import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(905) 396-5611";
const TEL = "tel:+19053965611";
const SMS = "sms:+19053965611";
const GOOGLE = "https://www.google.com/maps/search/?api=1&query=J%26N%20Lawn%20and%20Landscape&query_place_id=ChIJbeg3Bym2BCkRDBw8wyZCe-c";
const FACEBOOK = "https://www.facebook.com/p/JN-Lawn-and-Landscape-100093575525910";
const INSTAGRAM = "https://www.instagram.com/jnlawnandlandscape";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#faq", label: "FAQ" },
];

const services = [
  { icon: "ruler", title: "Landscape & garden design", text: "Front and backyard builds planned around what you have in mind. Jeremy and Nick walk the yard with you, suggest what will grow well and what will hold up, then build it on the schedule and budget you agreed to.", featured: true },
  { icon: "leaf", title: "Garden cleanups", text: "Overgrown beds brought back under control. Jeremy knows his plants, so the ones worth keeping stay and the weeds, volunteers and tangled growth go. Crews are usually on site within days of your call." },
  { icon: "layers", title: "Mulching", text: "Fresh mulch top-ups that make beds look finished and help hold moisture through summer. Most homes are done in a couple of hours, not a full day, and the walkways are swept clean when we leave." },
  { icon: "grid", title: "Stonework & brick repair", text: "Sunken or shifting driveway brick lifted, re-levelled and reset, plus stone-edged gardens, river-rock paths and patio borders that keep beds crisp for years." },
  { icon: "tree", title: "Storm cleanup", text: "Downed limbs and storm debris hauled away fast. After the 2025 ice storm we were clearing yards within two business days. While we are there, we will point out anything else the storm loosened." },
  { icon: "sun", title: "Permanent LED lighting", text: "Year-round Govee-style permanent lights mounted neatly along your rooflines. Set Christmas colours in December, warm white for summer evenings, and never climb a ladder to hang lights again.", seasonal: true },
  { icon: "scissors", title: "Vine removal", text: "Ivy and creeping vines pulled off siding, fences and brick before they work into the mortar or trim. We take the roots out where we can and leave the wall clean." },
];

const reviews = [
  { name: "Labren", job: "Driveway brickwork, gardens & lights", text: "They redid our driveway brickwork and a stone-edged front garden, and kept working straight through a pouring rainstorm. Then they came back and installed our Govee lights. Great crew." },
  { name: "Pauline O.", job: "Mulch top-up", text: "The mulch was finished in about two hours. The company we used before took a whole day. They showed up on time even after days of rain had pushed everyone's schedule around." },
  { name: "Paul B.", job: "Ice storm cleanup", text: "Downed limbs all over the yard after the ice storm. J&N had it cleared within two business days and even suggested an improvement to the front garden, which they did on the same visit." },
  { name: "Eve A.", job: "Front & backyard design", text: "Jeremy and Nick actually listened to what we wanted and came back with smart suggestions. The whole project came in on time and on budget." },
  { name: "Sean O.", job: "Overgrown garden cleanup", text: "Jeremy knew exactly which plants I wanted to keep. The crew was here within days, cleaned up the whole garden and took down a vine that had been growing up the house." },
  { name: "Jessica W.", job: "Permanent Christmas lights", text: "I saw Jeremy's ad on Facebook and called about permanent lights. They look amazing and the team was professional from start to finish." },
];

const steps = [
  { title: "Call or text", text: `Reach Jeremy or Nick at ${PHONE}. Tell us what is going on in the yard, or text a few photos so we can see it.` },
  { title: "Walk the yard together", text: "We come out, look at the space with you, and talk through options, including plant advice and what fits your budget." },
  { title: "Clear quote and a date", text: "You get a straightforward price and a start date. No surprises added later." },
  { title: "We do the work", text: "The crew shows up when we said, works through the weather, and keeps the job site tidy." },
  { title: "Final walk-through", text: "We walk the finished job with you and sweep up before we leave. If something is not right, we fix it." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We are based just south of Peterborough and work across Peterborough County, Cavan Monaghan and Northumberland, including the Port Hope and Cobourg side. If you are not sure we come to your street, call or text and ask." },
  { q: "Do you give free quotes?", a: "Yes. Call or text with what you need. For most jobs we come out, look at the yard with you and give you a clear price before any work starts." },
  { q: "How soon can you start?", a: "Our customers often tell us we were on site within days. Storm cleanups get priority, and after the 2025 ice storm we were clearing limbs within two business days." },
  { q: "How do permanent LED lights work?", a: "We mount a low-profile LED track along your rooflines once. You control the colours and timers from your phone, so the same lights work for Christmas, Halloween, game nights or warm white all summer. Fall is the best time to book before the holiday rush." },
  { q: "Do you keep plants that are already in my garden?", a: "Yes, if you want them. Jeremy knows his plants and will tell you which ones are worth saving, moving or replacing during a cleanup." },
  { q: "Do you work in the rain?", a: "Within reason, yes. Several customers have mentioned our crew finishing brickwork and gardens in pouring rain so their job stayed on schedule." },
  { q: "When can I reach you?", a: "Our Google listing shows us open every day. Call or text any time and Jeremy or Nick will get back to you." },
];

const gallery = [
  { src: "/images/p1.jpg", alt: "Round stone fire pit patio with red chairs in an autumn yard" },
  { src: "/images/p4.jpg", alt: "Fresh mulch bed and flagstone path beside a stone patio" },
  { src: "/images/p9.jpg", alt: "Repaired paver driveway with a dark border band" },
  { src: "/images/p14.jpg", alt: "House roofline lit with blue permanent LED lights at night" },
  { src: "/images/p5.jpg", alt: "Freshly mulched backyard garden beds along a brick home" },
  { src: "/images/p7.jpg", alt: "River-rock path running through new mulch beds" },
  { src: "/images/p2.jpg", alt: "Stone fire pit ring set in a gravel circle" },
  { src: "/images/p15.jpg", alt: "Paver path and patio with armour stone edging and chairs" },
  { src: "/images/p11.jpg", alt: "Front garden bed with hostas and black mulch" },
  { src: "/images/p8.jpg", alt: "Wide striped lawn with a cedar hedge and open countryside" },
  { src: "/images/p6.jpg", alt: "Freshly cut striped lawn in front of a country home" },
  { src: "/images/p10.jpg", alt: "J&N crew member on a ride-on mower cutting a large lawn" },
  { src: "/images/p12.jpg", alt: "Crew member pressure-washing the side of a house" },
  { src: "/images/p13.jpg", alt: "Fall leaves covering a lawn before a cleanup" },
];

const areas = ["Peterborough", "Cavan Monaghan", "Millbrook", "Bailieboro", "Port Hope", "Cobourg", "Northumberland County", "Peterborough County"];

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="flex text-star" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" /></svg>
      ))}
    </span>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "J&N Lawn and Landscape",
  telephone: "+1-905-396-5611",
  url: "https://jn-lawn-and-landscape.growlocalvisibility.com",
  image: "https://jn-lawn-and-landscape.growlocalvisibility.com/images/p3.jpg",
  areaServed: areas,
  geo: { "@type": "GeoCoordinates", latitude: 44.1584, longitude: -78.292 },
  address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 32 },
  sameAs: [FACEBOOK, INSTAGRAM, GOOGLE],
  founder: [{ "@type": "Person", name: "Jeremy" }, { "@type": "Person", name: "Nick" }],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-deep text-[15px] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Peterborough County &amp; Northumberland, Ontario</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 7 days &middot; Call or text any time</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="J&N Lawn and Landscape, home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="leading-tight"><span className="block text-lg font-extrabold">J&amp;N Lawn</span><span className="block text-sm font-semibold text-muted">and Landscape</span></span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold lg:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-brand">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-extrabold text-brand-deep md:inline">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-full bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[15px] font-bold text-brand-deep"><Icon name="sun" className="h-4 w-4" /> Now booking permanent holiday lights</p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)]">Landscaping, Garden Cleanups &amp; Permanent Lights near Peterborough &amp; Port Hope</h1>
              <p className="mt-5 max-w-[56ch] text-[19px] text-muted">J&amp;N Lawn and Landscape is Jeremy and Nick&apos;s crew. We design and build gardens, clean up overgrown beds, repair driveway brick, clear storm damage and install year-round LED lights. On time, on budget, and tidy when we leave.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-[19px]"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text us photos</a>
              </div>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[16px] font-semibold">
                <Stars /> <span>5.0</span><span className="text-muted">&middot; 32 Google reviews</span><span className="text-muted">&middot; Owner-run</span><span className="text-muted">&middot; Free quotes</span>
              </a>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_oklch(0.3_0.06_150/0.45)]">
                <Image src="/images/p3.jpg" alt="Front yard garden with a shaped ornamental tree, black mulch bed and green lawn" width={1440} height={1080} priority className="h-full w-full object-cover" />
              </div>
              <figure className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-line bg-white p-5 shadow-lg sm:left-auto sm:right-[-12px] sm:w-[320px]">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-2 text-[16px] leading-snug">&ldquo;Jeremy and Nick listened, made smart suggestions, and finished on time and on budget.&rdquo;</blockquote>
                <figcaption className="mt-2 text-[14px] font-bold text-muted">Eve A. &middot; Front &amp; backyard design</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb", t: "5.0 on Google", s: "32 reviews" },
              { icon: "users", t: "Owner-run", s: "Jeremy & Nick on site" },
              { icon: "clock", t: "On site within days", s: "Storms in 2 business days" },
              { icon: "tag", t: "Free quotes", s: "Clear price before we start" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><Icon name={x.icon} className="h-5 w-5" /></span>
                <span className="leading-tight"><span className="block font-extrabold">{x.t}</span><span className="text-[15px] text-white/80">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[62ch]">
              <p className="font-bold text-brand">Our services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Landscaping and yard work, done properly</h2>
              <p className="mt-4 text-muted">From a two-hour mulch top-up to a full front and backyard build, the same small crew handles every job. Here is what homeowners call us for most.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-brand border-2" : s.seasonal ? "border-cta border-2" : "border-line"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-deep"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-[13px] font-bold text-white">Most requested</span>}
                    {s.seasonal && <span className="rounded-full bg-cta px-3 py-1 text-[13px] font-bold text-ink">Book for the holidays</span>}
                  </div>
                  <h3 className="mt-5 text-[22px]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand-deep hover:gap-2.5 transition-[gap] duration-200">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[60ch]">
                <p className="font-bold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Rated 5.0 from 32 Google reviews</h2>
                <p className="mt-4 text-muted">Neighbours keep mentioning the same things: Jeremy&apos;s plant knowledge, a crew that works in any weather, and jobs that finish faster than expected.</p>
              </div>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-extrabold text-brand-deep" aria-hidden="true">{r.name[0]}</span>
                    <figcaption className="leading-tight"><span className="block font-extrabold">{r.name}</span><span className="text-[15px] text-muted">{r.job}</span></figcaption>
                  </div>
                  <Stars className="mt-4 h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[17px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <span className="mt-4 text-[14px] text-muted">Google review</span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal overflow-hidden rounded-[22px]">
              <Image src="/images/p10.jpg" alt="J&N crew member mowing a large striped lawn on a ride-on mower" width={810} height={1080} className="h-[520px] w-full object-cover" />
            </div>
            <div className="reveal">
              <p className="font-bold text-brand">About J&amp;N</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Jeremy and Nick, on your property</h2>
              <p className="mt-5 text-muted">J&amp;N Lawn and Landscape is a small, owner-run crew. When you call, you talk to Jeremy or Nick, and they are the ones who show up to look at the job. There is no sales team and no hand-off to strangers.</p>
              <p className="mt-4 text-muted">Jeremy knows plants. During a garden cleanup he will tell you what is worth keeping and what is crowding everything else out. Nick and the crew handle the heavy work: brick, stone, mulch and storm debris. Together they have built a reputation for showing up when they say, working through rain, and finishing faster than people expect.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "clock", t: "Shows up on time", s: "Even after a week of rain" },
                  { icon: "leaf", t: "Real plant advice", s: "Keep the good ones" },
                  { icon: "bolt", t: "Quick, efficient crew", s: "Hours, not days" },
                  { icon: "check", t: "On budget", s: "The price you agreed to" },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3 rounded-xl bg-tint p-4">
                    <span className="mt-0.5 text-brand"><Icon name={d.icon} /></span>
                    <span className="leading-tight"><span className="block font-extrabold">{d.t}</span><span className="text-[15px] text-muted">{d.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className="font-bold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">From first call to final sweep-up</h2>
              <p className="mt-4 text-muted">Simple and predictable. You always know the price and the date before we start.</p>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> Start with a call</a>
            </div>
            <ol className="grid gap-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-6 rounded-2xl border border-line bg-white p-6 md:p-7">
                  <span className="text-[44px] font-extrabold leading-none text-brand/30">{String(i + 1).padStart(2, "0")}</span>
                  <span><h3 className="text-[21px]">{s.title}</h3><p className="mt-1.5 text-[17px] text-muted">{s.text}</p></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-bold text-brand">Our work</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Recent yards around Peterborough County</h2>
              <p className="mt-4 text-muted">Fire pits, patios, mulch beds, driveway brick, lawns and lights. Real photos from real jobs.</p>
            </div>
            <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
              {gallery.map((g) => (
                <div key={g.src} className="reveal mb-4 overflow-hidden rounded-xl break-inside-avoid">
                  <Image src={g.src} alt={g.alt} width={800} height={1000} loading="lazy" className="h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Serving Peterborough County &amp; Northumberland</h2>
              <p className="mt-4 text-muted">We are based just south of Peterborough and travel to homes across the area. Not on the list? Call or text and we will tell you right away if we can get to you.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[16px] font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>)}
              </ul>
            </div>
            <div className="reveal overflow-hidden rounded-[22px] border border-line bg-white">
              <iframe title="Map of the J&N Lawn and Landscape service area" src="https://maps.google.com/maps?q=44.1584,-78.2920&z=10&output=embed" className="h-[400px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <div className="reveal text-left">
              <p className="font-bold text-brand">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Questions homeowners ask us</h2>
            </div>
            <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex items-center justify-between gap-4 text-[19px] font-extrabold">{f.q}<span className="plus grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-deep"><Icon name="plus" className="h-5 w-5" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)]">Ready for a yard you are proud of?</h2>
              <p className="mt-3 max-w-[52ch] text-white/85">Call or text Jeremy and Nick at {PHONE}. Free quotes, open 7 days, and holiday light installs are booking now.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="btn btn-cta text-[19px]"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn border-[1.5px] border-white/40 text-white hover:border-white"><Icon name="text" className="h-5 w-5" /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="text-xl font-extrabold">J&amp;N Lawn and Landscape</p>
            <p className="mt-2 max-w-[44ch] text-[16px] text-muted">Gardens, stonework and year-round lights for homes across Peterborough County and Northumberland, Ontario.</p>
            <div className="mt-5 flex gap-3">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="J&N Lawn and Landscape on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-brand"><Icon name="facebook" className="h-5 w-5" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="J&N Lawn and Landscape on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-brand"><Icon name="instagram" className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="text-[16px]">
            <p className="font-extrabold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="font-bold text-ink hover:text-brand">{PHONE}</a></li>
              <li>Open 7 days</li>
              <li>Peterborough County &amp; Northumberland, ON</li>
              <li><a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div className="text-[16px]">
            <p className="font-extrabold">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-[14px] text-muted">&copy; {new Date().getFullYear()} J&amp;N Lawn and Landscape</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
