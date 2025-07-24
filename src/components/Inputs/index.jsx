import styles from './Inputs.module.css';


function Inputs({ altura, setAltura, peso, setPeso }) {
    return (
        <div className={styles.inputs}>
            <div className={styles.inputItem}>
                <label className='form-label' htmlFor="altura">Digite a sua altura:</label> <br />
                <input                    
                    id='altura'
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Altura em centímetros (Ex.: 175)"
                />
            </div>

            <div className={styles.inputItem}>
                <label className='form-label' htmlFor="peso">Digite o seu peso:</label> <br />
                <input                    
                    id='peso'
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Peso (Kg)"
                />
            </div>
        </div>
    )
}


export default Inputs;