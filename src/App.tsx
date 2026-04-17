const pillars = [
  {
    n: "01",
    title: "Hosting & Infrastructure",
    body: "Notes on Linux servers, deployments, performance, and the quiet work of keeping things running.",
  },
  {
    n: "02",
    title: "DNS, Domains & Email",
    body: "Practical writing on resolution, deliverability, authentication, and the pipes most people never see.",
  },
  {
    n: "03",
    title: "Security & Reliability",
    body: "Hardening, observability, incident thinking, and designing systems that fail gracefully.",
  },
  {
    n: "04",
    title: "SaaS & AI Tools",
    body: "Considered reviews and operator perspective on the tools shaping modern digital business.",
  },
  {
    n: "05",
    title: "Founder Notes",
    body: "Field notes from building a small, dependable company on the open web.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <a href="/" className="font-serif text-lg tracking-tight text-foreground">
            breeze<span className="text-muted-foreground">.blog</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#pillars" className="transition-colors hover:text-foreground">Pillars</a>
            <a href="#founder" className="transition-colors hover:text-foreground">Founder</a>
            <a href="https://breezealade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              BreezeAlade.com ↗
            </a>
          </nav>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground md:hidden">Soon</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-32">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-border" />
          Issue 00 · In preparation
        </div>
        <h1 className="font-serif text-[2.6rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Essays, insights,<br />and field notes from<br />
          <em className="italic text-foreground/90">Breeze Alade.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          A premium editorial space for thoughtful writing on infrastructure, security, digital systems, and the realities of building dependable technology.
        </p>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="https://breezealade.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85">
            Visit BreezeAlade.com<span aria-hidden className="ml-2">→</span>
          </a>
          <span className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/60" />
            Coming Soon
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10"><div className="h-px w-full bg-border" /></div>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About the publication</div>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              Breeze Blog will publish practical, founder-led writing on hosting, DNS, email, security, infrastructure, SaaS, AI tools, and digital business.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The work here is intended for engineers, operators, and founders who care about how systems actually behave — beyond the marketing layer. Expect long-form essays, short field notes, and occasional reference pieces written from the position of someone who runs the servers.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10"><div className="h-px w-full bg-border" /></div>

      <section id="pillars" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Editorial pillars</div>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-foreground md:text-4xl">Five lines of inquiry.</h2>
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">Updated as the publication grows.</div>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.n} className="group flex flex-col bg-card p-8 transition-colors hover:bg-accent md:p-10">
              <div className="mb-10 font-serif text-sm text-muted-foreground">{p.n}</div>
              <h3 className="font-serif text-xl text-foreground md:text-2xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{p.body}</p>
            </article>
          ))}
          <div className="hidden bg-card p-8 md:p-10 lg:flex lg:flex-col lg:justify-end">
            <div className="font-serif text-sm italic text-muted-foreground">
              "Write what you know to be true after you have run it in production."
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10"><div className="h-px w-full bg-border" /></div>

      <section id="founder" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">The founder</div>
            <div className="mt-8 flex items-center gap-4">
              <div aria-hidden className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground">BA</div>
              <div>
                <div className="font-serif text-lg text-foreground">Breeze Alade</div>
                <div className="text-sm text-muted-foreground">Founder · Operator</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              A Linux server administrator and founder focused on dependable digital systems.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Breeze writes from the perspective of an operator — someone who configures the DNS, tunes the mail server, and answers when the alert fires. The blog is an extension of that practice: quiet, careful, and grounded in the work itself.
            </p>
            <a href="https://breezealade.com" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center text-sm font-medium text-foreground underline-offset-8 transition hover:underline">
              More about Breeze on BreezeAlade.com<span aria-hidden className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10"><div className="h-px w-full bg-border" /></div>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Publication in progress</div>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-foreground md:text-5xl">
              The first essays<br />are being written.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              breeze.blog will launch quietly, with a small number of considered pieces rather than a flood of content. Leave an email and you will hear from us when the first issue is ready.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" type="email" placeholder="you@domain.com" className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none" />
              <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85">
                Notify me
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">No newsletter spam. One note when the publication opens.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <span className="font-serif text-base text-foreground">breeze.blog</span>
            <span className="h-3 w-px bg-border" />
            <span>Breeze Alade</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://breezealade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              BreezeAlade.com
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
