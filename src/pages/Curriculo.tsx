import { AcademicEducation } from "../components/AcademicEducation";
import { ComplementaryCourses } from "../components/HardSkills";
import Header from "../components/Header";
import { PersonalInformation } from "../components/PersonalInformation";
import { Repository } from "../components/Repository";
import "./style.css"
export default function Curriculo() {
  return (
    <>
      <Header />
      <div className="body">
        <PersonalInformation/>
        <AcademicEducation/>
        <Repository />
        <ComplementaryCourses/>
      </div>
    </>
  );
}
