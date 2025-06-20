import clsx from 'clsx';
import { ReactNode } from 'react';
import wrapper from './wrapper.module.scss';
// ^======================== Wrapper ========================^ //

function Wrapper({ children }: { children: ReactNode; }): React.JSX.Element {
  return (<div className={clsx(wrapper._)}>{children}</div>);
}
export default Wrapper;