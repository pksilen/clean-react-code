interface Props {
  readonly log: (message: string) => void;
  readonly object: { readonly value: string };
  readonly text: string;
}

export const TextDisplay = ({ text, log, object }: Props) => {
  log(`TextDisplay rendered: ${object.value}`);
  return <div>{text}</div>;
};
