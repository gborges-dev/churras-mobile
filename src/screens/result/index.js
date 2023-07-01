import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Result = ({route, navigation}) => {
    const [homens, setHomens] = useState('');
    const [mulheres, setMulheres] = useState('');
    const [criancas, setCriancas] = useState('');

    useEffect(() => {
        setHomens(route.params.homens);
        setMulheres(route.params.mulheres);
        setCriancas(route.params.homens);
    })
 
    

    return (
        <View>
            <Text>
                Teste
            </Text>
        </View>
    )
};

export default Result;