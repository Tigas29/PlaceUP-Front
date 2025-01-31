import React, { useState } from 'react'
//---------------------Componentes---------------------------
import { CheckBox } from "../../Components/CheckBox";
import { BoxVerified, CheckACD, Form, Label, Remember, Submit, Termos } from "./style";

import { FormACD } from '../../mock/Form';
import { CheckACDicons } from '../../mock/Form';
import { Link } from 'react-router-dom';
import { SiVerizon } from 'react-icons/si';

export const Forms = () => {

    const [inputsForms, setInputsForms] = useState(FormACD)

    const [text, setText] = useState(false)

    function comente(e, id) {
        setText(e.target.value)

        const newInputsForms = [...inputsForms]

        console.log(inputsForms)
        const itemIndex = newInputsForms.findIndex(item => item.id === id)

        if (text.length > 4) {
            newInputsForms[itemIndex].sucess = true;
        } else {
            newInputsForms[itemIndex].sucess = false
        }

        setInputsForms(newInputsForms)
    }


    function validateHasErrorInput() {
        const hasError = inputsForms.filter(item => !item?.sucess);

        if (hasError.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <Form>
                <legend>Cadastro</legend>
                <CheckACD>
                    {CheckACDicons.map((item) => {
                        const { id, icons, alt } = item
                        return (
                            <label key={id} className="box">
                                <img src={icons} alt={alt} />
                                <input type="checkbox" />
                            </label>
                        )

                    })}
                </CheckACD>
                {inputsForms.map((item) => (
                    <Label key={item.id} htmlFor={item.htmlFor} >
                        <i>{item.icon}</i>
                        <input type={item.type} name={item.name} id={item.aidi} placeholder={item.placeholder} maxLength={item.maxLeght} onChange={(event) => comente(event, item.id)} required />
                        {item?.sucess ? (
                            <img src={item.Sucess} />
                        ) : (
                            <img src={item.Error} />
                        )}
                    </Label>
                ))}
                <Remember>
                    <CheckBox />
                </Remember>
                <Link to="/CadastroComerPassword">
                    <Submit disabled={validateHasErrorInput()} type="submit" value="Próximo" name="Button" />
                </Link>
                <Termos>
                    <p>Ao cadastrar-se, você concorda com os <Link to="/Termos">Termos de uso e Privacidade </Link></p>
                </Termos>
                <BoxVerified>
                    <div className='box'>
                        <span><SiVerizon /></span>
                    </div>
                    <div className='box'>
                        <span><SiVerizon /></span>
                    </div>
                    <div className='box'></div>
                </BoxVerified>
            </Form>
        </>
    );
}