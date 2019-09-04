import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Patient Confidentiality" />
    <h1>Patient Confidentiality</h1>
    <p>
		Your privacy matters, Muscle Function Therapy is committed to making sure you feel comfortable, informed consent forms will be obtained and we will inform you the purpose of the information collected. If there are any questions please be sure to ask me.   
		Muscle Function Therapy adheres to the CSEP-PSPTM Code of Conduct. In accordance with clause 7, the certified exercise physiologist and/or trainer must, not disclose any confidential information without the written consent of their clients or employer. 
    </p>
    <p>
    	Click to see all code of conduct clauses:
		CSEP-PSPTM Code of Conduct
		CSEP-CPTs and CSEP-CEPs shall;
		Have proper regard in all their work for the safety and welfare of all persons.
		Undertake only work they are competent to perform by virtue of their training experience and shall express opinions on matters relating to their scope of practice only on the basis of adequate knowledge and honest conviction.
		Sign and/or seal only programs, reports or documents that they have prepared or that they have directly supervised and controlled throughout their preparation. 
		Accord all individuals a reasonable level of respect, understanding and compassion in their professional practice.
		Serve their clients or employers as faithful agents or trustees, always acting independently, with fairness and justice to all parties. 
		Not engage in activities or accept remuneration for services rendered that may create a conflict of interest with their clients or employers without knowledge and consent of their clients and employers. 
		Not disclose confidential information without written consent of their clients or employer.
		Present clearly to their clients or emlpoyers the consequences to be expected if their professional judgement is overruled by other authorities in matters pertaining to work for which they are not professionally responsible.
		Not offer nor accept covert payment for the purpose of securing work. 
		Represent their qualifications and competence, or advertise professional services offered, only through factual representation without exaggeration. 
		Conduct themselves towards other members, employees and all others with fairness and in good faith. 
		Advise to the certifying body of any practice by a member of the Association that they believe to be contrary to this Code of Conduct. 	
		(CSEP Certified Exercise Physiologist®: Candidates Certification Guide 3rd ed) 
		As required by CSEP standards, client information will be kept for ten years from the last date of service. After which the records will be destroyed. 
		The recommended and safest method of handling records is through secured paper copies. If electronic is preferred, 128-bit or greater encryption is recommended for privacy. 
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
