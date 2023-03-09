import { useState } from "react"
import { Card } from "./Card"


export const Form = () => {

    const [form, setForm] = useState({
        nombreCompleto: "",
        colorFavorito: ""
    })

    const { nombreCompleto, colorFavorito } = form

    const [show, setShow] = useState(false);
    const [err, setErr] = useState(false);

    const onChangeInput = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombreCompleto.trim().length >= 3 && colorFavorito.trim().length >= 6) {
            setShow(true)
            setErr(false)
            event.target.reset()
        } else {
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="contenedor-formulario mt-3">
                <div className="m-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" onChange={onChangeInput} name="nombreCompleto" autoComplete="off"/>
                </div>
                <div className="m-3">
                    <label className="form-label">Escribe tu color favorito</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu color favorito (formato HEX)" onChange={onChangeInput} name="colorFavorito" autoComplete="off"/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary m-3">Enviar</button>
                </div>
            </form>

            {err ? <p className="mensaje-error">Los datos estan incompletos, por favor rellenar todo el formulario.</p> : null}
            {show && <Card nombreCompleto={nombreCompleto} colorFavorito={colorFavorito} />}
        </div>
    )
}
