
import React, {useState} from 'react';
import { SafeAreaView, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}){

    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [age, setAge] = useState('');
    const [mail, setMail] = useState('');
    const [homeTown, setHomeTown] = useState('');

    function handleSubmit(){
        if(!name || !surname || !age || !mail || !homeTown){
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş bırakılamaz.!');
            return;
        }
        const user = {
            name,
            surname,
            age,
            mail,
            homeTown,
        };
        navigation.navigate('MemberResultScreen', {user});
    }

    return(
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz..." onChangeText={setName}/>
            <Input label="Üye Soyadı" placeholder="Üyenin soyadını giriniz.." onChangeText={setSurName}/>
            <Input label="Üye Yaş" placeholder="Üyenin yaşını giriniz.." onChangeText={setAge}/>
            <Input label="Üye E-posta" placeholder="Üyenin e-posta adresini giriniz.." onChangeText={setMail}/>
            <Input label="Üye Memleketi" placeholder="Üyenin memleketini giriniz.." onChangeText={setHomeTown}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    )
}
export default MemberSign;