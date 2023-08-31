import BaseLayout from "../../../Components/BaseLayout";
import { Introduccion } from "../TermsData/1.Introduccion";
import { ContenidoProhibido } from "../TermsData/10.ContenidoPriohibido";
import { Presentaciones } from "../TermsData/11.Presentaciones";
import { Reclamos } from "../TermsData/12.Reclamos";
import { Privacidad } from "../TermsData/13.Privacidad";
import { Derechos } from "../TermsData/14.Derechos";
import { SinGarantia } from "../TermsData/15.SinGarantia";
import { Indemnizacion } from "../TermsData/16.Indemnizacion";
import { Finalizacion } from "../TermsData/17.Finalizacion";
import { LeyAplicable } from "../TermsData/18.LeyAplicable";
import { Disposiciones } from "../TermsData/19.Disposiciones";
import { RequisitosPrevios } from "../TermsData/2.RequisitosPrevios";
import { InformacionPrecios } from "../TermsData/3.IinformacionPrecios";
import { OfertasEspeciales } from "../TermsData/4.ofertasEspeciales";
import { RestriccionesUso } from "../TermsData/5.RestriccionesUso";
import { LicenciaApliaciones } from "../TermsData/6.LicenciaApliaciones";
import { AplicacionesTerceros } from "../TermsData/7.AplicacionesTerceros";
import { RestriccionesContenido } from "../TermsData/8.RestriccionesContenido";
import { ContenidoUsuario } from "../TermsData/9.ContenidoUsuario";
import { Intro } from "../TermsData/Intro";

const Terms = () => {
  return (
    <BaseLayout>
      <div className="bg-black p-28">
        <h1 className="text-white mt-16 font-bold text-center text-2xl mb-6">
          Spootichat Política de Privacidad y Términos de Uso
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Intro.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Introduccion.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Introduccion.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Introduccion.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {RequisitosPrevios.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RequisitosPrevios.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RequisitosPrevios.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {InformacionPrecios.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {InformacionPrecios.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {InformacionPrecios.description2}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {InformacionPrecios.description3}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {InformacionPrecios.description4}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {OfertasEspeciales.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {OfertasEspeciales.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {RestriccionesUso.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RestriccionesUso.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RestriccionesUso.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {LicenciaApliaciones.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {LicenciaApliaciones.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {LicenciaApliaciones.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {AplicacionesTerceros.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {AplicacionesTerceros.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {RestriccionesContenido.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RestriccionesContenido.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {RestriccionesContenido.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {ContenidoUsuario.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {ContenidoUsuario.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {ContenidoProhibido.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {ContenidoProhibido.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {ContenidoProhibido.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Presentaciones.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Presentaciones.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Reclamos.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Reclamos.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Privacidad.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Privacidad.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Privacidad.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Derechos.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Derechos.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Derechos.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {SinGarantia.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {SinGarantia.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {SinGarantia.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Indemnizacion.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Indemnizacion.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Finalizacion.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Finalizacion.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Finalizacion.description2}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {LeyAplicable.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {LeyAplicable.description1}
        </h2>
        <br />
        <h1 className="text-lime-600 text-2xl font-sans font-bold mt-8 mb-6">
          {Disposiciones.title}
        </h1>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Disposiciones.description1}
        </h2>
        <br />
        <h2 className="text-white text-justify leading-relaxed font-sans text-lg">
          {Disposiciones.description2}
        </h2>
        <br />
      </div>

      <br />
    </BaseLayout>
  );
};

export default Terms;
