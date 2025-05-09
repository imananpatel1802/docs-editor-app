export const templates = [
    {id: "blank", label: "Blank document", imageUrl: "/blank-document.svg", initialContent: ``},
    {
        id: "software-proposal", 
        label: "Software development proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Software Proposal Template</title>
                <style>
                    body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    line-height: 1.6;
                    color: #333;
                    }
                    h1, h2, h3 {
                    color: #2c3e50;
                    }
                    .section {
                    margin-bottom: 30px;
                    }
                </style>
            </head>
            <body>

            <h1>Software Proposal</h1>
            <p><strong>Date:</strong> [Insert Date]</p>
            <p><strong>Prepared by:</strong> [Your Name/Company]</p>
            <p><strong>Client:</strong> [Client Name/Organization]</p>

            <div class="section">
                <h2>1. Executive Summary</h2>
                <p>This proposal outlines the plan to develop a software solution tailored to [Client Name]'s needs. The goal is to provide an efficient, scalable, and user-friendly system that addresses key business requirements.</p>
            </div>

            <div class="section">
                <h2>2. Problem Statement</h2>
                <p>[Client Name] currently faces challenges in [briefly describe the problem]. This leads to [list consequences such as inefficiencies, increased costs, errors, etc.].</p>
            </div>

            <div class="section">
                <h2>3. Proposed Solution</h2>
                <p>We propose developing a [web/mobile/desktop] application that will allow users to [main features]. This system will be built using [technology stack], ensuring high performance and maintainability.</p>
            </div>

            <div class="section">
                <h2>4. Features and Functionality</h2>
                <ul>
                <li>User registration and authentication</li>
                <li>Dashboard with analytics</li>
                <li>Data input and management tools</li>
                <li>Role-based access control</li>
                <li>Integration with third-party APIs</li>
                <li>Reporting and export options</li>
                </ul>
            </div>

            <div class="section">
                <h2>5. Technology Stack</h2>
                <ul>
                <li>Frontend: [React, Vue, etc.]</li>
                <li>Backend: [Node.js, Django, etc.]</li>
                <li>Database: [PostgreSQL, MongoDB, etc.]</li>
                <li>Hosting: [AWS, Heroku, etc.]</li>
                </ul>
            </div>

            <div class="section">
                <h2>6. Project Timeline</h2>
                <ul>
                <li>Week 1-2: Requirement gathering and design</li>
                <li>Week 3-5: Backend development</li>
                <li>Week 6-8: Frontend development</li>
                <li>Week 9: Testing</li>
                <li>Week 10: Deployment and training</li>
                </ul>
            </div>

            <div class="section">
                <h2>7. Budget Estimate</h2>
                <p>The estimated cost for the project is $[Insert Amount], which includes development, testing, deployment, and 3 months of support.</p>
            </div>

            <div class="section">
                <h2>8. Conclusion</h2>
                <p>We are confident that our proposed software solution will meet [Client Name]'s needs and provide long-term value. We look forward to the opportunity to work together.</p>
            </div>

            <div class="section">
                <h2>9. Approval</h2>
                <p><strong>Client Name:</strong> _______________________</p>
                <p><strong>Signature:</strong> __________________________</p>
                <p><strong>Date:</strong> ______________________________</p>
            </div>

            </body>
            </html>
        `
    },
    {
        id: "project-proposal", 
        label: "Project proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Project Proposal Template</title>
                <style>
                    body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    line-height: 1.6;
                    color: #333;
                    }
                    h1, h2, h3 {
                    color: #2c3e50;
                    }
                    .section {
                    margin-bottom: 30px;
                    }
                </style>
            </head>
            <body>

            <h1>Project Proposal</h1>
            <p><strong>Project Title:</strong> [Insert Title Here]</p>
            <p><strong>Prepared by:</strong> [Your Name/Team]</p>
            <p><strong>Submission Date:</strong> [Insert Date]</p>

            <div class="section">
                <h2>1. Introduction</h2>
                <p>This document outlines the proposed project titled “[Project Title],” which aims to [brief one-sentence purpose]. The project seeks to address [describe problem or opportunity].</p>
            </div>

            <div class="section">
                <h2>2. Objectives</h2>
                <ul>
                <li>To [objective 1]</li>
                <li>To [objective 2]</li>
                <li>To [objective 3]</li>
                </ul>
            </div>

            <div class="section">
                <h2>3. Scope of Work</h2>
                <p>The project will include the following key activities:</p>
                <ul>
                <li>Requirement analysis and stakeholder consultations</li>
                <li>Design and development of [product/service/system]</li>
                <li>Testing, deployment, and training</li>
                <li>Project documentation and reporting</li>
                </ul>
            </div>

            <div class="section">
                <h2>4. Methodology</h2>
                <p>The project will follow a [waterfall/agile/scrum/etc.] approach. Work will be divided into phases with regular reviews and feedback loops.</p>
            </div>

            <div class="section">
                <h2>5. Deliverables</h2>
                <ul>
                <li>Project plan and timeline</li>
                <li>Design mockups or system architecture</li>
                <li>Final product/service/system</li>
                <li>User guide and technical documentation</li>
                </ul>
            </div>

            <div class="section">
                <h2>6. Timeline</h2>
                <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                    <th>Phase</th>
                    <th>Duration</th>
                    <th>Milestone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Phase 1: Planning</td>
                    <td>Week 1–2</td>
                    <td>Project kickoff and requirements finalized</td>
                    </tr>
                    <tr>
                    <td>Phase 2: Development</td>
                    <td>Week 3–6</td>
                    <td>Prototype complete</td>
                    </tr>
                    <tr>
                    <td>Phase 3: Testing</td>
                    <td>Week 7</td>
                    <td>Bug fixes and QA approval</td>
                    </tr>
                    <tr>
                    <td>Phase 4: Deployment</td>
                    <td>Week 8</td>
                    <td>Launch and feedback collection</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div class="section">
                <h2>7. Budget</h2>
                <p>The estimated budget for this project is $[Insert Amount]. This includes personnel costs, tools, materials, and contingency reserves.</p>
            </div>

            <div class="section">
                <h2>8. Risk Assessment</h2>
                <p>Potential risks include:</p>
                <ul>
                <li>Timeline delays due to [reason]</li>
                <li>Technical challenges with [technology]</li>
                <li>Stakeholder availability and feedback delays</li>
                </ul>
                <p>Mitigation strategies will be in place for each identified risk.</p>
            </div>

            <div class="section">
                <h2>9. Conclusion</h2>
                <p>This project presents a valuable opportunity to [restate value or goal]. With proper planning and execution, the expected outcomes can bring substantial benefits to all stakeholders involved.</p>
            </div>

            <div class="section">
                <h2>10. Approval</h2>
                <p><strong>Project Lead:</strong> _______________________</p>
                <p><strong>Signature:</strong> __________________________</p>
                <p><strong>Date:</strong> ______________________________</p>
            </div>

            </body>
        `
    },
    {
        id: "business-letter", 
        label: "Business letter", 
        imageUrl: "/business-letter.svg",
        initialContent: `
            <body>
            <p style="line-height: normal">[Your Name]</p>
            <p style="line-height: normal">[Your Position]</p>
            <p style="line-height: normal">[Company Name]</p>
            <p style="line-height: normal">[Street Address]</p>
            <p style="line-height: normal">[City, State ZIP Code]</p>
            <p style="line-height: normal">[Email Address]</p>
            <p style="line-height: normal">[Phone Number]</p>
            <p style="line-height: normal">[Date]</p>
            <p style="line-height: normal">[Recipient's Name]</p>
            <p style="line-height: normal">[Recipient's Position]</p>
            <p style="line-height: normal">[Company Name]</p>
            <p style="line-height: normal">[Street Address]</p>
            <p style="line-height: normal">[City, State ZIP Code]<br></p>
            <p style="line-height: normal"><strong>Subject:</strong> [Letter Subject]<br></p>
            <p style="line-height: normal">Dear [Recipient's Name],</p><p style="line-height: normal"></p>
            <p style="line-height: normal">I am writing to [clearly state the purpose of the letter]. This letter is regarding [briefly describe the matter].</p>
            <p style="line-height: normal">[Provide necessary context, background, or key information. Use a professional and concise tone. For example: “As discussed during our last meeting, we plan to…” or “Our team has reviewed your proposal and…”]</p>
            <p style="line-height: normal">[Include any actions you are requesting, next steps, or a follow-up plan. Example: “Please confirm your availability for a follow-up meeting next week.”]</p><p style="line-height: normal">Thank you for your attention to this matter. Please feel free to contact me if you have any questions or need further information.</p><p style="line-height: normal">Sincerely,</p>
            <p style="line-height: normal"><br></p><p style="line-height: normal">[Your Name]</p><p style="line-height: normal">[Your Job Title]</p></body>
        `
    },
    {
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
        initialContent: `
            <body>
                <p style="line-height: normal"><strong>[Your Full Name]</strong></p>
                <p style="line-height: normal">[Email Address] | [Phone Number] | [LinkedIn URL] | [Portfolio or GitHub]</p>

                <br>

                <p style="line-height: normal"><strong>Professional Summary</strong></p>
                <p style="line-height: normal">[Brief 2–3 sentence overview of your experience, skills, and career goals]</p>

                <br>

                <p style="line-height: normal"><strong>Skills</strong></p>
                <p style="line-height: normal">• Skill 1 &nbsp;&nbsp;&nbsp; • Skill 2 &nbsp;&nbsp;&nbsp; • Skill 3 &nbsp;&nbsp;&nbsp; • Skill 4</p>

                <br>

                <p style="line-height: normal"><strong>Work Experience</strong></p>
                <p style="line-height: normal"><strong>[Job Title]</strong> – [Company Name], [City, State]</p>
                <p style="line-height: normal">[Start Date] – [End Date]</p>
                <p style="line-height: normal">• [Responsibility or achievement #1]</p>
                <p style="line-height: normal">• [Responsibility or achievement #2]</p>
                <p style="line-height: normal">• [Responsibility or achievement #3]</p>

                <br>

                <p style="line-height: normal"><strong>[Job Title]</strong> – [Company Name], [City, State]</p>
                <p style="line-height: normal">[Start Date] – [End Date]</p>
                <p style="line-height: normal">• [Responsibility or achievement #1]</p>
                <p style="line-height: normal">• [Responsibility or achievement #2]</p>

                <br>

                <p style="line-height: normal"><strong>Education</strong></p>
                <p style="line-height: normal"><strong>[Degree]</strong>, [Field of Study]</p>
                <p style="line-height: normal">[University Name], [City, State] – [Graduation Date]</p>

                <br>

                <p style="line-height: normal"><strong>Certifications (optional)</strong></p>
                <p style="line-height: normal">• [Certification Name] – [Issuing Organization], [Year]</p>

                <br>

                <p style="line-height: normal"><strong>Projects (optional)</strong></p>
                <p style="line-height: normal"><strong>[Project Title]</strong></p>
                <p style="line-height: normal">[Short description – tools used, what it does, your role]</p>
            </body>
        `
    },
    {
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
            <body>
                <p style="line-height: normal">[Your Name]</p>
                <p style="line-height: normal">[Your Address]</p>
                <p style="line-height: normal">[City, State ZIP Code]</p>
                <p style="line-height: normal">[Email Address]</p>
                <p style="line-height: normal">[Phone Number]</p>

                <br>

                <p style="line-height: normal">[Date]</p>

                <br>

                <p style="line-height: normal">[Recipient’s Name]</p>
                <p style="line-height: normal">[Recipient’s Position]</p>
                <p style="line-height: normal">[Company/Organization Name]</p>
                <p style="line-height: normal">[Address]</p>

                <br>

                <p style="line-height: normal">Dear [Recipient’s Name],</p>

                <p style="line-height: normal">I hope this message finds you well. I am writing to [state the purpose of the letter].</p>

                <p style="line-height: normal">[Provide background or explanation about the issue or subject. Keep it clear and professional.]</p>

                <p style="line-height: normal">[If you are requesting something, specify what you need and by when. If you’re responding to a previous letter or inquiry, clarify your position or response here.]</p>

                <p style="line-height: normal">Thank you for your time and consideration. Please let me know if you need any additional information.</p>

                <br>

                <p style="line-height: normal">Sincerely,</p>
                <br><br>
                <p style="line-height: normal">[Your Name]</p>
            </body>

        `
    },
    {
        id: "cover-letter", 
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <body>
                <p style="line-height: normal">[Your Name]</p>
                <p style="line-height: normal">[Your Address]</p>
                <p style="line-height: normal">[City, State ZIP Code]</p>
                <p style="line-height: normal">[Email Address]</p>
                <p style="line-height: normal">[Phone Number]</p>

                <br>

                <p style="line-height: normal">[Date]</p>

                <br>

                <p style="line-height: normal">[Hiring Manager’s Name]</p>
                <p style="line-height: normal">[Company Name]</p>
                <p style="line-height: normal">[Company Address]</p>

                <br>

                <p style="line-height: normal">Dear [Hiring Manager’s Name],</p>

                <p style="line-height: normal">
                    I am writing to express my interest in the [Job Title] position at [Company Name], as advertised. With my background in [Your Field or Skill], I am confident in my ability to contribute significantly to your team.
                </p>

                <p style="line-height: normal">
                    In my previous role at [Previous Company], I [briefly describe a key achievement or responsibility]. I bring [mention key skills or experiences relevant to the job], and I am especially excited about [something specific about the company or role].
                </p>

                <p style="line-height: normal">
                    I am passionate about [mention relevant professional interests], and I believe that my background in [mention skill] aligns well with your company’s mission. I would welcome the opportunity to further discuss how I can contribute to your team.
                </p>

                <p style="line-height: normal">
                    Thank you for your time and consideration. I have attached my resume for your review and look forward to hearing from you.
                </p>

                <br>

                <p style="line-height: normal">Sincerely,</p>
                <br><br>
                <p style="line-height: normal">[Your Name]</p>
            </body>

        `
    },
];