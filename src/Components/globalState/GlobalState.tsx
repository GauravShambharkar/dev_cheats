import { type ReactNode } from "react";
import { SideBarNavigationContext, type SideBarNavigation } from "./SideBarNavigationContext";

const SideBarNavProvider = ({ children }: { children: ReactNode }) => {
  const sideBarNavigation: SideBarNavigation = [
    {
      category: "State Management",
      items: [
        { id: "redux", label: "Redux", href: "/explore/stateManagement/redux" },
        { id: "zustand", label: "Zustand", href: "/explore/stateManagement/zustand" },
        { id: "contextapi", label: "Context Api", href: "/explore/stateManagement/contextapi" },
      ],
    },
    {
      category: "Backend Management",
      items: [
        { id: "express", label: "Express", href: "/explore/backendmanagement/express" },
        {
          id: "multer&cloudinary",
          label: "Multer & Cloudinary",
          href: "/explore/backendmanagement/multer&cloudinary",
        },
      ],
    },
  ];

  return (
    <SideBarNavigationContext.Provider value={sideBarNavigation}>
      {children}
    </SideBarNavigationContext.Provider>
  );
};

export default SideBarNavProvider;
export { SideBarNavigationContext };
