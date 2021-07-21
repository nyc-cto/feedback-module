import React from "react";
import { Button } from "@trussworks/react-uswds";

import {
  BUTTON_STYLE,
  BUTTON_RIGHT_STYLE,
} from "../../assets/styling_classnames";

function ModuleButton({ buttonText, onClick, isRight, className }) {
  return (
    <Button
      aria-label={buttonText}
      onClick={onClick}
      className={`${
        isRight && BUTTON_RIGHT_STYLE
      } ${BUTTON_STYLE} ${className}`}
      type="button"
    >
      {buttonText}
    </Button>
  );
}

export default ModuleButton;
