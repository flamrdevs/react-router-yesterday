import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { route } from "./route";

//	====================================================================================
//	TYPES
//	====================================================================================

type RoutesProps = {
  location?: string | Partial<Location>;
};

//	====================================================================================
//	MAIN
//	====================================================================================

function createRoutes(callback?: (builder: typeof route) => RouteObject[]) {
  const routes = callback(route);

  return function Routes(props: RoutesProps) {
    return useRoutes(routes, props.location);
  };
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export type { RoutesProps };
export { createRoutes };
