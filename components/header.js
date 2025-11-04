import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <img
            src="/logo.svg"
            alt="SmartMind Automations"
            className="logo"
            style={{ height: "48px" }}
          />
        </Link>

        <nav style={{ display: "flex", gap: "18px" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
