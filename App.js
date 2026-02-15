import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Alumno from './Alumno';
import {imagenes} from './Icons'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const alumnos = [
    { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354', foto: imagenes.alumno1 },
    { nombre: 'CANTU SILVA JAVIER', matricula: '2111889', foto: imagenes.alumno2 },
    { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119', foto: imagenes.alumno3 },
    { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842', foto: imagenes.alumno4 },
    { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122', foto: imagenes.alumno5 },
    { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018231', foto: imagenes.alumno6 },
    { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104565', foto: imagenes.alumno7 },
    { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230', foto: imagenes.alumno8 },
    { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564', foto: imagenes.alumno9 },
    { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033', foto: imagenes.alumno10 },
    { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976', foto: imagenes.alumno11 },
    { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114', foto: imagenes.alumno12 },
    { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031244', foto: imagenes.alumno13 },
    { nombre: 'GRANJA PEÑA DIEGO', matricula: '2064734', foto: imagenes.alumno14 },
    { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '2031243', foto: imagenes.alumno15 },
    { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733', foto: imagenes.alumno16 },
    { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647', foto: imagenes.alumno17 },
    { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102', foto: imagenes.alumno18 },
    { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574', foto: imagenes.alumno19 },
    { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783', foto: imagenes.alumno20 },
    { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077', foto: imagenes.alumno21 },
    { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151', foto: imagenes.alumno22 },
    { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708', foto: imagenes.alumno23 },
    { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192', foto: imagenes.alumno24 },
    { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503', foto: imagenes.alumno25 },
    { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513', foto: imagenes.alumno26 },
    { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503', foto: imagenes.alumno27 },
    { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613', foto: imagenes.alumno28 },
    { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022', foto: imagenes.alumno29 },
    { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061', foto: imagenes.alumno30 },
    { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320', foto: imagenes.alumno31 },
    { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350', foto: imagenes.alumno32 },
    { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895', foto: imagenes.alumno33 },
    { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791', foto: imagenes.alumno34 },
    { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218', foto: imagenes.alumno35 }
  ];

  return (
    <SafeAreaProvider>  

      <SafeAreaView  style={estilos.container}>

        <ScrollView contentContainerStyle={estilos.contenido}>
          {alumnos.map((alumno) => 
          (
            <Alumno key={alumno.matricula} nombre={alumno.nombre} matricula={alumno.matricula} foto={alumno.foto}/>
          )
          )}
        </ScrollView>

      </SafeAreaView >

    </SafeAreaProvider> 
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  contenido: {
    backgroundColor: '#000000'
  }
});
