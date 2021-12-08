import { useState, useEffect } from 'react';

import { SlideTemplate, Button } from 'chansencode-lib';

import {
  Presentation,
  PickPresentation,
  Navigator,
  MainContain,
} from 'components';

export default function Home({ data, colors }) {
  const [controller, setController] = useState({
    loaded: false,
    presIndex: null,
    page: 0,
  });

  useEffect(() => {
    setController({ ...controller, loaded: true });
  }, []);

  const selected = !(controller.presIndex === null);

  return (
    <>
      <MainContain>
        {selected ? (
          <Presentation
            data={data[controller.presIndex]}
            controller={controller}
            setController={setController}
          />
        ) : (
          <PickPresentation
            data={data}
            controller={controller}
            setController={setController}
            colors={colors}
          />
        )}
      </MainContain>

      <Navigator
        data={data}
        controller={controller}
        setController={setController}
      />

      <style jsx>
        {`
          .main_contain {
            position: relative;

            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
