'use client';

import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import { AppRoute, PagesNames } from '@/constants/const';
import { getCleanHref } from '@/utils/utils';
import { usePathname } from 'next/navigation';
import './breadcrumbs.scss';

// $======================== Breadcrumbs ========================$ //

type BreadcrumbsProps = {
  bemClass: string;
};

function Breadcrumbs(breadcrumbsProps: BreadcrumbsProps): React.JSX.Element {

  const { bemClass } = breadcrumbsProps;
  const pathname = usePathname();
  const pathnames = pathname.split('/').slice(1);

  const excludeLastBreadcrumb = pathnames[pathnames.length - 2] === AppRoute.Blog.slice(1);

  return (
    <ul className={`${bemClass} breadcrumbs`}>
      <li className='breadcrumbs__item'>
        <Breadcrumb
          title={PagesNames[AppRoute.Home]}
          href={AppRoute.Home}
        />
      </li>
      {pathnames.map((href, index) => {
        if (excludeLastBreadcrumb && index === pathnames.length - 1) {
          return null;
        }
        return (
          <li key={href} className='breadcrumbs__item'>
            <Breadcrumb
              title={PagesNames[`/${getCleanHref(href)}` as keyof typeof PagesNames] || pathnames[pathnames.length - 1]}
              href={`/${href}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default Breadcrumbs;