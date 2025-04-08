import BotaoPropsRestParams from "./BotaoPropsRestParams";

export default function PropsRestParams() {
  const handleClick = () => alert("Clicou!");

  return (
    <div>
      <BotaoPropsRestParams label="Salvar" onClick={handleClick} />
      <BotaoPropsRestParams label="Enviar" type="submit" disabled />
    </div>
  );
}