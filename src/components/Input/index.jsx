export const Input = ({textoLabel, idInput, placeholder, onChange}) => {
    return (
        <>
        <label htmlFor={idInput} className="text-[1.2rem]">{textoLabel}</label>
        <input type="text" name={idInput} id={idInput} className="bg-branco text-preto p-[0.3rem] text-[1.2rem]" placeholder={placeholder} onChange={onChange}/>
        </>
    )
}