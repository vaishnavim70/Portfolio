import SFHero from "./salesforce/SFHero";
import SFExperience from "./salesforce/SFExperience";
import SFProjects from "./salesforce/SFProjects";
import SFSkills from "./salesforce/SFSkills";
import SFEducation from "./salesforce/SFEducation";
import Contact from "./Contact";
import Footer from "./Footer";

const SalesforceApp = () => (
  <>
    <SFHero />
    <SFExperience />
    <SFProjects />
    <SFSkills />
    <SFEducation />
    <Contact />
    <Footer />
  </>
);

export default SalesforceApp;
