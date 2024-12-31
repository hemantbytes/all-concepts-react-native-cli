import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import InfoDetails from './InfoDetails';

const UseEffectUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
//     useEffect ( () => {
//                console.log ("I'm Useeffect Hook")
//     }, [counter]);
//     useEffect ( () => {
//         console.log ("Score")
// }, [score]);
  return (
    <View>
      <Text style={ { fontSize : 20 } }>UseEffectUpdatingPhase</Text>
      <Text style={ { fontSize : 20 } }>Counter : {counter} </Text>
      <Text style={ { fontSize : 20 } }>Score : {score} </Text>
      <Button title="Counter" onPress={ () => setCounter(counter + 1) } />
      <Button title="Score" onPress={ () => setScore(score + 10) } />
      <InfoDetails count={counter} points={score} />
    </View>
  )
}

export default UseEffectUpdatingPhase;