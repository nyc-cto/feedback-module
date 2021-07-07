import React, { useEffect, useState } from "react";
import { GridContainer } from "@trussworks/react-uswds";

import { MODULE_CONTAINER_STYLE } from "../../assets/styling_classnames";
import Header from "./Header";
import Screen1 from "../pages/Screen1";
import Screen2 from "../pages/Screen2";
import Screen3 from "../pages/Screen3";
import Screen4 from "../pages/Screen4";

function Module() {
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    console.log(feedback);
  }, [feedback]);

  const [screen, setScreen] = useState(
    <Screen1
      setFeedback={setFeedback}
      changePage={(data) =>
        setScreen(
          <Screen2
            feedbackType={data}
            setFeedback={setFeedback}
            changePage={() =>
              setScreen(<Screen3 changePage={() => setScreen(<Screen4 />)} />)
            }
          />
        )
      }
      page="[this page]"
    />
  );

  return (
    <GridContainer
      containerSize="tablet-lg"
      desktop={{ col: 2 }}
      mobile={{ col: "fill" }}
      className={MODULE_CONTAINER_STYLE}
    >
      <Header />
      {screen}
    </GridContainer>
  );
}

export default Module;
