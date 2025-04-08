type BotaoProps = {
    label: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  
  export default function BotaoPropsRestParams({ label, ...rest }: BotaoProps) {
    return (
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        {...rest} // <-- espalha as outras props aqui!
      >
        {label}
      </button>
    );
  }