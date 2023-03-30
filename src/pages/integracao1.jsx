import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {
    const [codigo, setCodigo] = useState({})
    const [cliente, setCliente] = useState({})

    const url = `http://localhost:3000/api/clientes/${codigo}`

    function obterCliente() {
        fetch(url)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    async function obterClienteAsync() {
        const resp = await fetch(url)
        const dados = await resp.json()
        setCliente(dados)
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterClienteAsync}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
            </ul>
        </Layout>
    )
}