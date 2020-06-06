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

### 精髓

```js
export default class Rooms extends Component {
  state = {
    rooms,
  };

  render() {
    return (
      <Section color={setColor.mainGrey}>
        <Title title="out rooms" center />
        <RoomsCenter>
          {this.state.rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </RoomsCenter>
      </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
  `}

  ${media.desktop`
    width: 100vw;
    max-width: 1170px;
  `}

  ${media.large`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
```

### Room

> 这块写得简直太精巧。

- CSS matic (`https://www.cssmatic.com/`)

```js
const Room = ({ room, className }) => {
  const { img = '', title = '', info = '', price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single room" />
        <div className="price">${price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>Small Btn</SmallBtn>
      </div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;

  .img-container {
    background: ${setColor.mainBlack};
    position: relative;

    img {
      width: 100%;
      display: block;
      ${setTransition()};
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .price {
      opacity: 1;
    }
  }

  .room-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }
    p {
      ${setLetterSpacing()};
    }
  }

  ${setShadow.light};
  ${setTransition()};

  &:hover {
    ${setShadow.dark};
  }
`;
```
