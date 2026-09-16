import { FOOTER_LINK_GROUPS, SITE_CONFIG, SOCIAL_LINKS } from '@shared/config/site';
import { getCurrentYear } from '@shared/lib';

export function Rodape() {
  return (
    <footer className="mt-24 bg-navy text-white rounded-t-[20px] pt-16 px-6 pb-8 max-[640px]:mt-16 max-[640px]:pt-12 max-[640px]:px-5 max-[640px]:pb-6 max-[640px]:rounded-t-[16px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-10 max-[900px]:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
          <div>
            <div className="font-heading font-bold text-xl mb-3">{SITE_CONFIG.brandName}</div>
            <p className="text-[13px] opacity-70 max-w-[280px] mb-4 leading-[1.6]">{SITE_CONFIG.tagline}</p>
            <address className="text-[13px] opacity-85 flex flex-col gap-1 not-italic">
              <span>{SITE_CONFIG.contactEmail}</span>
              <span>{SITE_CONFIG.contactPhone}</span>
              <span>{SITE_CONFIG.address}</span>
            </address>
          </div>
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.id}>
              <div className="font-heading font-semibold text-[13px] tracking-[0.05em] uppercase opacity-50 mb-[14px]">
                {group.title}
              </div>
              <div className="flex flex-col gap-2.5 text-[13px] opacity-85">
                {group.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-inherit no-underline transition-opacity duration-200 hover:opacity-70"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-white-overlay-15 max-[640px]:justify-center max-[640px]:text-center">
          <span className="text-xs opacity-50">
            © {getCurrentYear()} {SITE_CONFIG.brandName}. Todos os direitos reservados.
          </span>
          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="w-9 h-9 rounded-full bg-white-overlay-12 flex items-center justify-center text-xs text-white no-underline transition-colors duration-200 hover:bg-white-overlay-22"
                aria-label={social.label}
              >
                <span aria-hidden="true">{social.abbreviation}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
