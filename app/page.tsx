"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FileSearch,
  MapPin,
  Menu,
  Star,
  Scale,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const instagram = "https://www.instagram.com/soaresigor.adv/";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Igor+Soares+Advogado%2C+R.+Padre+Cust%C3%B3dio+Dias%2C+41%2C+Matozinhos%2C+S%C3%A3o+Jo%C3%A3o+del+Rei+-+MG%2C+36305-194";
const portrait =
  "/imgi_8_548494784_18323973964237539_8695964748514059541_n.jpg";
const professionalPhoto =
  "/imgi_7_572987166_18331537393237539_2069214834891672686_n.jpg";

function InstagramMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const services = [
  {
    title: "Orientação jurídica",
    icon: Scale,
    summary:
      "Uma conversa para compreender a situação apresentada e esclarecer dúvidas jurídicas.",
    details:
      "O atendimento começa pela compreensão dos fatos e das dúvidas trazidas. A orientação considera as particularidades de cada situação e apresenta informações jurídicas de forma direta e acessível.",
    topics: [
      "Compreensão da situação",
      "Esclarecimento de dúvidas",
      "Informação sobre caminhos possíveis",
    ],
  },
  {
    title: "Análise de documentos",
    icon: FileSearch,
    summary:
      "Exame atento das informações e dos documentos relacionados a cada caso.",
    details:
      "A leitura cuidadosa dos documentos ajuda a organizar as informações relevantes e a identificar pontos que precisam de atenção. Cada análise depende do contexto apresentado e dos materiais disponíveis.",
    topics: [
      "Leitura de documentos",
      "Organização de informações",
      "Esclarecimento de dúvidas",
    ],
  },
  {
    title: "Acompanhamento jurídico",
    icon: ClipboardCheck,
    summary:
      "Comunicação clara sobre as etapas e os encaminhamentos do atendimento.",
    details:
      "Quando há acompanhamento, a comunicação sobre as etapas e os encaminhamentos é parte importante do trabalho. As informações são compartilhadas com atenção ao contexto e aos deveres de confidencialidade profissional.",
    topics: [
      "Informação sobre etapas",
      "Acompanhamento de encaminhamentos",
      "Comunicação responsável",
    ],
  },
];

