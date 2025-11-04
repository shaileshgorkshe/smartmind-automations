import Header from '../components/header'
import Footer from '../components/footer'
export default function Services(){
return (
<div>
<Header />
<main className="container">
<h1>Services</h1>
<ul>
<li><strong>AI Automation:</strong> Workflow automation with n8n, Python, and LLM orchestration.</li>
<li><strong>Web Development:</strong> Next.js/React apps, static sites, Progressive Web Apps.</li>
<li><strong>Freelancing:</strong> Short-term and ongoing engagements: product engineering, DevOps, integrations.</li>
</ul>
</main>
<Footer />
</div>
)
}