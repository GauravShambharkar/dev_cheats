import CodeBlock from "../ui/CodeBlock";
import { BookOpenCheck, Sparkles, ShieldCheck, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const quickStartSnippet = [
    "// src/main.tsx",
    'import { Provider } from "react-redux";',
    'import { store } from "./store/store";',
    'import App from "./App";',
    "",
    'createRoot(document.getElementById("root")!).render(',
    "  <Provider store={store}>",
    "    <App />",
    "  </Provider>",
    ");",
  ].join("\n");

  const features = [
    {
      title: "Step-by-step flows",
      description:
        "Every topic is broken into tiny, skippable steps you can execute in minutes.",
      icon: <BookOpenCheck className="text-amber-400" size={20} />,
    },
    {
      title: "Real code, ready to paste",
      description:
        "Copy-tested snippets through the CodeBlock component to avoid context switching.",
      icon: <Sparkles className="text-emerald-400" size={20} />,
    },
    {
      title: "Full-stack coverage",
      description:
        "From Redux and Zustand to Multer + Cloudinary, follow both front-end and backend flows.",
      icon: <Layers className="text-sky-400" size={20} />,
    },
    {
      title: "Best practices baked in",
      description:
        "Type safety, folder structures, and devtools-ready setups are included by default.",
      icon: <ShieldCheck className="text-indigo-300" size={20} />,
    },
  ];

  const focusTopics = [
    {
      name: "Redux Toolkit",
      summary: "Predictable global state with slices, store, and hooks.",
      link: "/explore/stateManagement/redux",
      color: "from-amber-500/30 to-orange-500/20",
    },
    {
      name: "Zustand",
      summary: "Tiny global stores without providers or boilerplate.",
      link: "/explore/stateManagement/zustand",
      color: "from-emerald-500/30 to-teal-500/20",
    },
    {
      name: "Context API",
      summary: "Built-in React sharing for themes, auth, and feature flags.",
      link: "/explore/stateManagement/contextapi",
      color: "from-indigo-500/30 to-blue-500/20",
    },
    {
      name: "Multer + Cloudinary",
      summary: "Upload flows that stream files to reliable cloud storage.",
      link: "/explore/backendmanagement/multer&cloudinary",
      color: "from-sky-500/30 to-cyan-500/20",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-20 sm:px-6 md:py-28">
        {/* Hero */}
        <section className=" gap-10 flex max-[1050px]:flex-col">
          <div className="flex flex-col gap-6 text-center lg:text-left px-2 sm:px-0">
            <span className="mx-auto w-fit rounded-full  border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 lg:mx-0 max-[500px]:text-[10px] max-[500px]:px-3">
              Dev Cheats
            </span>

            <div className="space-y-4">
              <h1 className="text-3xl max-md:text-2xl max-[500px]:text-xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Turn complex setups into easy wins.
              </h1>
              <p className="text-base text-slate-300 md:text-lg max-md:text-sm max-[500px]:text-xs">
                DevCheats is a living playbook for Redux, Zustand, Context API,
                Multer + Cloudinary, and more. Follow the guided tree, copy the
                code, and ship production-ready integrations faster.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to="/explore"
                className="rounded-xl bg-amber-500 px-6 py-3 max-[500px]:px-4 max-[500px]:py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5"
              >
                Start exploring topics
              </Link>
              <a
                href="#topics"
                className="rounded-xl border border-white/30 px-6 py-3 max-[500px]:px-4 max-[500px]:py-2 text-sm font-semibold text-white transition hover:border-white/60"
              >
                View guided paths
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 lg:justify-start max-[500px]:text-[10px]">
              <span className="rounded-full border border-white/15 px-3 py-1">
                Typescript-first snippets
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                File tree previews
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                Copy-to-clipboard
              </span>
            </div>
          </div>

          <div className="rounded-3xl  max-[500]:w-100 bg-gradient-to-br from-slate-900 to-slate-800 p-5 max-[350px]:p-2 max-[350px]:text-[11px]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 max-[500px]:text-[10px]">
              Quick peek
            </p>
            <h3 className="mt-2 text-xl max-[500px]:text-lg font-semibold text-white">
              Bootstrap Redux Provider
            </h3>
            <p className="text-sm text-slate-400 max-[500px]:text-xs">
              Every guide includes ready-to-paste code with context.
            </p>
            <div className="mt-4 overflow-hidden">
              <CodeBlock
                code={quickStartSnippet}
                fileName="src/main.tsx"
                language="tsx"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500 max-[500px]:text-[10px]">
              Copy & drop into your project. No guesswork.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-4 sm:grid-cols-2 max-[500px]:grid-cols-1">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5 max-[500px]:p-4 shadow-inner shadow-black/30"
            >
              <div className="flex h-12 w-12 max-[500px]:h-10 max-[500px]:w-10 items-center justify-center rounded-xl bg-white/5">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg max-[500px]:text-base font-semibold">
                  {feature.title}
                </h4>
                <p className="text-sm max-[500px]:text-xs text-slate-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Topics */}
        <section id="topics" className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 max-[500px]:text-[10px]">
              Guided playbooks
            </p>
            <h2 className="text-3xl max-[500px]:text-2xl font-semibold">
              Pick your next implementation
            </h2>
            <p className="text-sm max-[500px]:text-xs text-slate-400">
              Every topic pairs a visual file tree with annotated steps and the
              exact code you need.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 max-[500px]:grid-cols-1">
            {focusTopics.map((topic) => (
              <Link
                key={topic.name}
                to={topic.link}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${topic.color} p-6 max-[500px]:p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl max-[500px]:text-lg font-semibold">
                    {topic.name}
                  </h3>
                  <span className="text-sm max-[500px]:text-xs font-semibold text-white/80">
                    Dive in →
                  </span>
                </div>

                <p className="mt-3 text-sm max-[500px]:text-xs text-white/80">
                  {topic.summary}
                </p>

                <div className="mt-5 flex gap-2 text-xs max-[500px]:text-[10px] text-white/70">
                  <span className="rounded-full border border-white/25 px-3 py-1 max-[500px]:px-2 max-[500px]:py-1">
                    Guided steps
                  </span>
                  <span className="rounded-full border border-white/25 px-3 py-1 max-[500px]:px-2 max-[500px]:py-1">
                    Code ready
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
