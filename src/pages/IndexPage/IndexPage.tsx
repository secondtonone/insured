import { useState, type FC } from 'react';

import { Page } from '@/app/layouts';
import { InsuranceOptions, InsuranceOptionsProps } from '@/features';
import { FAQPanel } from '@/shared';
import { Avatar, Cell, List } from '@telegram-apps/telegram-ui';
import { useTranslation } from 'react-i18next';

export const IndexPage: FC = () => {
  const [currentTab, setCurrentTab] = useState<InsuranceOptionsProps['currentTab']>('buy');
  const { t } = useTranslation();

  return (
    <Page>
      <FAQPanel />

      <InsuranceOptions currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === 'buy' ? <List>
        <Cell
          className="bg-white dark:bg-black rounded-xl shadow border border-whity"
          after={'14 %'}
          before={<Avatar size={48} />}
          description="Max 250k USDT"
        >
          Euler Finance v2
        </Cell>
        <Cell
          className="bg-white dark:bg-black rounded-xl shadow border border-whity"
          after={'14 %'}
          before={<Avatar size={48} />}
          description="Max 180k USDT"
        >
          Base DeFi Pass
        </Cell>
      </List> : <List>
        <Cell
          className="bg-white dark:bg-black rounded-xl shadow border border-whity"
          after={'20 days'}
          before={<Avatar size={48} />}
          description="10 000.18 USDT"
        >
          Liquid Collective
        </Cell>
      </List>}
    </Page >
  );
};
