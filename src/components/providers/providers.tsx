'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';

// ^======================== Providers ========================^ //

function Providers({ children }: { children: React.ReactNode; }): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
export default Providers;