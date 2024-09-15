type ButtonProps = {
  action?: string;
};
export default function Button({ action = "add" }: ButtonProps) {
  return <button>Click to {action}</button>;
}
