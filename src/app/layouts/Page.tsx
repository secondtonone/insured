/* import { useNavigate } from 'react-router';
import { backButton } from '@telegram-apps/sdk-react'; */
import { Header } from '@/shared';
import { PropsWithChildren /* useEffect */ } from 'react';

interface PageProps extends PropsWithChildren {
  hideHeader?: boolean
}

export function Page({
  hideHeader,
  children /* , back = true  */,
}: PageProps) {
  /* const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back]);
 */
  return (
    <main className="flex flex-col h-screen w-full justify-start items-center text-blacky bg-white dark:bg-black dark:text-white">
      <div className="max-w-md w-full">
        {hideHeader ? null : <Header />}
        <div className="p-4 py-3 flex flex-col gap-4">
          {children}
        </div>
      </div>
    </main>
  );
}
