import { Button } from 'chansencode-lib';

import { AiOutlineRollback } from 'react-icons/ai';

import { Logo } from 'chansencode-lib';

import css from './Navigator.module.scss';

export const Navigator = ({ data, controller, setController }) => {
  let open = !(controller.presIndex === null);

  let noPrev = controller.page === 0;
  let noNext =
    open && controller.page + 1 === data[controller.presIndex].slides.length;

  async function goBack() {
    setController({ ...controller, page: 0, presIndex: null });
  }
  async function onClickPrev() {
    setController({ ...controller, page: controller.page - 1 });
  }
  async function onClickNext() {
    setController({ ...controller, page: controller.page + 1 });
  }
  return (
    <>
      <div className={`bg pc3b ${css.navigator} ${open && css.navigator_open}`}>
        <Button
          className={`pc5b ${css.btn_prev} ${noPrev && css.disabled}`}
          onClick={onClickPrev}
        >{`<`}</Button>

        <div></div>

        <div className={css.info}>
          <Logo height="2.5rem" />
          <h3 className="sc">{open && data[controller.presIndex].title}</h3>

          <div className={css.pageNumber}>
            <p>page:</p>
            <h4 className="sc">{controller.page + 1}</h4>
            <i>{` / `}</i>
            <h4>{open && data[controller.presIndex].slides.length}</h4>
          </div>
        </div>

        <Button className={`pc5b ${css.btn_goBack}`} onClick={goBack}>
          <AiOutlineRollback size="1.25rem" />
        </Button>

        <Button
          className={`pc5b ${css.btn_next} ${noNext && css.disabled}`}
          onClick={onClickNext}
        >{`>`}</Button>
      </div>

      <style jsx>
        {`
          .navigator {
            position: fixed;
            bottom: 4rem;
            left: 5rem;
            height: 4rem;
            width: calc(100vw - 10rem);
            border: thin solid;

            display: grid;
            grid-template: 'a . b c d' 1fr / 4rem 4rem 1fr 4rem 4rem;
            grid-gap: 1rem;
          }
          .navigator div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
