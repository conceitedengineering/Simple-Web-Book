import bindery from "https://cdn.skypack.dev/bindery@2.3.6";

const { makeBook, RunningHeader, createRule, FullBleedSpread, } = bindery;

makeBook({
  content: '#content',
  rules: [
    RunningHeader({
      render: (pg) => `MY SICK BOOK ${pg.number}`,
    }),
    FullBleedSpread({
  selector: '.wide-figure',
  continue: 'next',
  rotate: 'clockwise',
}),
  ]
});

