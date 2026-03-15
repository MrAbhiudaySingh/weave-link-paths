import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  Scissors,
  GraduationCap,
  HeartPulse,
  Droplets,
  TreePine,
  ShoppingBag,
  Globe,
  Award,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
  Star,
  Calendar,
  Target,
  Rocket,
} from "lucide-react";

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-5 py-2 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-accent/20">
                Since 2007 • Transforming Lives
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[0.95] mb-8">
                Our Programs<br />
                <span className="text-secondary italic">&amp; Initiatives</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
                Empowering women, preserving heritage, and building self-reliant communities across 152+ villages in the Braj region.
              </p>
            </div>
          </Reveal>

          {/* Impact Counter Strip */}
          <Reveal variant="fade-up" delay={200}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "20,000+", label: "Women Trained", icon: Users },
                { num: "152+", label: "Villages Served", icon: Globe },
                { num: "12+", label: "Years of Legacy", icon: Calendar },
                { num: "400+", label: "Trained Annually", icon: Target },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm p-6 text-center group hover:bg-primary-foreground/10 transition-all duration-300">
                  <stat.icon className="mx-auto mb-3 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" size={24} />
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">{stat.num}</h3>
                  <p className="text-primary-foreground/50 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: CORE PROGRAMS — Women Skill Training & Livelihood
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <Reveal variant="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Core Programs</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                Women Skill Training<br />&amp; Livelihood Programs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2007, Khajani Welfare Society has been empowering girls and women through vocational skill training and livelihood opportunities — focusing on marginalized communities in the Braj region, enabling financial independence and entrepreneurship.
              </p>
            </div>
          </Reveal>

          {/* Implementation Partners */}
          <Reveal variant="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {["Uttar Pradesh Skill Development Mission (UPSDM)", "MSME Skill Initiatives", "ProPoor Livelihood Programs"].map((partner) => (
                <span key={partner} className="px-5 py-2.5 bg-card border border-border text-sm font-semibold text-primary shadow-sm">
                  {partner}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Three Core Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Brij-Hunar */}
            <Reveal variant="fade-up" delay={0}>
              <div className="group bg-card border border-border hover:border-accent/40 transition-all duration-500 overflow-hidden h-full flex flex-col hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/projects/brij-hunar-training.jpg"
                    alt="Brij-Hunar vocational training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-2">Flagship Program</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Brij-Hunar</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Vocational skill training program focused on employable skills and self-employment opportunities for women.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Training Courses</h4>
                    <div className="flex flex-col gap-2">
                      {["Assistant Beauty Therapist", "Self Employed Tailor"].map((course) => (
                        <div key={course} className="flex items-center gap-3">
                          <Scissors size={14} className="text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-3xl font-display font-bold text-accent">400+</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Women/Year</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl font-display font-bold text-primary">20K+</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Since 2007</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/projects/brij-hunar"
                    className="mt-6 inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Brij-Nipun */}
            <Reveal variant="fade-up" delay={100}>
              <div className="group bg-card border border-border hover:border-accent/40 transition-all duration-500 overflow-hidden h-full flex flex-col hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/projects/brij-nipun-activities.jpg"
                    alt="Brij-Nipun skill camps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-2">Skill Camps</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Brij-Nipun</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Short-term skill and activity-based training camps designed to build awareness, practical exposure, and confidence among women.
                  </p>
                  <div className="bg-muted p-6 mb-6">
                    <div className="flex items-center gap-4">
                      <Sparkles className="text-accent flex-shrink-0" size={32} />
                      <div>
                        <span className="block text-3xl font-display font-bold text-primary">750+</span>
                        <span className="text-xs text-muted-foreground font-medium">Women participate annually in short-term skill &amp; activity camps</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["Awareness", "Practical Skills", "Confidence Building"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-background border border-border text-[11px] font-semibold text-primary">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Brij-Anshuman */}
            <Reveal variant="fade-up" delay={200}>
              <div className="group bg-card border border-border hover:border-accent/40 transition-all duration-500 overflow-hidden h-full flex flex-col hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTQzNDGnOvQs3CTSkgcNAyeluwqtQbW9IyWPiwEqZCYcGc_7MybdyfW5kaZfy1NZ8x4z8AbMQPIf7oHWdclr0iC0SVlETUKu42I3Be8kBlf0S5s_oze5sunvpfyfXCtcxFWQL31VsI62XPtO5ZfEa4t6m_EiTsmHQvx6iye7fX0-JpH5ZvqZ_NkMobQiqZwAzgvf41xfldcRtb1j8hnwVpKLIMH7A4PFiIuR2vVQvJTF5dNiftqXTlKt_84Y2pmh2cRP7VeXrF-DU"
                    alt="Brij-Anshuman jail training program"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-2">Rehabilitation</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Brij-Anshuman</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Vocational skill training programs conducted for women inmates of Mathura Jail, supporting rehabilitation and livelihood opportunities after release.
                  </p>
                  <div className="bg-primary text-primary-foreground p-6 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
                    <p className="font-display text-lg italic leading-relaxed text-center opacity-90">
                      "Empowering women behind bars to build dignified lives beyond them."
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Star size={16} className="text-accent" />
                      <span>Regular vocational training batches conducted for jail inmates</span>
                    </div>
                  </div>
                  <Link
                    to="/projects/brij-anshuman"
                    className="mt-6 inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: EDUCATION & YOUTH DEVELOPMENT — KLA
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Core Programs</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal variant="fade-right" className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgR5w_iKPIelWfMDvW0MsEgR_gkp08BPk8ss1w1x-VMxt31qraSf_TEw_M1bcYjiOWgjaoPlZqHUEJ4l9aCcEVEuomv_rEwBK5K6XNyrltSCxFEDlupuPGlSmfgo_do4XVc8hLcLYBPp9Ykoc6BOx2R7DbnQvP1ozz3zQ8rYohkpm6hG8EhCYy1hLYUEdhwxPo18D-CquC1DKFQUwZrdkBL7kUYXFAWbtrTkXKbYpNAU08Wrb15vspTC6giyPhtsD3ktpNmupQxJc"
                    alt="Khajani Learning Academy classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 shadow-xl">
                  <span className="block text-4xl font-display font-bold">100+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Girls Supported</span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delay={150} className="lg:col-span-7">
              <div className="lg:pl-8">
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/20">Education &amp; Youth Development</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                  Khajani Learning Academy
                </h2>
                <p className="text-secondary font-display text-xl italic mb-8">Learn Today, Lead Tomorrow</p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Khajani Learning Academy provides academic support and holistic development opportunities for girls from marginalized communities studying in Classes 6 to 10. The academy focuses on strengthening academic foundations while building confidence and personality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                      <BookOpen size={14} className="text-accent" /> Subjects Covered
                    </h4>
                    <ul className="space-y-2">
                      {["Mathematics", "Science", "Social Science", "English Communication"].map((s) => (
                        <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                      <Sparkles size={14} className="text-accent" /> Additional Activities
                    </h4>
                    <ul className="space-y-2">
                      {["Personality Development Sessions", "Educational Exposure Trips", "Cultural & Interactive Learning"].map((s) => (
                        <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-muted p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Target 2026–27</span>
                    <span className="block text-3xl font-display font-bold text-primary mt-1">120 Girls</span>
                  </div>
                  <Link
                    to="/projects/kla"
                    className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
                  >
                    Explore KLA <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: COMMUNITY INITIATIVES — Brij-Sangini & Brij-Seva
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Community Initiatives</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                Health, Service &amp;<br />Community Welfare
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strengthening communities through health awareness, seasonal relief, and grassroots social action across the Braj region.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brij-Sangini */}
            <Reveal variant="fade-right">
              <div className="group bg-card border border-border hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzQPS-endf8wqmYGXf4tPUTGDAjluEDQZ4i7ZAH0jsUtCkucXy5VC6_1AFokFEpz1qRKzx_EjXf2Im2L7WtzSpe26x57irJZAGuyKFR7trxgPq3vHzRVuRyRYIdJSrSSY3klkoKYfYks1nsfg_UxcoDEEygKSyHeDGf33Yv32QUj4rnuyakp9p04Gmu1bobhCMRxvtwf5SN42Su-_W11mxrPAr6nSaUD4eI_Y0zqotuhIy6zyNEeFDS89kS0otvS_1XK2T8172Rw8"
                    alt="Brij-Sangini health camp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <HeartPulse className="text-accent mb-2" size={32} />
                    <h3 className="text-3xl font-display font-bold text-white">Brij-Sangini</h3>
                    <p className="text-white/70 text-sm mt-1">Community Health &amp; Social Awareness</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A community initiative focusing on women's health awareness and hygiene education through direct outreach and medical partnerships.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: HeartPulse, text: "Women health check-up camps" },
                      { icon: Droplets, text: "Menstrual hygiene awareness sessions" },
                      { icon: Users, text: "Blood donation camps with district hospitals & medical partners" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} />
                        </div>
                        <p className="text-sm text-muted-foreground pt-2">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/projects/brij-sangini"
                    className="mt-8 inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Brij-Seva */}
            <Reveal variant="fade-left" delay={150}>
              <div className="group bg-card border border-border hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKRDk2Ba-LoWtau4Y6ed0WeMm5kNUqnYwYrda7j7xv4zM1F-ZFpCGcpeo4tsDosRHne34Za48-Ub2xUjDCZJSbr-aDskBngBj2hTjxc6AuMtBUYnLYVCLd0B8n9TCFeaDzkOctMpqbjhFFTFsA-tcFEek-ndMS3-Zumgc8A4afgiDQA4TFCksOC55BT44rBfDD8ez4OGFPjEGKHydGE0RN5Y8m9Tg-vV30lUXAg-xh9vmjZYhK8Oxp4mM0MXHkd6pi7DpK-kPXWVw"
                    alt="Brij-Seva community service"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <TreePine className="text-secondary mb-2" size={32} />
                    <h3 className="text-3xl font-display font-bold text-white">Brij-Seva</h3>
                    <p className="text-white/70 text-sm mt-1">Community Service &amp; Braj Welfare</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Community welfare initiative dedicated to supporting people through seasonal and emergency support programs.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Droplets, text: "Jal Seva campaign during summer — running continuously for 5+ years" },
                      { icon: Users, text: "Distribution of drinking water, sharbat & buttermilk for travelers" },
                      { icon: Star, text: "Daan Utsav during Makar Sankranti — blanket & essential distribution" },
                      { icon: TreePine, text: "Plantation drives and relief support activities" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} />
                        </div>
                        <p className="text-sm text-muted-foreground pt-2">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/projects/brij-seva"
                    className="mt-8 inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: WOMEN ENTREPRENEURSHIP — Brij-Surabhi
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/30">Women Entrepreneurship</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Brij-Surabhi
              </h2>
              <p className="text-xl text-primary-foreground/70 font-display italic mb-8 border-l-4 border-secondary pl-6">
                Strengthening local women-led enterprises and preserving traditional Braj craftsmanship.
              </p>
              <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10">
                A livelihood initiative supporting Self Help Group (SHG) women through promotion of Braj art, craft, devotional products, and eco-friendly items. The program empowers women entrepreneurs to build sustainable businesses rooted in cultural heritage.
              </p>
              <Link
                to="/projects/brij-surabhi"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-105 gap-2"
              >
                Explore Brij-Surabhi <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal variant="fade-left" delay={200} className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-square overflow-hidden shadow-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA"
                    alt="Brij-Surabhi crafts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground p-5 shadow-xl">
                  <ShoppingBag size={28} />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {["Braj Art & Craft", "Devotional Products", "Eco-Friendly Items", "SHG Enterprises"].map((item) => (
                    <div key={item} className="bg-primary-foreground/5 border border-primary-foreground/10 p-3 text-center">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: UPCOMING INITIATIVE — Brij Women Business Directory
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Upcoming Initiative</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>

          <Reveal variant="scale" delay={100}>
            <div className="relative bg-card border-2 border-dashed border-accent/30 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full border border-accent/20">
                  <Rocket size={14} /> Under Development
                </span>
              </div>

              <Globe className="mx-auto mb-6 text-secondary" size={56} />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                Brij Women<br />Business Directory
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                A digital directory of women entrepreneurs across the Braj region — connecting artisans with wider markets and promoting women-owned businesses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: ShoppingBag, title: "Promote Women Businesses", desc: "Visibility for women-owned enterprises" },
                  { icon: Globe, title: "Connect to Markets", desc: "Link artisans with wider opportunities" },
                  { icon: Users, title: "Support Entrepreneurship", desc: "Foster women-led economic growth" },
                ].map((item) => (
                  <div key={item.title} className="bg-muted p-6 text-center group hover:bg-accent/5 transition-colors">
                    <item.icon className="mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" size={28} />
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: ANNUAL EVENT — Shakti Ek Adhaar
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Annual Event</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden shadow-2xl group">
                <img
                  src="/images/projects/shakti-ek-adhaar.jpg"
                  alt="Shakti Ek Adhaar annual celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Award className="text-accent mb-3" size={36} />
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Shakti Ek Adhaar</h3>
                  <p className="text-white/70">Annual Day Celebration of Khajani Welfare Society</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delay={150} className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
                <Award size={12} className="inline mr-2 -mt-0.5" />
                Celebrating Women
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                Honoring Women Who<br />
                <span className="text-accent italic">Inspire Change</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Shakti Ek Adhaar is the Annual Day celebration where women from different fields are recognized for their contributions to society. The event honors women leaders, educators, entrepreneurs, and social contributors who strengthen communities.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Leaders", "Educators", "Entrepreneurs", "Social Contributors"].map((role) => (
                  <span key={role} className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 text-sm font-semibold">
                    {role}
                  </span>
                ))}
              </div>
              <Link
                to="/projects/shakti-ek-adhaar"
                className="mt-8 inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all gap-2"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Be Part of the<br />
            <span className="text-secondary italic">Change Story</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-2xl mx-auto">
            Partner with us, volunteer your time, or contribute to a specific initiative. Every action strengthens a community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-full uppercase tracking-widest text-sm hover:border-primary-foreground/60 transition-all"
            >
              Join as Volunteer
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
