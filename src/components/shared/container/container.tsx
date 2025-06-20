import { ReactNode } from 'react';
import container from './container.module.scss';
import clsx from 'clsx';

// ^======================== Container ========================^ //

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

function Container(containerProps: ContainerProps): React.JSX.Element {

  const { className, children } = containerProps;

  return (<div className={clsx(className, container._)}>{children}</div>);
}
export default Container;