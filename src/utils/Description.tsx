const Description = ({
  classes,
  description,
}: {
  classes: string;
  description: string;
}) => {
  return <p className={classes}>{description}</p>;
};
export default Description;
