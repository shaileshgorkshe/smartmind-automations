import Header from '../components/header'
import Footer from '../components/footer'
export default function Contact(){
return (
<div>
<Header />
<main className="container contact">
<h1>Contact Us</h1>
<form name="contact" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
<label>Name<input name="name" required /></label>
<label>Email<input name="email" type="email" required /></label>
<label>Message<textarea name="message" required /></label>
<button type="submit" className="btn">Send</button>
</form>
</main>
<Footer />
</div>
)
}