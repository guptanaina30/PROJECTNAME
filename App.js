import * as React from 'react';
import RootNavigation from './src/navigation';

const App = () => {
  return <RootNavigation />;
};
export default App;




























// import { NavigationContainer } from '@react-navigation/native';
// import React, {useState} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

// const App = () => {
//   const MainSection = () => {
//     return (
//       <View>
//         <TouchableOpacity style={styles.mainSec}></TouchableOpacity>
//       </View>
//     );
//   };
//   const SubSection = () => {
//     return (
//       <View>
//         <TouchableOpacity style={styles.subSec}></TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <>
//       <NavigationContainer>

//       <View style={styles.container}>
//         <MainSection />
//         <SubSection />
//       </View>
//       </NavigationContainer>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     // flexWrap: 'wrap',
//   },
//   navBox: {
//     backgroundColor: 'red',
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 30,
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   mainSec: {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontSize: 30,
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     position: 'absolute',
//     top: 100,
//   },
//   subSec: {
//     backgroundColor: 'cyan',
//     color: 'white',
//     fontSize: 30,
//     width: 250,
//     height: 250,
//     borderRadius: 10,
//     elevation: 4,
//   },
//   btn: {
//     margin: 30,
//     padding: 45,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   sizeText: {
//     fontSize: 18,
//   },
//   mainSize: {
//     fontSize: 20,
//     width: 100,
//     height: 80,
//   },
// });
// export default App;

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image
// } from 'react-native';
// import pic from './download.png'
// const App = () => {
//   const [colour, setColor] = useState('');

//   const [bgColor,setBgColor] = useState('black')

//   const onPressBox = boxColor => setColor(boxColor);
//   const onPressBoxes = boxBgColor =>setBgColor(boxBgColor)

//   const dataSource = [
//     {
//       name: 'Yellow',
//       color: 'yellow',
//     },
//     {
//       name: 'Blue',
//       color: 'blue',
//     },
//     {
//       name: 'Green',
//       color: 'green',
//     },
//     {
//       name: 'Red',
//       color: 'red',
//     },
//     {
//       name: 'Grey',
//       color: 'grey',
//     },
//     {
//       name: 'Purple',
//       color: 'purple',
//     },
//     {
//       name: 'Cyan',
//       color: 'cyan',
//     },
//     {
//       name: 'Orange',
//       color: 'orange',
//     },
//     {
//       name: 'Azure',
//       color: 'azure',
//     },
//     {
//       name: 'Magenta',
//       color: 'magenta',
//     },
//     {
//       name: 'NavyBlue',
//       color: 'navyblue',
//     },
//     {
//       name: 'Olive',
//       color: 'olive',
//     },
//   ];

//   const NavBar = () => {
//     return (
//       <View style={styles.navBox}>
//         <Text style={styles.textStyle}>MYFirstApp</Text>
//         <Image
//         source={require('./download.png')}
//         />
//       </View>
//     );
//   };

//   const MainSection = () => {
//     return (
//       <View style={[styles.main, {backgroundColor:bgColor}]}>
//         <Text style={[styles.mainSize,styles.bgColor]}>I am {colour}</Text>
//       </View>
//     );
//   };
//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         style={[styles.btn,styles.item, {backgroundColor: item.color}]}
//         onPress={() => {
//       onPressBox(item.name),onPressBoxes(item.color);
//         }}>
//         <Text style={styles.sizeText}>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <>
//       <NavBar />
//       <View style={styles.container}>
//         <MainSection />
//       </View>
//         <View style={styles.container}>
//           <FlatList showsVerticalScrollIndicator={false}
//             data={dataSource}
//             renderItem={renderItem}
//           />
//         </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     // flexWrap: 'wrap',
//   },
//   navBox:{
//    backgroundColor: 'red'
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 30,
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   main: {
//     backgroundColor: 'white',
//     color: 'grey',
//     fontSize: 30,
//     margin: 100,
//     width: 200,
//     padding: 20,
//     borderRadius: 10,
//   },
//   btn: {
//     margin: 30,
//     padding: 45,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   sizeText: {
//     fontSize: 18,
//   },
//   mainSize: {
//     fontSize: 20,
//     width: 100,
//     height: 80,
//   },
// });
// export default App;

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// const App = () => {
//   const [colour, setColor] = useState('');

//   const onPressBox = boxColor => setColor(boxColor);

//   const dataSource = [
//     {
//       name: 'Yellow',
//       color: 'yellow',
//     },
//     {
//       name: 'Blue',
//       color: 'blue',
//     },
//     {
//       name: 'Green',
//       color: 'green',
//     },
//     {
//       name: 'Red',
//       color: 'red',
//     },
//     {
//       name: 'Grey',
//       color: 'grey',
//     },
//     {
//       name: 'Purple',
//       color: 'purple',
//     },
//     {
//       name: 'Cyan',
//       color: 'cyan',
//     },
//     {
//       name: 'Orange',
//       color: 'orange',
//     },
//     {
//       name: 'Azure',
//       color: 'azure',
//     },
//     {
//       name: 'Magenta',
//       color: 'magenta',
//     },
//     {
//       name: 'NavyBlue',
//       color: 'navyblue',
//     },
//     {
//       name: 'Olive',
//       color: 'olive',
//     },
//   ];

//   const MainSection = () => {
//     return (
//       <View style={[styles.main, {backgroundColor: 'white'}]}>
//         <Text style={styles.mainSize}>I am {colour}</Text>
//       </View>
//     );
//   };

//   const NavBar = () => {
//     return (
//       <View>
//         <Text style={styles.textStyle}>MYFirstApp</Text>
//       </View>
//     );
//   };

//   return (
//     <>
//       <NavBar />
//       <View style={styles.container}>
//         <MainSection />
//       </View>
//       <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
//         <View style={styles.container}>
//           {dataSource.map(data => {
//             console.log('Data --', data);
//             return (
// <TouchableOpacity
//   style={[styles.btn, {backgroundColor: data.color}]}
//   onPress={() => {
//     onPressBox(data.name);
//   }}>
//   <Text style={styles.sizeText}>{data.name}</Text>
// </TouchableOpacity>
//             );
//           })}
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     flexWrap: 'wrap',
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 30,
//     padding: 20,
//     backgroundColor: 'black',
//   },
//   main: {
//     backgroundColor: 'white',
//     color: 'grey',
//     fontSize: 30,
//     margin: 100,
//     width: 200,
//     padding: 20,
//     borderRadius: 10,
//   },
//   btn: {
//     margin: 30,
//     padding: 45,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   sizeText: {
//     fontSize: 18,
//   },
//   mainSize: {
//     fontSize: 20,
//     width: 100,
//     height: 80,
//   },
// });
// export default App;
