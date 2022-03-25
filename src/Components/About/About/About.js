import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import AboutHeroSection from "../AboutHeroSection/AboutHeroSection";
import DifferenceSection from "../DifferenceSection/DifferenceSection";
import FacilitySection from "../FacilitySection/FacilitySection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import Footer from "../../Shared/Footer/Footer";
import TeamCard from "../TeamCard/TeamCard";
import QuickScroll from "../../Home/QuickScroll/QuickScroll";
// About section
const About = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"About Us"} />
      <AboutHeroSection />
      <VisionMissionSection />
      <DifferenceSection />
      <FacilitySection />
      <TeamCard></TeamCard>
      <Footer />
      <QuickScroll />
    </div>
  );
};

export default About;
