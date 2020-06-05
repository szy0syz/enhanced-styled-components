# Hotel

## Notes

```js
// styles.js
export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

// Globals.js
const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 100%;
    color: ${setColor.mainBlack};
    background: ${setColor.mainWhite};
    ${setFont.main}
    ${setFont.slanted}
  }

  h1 {
    font-size: 3em;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }

  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }

  h4 {
    font-size: 1.2em;
    line-height: 1.2;
    margin-bottom: 1.25em;
    font-weight: bold;
  }

  h5 {
    font-size: 1em;
    margin-bottom: 1.5em;
    font-weight: bold;
  }

  h6 {
    font-size: 1em;
    font-weight: bold;
  }

  p {
    line-height: 1.5;
    margin: 0 0 1.5 0;
  }
`;
```

- 背景图设置

```js
export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
}
```

- `styled-components` 包装过的元素天生带 `as="a"` 功能
