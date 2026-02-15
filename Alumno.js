import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';

export default function Alumno(props) {

  const [mostrar, setMostrar] = useState(false);
  
  return (
    <View style={styles.card}>
      
      {/* Fila principal */}

      <View style={styles.fila}>

        <Image source={props.foto} style={styles.imagen}/>

        <Text style={styles.nombre}>
          {props.nombre}
        </Text>

        <Pressable style={styles.boton} onPress={() => setMostrar(!mostrar)}>
          <Text style={styles.textoBoton}>
            {mostrar ? "Ocultar ↑" : "Ver mas ↓"}
          </Text>
        </Pressable>

      </View>

      {/* Matrícula que aparece debajo */}

      {mostrar && (
        <Text style={styles.matricula}>
          - Matricula: {props.matricula}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor: '#e78433',
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },

  fila:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imagen:{
    width: 75,
    height: 75,
    borderRadius: 50,
  },

  nombre:{
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },

  boton:{
    backgroundColor: '#df81d7',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  textoBoton:{
    fontSize: 30,
  },
  

  matricula:{
    marginTop: 8,
    fontSize: 20,
  }

});