import React, { memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withRouter } from "react-router-dom";

import "./index.css";

const ANIMATION_MAP = {
  POP: "back",
  PUSH: "forward",
};

export default withRouter(
  memo(function RouterAnimation(props) {
    return (
      <TransitionGroup
        childFactory={(child) =>
          React.cloneElement(child, {
            classNames: ANIMATION_MAP[props.history.action],
          })
        }
      >
        <CSSTransition timeout={500} key={props.location.pathname}>
          {props.children}
        </CSSTransition>
      </TransitionGroup>
    );
  })
);
