import BaseLayout from "../../../Components/BaseLayout"
import { Introduccion } from "../TermsData/1.Introduccion"
import { Intro } from "../TermsData/Intro"

const Terms = () =>{

    return(
        <BaseLayout>
        <h1>Spootichat: Política de Privacidad y Términos de Uso</h1>
        <br/>        
        <div>
            <h2>{Intro.description1}</h2><br/>
            <h1>{Introduccion.title}</h1><br/>
            <h2>{Introduccion.description1}</h2><br/>
            <h2>{Introduccion.description2}</h2><br/>
        </div>

        <br/>
        </BaseLayout>
    )
}

export default Terms