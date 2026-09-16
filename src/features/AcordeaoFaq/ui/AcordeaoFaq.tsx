import type { ItemFaq } from '@entities/ItemFaq';
import { useAcordeaoFaq } from '../model/useAcordeaoFaq';

export interface AcordeaoFaqProps {
  items: ItemFaq[];
}

export function AcordeaoFaq({ items }: AcordeaoFaqProps) {
  const { openId, toggle } = useAcordeaoFaq();

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const answerId = `faq-answer-${item.id}`;

        return (
          <div key={item.id} className="border-b border-divider last:border-b-0">
            <button
              type="button"
              className="group w-full flex justify-between items-center gap-4 py-5 bg-transparent border-none cursor-pointer text-left font-heading font-semibold text-[17px] text-navy"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(item.id)}
            >
              <span>{item.question}</span>
              <span
                className="w-7 h-7 flex-none rounded-full bg-blue-tint-2 flex items-center justify-center text-base text-orange transition-colors duration-200 ease-in-out group-hover:bg-blue-tint"
                aria-hidden="true"
              >
                {isOpen ? '–' : '+'}
              </span>
            </button>
            {isOpen ? (
              <p id={answerId} className="pb-5 text-sm opacity-70 max-w-[640px] leading-[1.6] m-0">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
