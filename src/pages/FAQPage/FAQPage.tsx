import { useState, type FC } from 'react';

import { Page } from '@/app/layouts/Page';
import { BackIcon } from '@/shared';
import { Accordion } from '@telegram-apps/telegram-ui';
import { AccordionContent } from '@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent';
import { AccordionSummary } from '@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const content = [
  {
    title: 'Euler Finance v2',
    text: 'Это текст ответа на вопрос. Он виден, только когда развернуть (нажать на вопрос).'
  },
  {
    title: 'Base DeFi Pass',
    text: 'Это текст ответа на вопрос. Он виден, только когда развернуть (нажать на вопрос).'
  },
  {
    title: 'Sky Protocol',
    text: 'Это текст ответа на вопрос. Он виден, только когда развернуть (нажать на вопрос).'
  },
  {
    title: 'Liquid Collective',
    text: 'Это текст ответа на вопрос. Он виден, только когда развернуть (нажать на вопрос).'
  },
  {
    title: 'Request Finance',
    text: 'Это текст ответа на вопрос. Он виден, только когда развернуть (нажать на вопрос).'
  }
];


export const FAQPage: FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>(Array.from({ length: content.length }).map(() => false));
  const navigate = useNavigate();

  const t = useTranslation().t;

  return (
    <Page hideHeader>
      <div className="flex flex-col gap-3 text-black dark:text-white">
        <button type="button" className="justify-start items-center gap-1.5 inline-flex" onClick={() => navigate(-1)}>
          <BackIcon />
          <div className="text-center  text-sm font-semibold">{t('Back')}</div>
        </button>
        <h1 className=" text-xl font-semibold leading-normal">{t('FAQ')}</h1>
      </div>

      <div className="flex flex-col gap-[10px]">
        {content.map((item, index) => (
          <div key={index} className="accordion bg-white dark:bg-black rounded-xl shadow border border-whity overflow-hidden *:px-4">
            <Accordion onChange={() => setExpanded((prev) => prev.map((isExpanded, i) => i === index ? !isExpanded : isExpanded))} expanded={expanded[index]}>
              <AccordionSummary>
                {item.title}
              </AccordionSummary>
              <AccordionContent>
                <div className="text-gray_dark text-sm font-normal leading-none pb-4 pt-0">
                  {item.text}
                </div>
              </AccordionContent>
            </Accordion>
          </div>
        ))}
      </div>

    </Page >
  );
};
