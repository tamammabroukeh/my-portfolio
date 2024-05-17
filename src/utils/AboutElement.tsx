const AboutElement = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  return <p className={classes}>{children}</p>;
};

export default AboutElement;
