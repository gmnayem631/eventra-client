import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <section
      className="footer sm:footer-horizontal p-10 text-neutral-content"
      style={{
        background: "linear-gradient(to right, #FF6A33, #FE3E01)",
      }}
    >
      <aside>
        <h2 className="text-5xl font-semibold">Eventra</h2>
        <p>
          Eventra Inc. <br /> Making events seamless and memorable since 2025
        </p>
      </aside>
      <nav>
        <h6 className="text-2xl text-white font-bold">Socials</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/gulam-mustafa-nayem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.github.com/gmnayem631"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </nav>
    </section>
  );
}
