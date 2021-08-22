import React, { useState } from 'react';
import styles from './styles.css';

function form() {
    // Instanciando estados
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [celular, setCelular] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    // Validação e envio de dados
    function handleEnviar(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.preventDefault();

        interface DadoEnviado {
            "name": string,
            "email": string,
            "celular": string
        }

        const dado: DadoEnviado = {
            "name": nome,
            "email": email,
            "celular": celular
        };

        console.log(dado)

        let convertData = JSON.stringify(dado);
        localStorage.setItem(`E-mail`, convertData);

        setMensagem('Cadastro realizado com sucesso!');
    }
    return (
        <div className={styles.Container}>
            <h1 className={styles.HeadingTitulo}>Quer receber novidades em primeira mão?</h1>
            <h2 className={styles.HeadingTitulo}>Inscreva-se já!</h2>
            <form className={styles.Formulario} autoComplete="off">
                <input className={styles.inputForms} autoComplete="off" type="text" name="Nome" id="nome" value={nome} onChange={(e: any) => setNome(e.target.value)} required placeholder="Nome" />
                <input className={styles.inputForms} autoComplete="off" type="email" name="email" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required placeholder="Email" />
                <input className={styles.inputForms} autoComplete="off" type="text" name="celular" id="celular" value={celular} onChange={(e: any) => setCelular(e.target.value)} required placeholder="Telefone" />
                <input className={styles.inputButton} type="submit" value="Enviar" name='btnEnviar' id="btnEnviar" onClick={(e) => handleEnviar(e)} />
                <p className={styles.Mensagem}>{mensagem}</p>
            </form>
        </div>
    )
}

export default form;