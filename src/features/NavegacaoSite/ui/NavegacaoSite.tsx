import { useDisclosure } from '@shared/hooks';
import { cn } from '@shared/lib';
import { NAV_ITEMS } from '@shared/config/site';
import { Icon } from '@shared/ui/Icon';

export function NavegacaoSite() {
  const { isOpen, toggle, close } = useDisclosure(false);

  return (
    <nav className="relative flex items-center" aria-label="Navegação principal">
      <ul
        className={cn(
          'flex items-center gap-8 list-none m-0 p-0',
          'max-[760px]:absolute max-[760px]:left-0 max-[760px]:right-0 max-[760px]:top-[calc(100%+12px)] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-1 max-[760px]:bg-card max-[760px]:rounded-md max-[760px]:shadow-md max-[760px]:p-3',
          isOpen ? 'max-[760px]:flex' : 'max-[760px]:hidden',
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="block text-navy no-underline text-sm font-medium transition-colors duration-200 hover:text-orange max-[760px]:py-[10px] max-[760px]:px-3 max-[760px]:rounded-sm max-[760px]:hover:bg-blue-tint-2"
              onClick={close}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="hidden items-center justify-center border-0 bg-transparent text-navy p-2 cursor-pointer rounded-sm hover:bg-blue-tint-2 max-[760px]:inline-flex"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <Icon name={isOpen ? 'close' : 'menu'} size={22} />
      </button>
    </nav>
  );
}
