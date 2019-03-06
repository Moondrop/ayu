// colors comments beside for ST package ColorHelper to insert preview
// 
const $ = require('./color')

const common = {
  accent: $`ec8c38`,              // #FF8F40 to #ec8c38
  bg: $.base`FAFAFA`,             // #FAFAFA
  fg: $`61676C`,                  // #61676C basic text
  ui: $`9DA2A6`                   // #9DA2A6
}         

const syntax = {
  tag: $`1cb5bb`,                 // #55B4D4 to #09a3d7
  tagSE: $`a291ec`,               // #a291ec
  tagAttr: $`ec8c38`,             // #ec8c38
  func: $`09a3d7`,                // #F29718 to #be7acf or to #0982d7
  entity: $`399EE6`,              // #399EE6 to #55b4d4 ???
  string: $`83a61d`,              // #86B300 to #83a61d or to #82ae00
  regexp: $`4CBF99`,              // #4CBF99
  markup: $`F07171`,              // #F07171
  keyword: $`FA6E32`,             // #FA6E32
  special: $`E6B673`,             // #E6B673
  comment: $`ABB0B6`,             // #ABB0B6
  constant: $`A37ACC`,            // #A37ACC
  operator: $`ED9366`,            // #ED9366 to #6C7680
  error: $`F51818`,               // #F51818
  variableIDK: $`ec5f67`,         // #ec5f67 ??? member variable
  variable: $`ec589a`,            // #ec589a
  embed: $`a1715a`                // #a1715a
}

const ui = {
  panel: {
    bg: $`FFFFFF`,
    shadow: common.bg.darken20,
    border: common.bg.darken20,
    row: common.bg.darken2
  },
  icon: common.ui.fade60,
  scrollbar: { puck: $`000000` },
  separator: common.bg.darken5,
  minimap: common.ui,
  opacity: 1
}

const editor = {
  line: common.bg.darken3,         // #F3F3F3
  gutter: $`c6d0d9`,               // #D9DBDD to #c6d0d9
  selection: {
    bg: syntax.entity.fade9,       // #E9F2F8
    inactive: syntax.entity.fade7, // #ECF4F9
    border: syntax.entity.fade12   // #E3EFF8
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'light-custom-blue',
  common,
  syntax,
  ui,
  editor
}
