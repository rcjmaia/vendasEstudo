type PropsChildren = {
    title: string;
    color?: string;
    children: React.ReactNode;
};

export default function CardChildren ( {title, color = "red", children}: PropsChildren ) {

    return (
        <div style={{
            backgroundColor: color,
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "16px"
          }}>
            <h3 style={{ marginBottom: "8px" }}>{title}</h3>
            <div>{children}</div>
          </div>
    )

}