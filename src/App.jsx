import { useState } from 'react';
import Inputs from './components/Inputs';
import Resultado from './components/Resultado';


function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const calcularImc = (e) => {
    e.preventDefault();

    if (altura.includes('.') || altura.includes(',')) {
      setErro('Digite a altura somente em centimetros, sem ponto ou vírgula. (Ex: 170)');
      setResultado(null);
      return;
    }

    const alturaM = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);

    if (!alturaM || !pesoKg || alturaM <= 0 || pesoKg <= 0) {
      setErro('Por favor, preencha altura e peso com valores válidos.');
      setResultado(null);
      return;
    }

    setErro('');

    const imc = pesoKg / (alturaM * alturaM);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade Grau I';
    else if (imc < 39.9) classificacao = 'Obesidade Grau II';
    else classificacao = 'Obesidade Grau III (mórbida)';

    setResultado({
      imc: imc.toFixed(2),
      classificacao,
    })

    setAltura('');
    setPeso('');
  }


  return (
    <div className="container pb-1">
      <h1 className='title text-center pt-1'>Saiba como está o seu IMC</h1>

      <form className='card p-4 shadow' onSubmit={calcularImc}>
        <Inputs altura={altura} setAltura={setAltura} peso={peso} setPeso={setPeso}/>
        <button className="botao mt-3" type="submit">Calcular IMC</button>
        {erro && (
          <div className='erro alert alert-danger mt-2'>
            {erro}
          </div>
        )}
        <h2 className="title text-center mt-4">Resultado:</h2>
        <Resultado resultado={resultado}/>
      </form>
      <footer>
        <p className='text-center p-1 mt-4'>&copy; 2025 - Thiago Lopes - Todos os direitos reservados. </p>
      </footer>  
    </div>
  )
}

export default App;
