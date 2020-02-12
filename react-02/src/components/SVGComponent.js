import React from "react";
import imagereact from "../images/logo.svg";
// import imagePenguin from "../images/large_christmas-penguin.svg";
import imageTictactoe from "../images/tic-tac-toe.svg";
import imageAccount from "../images/icon_account.svg";
import imageCities from "../images/icon_community.svg";
import imageLink from "../images/icon_link.svg";
import imageStyle from "../images/icon_style.svg";
import imageStack from "../images/stack.svg";

import Icon from "./Icon";
import "../App.css";

class SVGComponent extends React.Component {
  static defaultProps = {
    icons: [
      {
        src: imagereact,
        id: "idReact",
        alt: "idReact",
        width: "100",
        height: "100"
      },
      {
        src: imageTictactoe,
        id: "idTicTacToe",
        alt: "idTicTacToe",
        width: "100",
        height: "100"
      },
      {
        src: imageAccount,
        id: "idAccount",
        alt: "idAccount",
        width: "100",
        height: "100"
      },
      {
        src: imageCities,
        id: "idCities",
        alt: "idCities",
        width: "100",
        height: "100"
      },
      {
        src: imageLink,
        id: "idLink",
        alt: "idLink",
        width: "100",
        height: "100"
      },
      {
        src: imageStack,
        id: "idStack",
        alt: "idStack",
        width: "100",
        height: "100"
      },
      {
        src: imageStyle,
        id: "idStyle",
        alt: "idStyle",
        width: "100",
        height: "100"
      }
    ]
  };

  constructor() {
    super();
    this.state = {
      // theShowPage: ""
    };
  }

  changeShowPage = () => {
    console.log("You clicked me");
    // this.setState({ theShowPage: "<TictactoeComp />" });
  };
  renderIcon = () => {};
  render() {
    return (
      <div>
        {this.props.icons.map(
          ({ src, id, alt, width, onClick = this.props.onClick, height }) => (
            <Icon
              src={src}
              key={id}
              id={id}
              alt={alt}
              width={width}
              height={height}
              onClick={onClick}
            />
          )
        )}
      </div>
    );
  }
}

export default SVGComponent;
