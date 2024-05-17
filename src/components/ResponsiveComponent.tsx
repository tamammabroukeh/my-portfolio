import React from "react";
import useScreenSize from "../hooks/useScreenSize";
interface ChildrenFunction {
  (data: { size: number }): React.ReactNode;
}
const ResponsiveComponent = ({ children }: { children: ChildrenFunction }) => {
  const size = useScreenSize();
  return <>{children({ size })}</>;
};
export default ResponsiveComponent;
