import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { MaterialIcons } from '@expo/vector-icons';
import { fontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { livroFB } from '../../firebase/livroFB';

function Item({ navigation, route }) {

    const [item, setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const livroFB = new livroFB();

    useEffect(() => {
        setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }
    
    const salvar = (item) => {
        operacao == 'adicionar' ? livroFB.adicionarLivro(item) : livroFB.editarLivro(item);
        voltar();
    }

    const remover = (item) => {
        livroFB.removerLivro(item);
        voltar();
    }

    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.header}>
                <TouchableOpacity onPress = {voltar}>
                    <MaterialIcons name = "arrow-back" size = {24} color = "white"/>
                </TouchableOpacity>

                <Text style={estiloItem.texto}>Item</Text>
                <Text></Text> 

            </View>


            <View style = {estiloItem.formularioContainer}>
                <View>
                    <fontAwesome5 name = "Livro" size = {24} color = "#192f6a"/>
                    <TextInput
                        style = {estiloItem.campo}
                        placeholder = "Titulo"
                        placeholderTextColor = "#FFFFFF"
                        onChangeText = {titulo => setItem({...item, titulo})}
                        value = {item.titulo}
                    /> 
                </View>

                <View style = {estiloItem.campoContainer}>
                    <fontAwesome5 name = "Autor" size = {26} color = "#192f6a" />
                        <TextInput
                            style = {estiloItem.campo}
                            placeholder = "Autor"
                            placeholderTextColor = "#FFFFFF"
                            onChangeText = {autor => setItem({...item, autor})}
                            value = {item.autor}
                        />
                </View>

                <View style = {estiloItem.campoContainer}>
                    <fontAwesome5 name = "Publicacao" size = {26} color = "#192f6a" />
                        <TextInput
                            style = {estiloItem.campo}
                            placeholder = "Data de publicação"
                            placeholderTextColor = "#FFFFFF"
                            keyboardType = "numeric"
                            maxLength = {4}
                            onChangeText = {anoPublicacao => setItem({...item, anoPublicacao})}
                            value = {item.anoPublicacao}
                        />
                </View>

                <View style = {estiloItem.campoContainer}>
                    <fontAwesome5 name = "Descricao" size = {26} color = "#192f6a" />
                    <ScrollView style = {estiloItem.campoDescricaoScroll}>
                        <TextInput
                            style = {estiloItem.campo}
                            placeholder = "Descrição"
                            placeholderTextColor = "#FFFFFF"
                            multiline = {true}
                            numberOfLines = {4}
                            blurOnSubmit = {false}
                            onChangeText = {descricao => setItem({...item, descricao})}
                            value = {item.descricao}
                        />
                    </ScrollView>
                </View>

                <View style = {estiloItem.botoesContainer}>

                    <TouchableOpacity onPress = {() => salvar(item)} style = {estiloItem.botaoContainer}>
                        <LinearGradient colors = {['#4c669f', '#192f6a', '#081a31']} style = {estiloItem.botao}>
                            <MaterialIcons name = "save" size = {28} color = "white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => remover(item)} style = {estiloItem.botaoContainer}>
                        <LinearGradient colors = {['#4c669f', '#192f6a', '#081a31']} style = {estiloItem.botao}>
                            <MaterialIcons name = "delete" size = {24} color = "white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View> 
            
            </View>

        </View>
        
    )
}

export default Item;