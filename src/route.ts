import type { RouteObject } from "react-router-dom";

//	====================================================================================
//	MAIN
//	====================================================================================

const route = {
  path: (path: string, element: React.ReactNode, children?: RouteObject[]): RouteObject => ({ path, element, children }),
  index: (element: React.ReactNode, children?: RouteObject[]): RouteObject => ({ index: true, element, children }),
  element: (element: React.ReactNode, children?: RouteObject[]): RouteObject => ({ element, children }),
  catch: (element: React.ReactNode): RouteObject => ({ path: "*", element }),
};

//	====================================================================================
//	EXPORTS
//	====================================================================================

export { route };
