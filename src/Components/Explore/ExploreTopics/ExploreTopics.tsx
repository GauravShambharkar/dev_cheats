import { useNavigate, useParams } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import FallbackLoader from "@/Components/Loader/FallbackLoader";
import { SideBarNavigationContext, type NavCategory } from "@/Components/globalState/SideBarNavigationContext";

const Redux = lazy(() => import("../Redux/Redux"));
const ContextAPI = lazy(() => import("@/Components/ContextAPI/ContextAPI"));
const Multer_Cloudinary = lazy(
  () => import("@/Components/Multer&Cloudinary/Multer&Cloudinary")
);
const Zustand = lazy(() => import("@/Components/Zustand/Zustand"));

const ExploreTopics = () => {
  const navigate = useNavigate();
  const { id, category } = useParams();

  const sideBarNavigation = useContext(SideBarNavigationContext) || [];
  const FilteredCategory = sideBarNavigation.find(
    (item: NavCategory) =>
      item.category.split(" ").join("").toLowerCase() ===
      (category || "").toLowerCase()
  )?.category;

  if (id === "redux") {
    const breadCrumb: string = `> ${FilteredCategory} > Redux`;

    return (
      <Suspense fallback={<FallbackLoader />}>
        <Redux breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "contextapi") {
    const breadCrumb: string = `> ${FilteredCategory} > Context API`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <ContextAPI breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "zustand") {
    const breadCrumb: string = `> ${FilteredCategory} > Zustand`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <Zustand breadCrumb={breadCrumb} />{" "}
      </Suspense>
    );
  }
  if (id === "multer&cloudinary") {
    const breadCrumb: string = `> ${FilteredCategory} > Multer & Cloudinary`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <Multer_Cloudinary breadCrumb={breadCrumb} />
      </Suspense>
    );
  }

  const Topic_Cards = [
    {
      title: "Redux",
      img: "https://th.bing.com/th/id/R.ee72c19029938b25ca14c9387d5095ab?rik=u4VByRhq6u0OYg&riu=http%3a%2f%2fmichaelsoriano.com%2fwp-content%2fuploads%2f2020%2f07%2fredux.jpg&ehk=GO24Lp25NvUHFXPkFpxkQ25d7Bzal3N1VV%2bzFkiqJbY%3d&risl=&pid=ImgRaw&r=0",
      description: "Redux is an state Management library for React to handle",
      to: "stateManagement/redux",
    },
    {
      title: "Zustand",
      img: "https://tse1.mm.bing.net/th/id/OIP.BV_3VVtA8aRzModThtq6dQHaD3?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Zustand is an state Management library for React to handle",
      to: "stateManagement/zustand",
    },
    {
      title: "Context API",
      img: "https://tse2.mm.bing.net/th/id/OIP.8iSkAgJE8YCjIQCYFPVo7QHaD-?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Context API is an state Management library for React to handle",
      to: "stateManagement/contextapi",
    },
  ];

  return (
    <>
      <div className="flex h-full w-full flex-col gap-4 rounded-2xl border border-gray-200/70 p-3 py-4 sm:p-4">
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Select your Topic
          </h1>
        </div>

        {/* Topic cards */}
        <div className="w-full ">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Topic_Cards.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`${item.to}`);
                }}
                className="flex cursor-pointer flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="w-full overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-44 w-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreTopics;
