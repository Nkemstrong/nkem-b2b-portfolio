import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  BarChart3,
  CheckCircle2,
  Database,
  Globe,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Target,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "B2B Lead Generation",
    description:
      "Research, identify and source qualified business prospects that match your ideal customer profile.",
  },
  {
    icon: Database,
    title: "CRM Management",
    description:
      "Set up, organise and optimise CRM systems for better pipeline visibility and follow-up.",
  },
  {
    icon: Workflow,
    title: "Marketing Operations",
    description:
      "Build efficient workflows for lead management, reporting and campaign coordination.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising Strategy",
    description:
      "Support campaign planning, audience research and performance optimisation across advertising platforms.",
  },
];


const projects = [
  {
    number: "01",
    category: "APOLLO.IO · LEAD GENERATION",
    title: "B2B Prospect Research & Lead Generation",
    description:
      "Researched target companies, identified relevant decision-makers and built a structured prospect database using industry, company size, location and job-title filters.",
    outcome:
      "Deliverable: A segmented prospect list with relevant company and contact information, ready for outreach.",
    tools: ["Apollo.io", "Google Sheets"],
    image: "/projects/01-lead-generation.jpg",
    type: "Demonstration",
  },
  {
    number: "02",
    category: "APOLLO.IO · ICP DEVELOPMENT",
    title: "Ideal Customer Profile & Lead Segmentation",
    description:
      "Developed an ideal customer profile by defining target industries, company characteristics, decision-maker roles and qualification criteria.",
    outcome:
      "Deliverable: A documented ICP framework and prioritised prospect segments for focused business development.",
    tools: ["Apollo.io", "Google Sheets"],
    image: "/projects/02-icp-segmentation.jpg",
    type: "Demonstration",
  },
  {
    number: "03",
    category: "APOLLO.IO · EMAIL OUTREACH",
    title: "Personalised B2B Cold Email Campaign",
    description:
      "Researched prospective clients and developed personalised outreach messages, including an initial introduction and structured follow-up sequence.",
    outcome:
      "Deliverable: A reusable three-step email sequence and prospect tracking framework.",
    tools: ["Apollo.io", "Email Outreach"],
    image: "/projects/03-cold-email.jpg",
    type: "Demonstration",
  },
  {
    number: "04",
    category: "APOLLO.IO · LINKEDIN PROSPECTING",
    title: "LinkedIn Decision-Maker Research",
    description:
      "Identified relevant business professionals, reviewed their roles and company backgrounds, and organised qualified contacts for targeted networking.",
    outcome:
      "Deliverable: A researched decision-maker list with tailored connection and introduction messages.",
    tools: ["Apollo.io", "LinkedIn"],
    image: "/projects/04-linkedin-research.jpg",
    type: "Demonstration",
  },
  {
    number: "05",
    category: "APOLLO.IO · APPOINTMENT SETTING",
    title: "End-to-End B2B Prospecting System",
    description:
      "Designed a complete prospecting workflow covering company research, lead qualification, contact organisation, outreach, follow-ups and appointment-setting stages.",
    outcome:
      "Deliverable: An organised prospecting workflow with clear stages for managing opportunities and tracking outreach activity.",
    tools: ["Apollo.io", "Google Sheets"],
    image: "/projects/05-prospecting-system.jpg",
    type: "Demonstration",
  },
  {
    number: "06",
    category: "HUBSPOT · CRM SETUP",
    title: "HubSpot CRM Setup & Organisation",
    description:
      "Configured a demonstration CRM environment with contact and company records, custom properties, organised views and structured prospect information.",
    outcome:
      "Deliverable: A centralised CRM workspace for managing business contacts and prospect information.",
    tools: ["HubSpot CRM"],
    image: "/projects/06-hubspot-setup.jpg",
    type: "Demonstration",
  },
  {
    number: "07",
    category: "HUBSPOT · SALES PIPELINE",
    title: "Sales Pipeline & Deal Management",
    description:
      "Created a structured sales pipeline with defined deal stages, sample opportunities, deal values, activity tracking and follow-up tasks.",
    outcome:
      "Deliverable: A visual pipeline for monitoring opportunity progress and organising sales activities.",
    tools: ["HubSpot CRM"],
    image: "/projects/07-sales-pipeline.jpg",
    type: "Demonstration",
  },
  {
    number: "08",
    category: "HUBSPOT · LEAD MANAGEMENT",
    title: "Lead Management & Follow-Up System",
    description:
      "Organised incoming leads by source and status, established follow-up procedures and created CRM views for tracking outstanding enquiries.",
    outcome:
      "Deliverable: A repeatable lead management process that makes prospect follow-up easier to monitor.",
    tools: ["HubSpot CRM"],
    image: "/projects/08-lead-management.jpg",
    type: "Demonstration",
  },
  {
    number: "09",
    category: "HUBSPOT · AUTOMATION",
    title: "CRM Automation & Workflow Management",
    description:
      "Designed lead management workflows covering lead assignment, task creation, internal notifications and follow-up processes.",
    outcome:
      "Deliverable: A documented automation workflow designed to reduce repetitive CRM administration.",
    tools: ["HubSpot", "Workflows"],
    image: "/projects/09-crm-automation.jpg",
    type: "Demonstration",
  },
  {
    number: "10",
    category: "HUBSPOT · REPORTING",
    title: "CRM Reporting & Sales Dashboard",
    description:
      "Built a demonstration reporting environment to organise pipeline information, lead sources, deal stages and sales activity into useful dashboard views.",
    outcome:
      "Deliverable: A reporting dashboard structure for reviewing pipeline activity and business development performance.",
    tools: ["HubSpot CRM", "Reporting"],
    image: "/projects/10-crm-dashboard.jpg",
    type: "Demonstration",
  },
  {
    number: "11",
    category: "FACEBOOK ADS · PAID CAMPAIGNS",
    title: "Facebook Advertising Campaign",
    description:
      "Campaign strategy and advertising execution covering audience targeting, campaign objectives, creative selection and performance monitoring.",
    outcome:
      "Campaign results: [Insert verified reach, impressions, clicks, leads and cost per result].",
    tools: ["Meta Ads Manager", "Facebook Ads"],
    image: "/projects/11-facebook-ads.jpg",
    type: "Advertising campaign",
  },
  {
    number: "12",
    category: "GOOGLE ADS · PAID CAMPAIGNS",
    title: "Google Ads Campaign Management",
    description:
      "Advertising campaign planning covering search intent, keyword research, audience relevance, ad messaging and campaign performance monitoring.",
    outcome:
      "Campaign results: [Insert verified impressions, clicks, conversions and cost per conversion].",
    tools: ["Google Ads", "Keyword Research"],
    image: "/projects/12-google-ads.jpg",
    type: "Advertising campaign",
  },
];

