import Header from '../components/header'
import Footer from '../components/footer'


export default function Projects(){
const sample = [
{title: 'Invoice AI Workflow', summary: 'OCR + LLM routing for accounting teams', slug: 'invoice-ai'},
{title: 'Automated QA Bot', summary: 'Automated test generation and reporting', slug: 'qa-bot'}
]
return (
<div>
<Header />
<main className="container">
<h1>Projects</h1>
<div className="grid">
{sample.map(p=> (
<article key={p.slug} className="card">
<h3>{p.title}</h3>
<p>{p.summary}</p>
</article>
))}
</div>
</main>
<Footer />
</div>
)
}