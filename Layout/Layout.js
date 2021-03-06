import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import css from './Layout.module.scss';

import { meta, baseURL } from 'config';
import axios from 'axios';

const Layout = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('error');

  //#region colors
  const [colors, setColors] = useState({
    darkmode: false,
    dark: {
      pc: { r: 65, g: 170, b: 190, a: 1 },
      sc: { r: 245, g: 160, b: 145, a: 1 },
      bg: { r: 10, g: 50, b: 70, a: 1 },
    },
    light: {
      pc: { r: 30, g: 100, b: 120, a: 1 },
      sc: { r: 245, g: 160, b: 145, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
    pc: '',
    sc: '',
    bg: '',
    pc05: '',
    pc1: '',
    pc3: '',
    pc5: '',
    pc7: '',
    sc05: '',
    sc1: '',
    sc3: '',
    sc5: '',
    sc7: '',
  });
  useEffect(() => {
    let compiledColors = {
      pc: '',
      sc: '',
      bg: '',
      pc05: '',
      pc1: '',
      pc3: '',
      pc5: '',
      pc7: '',
      sc05: '',
      sc1: '',
      sc3: '',
      sc5: '',
      sc7: '',
    };

    colors.darkmode
      ? (compiledColors = {
          pc: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`,
          sc: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`,
          bg: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`,
          pc05: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.05)`,
          pc1: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.1)`,
          pc3: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.3)`,
          pc5: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.5)`,
          pc7: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.7)`,
          sc05: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.05)`,
          sc1: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.1)`,
          sc3: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.3)`,
          sc5: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.5)`,
          sc7: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.7)`,
        })
      : (compiledColors = {
          pc: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`,
          sc: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`,
          bg: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`,
          pc05: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.05)`,
          pc1: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.1)`,
          pc3: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.3)`,
          pc5: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.5)`,
          pc7: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.7)`,
          sc05: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.05)`,
          sc1: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.1)`,
          sc3: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.3)`,
          sc5: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.5)`,
          sc7: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.7)`,
        });

    setColors({
      ...colors,
      ...compiledColors,
    });
  }, [
    colors.dark.pc,
    colors.dark.sc,
    colors.dark.bg,
    colors.light,
    colors.darkmode,
  ]);
  //#endregion

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(baseURL);

        setData([...data]);
      } catch (error) {
        console.log(error);

        setError('Something went wrong when fetching data, please refresh.');
      }
    }
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Nav colors={colors} className={css.header} setColors={setColors} /> */}

      <Main colors={colors} data={data}>
        {data ? children : 'loading...'}
      </Main>

      <style jsx global>
        {`
          html {
            color: ${colors.pc};
            background: ${colors.bg};
            transition: 0.5s ease;
          }
          html * {
            transition: 0.4s ease;
          }
        `}
      </style>
      <style jsx global>
        {`
          .pc {
            color: ${colors && colors.pc};
          }
          .sc {
            color: ${colors && colors.sc};
          }
          .bg {
            background: ${colors && colors.bg};
          }

          .pc05 {
            color: ${colors && colors.pc05};
          }
          .pc1 {
            color: ${colors && colors.pc1};
          }
          .pc3 {
            color: ${colors && colors.pc3};
          }
          .pc5 {
            color: ${colors && colors.pc5};
          }
          .pc7 {
            color: ${colors && colors.pc7};
          }
          .sc05 {
            color: ${colors && colors.sc05};
          }
          .sc1 {
            color: ${colors && colors.sc1};
          }
          .sc3 {
            color: ${colors && colors.sc3};
          }
          .sc5 {
            color: ${colors && colors.sc5};
          }
          .sc7 {
            color: ${colors && colors.sc7};
          }

          .pc05bg {
            background: ${colors && colors.pc05};
          }
          .pc1bg {
            background: ${colors && colors.pc1};
          }
          .pc3bg {
            background: ${colors && colors.pc3};
          }
          .pc5bg {
            background: ${colors && colors.pc5};
          }
          .pc7bg {
            background: ${colors && colors.pc7};
          }
          .sc05bg {
            background: ${colors && colors.sc05};
          }
          .sc1bg {
            background: ${colors && colors.sc1};
          }
          .sc3bg {
            background: ${colors && colors.sc3};
          }
          .sc5bg {
            background: ${colors && colors.sc5};
          }
          .sc7bg {
            background: ${colors && colors.sc7};
          }

          .pc05b {
            border: thin solid ${colors && colors.pc05};
          }
          .pc1b {
            border: thin solid ${colors && colors.pc1};
          }
          .pc3b {
            border: thin solid ${colors && colors.pc3};
          }
          .pc5b {
            border: thin solid ${colors && colors.pc5};
          }
          .pc5br {
            border-right: thin solid ${colors && colors.pc5};
          }
          .pc7b {
            border: thin solid ${colors && colors.pc7};
          }
          .sc05b {
            border: thin solid ${colors && colors.sc05};
          }
          .sc1b {
            border: thin solid ${colors && colors.sc1};
          }
          .sc3b {
            border: thin solid ${colors && colors.sc3};
          }
          .sc5b {
            border: thin solid ${colors && colors.sc5};
          }
          .sc7b {
            border: thin solid ${colors && colors.sc7};
          }
        `}
      </style>
    </>
  );
};

const Main = ({ children, data, colors }) => {
  return (
    <main className={`${css.main} bg pc pc5b`} id="main_view">
      <section>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            colors: colors,
            data: data,
          });
        })}
      </section>
    </main>
  );
};

export default Layout;
