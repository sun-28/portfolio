import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { useTheme } from "../context/theme-context";
import { ScrollProgress } from "../components/ScrollProgress";
import Divider from "../components/Divider";
import ProjectSlider from "../components/ProjectSlider";

const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyExperience = lazy(() => import("../components/Experience"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"turquoise"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <LazyHeaderIntro />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBannerQuote
              style={"withBG"}
              quoteIndex={0}
              containerType="quote"
            />
            <Divider
              thickness="0.25rem"
              direction="outer-right-to-inner-left"
              color="lightTur"
              height="small"
              dividerStyle="solid"
            />

            <LazyTechStack />
            <Divider
              thickness="0.25rem"
              direction="inner-right-to-middle"
              color="lightTur"
              height="middle"
              dividerStyle="solid"
            />

            <LazyBannerQuote
              style={"noBG"}
              quoteIndex={1}
              containerType="statement"
            />
            <Divider
              thickness="0.25rem"
              direction="middle"
              color="lightTur"
              height="extraLarge"
              dividerStyle="solid"
            />
            <ProjectSlider />
            <div className="relative -mb-24 pb-32 -mt-10">
              <LazyRadialGradient
                opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                scale="scale-y-100"
                position="-top-24"
              />
              <Divider
                thickness="0.25rem"
                direction="middle-to-inner-left"
                color="lightTur"
                height="middle"
                dividerStyle="solid"
              />

              <LazyExperience/>
              <Divider
                thickness="0.25rem"
                direction="inner-left-to-middle"
                color="lightTur"
                height="middle"
                dividerStyle="solid"
              />

              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
