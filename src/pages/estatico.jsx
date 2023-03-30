import Layout from "../components/Layout"

// dynamic content
export async function getServerSideProps() {
// static content
// export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}