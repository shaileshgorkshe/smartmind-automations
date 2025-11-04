import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'


export default function Home(){
return (
<div>
<Header />
<main className="hero container">
<h1>Smart AI automation for teams and freelancers</h1>
<p>We build AI-powered workflows, web applications, and automation tools that save time and scale your business.</p>
<div className="cta">
<Link href="/services" className="btn">Our Services</Link>
<Link href="/contact" className="btn ghost">Contact Us</Link>
</div>
</main>


<section className="container intro">
<h2>What we do</h2>
<div className="grid">
<div className="card"><h3>AI Automation</h3><p>End-to-end automation using n8n, Python, LLMs and custom integrations.</p></div>
<div className="card"><h3>Web Development</h3><p>Modern React apps, static sites, and API-driven platforms.</p></div>
<div className="card"><h3>Freelance Solutions</h3><p>On-demand engineering, consulting and MVP builds.</p></div>
</div>
</section>


<Footer />
</div>
)
}