'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import './accordion.scss';

// $======================== Accordion ========================$ //
type AccordionDataType = {
  header: [],
  body: []
};

type AccordionProps = {
  bemClass: string;
  data: AccordionDataType[];
  HeaderComponent: React.JSXElementConstructor<AccordionDataType['header']>;
  BodyComponent: React.JSXElementConstructor<AccordionDataType['body']>;
};

function Accordion(accordionProps: AccordionProps): React.JSX.Element {

  const { bemClass, data, HeaderComponent, BodyComponent } = accordionProps;

  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
  const [scrollHeight, setScrollHeight] = useState<number | undefined>(0);

  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (bodyRefs.current[activeTabIndex!]) {
      setScrollHeight(bodyRefs.current[activeTabIndex!]?.scrollHeight || 0);
    }
  }, [activeTabIndex]);

  const handleTabClick = (index: number) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className={`${bemClass} accordion`}>
      {
        data.map(({ header, body }, index) => (
          <li
            key={index}
            className={clsx(
              'accordion__tab',
              { '_active': activeTabIndex === index }
            )}
          >
            <div
              className='accordion__header'
              onClick={() => handleTabClick(index)}
            >
              <HeaderComponent {...header} />
              <button className='accordion__header-button'></button>
            </div>
            <div
              className='accordion__body'
              ref={(el) => { if (el) bodyRefs.current[index] = el; }}
              style={{
                maxHeight: activeTabIndex === index ? `${scrollHeight! + 1}px` : '0'
              }}
            >
              <BodyComponent {...body} />
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default Accordion;
