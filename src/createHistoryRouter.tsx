import React from "react";

import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

export type HistoryRouterProps = React.PropsWithChildren<{ basename?: string }>;

//	====================================================================================
//	MAIN
//	====================================================================================

function createHistoryRouter() {
  const history = createBrowserHistory();

  return {
    history,
    HistoryRouter(props: HistoryRouterProps) {
      return (
        <HistoryRouter basename={props.basename} history={history}>
          {props.children}
        </HistoryRouter>
      );
    },
  };
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export { createHistoryRouter };