const capabilities = [
  "B2B Prospect Research",
  "Lead Qualification",
  "CRM & Pipeline Management",
  "Marketing Campaign Support",
  "Process Automation",
  "Data & Reporting",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#041321] text-white">

      {/* NAVIGATION */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061728]/90 shadow-lg shadow-black/10 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="leading-tight">
            <span className="block text-xl font-bold">
              Nkem <span className="text-[#168cf5]">Gospel</span>
            </span>
            <span className="mt-1 block text-[10px] font-medium tracking-wider text-white/75">
              B2B GROWTH & MARKETING OPERATIONS
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#" className="text-[#168cf5]">Home</a>
            <a href="#about" className="transition hover:text-[#168cf5]">About</a>
            <a href="#services" className="transition hover:text-[#168cf5]">Services</a>
            <a href="#projects" className="transition hover:text-[#168cf5]">Projects</a>
            <a href="#contact" className="transition hover:text-[#168cf5]">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-[#087fe5] px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-950/30 transition hover:bg-[#168cf5]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-[620px] items-end overflow-hidden bg-cover bg-center pt-28 sm:min-h-[680px]"
        style={{ backgroundImage: "url('/mountain-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#03101e]/95 via-[#03101e]/65 to-[#03101e]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041321] via-transparent to-[#041321]/20" />

        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-4 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-10">
          <div className="z-10 max-w-2xl pb-12 pt-10 sm:pb-16 lg:pb-20">
            <span className="inline-block rounded-md bg-[#087fe5]/80 px-3 py-1 text-sm font-semibold">
              Hello, I'm
            </span>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Nkem Gospel
            </h1>

            <h2 className="mt-4 max-w-xl text-2xl leading-tight font-semibold sm:text-3xl">
              B2B Lead Generation & Marketing Operations Specialist
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/85">
              I help businesses identify qualified prospects, manage customer
              relationships and build efficient marketing systems that support
              sustainable growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-lg bg-[#087fe5] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#168cf5]"
              >
                View My Work <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/70 bg-[#061728]/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Mail size={17} /> Contact Me
              </a>
            </div>

            <div className="mt-9">
              <p className="mb-4 text-xs font-medium text-white/75">
                TOOLS & PLATFORMS I WORK WITH
              </p>
              
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#ffb800]">A</span>
                <span className="text-sm font-bold text-white">pollo.io</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.simpleicons.org/hubspot/FF7A59"
                  alt="HubSpot"
                  className="h-6 w-6"
                />
                <span className="text-sm font-bold text-white">HubSpot</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.simpleicons.org/meta/0866FF"
                  alt="Meta"
                  className="h-6 w-6"
                />
                <span className="text-sm font-bold text-white">Meta Ads</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.simpleicons.org/googleads/4285F4"
                  alt="Google Ads"
                  className="h-6 w-6"
                />
                <span className="text-sm font-bold text-white">Google Ads</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.simpleicons.org/googlesheets/34A853"
                  alt="Google Sheets"
                  className="h-6 w-6"
                />
                <span className="text-sm font-bold text-white">Google Sheets</span>
              </div>
            </div>

            </div>
          </div>

          
          <div className="profile-container relative mx-auto flex h-[440px] w-full max-w-[560px] items-end justify-center overflow-visible sm:h-[510px] lg:h-[570px]">
            <Image
              src="/profile-cutout.png"
              alt="Nkem Gospel"
              width={720}
              height={960}
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              className="profile-float relative z-10 h-full w-full object-contain object-bottom"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}

      
      <section id="about" className="bg-[#041321] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold tracking-wider text-[#168cf5]">
              ABOUT ME
            </p>

            <h2 className="mt-4 max-w-lg text-3xl leading-tight font-bold sm:text-4xl">
              Building Systems That Create Business Opportunities
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              I'm a B2B Lead Generation and Marketing Operations Specialist
              with experience in prospect research, CRM management and
              marketing support. I combine research, organised data and
              practical workflows to help businesses find, nurture and manage
              opportunities.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 size={17} className="shrink-0 text-[#168cf5]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#087fe5] px-6 py-3 text-sm font-semibold transition hover:bg-[#168cf5]"
            >
              Discuss an Opportunity <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-white/10 bg-[#0b2032]/90 p-6 sm:p-8">
              <div className="flex items-center gap-5 border-b border-white/10 py-5 first:pt-0">
                <MapPin size={25} className="shrink-0 text-[#168cf5]" />
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="mt-1 text-sm text-white/65">Nigeria · Available Remotely</p>
                </div>
              </div>

              <div className="flex items-center gap-5 border-b border-white/10 py-5">
                <Database size={25} className="shrink-0 text-[#168cf5]" />
                <div>
                  <p className="text-sm font-semibold">Core Expertise</p>
                  <p className="mt-1 text-sm text-white/65">Lead Generation & CRM Operations</p>
                </div>
              </div>

              <div className="flex items-center gap-5 border-b border-white/10 py-5">
                <Globe size={25} className="shrink-0 text-[#168cf5]" />
                <div>
                  <p className="text-sm font-semibold">Work Preference</p>
                  <p className="mt-1 text-sm text-white/65">Remote · International Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-5">
                <Workflow size={25} className="shrink-0 text-[#168cf5]" />
                <div>
                  <p className="text-sm font-semibold">Approach</p>
                  <p className="mt-1 text-sm text-white/65">Research · Systems · Execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* PERFORMANCE STATISTICS */}
      <section className="bg-[#030e19] px-6 py-14 sm:px-8 sm:py-16">
        <div className="animate-float mx-auto max-w-5xl rounded-3xl border border-blue-900/60 bg-[#06152f] p-6 shadow-xl sm:p-10">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-blue-900/50 p-5 sm:p-8">
              <h3 className="text-4xl font-bold text-[#299cff] sm:text-5xl">
          $10K+
        </h3>
        <p className="mt-5 text-lg font-semibold text-white sm:text-xl">
          Revenue Generated
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Through inbound & outbound efforts
        </p>
      </div>

      <div className="border-b border-blue-900/50 p-5 sm:p-8">
        <h3 className="text-4xl font-bold text-[#299cff] sm:text-5xl">
          4+
        </h3>
        <p className="mt-5 text-lg font-semibold text-white sm:text-xl">
          Qualified Meetings
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          With senior decision-makers / Month
        </p>
      </div>

      <div className="border-r border-blue-900/50 p-5 sm:p-8">
        <h3 className="text-4xl font-bold text-[#299cff] sm:text-5xl">
          56+
        </h3>
        <p className="mt-5 text-lg font-semibold text-white sm:text-xl">
          Cold Calls
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Made Weekly
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <h3 className="text-4xl font-bold text-[#299cff] sm:text-5xl">
          72+
        </h3>
        <p className="mt-5 text-lg font-semibold text-white sm:text-xl">
          Targeted Emails
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Sent Weekly
        </p>
      </div>
    </div>
  </div>
</section>


      
      {/* SERVICES */}
      <section id="services" className="bg-[#061827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold tracking-wider text-[#168cf5]">
              MY SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What I Can Do For You
            </h2>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#168cf5]" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`service-card service-card-${index + 1} group rounded-xl border p-6 transition duration-300 hover:-translate-y-1`}
                >
                  <Icon size={32} className="service-icon" />

                  <h3 className="mt-5 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6">
                    {service.description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-current opacity-50 transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section id="projects" className="bg-[#041321] py-16 sm:py-20">
        {/* PROJECT SECTION HEADING */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#168cf5]" />
            <p className="text-sm font-bold tracking-[0.2em] text-[#48aaff]">
              MY PORTFOLIO
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Selected <span className="text-[#48aaff]">Work & Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#b1c2d2] sm:text-base">
            A collection of projects showcasing my experience in B2B lead
            generation, CRM management, marketing operations and paid advertising.
            Each project highlights the tools, strategies and deliverables involved.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:px-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="project-card group overflow-hidden rounded-2xl border border-[#234d70]/80 bg-[#102b45] transition-all duration-300 hover:-translate-y-1 hover:border-[#168cf5] hover:shadow-[0_12px_28px_rgba(0,120,255,0.12)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Screenshot placeholder */}
              
              
              {/* Project screenshot */}
              <div className="project-preview relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl border-b border-white/10 bg-[#071827]">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-[#061827]/85 px-2.5 py-1 text-[10px] font-medium text-white/75">
                  {project.type}
                </span>

              </div>

              {/* Project information */}
              <div className="p-5 sm:p-5 lg:p-4">
                <p className="text-[10px] font-bold tracking-wider text-[#48aaff]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-[#48aaff] sm:text-lg">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#b1c2d2]">
                  {project.description}
                </p>

                <div className="mt-4 rounded-lg border border-white/[0.07] bg-[#071c2d]/70 p-3">
                  <p className="text-[10px] font-bold tracking-wider text-[#48aaff]">
                    WORK DELIVERED
                  </p>
                  <p className="mt-1.5 text-sm leading-5 text-white/75">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-white/65"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-[10px] font-medium text-white/40">
                    PROJECT {project.number}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-[#168cf5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </section>

      {/* CONTACT BANNER */}


      {/* RESUME DOWNLOAD */}
      <section className="bg-[#f8fafc] px-6 py-16 sm:px-8 sm:py-20">
        <div className="animate-float mx-auto max-w-4xl rounded-[28px] bg-[#020f2b] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-900/70">
            <FileText size={42} className="text-[#249bff]" />
          </div>

          <h2 className="mx-auto mt-10 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Want to Know More About My Experience?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-xl">
            Download my complete resume to learn more about my professional
            background, skills and qualifications.
          </p>

          <a
            href="/Nkem-Gospel-Resume.pdf"
            download="Nkem-Gospel-Resume.pdf"
            className="mx-auto mt-10 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-5 text-base font-bold text-white transition hover:bg-blue-500 sm:text-xl"
          >
            <Download size={25} />
            Download My Resume
          </a>
        </div>
      </section>



      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#030e19]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="text-lg font-bold">
              Nkem <span className="text-[#168cf5]">Gospel</span>
            </p>


            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/65">
              <a href="#" className="transition hover:text-[#168cf5]">Home</a>
              <a href="#about" className="transition hover:text-[#168cf5]">About</a>
              <a href="#services" className="transition hover:text-[#168cf5]">Services</a>
              <a href="#projects" className="transition hover:text-[#168cf5]">Projects</a>
              <a href="#contact" className="transition hover:text-[#168cf5]">Contact</a>
            </nav>

            <p className="mt-1 text-xs text-white/55">
              B2B Growth & Marketing Operations
            </p>
          </div>

          <p className="text-xs text-white/50">
            © 2026 Nkem Gospel. All rights reserved.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-[#168cf5] transition hover:bg-white/10"
          >
            <ArrowUpRight size={19} />
          </a>
        </div>
      </footer>
    </main>
  );
}
