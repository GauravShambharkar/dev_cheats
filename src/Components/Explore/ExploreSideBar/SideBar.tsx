import { useContext, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { SideBarNavigationContext, type NavCategory, type NavItem } from "@/Components/globalState/SideBarNavigationContext";

const SideBar = () => {
  const sideBarNavigation = useContext(SideBarNavigationContext) || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState("");

  const filteredNavigation = useMemo(() => {
    const term = filter.toLowerCase();
    if (!term) return sideBarNavigation;

    return sideBarNavigation
      .map((group: NavCategory) => ({
        ...group,
        items: group.items.filter((item: NavItem) =>
          item.label.toLowerCase().includes(term)
        ),
      }))
      .filter((group: NavCategory) => group.items.length > 0);
  }, [filter, sideBarNavigation]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-white">Browse topics</h2>
        <p className="text-xs text-white/70">
          Pick a path to update the guide canvas.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white">
        <input
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Search topic…"
          className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        {filteredNavigation.map((group, index: number) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/10 bg-white/5"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-white"
            >
              {group.category}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-white/10 px-2 py-2 text-sm">
                <div className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.href}
                      className={({ isActive }) =>
                        [
                          "rounded-xl px-3 py-2 text-sm transition",
                          isActive
                            ? "bg-amber-400 text-slate-900 font-semibold shadow-inner shadow-amber-700/40"
                            : "text-white/80 hover:bg-white/10",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredNavigation.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
            No topics match “{filter}”.
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
