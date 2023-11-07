import React from "react";
import { View } from 'react-native';

const movements = {
    'piedra': ['papel', 'spock'],
    'papel': ['tijera', 'lagarto'],
    'tijera': ['piedra', 'spock'],
    'lagarto': ['piedra', 'tijera'],
    'spock': ['papel', 'lagarto']
  };

const Buttons = () => {

    return(
        <View>
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                <Button name="piedra" />
                <Button name="papel" />
                <Button name="tijera" />
                <Button name="lagarto" />
                <Button name="spock" />
            </View>
        </View>
    );

};