const reviews = [
  {
    name: "Gustavo Santos",
    text: "Um advogado muito competente, dedicado e sempre bem recomendado por quem já precisou de seus serviços. Demonstra muito conhecimento na área e compromisso com seus clientes. Sem dúvida, é um profissional que indico com confiança.",
  },
  {
    name: "André Medeiros",
    text: "Excelente profissional, técnico e atencioso, resolveu meu problema com muita eficiência. Indico a todos.",
  },
  {
    name: "Júlia Sampaio",
    text: "Excelente profissional! Muito atencioso com o cliente o processo. Indico de olhos fechados!",
  },
  {
    name: "Albert Gustavo",
    text: "Excelente profissional! Sabe lidar com o cliente de forma clara e objetiva!",
  },
  {
    name: "Ederaldo José dos Santos",
    text: "Excelente advogado! Dá todo o suporte necessário que precisamos. Atencioso, interessado e educado. Recomendo.",
  },
  {
    name: "Deiller Junio",
    text: "Excelente profissional, muito atencioso e claro na condução dos processos.",
  },
  {
    name: "danubia viana macedo",
    text: "Atendimento diferenciado, atenção do início ao fim, preocupando sempre com a segurança do cliente.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] =
    useState<(typeof services)[number] | null>(null);

  useEffect(() => {
    if (!activeService) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeService]);

  const closeMenu = () => setMenuOpen(false);
  const navigation = [
    ["Início", "#inicio"],
    ["Sobre", "#escritorio"],
    ["Atuação", "#atuacao"],
    ["Google", "#avaliacoes"],
    ["Contato", "#contato"],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-ivory text-ink">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[88px] sm:px-8 lg:px-12">
            <a href="#inicio" aria-label="Igor Soares — início" onClick={closeMenu}>
              <Image
                src="/logo-transparent.png"
                width={1600}
                height={470}
                alt="Igor Soares — Advogado, OAB/MG 226.978"
                className="h-auto w-[185px] sm:w-[250px]"
                sizes="(max-width: 640px) 185px, 250px"
              />
            </a>

            <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
              {navigation.map(([label, href]) => (
                <a key={label} className="nav-link" href={href}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Igor Soares"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <InstagramMark size={17} />
              </a>
              <GlowingButton href={instagram} target="_blank" size="sm" className="rounded-full">
                Entre em contato <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-black px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/70 transition-colors hover:text-brand-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white"
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <InstagramMark size={15} /> Instagram de Igor
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section id="inicio" className="hero-surface relative isolate scroll-mt-24 text-white">
          <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[710px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.p variants={reveal} className="eyebrow-light mb-7">
                <span className="size-1.5 rounded-full bg-brand-400" />
                ADVOCACIA · SÃO JOÃO DEL-REI, MG
              </motion.p>
              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.2rem] leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]"
              >
                Direito com clareza. <span className="italic text-brand-300">Presença em cada etapa.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Orientação jurídica responsável, comunicação direta e atenção às particularidades de cada situação.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  <InstagramMark size={16} /> Fale pelo Instagram
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/85 transition-colors hover:text-brand-300"
                >
                  Conheça o atendimento
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-300" /> São João del-Rei · MG
                </span>
                <span className="inline-flex items-center gap-2">
                  <Scale size={15} className="text-brand-300" /> OAB/MG 226.978
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.975, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-2"
            >
              <div className="absolute -inset-3 rotate-2 rounded-[48%_48%_2px_2px] border border-brand-400/35 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden rounded-[48%_48%_2px_2px] bg-[#252521]">
                <Image
                  src={portrait}
                  alt="Retrato profissional de Igor Soares, advogado"
                  fill
                  preload
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_13%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#090a09]/90 via-[#090a09]/35 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl">Igor Soares</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/75">Advogado · OAB/MG 226.978</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/65 text-brand-200">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
              <div className="absolute -left-3 top-[18%] rounded-full border border-white/15 bg-[#171713] px-4 py-2.5 text-[9px] font-medium tracking-[0.14em] text-white/85 shadow-card sm:-left-9 sm:px-5">
                ATENDIMENTO COM ATENÇÃO
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Informações profissionais" className="border-y border-ink/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Igor Soares", "advogado · OAB/MG 226.978"],
              ["São João del-Rei", "Minas Gerais, Brasil"],
              ["Instagram", "@soaresigor.adv"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-[1.35rem] text-brand-700 sm:text-2xl">{value}</span>
                <span className="max-w-[150px] text-[10px] leading-5 text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="escritorio" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute -inset-3 -rotate-2 border border-brand-700/30 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden bg-[#d6d3ce]">
                <Image
                  src={professionalPhoto}
                  alt="Igor Soares em ambiente profissional"
                  fill
                  sizes="(max-width: 1024px) 88vw, 42vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="absolute -bottom-5 right-3 max-w-[235px] border-l-2 border-brand-600 bg-white px-5 py-4 shadow-card sm:-right-7 sm:px-6">
                <p className="font-serif text-xl text-ink">Igor Soares</p>
                <p className="mt-1 text-[10px] leading-5 text-ink-soft">Advogado · OAB/MG 226.978</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE O ADVOGADO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]"
              >
                Cada questão merece ser tratada com <span className="italic text-brand-700">atenção.</span>
              </motion.h2>
              <motion.p variants={reveal} className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
                Igor Soares é advogado inscrito na OAB de Minas Gerais sob o nº 226.978 e atende em São João del-Rei.
              </motion.p>
              <motion.p variants={reveal} className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">
                O trabalho é conduzido com responsabilidade, comunicação clara e respeito às particularidades de cada situação, para que você compreenda as informações e os próximos passos do atendimento.
              </motion.p>
              <motion.a
                variants={reveal}
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                Acompanhe no Instagram
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="atuacao" className="scroll-mt-24 border-y border-ink/5 bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ATENDIMENTO JURÍDICO"
                description="O atendimento parte da escuta e da compreensão dos fatos, com informações adequadas à situação apresentada."
              >
                Clareza para entender as possibilidades de cada <span className="italic text-brand-700">caso.</span>
              </Heading>
              <p className="max-w-[245px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione um tema para saber mais sobre o atendimento.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={reveal}
                    className="group flex min-h-[306px] flex-col border border-ink/10 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full border border-brand-700/15 bg-brand-50 text-brand-700">
                        <Icon size={21} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/55">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-serif text-[1.65rem] leading-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">{service.summary}</p>
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800 hover:text-brand-700"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-brand-800/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="FORMA DE ATUAÇÃO"
              light
              description="Uma condução atenta começa por entender a situação e explicar as informações relevantes com clareza."
            >
              Informação clara em todas as <span className="italic text-brand-300">etapas.</span>
            </Heading>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                ["01", "Escuta atenta", "Compreender os fatos e as dúvidas que motivaram o contato."],
                ["02", "Orientação objetiva", "Explicar as informações jurídicas em linguagem direta."],
                ["03", "Comunicação responsável", "Manter atenção às etapas e aos encaminhamentos do atendimento."],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-5 sm:py-7"
                >
                  <span className="font-serif text-2xl text-brand-300/85">{number}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/65">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="avaliacoes" className="scroll-mt-24 bg-[#efede7] py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="AVALIAÇÕES NO GOOGLE"
                description="Alguns comentários publicados no perfil público. Acesse o Google para consultar as avaliações e informações atualizadas."
              >
                A confiança se constrói em cada <span className="italic text-brand-700">atendimento.</span>
              </Heading>
              <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl leading-none text-ink">5,0</span>
                  <div>
                    <div className="flex gap-1 text-brand-600" aria-label="Nota 5 de 5 no Google">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-ink-soft">42 avaliações no Google</p>
                  </div>
                </div>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-3 border border-ink/15 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-brand-700 hover:text-brand-800"
                >
                  Ver avaliações no Google
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-12 grid gap-5 md:grid-cols-2"
            >
              {reviews.map((review) => (
                <motion.figure
                  key={review.name}
                  variants={reveal}
                  className="flex min-h-60 flex-col border border-ink/10 bg-white p-7 sm:p-9"
                >
                  <div className="flex gap-1 text-brand-600" aria-label="Avaliação de cinco estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={17} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-8 text-ink sm:text-xl">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-4">
                    <span className="block text-sm font-semibold tracking-[0.02em] text-ink">{review.name}</span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-soft">Avaliação pública no Google</span>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO E LOCALIZAÇÃO"
                description="O perfil profissional no Instagram é o canal de contato informado. O escritório fica em São João del-Rei, Minas Gerais."
              >
                Vamos conversar com <span className="italic text-brand-700">clareza.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  <InstagramMark size={16} /> Falar pelo Instagram
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">@soaresigor.adv</p>
              </div>
            </div>

            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-600" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">Endereço</p>
                  <p className="mt-1 font-serif text-2xl text-ink">São João del-Rei · MG</p>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                R. Padre Custódio Dias, 41<br />
                Matozinhos, São João del-Rei - MG<br />
                36305-194, Brasil
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">Igor Soares · OAB/MG 226.978</p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-300/20 bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                IGOR SOARES · ADVOGADO
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                Uma conversa clara é um bom começo.
              </h2>
            </div>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#11100e] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              <InstagramMark size={15} /> Instagram de Igor
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="bg-[#090a09] px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <a href="#inicio" aria-label="Igor Soares — início" className="inline-flex">
                <Image
                  src="/logo-transparent.png"
                  width={1600}
                  height={470}
                  alt="Igor Soares — Advogado"
                  className="h-auto w-[200px]"
                  sizes="200px"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">
                Advocacia em São João del-Rei, Minas Gerais.
              </p>
              <p className="mt-2 text-[10px] tracking-[0.1em] text-brand-300/85">OAB/MG 226.978</p>
            </div>

            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">Navegação</h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#escritorio">Sobre o advogado</a>
                <a className="footer-link" href="#atuacao">Atendimento jurídico</a>
                <a className="footer-link" href="#avaliacoes">Perfil público</a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">Contato</h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramMark size={14} /> @soaresigor.adv
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> R. Padre Custódio Dias, 41 · Matozinhos
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Igor Soares · Advogado. Todos os direitos reservados.</p>
            <p>Conteúdo informativo. Cada situação deve ser analisada individualmente.</p>
          </div>
        </footer>

        <AnimatePresence>
          {activeService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes do atendimento"
                  onClick={() => setActiveService(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ATENDIMENTO JURÍDICO</p>
                <h2 id="service-dialog-title" className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink">
                  {activeService.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">{activeService.details}</p>
                <ul className="mt-6 space-y-3">
                  {activeService.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-ink">
                      <span className="size-1.5 rounded-full bg-brand-600" /> {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton href={instagram} target="_blank" size="md" className="mt-8 rounded-full">
                  <InstagramMark size={15} /> Instagram de Igor <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
