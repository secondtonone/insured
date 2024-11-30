import { useState, type FC } from 'react';

import { Page } from '@/app/layouts';
import { HelpIcon } from '@/shared';
import { DisplayData } from '@/shared/ui/DisplayData/DisplayData';
import { List, SegmentedControl } from '@telegram-apps/telegram-ui';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const tabs = [
  {
    id: 'buy',
    title: 'Buy cover',
  },
  {
    id: 'my',
    title: 'My covers',
  },
] as const;


export const IndexPage: FC = () => {
  const [currentTab, setCurrentTab] = useState<'buy' | 'my'>('buy');
  const { t } = useTranslation();

  return (
    <Page>
      <Link to="/faq" className="px-4 py-2.5 bg-transparent rounded-xl shadow border border-whity justify-between items-center flex">
        <div className="text-black dark:text-white text-sm font-semibold">{t('FAQ')}</div>
        <div className="text-black dark:text-white"><HelpIcon /></div>
      </Link>

      <SegmentedControl className="segment-control !rounded-md !p-1 !bg-gray_light">
        {tabs.map(({ id, title }) => (
          <SegmentedControlItem
            className="*:!leading-none *:!text-sm *:!font-medium !py-1"
            onClick={() => setCurrentTab(id)}
            selected={currentTab === id}
          >
            {t(title)}
          </SegmentedControlItem>
        ))}
      </SegmentedControl>

      <List>
        <DisplayData
          rows={[
            { title: 'tgWebAppPlatform', value: 'val' },
            { title: 'tgWebAppShowSettings', value: 'val2' },
          ]}
        />
      </List>
    </Page >
  );
};
