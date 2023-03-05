import "./style.css"

export function ComplementaryCourses () {
    return (
        <main className="body_skill">
            <details className="accordion_courses">
                <summary className="title_courses">Hard Skill</summary>
                <div className="skill">
                    <ul>
                        <li>
                            <p className="html">HTML</p>
                        </li>
                        <li>
                            <p className="css">CSS</p>
                        </li>
                        <li>
                            <p className="javascript">JavaScript</p>
                        </li>
                        <li>
                            <p className="react">ReactJs</p>
                        </li>
                        <li>
                            <p className="node">NodeJs</p>
                        </li>
                        <li>
                            <p className="typescript">TypeScript</p>
                        </li>
                        <li>
                            <p>Java</p>
                        </li>
                        <li>
                            <p>Spring</p>
                        </li>
                        <li>
                            <p>MySql</p>
                        </li>
                        <li>
                            <p>MongoDB</p>
                        </li>
                    </ul>
                </div>
            </details>
        </main>
    )
}