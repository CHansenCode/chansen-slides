import { useState, useEffect } from 'react';

import { SlideTemplate } from 'chansencode-lib';

import css from './Presentation.module.scss';

export const Presentation = ({ data, controller }) => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setActivePage(controller.page);
  }, [controller.page]);

  return (
    <div className={css.wrapper}>
      <SlideTemplate
        template={data.slides[activePage].template}
        data={data.slides[activePage]}
      />
    </div>
  );
};
