import { StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const Home = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.safeAreaView}/>
            <SafeAreaView>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <Text style={ styles.mainTitle }>Daily Activity</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#1E242E';
    },
    mainTitle: {
        textAlign: 'center',
        color: colors.textWhite,
        fontFamily: font.bold,
        fontSize: 22
    }
});
