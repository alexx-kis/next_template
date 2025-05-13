import { ICONS } from '@/constants/images';
import { useAppDispatch } from '@/hooks';
import { openElement } from '@/store/open-element-process';
import Image from 'next/image';
import './burger.scss';

// ^======================== Burger ========================^ //

type BurgerProps = {
  bemClass: string;
};

function Burger(burgerProps: BurgerProps): React.JSX.Element {
  const { bemClass } = burgerProps;
  const dispatch = useAppDispatch();

  const handleBurgerClick = () => {
    dispatch(openElement('aside'));
  };

  return (
    <button
      type='button'
      className={`${bemClass} burger`}
      onClick={handleBurgerClick}
    >
      <Image
        className='burger__icon'
        src={ICONS.burger}
        alt='open menu'
        width={28}
        height={28}
      />
    </button>
  );
}
export default Burger;