import Image from 'next/image';

// With `images.unoptimized`, next/image does not prepend basePath itself.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-profile">
        <div className="footer-avatar-ring">
          <Image
            src={`${basePath}/me.jpg`}
            alt="Portrait of Fima Sichone"
            width={96}
            height={96}
            className="footer-avatar"
          />
        </div>
        <div className="footer-id">
          <div className="footer-name">Fima Sichone</div>
          <div className="footer-role">// climate_data_scientist · lusaka, zambia</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">© {new Date().getFullYear()} fima.dev</div>
        <div className="footer-links">
          <a href="https://github.com/Fima41" target="_blank" rel="noopener">github</a>
          <a href="https://www.linkedin.com/in/fima-sichone-039124207" target="_blank" rel="noopener">linkedin</a>
          <a href="mailto:fimahsichone41@gmail.com">email</a>
          <a href="https://wa.me/260770940863" target="_blank" rel="noopener">whatsapp</a>
        </div>
      </div>
    </footer>
  );
}
