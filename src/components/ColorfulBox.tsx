interface BoxProps {
  color: string;
}
function ColorfulBox({ color }: BoxProps) {
  return (
    <div style={{ backgroundColor: color }}>this is the ColorfulBox!!!</div>
  );
}
export default ColorfulBox;
