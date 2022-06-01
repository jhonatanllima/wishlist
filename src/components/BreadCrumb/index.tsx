import Link from 'next/link';

import * as S from './styles';

type breadCrumbItems = {
  link: string;
  title: string;
  separator?: string;
};

interface BreadCrumbProps {
  breadCrumbItems: breadCrumbItems[];
}

export function BreadCrumb({ breadCrumbItems }: BreadCrumbProps) {
  return (
    <S.Container>
      {breadCrumbItems.length === 1 && (
        <strong>{breadCrumbItems[0].title}</strong>
      )}

      {breadCrumbItems.length > 1 &&
        breadCrumbItems.map((itemBreadCrumb, index) => (
          <Link key={index} href={itemBreadCrumb.link}>
            <a>
              <strong>{itemBreadCrumb.title}</strong>
              <strong>{itemBreadCrumb.separator}</strong>
            </a>
          </Link>
        ))}
    </S.Container>
  );
}
