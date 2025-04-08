type PropsTest = {
    propsText: string;
};

export default function Exemplo1({propsText} : PropsTest) {
    const status = false
    return (
        <div className="Exemplo1">
            <h2 
                style={{
                    color: status ? "red" : "blue"
                }}>
                {propsText}
            </h2>            
        </div>
    );
}

