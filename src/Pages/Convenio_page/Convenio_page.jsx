import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TarjetaComercio from '../../componentes/CardEmpresa/CardEmpresa.jsx';
import './Convenio_page.css'

// Tu lista de datos (Simulando una base de datos)
const listaComercios = [
    {
        id: 1,
        empresa: "Club educador de futbol",
        servicio: "Escuela de Fútbol Infantil: Institución dedicada a la formación y entrenamiento de jóvenes talentos en fútbol.",
        beneficio: "Se aplica un descuento en el arancel de la cuota mensual y también en la compra de indumentaria dentro de la boutique sueño amarillo.",
        telefono: 3815741202,
        instagram: "cef18.tucuman",
        direccion: "España 3761",
        web: null,
        imagen: 'cef_sin_fondo_fix.png'
    },
    {
        id: 2,
        empresa: "Lic. en Nutricion Tamara Petrella",
        servicio: "Servicios Profesionales de Nutrición: Asesoramiento personalizado en alimentación, dietas y seguimiento continuo de planes nutricionales.",
        beneficio: "Obtención de descuentos especiales al momento de pagar tanto la consulta inicial como las sesiones de seguimiento nutricional.",
        telefono: 3814981991,
        instagram: "tamypetrella",
        direccion: "Aconquija 941",
        web: null,
        imagen: 'tamara_nutri_fix.png '
    },
    {
        id: 3,
        empresa: "El Quincho de Nacho",
        servicio: "Alquiler de Quincho para Eventos: Espacio amplio y completamente equipado para fiestas y reuniones, incluyendo mesas, sillas, área de parrilla y piscina.",
        beneficio: "Beneficio de un 30% de descuento sobre el precio total de alquiler publicado para el público en general.",
        telefono: 3815227610,
        instagram: "quincho.nacho",
        direccion: "Maipú 2150",
        web: null,
        imagen: 'quincho_nacho.jpg'
    },
    {
        id: 4,
        empresa: "Jockey gym",
        servicio: "Gimnasio e Instalaciones Deportivas: Ofrece servicios de fitness y entrenamiento físico en diversas sucursales.",
        beneficio: "Descuento del 10% si se opta por la membresía de pago mensual, o un 5% si se elige el plan de pago semestral.",
        telefono: 3813825269,
        instagram: "jockeygymok",
        direccion: "Varias sucursales ",
        web: null,
        imagen: 'jockey_gym_fix.png'
    },
    {
        id: 5,
        empresa: "ECO XTREME",
        servicio: "Turismo de Aventura y Actividades al Aire Libre: Servicios de turismo activo, enfocados en la seguridad y la responsabilidad en el desarrollo de experiencias en la naturaleza.",
        beneficio: "Se ofrecen descuentos variables que oscilan entre un 10% y un 20% sobre el precio final de las actividades y paquetes turísticos.",
        telefono: 3816045969,
        instagram: "eccoaventuras.xtreme",
        direccion: "Pasaje Pizarro 818",
        web: null,
        imagen: 'eco_extreme_fix.png'
    },
    {
        id: 6,
        empresa: "JP Interiorismo",
        servicio: "Consultoría y Diseño de Espacios: Servicios de asesoramiento y seguimiento en proyectos de Diseño de Interiores.",
        beneficio: "Aplicación de descuentos sobre el valor del servicio que se encuentran en el rango del 10% al 20%.",
        telefono: 3815046541,
        instagram: "jp.interiorismo",
        direccion: null,
        web: null,
        imagen: 'juli_penovi_fix.png'
    },
    {
        id: 7,
        empresa: "Presti laboratorio",
        servicio: "Laboratorio Bioquímico Clínico: Ofrece servicios de análisis y estudios de laboratorio, con la posibilidad de atención en varias sucursales.",
        beneficio: "Acceso a descuentos especiales destinados a pacientes que no poseen cobertura de obra social, permitiendo el pago a un valor de subsidio.",
        telefono: 3813878167,
        instagram: "laboratoriopresti ",
        direccion: "Av. solano vera 53, local 1, yb/ Lamadrid 612 SMT/ Marcos paz 646, SMT",
        web: "www.laboratoriopresti.com.ar",
        imagen: 'presti_lab_fix.png'
    },
    {
        id: 8,
        empresa: "Productor de seguro Sancor seguros",
        servicio: "Intermediario de Seguros Generales: Ofrece servicios de producción y gestión de seguros, incluyendo pólizas para automotores y otras coberturas.",
        beneficio: "Se otorga un descuento en la contratación de seguros tanto para el automotor como para otras categorías de pólizas.",
        telefono: 3814750464,
        instagram: null,
        direccion: "Rivadavia 2296",
        web: null,
        imagen: 'sancor_seguros_fix.png'
    },
    {
        id: 9,
        empresa: "SV Baterias",
        servicio: "Comercialización y Colocación de Baterías: Venta de baterías para vehículos y servicio de instalación en el momento.",
        beneficio: "Descuento directo del 10% sobre el precio de venta al público de las baterías.",
        telefono: 3815897166,
        instagram: "baterias.sv",
        direccion: "Avenida colon 802",
        web: null,
        imagen: 'sv_baterias_fix.png'
    },
    {
        id: 10,
        empresa: "Berro",
        servicio: "Fabricación Artesanal de Equipamiento: Taller dedicado a la producción de muebles y objetos de equipamiento utilizando hierro y madera.",
        beneficio: "Se aplican descuentos especiales en la compra de sus productos, con un rango que varía entre el 10% y el 20%.",
        telefono: 3815674981,
        instagram: "berro.artesanal",
        direccion: "Complejo 1300, ruta 9 kilometro 1300",
        web: null,
        imagen: 'logo_berro_fix.png'
    },
    {
        id: 11,
        empresa: "Bodega Don Angelo",
        servicio: "Venta Minorista de Vinos y Bebidas (Vinoteca): Local especializado en la comercialización de vinos y productos de bodega.",
        beneficio: "Disfrute de descuentos especiales al adquirir productos de la vinoteca.",
        telefono: 3814730364,
        instagram: "bodegadonangelo",
        direccion: null,
        web: null,
        imagen: 'bodega_angelo_fix.png'
    },
    {
        id: 12,
        empresa: "Grix",
        servicio: "Restaurante de Comida Rápida (Hamburguesería): Establecimiento dedicado a la venta de hamburguesas y otros productos de gastronomía rápida.",
        beneficio: "Descuento del 18% sobre el precio final de los productos al público.",
        telefono: 3815325347,
        instagram: "pedigrilx",
        direccion: "Avenida sarmiento 183",
        web: null,
        imagen: 'grilx_fix.png'
    },
    {
        id: 13,
        empresa: "Casa del ventilador",
        servicio: "Comercio de Ventiladores y Accesorios: Venta de una variedad de modelos de ventiladores y repuestos relacionados.",
        beneficio: "Aplicación de un 10% de descuento sobre el valor de todos los productos.",
        telefono: 3814217870,
        instagram: null,
        direccion: "Catamarca 221 ",
        web: null,
        imagen: 'casa_ventilador_fix.png'
    },
    {
        id: 14,
        empresa: "JMA tecno - partes",
        servicio: "Venta y Colocación de Módulos para Celulares: Comercialización al por mayor y menor de repuestos (módulos) para teléfonos, accesorios y servicio de instalación.",
        beneficio: "Descuento fijo del 10% sobre el precio de lista de cualquier producto disponible en el local.",
        telefono: 3814148328,
        instagram: "josetecnopartes2025",
        direccion: "Cordoba 678/paseo cordoba local 21/22",
        web: null,
        imagen: 'jma_tecno_fix.png'
    },
    // {
    //     id: 15,
    //     empresa: "Salon Nueva italia",
    //     servicio: "Alquiler de Salón para Eventos Sociales: Espacio equipado con mobiliario (mesas y sillas), parrilla y vajilla para la realización de fiestas y celebraciones.",
    //     beneficio: "Descuento del 15% aplicado sobre el precio total del alquiler del salón al público.",
    //     telefono: 3812166829,
    //     instagram: "nuevaitaliaeventos",
    //     direccion: "Italia 4767",
    //     web: null,
    //     imagen: 'nueva_italia_fix.png'
    // },
    {
        id: 16,
        empresa: "Domenico eventos",
        servicio: "Alquiler de Salón para Fiestas y Eventos: Espacio completo para celebraciones, equipado con mesas, sillas, parrilla y vajilla.",
        beneficio: "Se ofrece un 25% de descuento para eventos realizados de lunes a jueves, y un 15% de descuento para eventos de viernes a domingo.",
        telefono: 3816283785,
        instagram: "domenicoeventos",
        direccion: "Corrientes 1677",
        web: null,
        imagen: 'domenico_fix.png'
    },
    {
        id: 17,
        empresa: "Malala",
        servicio: "Salón de Estética y Belleza: Establecimiento que ofrece servicios relacionados con el cuidado personal y tratamientos estéticos.",
        beneficio: "30% de descuento sobre el precio total al pagar usando el CÓDIGO sueñoamarillo.",
        telefono: 3812393260,
        instagram: "malalaclubdebelleza",
        direccion: "Corrientes 1677 - moreno 107  (mercato) yerba buena ",
        web: "www.malala.ar",
        imagen: 'malala_fix.png'
    },
    {
        id: 18,
        empresa: "Academia ingresar",
        servicio: "Preparación para Ingreso a la Policía: Brinda formación teórica y acondicionamiento físico especializado para postulantes a fuerzas policiales.",
        beneficio: "Si sos alumno de la academia, contás con todos los beneficios de la mutual (presumiblemente Sueño Amarillo).",
        telefono: 3813585211,
        instagram: "academia.ingresar",
        direccion: "Haiti 96",
        web: null,
        imagen: 'academia_ingresar_fix.png'
    },
    {
        id: 19,
        empresa: "Electrus",
        servicio: "Comercialización de Electrodomésticos: Venta minorista de una amplia gama de artefactos eléctricos para el hogar.",
        beneficio: "Se aplica un 15% de descuento en la compra de cualquiera de los electrodomésticos.",
        telefono: 3816795369,
        instagram: "electrustucuman",
        direccion: "San Martin 991",
        web: null,
        imagen: 'electrus_fix.png'
    },
    {
        id: 20,
        empresa: "Mix",
        servicio: "Tecnología y Consola Técnica: Local dedicado a la venta de tecnología y equipamiento técnico/electrónico.",
        beneficio: "*Beneficio no especificado en la imagen.*",
        telefono: 3815511122,
        instagram: "mix.tecnologiaa",
        direccion: "Hiper chango Mas - Camino del peru 950 -- Chango mas - BRS -- Chango Mas Av Jujuy",
        web: null,
        imagen: 'mix_fix.png'
    },
    {
        id: 21,
        empresa: "Motok estudio jurídico",
        servicio: "Servicios de Asesoría Legal: Brinda consultoría profesional y orientación en temas jurídicos.",
        beneficio: "Se otorga 1 consulta inicial y 1 asesoría legal de forma totalmente gratuita antes de aplicar cualquier descuento posterior en servicios continuos.",
        telefono: 3815066869,
        instagram: "estudiomotok",
        direccion: "Mendoza 2490",
        web: null,
        imagen: 'motok_estudio_juridico_fix.jpg'
    },
    {
        id: 22,
        empresa: "ARN Lubricentro",
        servicio: "Servicios de Mantenimiento Automotor: Ofrece servicios de lubricentro, venta de repuestos y cambio de aceite para vehículos.",
        beneficio: "Descuento del 10% aplicado sobre el precio de los servicios y productos vendidos al público.",
        telefono: 3815082249,
        instagram: "arnlubricentro",
        direccion: "Avenida america 528",
        web: null,
        imagen: 'lubricentro_fix.png'
    },
    {
        id: 23,
        empresa: "Mc consultora higiene y seguridad",
        servicio: "Consultoría en Higiene y Seguridad Laboral: Servicios profesionales brindados por un Licenciado en Seguridad e Higiene para asesoramiento empresarial.",
        beneficio: "Se ofrece 1 consulta inicial y 1 asesoría de forma totalmente gratuita antes de aplicar cualquier descuento en servicios a largo plazo.",
        telefono: 3812004298,
        instagram: null,
        direccion: null,
        web: null,
        imagen: 'mc_consultora_fix.png'
    },
    {
        id: 24,
        empresa: "Lomas Aberturas",
        servicio: "Carpintería de Aluminio - Aberturas de aluminio que transforman tus espacios",
        beneficio: "Descuentos Especiales",
        telefono: 3815302992,
        instagram: "lomas_aberturas_aluminio",
        direccion: null,
        web: null,
        imagen: 'lomas_aberturas_fix.png'
    }
];
const Convenio_page= () => {
  // 1. Obtener el ID de la URL
  const { idEmpresa } = useParams();

  // 2. Buscar el comercio en la lista
  // IMPORTANTE: El id de la URL llega como texto (string), por eso usamos parseInt
  const comercioEncontrado = listaComercios.find(c => c.id === parseInt(idEmpresa));

  // 3. Manejar el caso de que no exista el ID (ej: /comercio/999)
  if (!comercioEncontrado) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>⚠️ Comercio no encontrado</div>;
  }

  // 4. Renderizar la Tarjeta pasando los datos encontrados
  return (
    <div className='contenedor_convenio_pages'>
      
      <TarjetaComercio 
        // Mapeamos las propiedades de tu JSON a las props del componente
        imagen={comercioEncontrado.imagen}
        nombre={comercioEncontrado.empresa} 
        servicio={comercioEncontrado.servicio}
        beneficio={comercioEncontrado.beneficio}
        telefono={comercioEncontrado.telefono}
        instagram={comercioEncontrado.instagram}
        web={comercioEncontrado.web}
        // Agregamos dirección ya que tu JSON la trae
        direccion={comercioEncontrado.direccion} 
      />

      
    </div>
  );
};

export default Convenio_page;