

export const GridContainer = ({row, column, height, children, bg}) => {
    const style = {
        display : "grid",
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        height: (typeof height === "number") || (height >= 0) ? `${height}vh` : "auto",
        background: `${bg}`
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}