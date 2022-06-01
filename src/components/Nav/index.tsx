import { IoLocationSharp } from 'react-icons/io5';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

import * as S from './styles';

export function Nav() {
  return (
    <S.Container>
      <S.MenuItems>
        <li>
          <IoLocationSharp />
          Cidade: São Paulo
        </li>

        <li>
          <FaPhoneAlt />
          Central de atendimento
        </li>

        <li>
          <FaHeart />
          Lista de desejos
        </li>
      </S.MenuItems>
    </S.Container>
  );
}
