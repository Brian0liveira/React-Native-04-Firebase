import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import { livroFB } from '../../firebase/livroFB';

function Colecao({ navigation, detalhe }) {

    const [colecao, setColecao] = useState( [] );

    const livroFB = new livroFB();

    useEffect(() => {
        livroFB.pegarColecao()
        .orderBy('titulo')
        .onSnapshot((query) => {
            const itens = [];
            query.forEach((doc) => {
                itens.push({...doc.data(), id: doc.id});
            });
            setColecao(itens);
        });
    }, []);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }

    const editar = (item) =>{
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item}  detalhe = {() => editar(item)} />}
            />

        </View>
    )
}

export default Colecao;
