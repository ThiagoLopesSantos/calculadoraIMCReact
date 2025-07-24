import styles from './Resultado.module.css'

function Resultado({ resultado }) {
    if(!resultado) return null;

    return (
        resultado && (
            <div className={styles.resultado}>
                <p className="mb-1 h4">IMC: {resultado.imc}</p>
                <p className="mb-1">Classificação: {resultado.classificacao}</p>
            </div>
        )
    );    
}

export default Resultado;