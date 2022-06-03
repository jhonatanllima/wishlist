import Link from 'next/link';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { IoLocationSharp } from 'react-icons/io5';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

import { Nav } from '~/components';

import * as S from './styles';

import { HeaderProps } from '~/types/components/Header';

export function Header({ logo }: HeaderProps) {
  const menuItems = [
    {
      title: 'Cidade: São Paulo',
      icon: <IoLocationSharp />,
    },

    {
      title: 'Central de Atendimento',
      icon: <FaPhoneAlt />,
    },

    {
      title: 'Lista de Desejos',
      icon: <FaHeart />,
      link: '/favoritos',
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperLogo>
          <Link href="/">
            <a>
              <AiOutlineArrowLeft size={24} color="#fff" />
            </a>
          </Link>

          <h1>{logo}</h1>
        </S.WrapperLogo>

        <Nav menuItems={menuItems} />
      </S.Wrapper>
    </S.Container>
  );
}
