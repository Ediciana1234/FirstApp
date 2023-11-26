import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
 
const Login = () => {
   
    return (
        
        <>
            <View>
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View>
                <TextInput
                       style={styles.input}
                       placeholder="usuario"
                />
                <TextInput
                      style={styles.input}
                      placeholder="senha"
                      secureTextEntry={true}
                />
            </View>

            <View>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
            </View>    
        </>
    );

}

const styles = StyleSheet.create({
 
    titulo: {
        fontSize: 30,
        textAlign:'center',
        margintop: 20,
        marginBottom: 20,
    },
    input:{
        height: 50,
        width: 350,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10,
        boderRadius: 10,
        fontSize: 16,
    },
    button:{
        height: 50,
        width:350,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    textButton:{
        fontSizer:24,
        color: '#fff',
    }
});
 export default Login;