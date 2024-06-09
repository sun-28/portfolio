import React, { useRef } from "react";
import { experienceData } from "../assets/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { DHONDI, GDSC } from "./Work";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { VscTextSize } from "react-icons/vsc";

const Experience: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section className="relative mt-16 " id="experience" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-turquoise">&lt;</span>
              {experienceData.title_EN}
              <span className="text-turquoise">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {experienceData.description_EN}
            </h2>
          </motion.div>
        </div>
        <VerticalTimeline animate={true} lineColor="#51f0b3">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0c2019", color: "#51f0b3" }}
            contentArrowStyle={{ borderRight: "7px solid  #51f0b3" }}
            date="May 2024 - present"
            dateClassName="work-date"
            iconStyle={{
              background: "#ffff",
              color: "#51f0b3",
              cursor: "pointer",
            }}
            icon={<DHONDI />}
            iconOnClick={() => {
              window.location.href = "https://Dhondi.ai/";
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dhondi.ai</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0c2019", color: "#51f0b3" }}
            contentArrowStyle={{ borderRight: "7px solid  #51f0b3" }}
            date="August 2023 - present"
            dateClassName="work-date"
            iconStyle={{
              background: "#ffff",
              color: "#51f0b3",
              cursor: "pointer",
            }}
            icon={<GDSC />}
            iconOnClick={() => {
              window.location.href = "https://gdsc-jiit128.tech/";
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer @ Core Team
            </h3>
            <h4 className="vertical-timeline-element-subtitle">GDSC J128</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </React.Fragment>
  );
};

export default Experience;
