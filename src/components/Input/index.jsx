export const Input = ({textoLabel, idInput, placeholder, onChange}) => {
    return (
        <>
        <label htmlFor={idInput} className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.6rem]">{textoLabel}</label>
        <input type="text" name={idInput} id={idInput} className="bg-branco text-preto p-[0.3rem] text-[1.2rem] 2xl:text-[1.4rem]" placeholder={placeholder} onChange={onChange}/>
        </>
    )
}