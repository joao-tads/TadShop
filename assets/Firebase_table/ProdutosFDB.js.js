
import React, { Component } from 'react';
import { Text, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

//Autenticação anonima
import auth from '@react-native-firebase/auth';


const nomeTabela = "Produtos";

const styles = StyleSheet.create({
    line: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    }
});



class PessoaScreenFb extends Component {
    static navigationOptions = {
        title: 'Cadastro de pessoas',
    };

    state = { nome: "", fone: "", lista: [], user: null }


    componentDidMount() {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        //Does not have its own bindings to this or super, and should not be used as methods.
        //Sendo assim não perde o escopo e o this.setState pode ser usado
        auth().onAuthStateChanged((user) => {
            this.setState({ user: user });
        });
        this.listar()
    }


    listar() {
        console.log("listar");
        var func = async () => {
            pessoas = []
            query = await firestore().collection(nomeTabela).get();
            query.forEach(documentSnapshot => {
                //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                pessoas.push({ id: documentSnapshot.id, data: documentSnapshot.data() });
            });

            this.setState({ lista: pessoas })
        }
        func()
    }

    salvar() {
        //salva
        console.log("save");

        firestore()
            .collection(nomeTabela)
            .add({
                nome: this.state.nome,
                fone: this.state.fone,
            })
            .then(() => {
                console.log('User added!');
                this.listar();
            });

    }

    deletar(id) {
        Alert.alert(
            'Confirmação', 'Deseja realmente excluir esse item?',
            [
                {
                    text: 'Sim', onPress: () => {

                        firestore()
                            .collection(nomeTabela)
                            .doc(id)
                            .delete()
                            .then(() => {
                                console.log('User deleted!');
                            });

                        this.listar()
                    }
                },
                { text: 'Cancel', style: 'cancel', }
            ],
            { cancelable: false },
        );
    }



    anon() {
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }
                console.error(error);
            });
    }

    logout() {
        auth().signOut();
    }


    /*render(){

        console.log("lista:")
        console.log(this.state.lista)

        return <View>  
            
            {this.state.user == null &&
                <Button
                    title="Anon"
                    onPress={this.anon.bind(this)}
                    />
                ||
                <Button
                    title="Logout"
                    onPress={this.logout.bind(this)}
                    />
            }
            
            
            
            <TextInput 
                placeholder="Nome"
                onChangeText={text => this.setState({nome:text})}/>

            <TextInput 
                placeholder="Telefone"
                keyboardType="numeric"
                onChangeText={text => this.setState({fone:text})}/>

            <Button title="Salvar"
                    onPress={this.salvar.bind(this)}/>
            
            <ScrollView>
            {this.state.lista.map((p, i) => 
                <TouchableOpacity key={i} 
                                  onPress={ () => this.deletar(p.id)}>
                    <Text style={styles.line}>{p.data.nome} - {p.data.fone}</Text>
                </TouchableOpacity>
            )}
            </ScrollView>
            
        </View>
    }*/
}


export default PessoaScreenFb;