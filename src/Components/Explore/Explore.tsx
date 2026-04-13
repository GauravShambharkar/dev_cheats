import { useContext, useMemo } from "react";
import { Compass, Layers3, Sparkles } from "lucide-react";
import SideBar from "./ExploreSideBar/SideBar";
import ExploreTopics from "./ExploreTopics/ExploreTopics";
import { SideBarNavigationContext, type NavCategory } from "../globalState/SideBarNavigationContext";

const Explore = () => {
  const sideBarNavigation = useContext(SideBarNavigationContext) || [];

  const stats = useMemo(() => {
    const categories = sideBarNavigation.length;
    const topics = sideBarNavigation.reduce(
      (count: number, group: NavCategory) => count + (group.items?.length || 0),
      0
    );

    return [
      {
        label: "Learning tracks",
        value: categories,
        icon: <Compass size={18} />,
        description: "State + backend focused.",
        accent: "from-amber-500/30 to-orange-500/10",
      },
      {
        label: "Guided topics",
        value: topics,
        icon: <Layers3 size={18} />,
        description: "Every step documented.",
        accent: "from-emerald-500/30 to-teal-500/10",
      },
      {
        label: "Copy-ready snippets",
        value: "100%",
        icon: <Sparkles size={18} />,
        description: "Use the CodeBlock UI.",
        accent: "from-sky-500/30 to-indigo-500/10",
      },
    ];
  }, [sideBarNavigation]);

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl min-h-screen flex-col gap-8 px-4 pb-16 pt-24 sm:px-6 md:pt-28">
        <header className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900/40 p-8 shadow-2xl shadow-black/40">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              Explore
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold md:text-4xl">
                Pick a topic, follow the tree, paste the code.
              </h1>
              <p className="text-base text-slate-300">
                DevCheats bundles project-ready walkthroughs for Redux Toolkit,
                Zustand, Context API, Multer + Cloudinary and more. The sidebar
                groups every learning path while the canvas on the right updates
                with the guide you choose.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Visual folder trees
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Copy-to-clipboard snippets
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Backend & frontend coverage
              </span>
            </div>
          </div>
        </header>
        
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${stat.accent} p-5 text-white shadow-inner shadow-black/20`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {stat.label}
                </span>
                <span className="rounded-full border border-white/30 p-2 text-white/80">
                  {stat.icon}
                </span>
              </div>
              <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm text-white/80">{stat.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="h-fit rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <SideBar />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white text-slate-900 p-4 shadow-2xl min-h-[60vh] lg:max-h-[calc(100vh-240px)] lg:overflow-y-auto">
            <ExploreTopics />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
