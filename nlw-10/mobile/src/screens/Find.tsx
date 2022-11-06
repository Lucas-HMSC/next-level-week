import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";
import { api } from "../services/api";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Find() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');

  const { navigate } = useNavigation();
  const toast = useToast();

  async function handleJoinPool() {
    try {
      setIsLoading(true);

      if (!code.trim()) {
        return toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.500',
        });
      }

      await api.post('/pools/join', { code });

      toast.show({
        title: 'Você entrou no bolão com sucesso',
        placement: 'top',
        bgColor: 'green.500',
      });

      setIsLoading(false);
      setCode(''); 

      navigate('pools');
    } catch (err) { 
      console.log(err);
      setIsLoading(false);

      if (err.response?.data?.message === 'Pool not found.') {
        return toast.show({
          title: 'Bolão não encontrado!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }

      if (err.response?.data?.message === 'You already joined this pool.') {
        return toast.show({
          title: 'Você já está nesse bolão',
          placement: 'top',
          bgColor: 'red.500',
        });
      }

      toast.show({
        title: 'Não foi possível encontrar o bolão',
        placement: 'top',
        bgColor: 'red.500',
      });
    }
  }

  return (
    <VStack
      flex={1}
      bgColor='gray.900'
    >
      <Header title='Buscar por código' showBackButton/>

      <VStack
        mt={8}
        mx={5}
        alignItems='center'
      >
        <Heading
          fontFamily='heading'
          color='white'
          fontSize='xl'
          mb={8}
          textAlign='center'
        >
          Encontre um bolão através de {'\n'}
          seu código único
        </Heading>

        <Input 
          mb={2}
          placeholder='Qual o código do bolão?'
          value={code}
          onChangeText={setCode}
          autoCapitalize="characters"
        />

        <Button
          title='BUSCAR BOLÃO'
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  );
}