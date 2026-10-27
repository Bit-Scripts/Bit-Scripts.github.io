import { DISCORDINVITECODE } from "../../config/globals";

function Footer() {
  const link = "transition-colors hover:text-neutral-200";

  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-8 text-sm text-neutral-500 sm:px-6">
        <span>© {new Date().getFullYear()} Bit-Scripts</span>
        <div className="flex gap-5">
          <a className={link} href="https://github.com/Bit-Scripts">
            GitHub
          </a>
          <a
            className={link}
            href={`https://discord.com/invite/${DISCORDINVITECODE}`}
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
