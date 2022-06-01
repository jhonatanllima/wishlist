import { IoLocationSharp } from 'react-icons/io5';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

import { Nav } from '~/components';

import * as S from './styles';

export function Header() {
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
        <h1>MagaNets</h1>

        <Nav menuItems={menuItems} />
      </S.Wrapper>
    </S.Container>
  );
}
