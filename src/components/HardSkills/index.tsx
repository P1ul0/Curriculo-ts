import "./style.css";

export function ComplementaryCourses() {
  return (
    <main className="body_skill">
      <details className="accordion_courses">
        <summary className="title_courses">Hard Skill</summary>
        <div className="skill">
          <ul className="list_skill">
            <li className="text_courses">HTML</li>
            <li className="text_courses">CSS</li>
            <li className="text_courses">JavaScript</li>
            <li className="text_courses">ReactJs</li>
            <li className="text_courses">NodeJs</li>
            <li className="text_courses">TypeScript</li>
            <li className="text_courses">Java<br/></li>
            <li className="text_courses">Spring</li>
            <li className="text_courses">MySql</li>
            <li className="text_courses">MongoDB</li>
          </ul>
        </div>
      </details>
    </main>
  );
}
