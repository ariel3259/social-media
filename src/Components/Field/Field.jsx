import "./field.css";

export const Field = ({name, type, event}) => {
    return (
        <div className="field">
            <label>{name}</label>
            <input type={type} onChange={event}/>
        </div>
    )
}