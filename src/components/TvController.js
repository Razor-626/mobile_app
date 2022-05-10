import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Button } from 'react-native';
import { Icon } from 'react-native-elements'

const imageOnButton = require('../images/on.png');
const imageChanelUp = require('../images/plus.png');
const imageChanelDown = require('../images/minus.png');
const imageUpMenuButton =require('../images/up.png');
const imageDownMenuButton =require('../images/down.png');
const imageLeftMenuButton =require('../images/left.png');
const imageRightMenuButton =require('../images/right.png');
const imageConfirmMenuButton =require('../images/ok.png');
const imageSoundOffButton =require('../images/sound-off.png');

export default function TvController() {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.tvController}>
      <View style={styles.powerButtonBlock}>
        <TouchableOpacity onPress={onPress}>
          <View>
            <Image source={imageOnButton} style={styles.circleButtonImg}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.chanelButtonsBlock}>
        <View style={styles.chanelButtons}>
          <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageChanelUp} style={styles.circleButtonImg}/>
              </View>
          </TouchableOpacity>
          <Text style={styles.text}>Chanel</Text>
          <TouchableOpacity onPress={onPress}>
            <View>
              <Image source={imageChanelDown} style={styles.circleButtonImg}/>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onPress}>
            <View>
              <Image source={imageSoundOffButton} style={styles.circleButtonImg}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.chanelButtons}>
          <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageChanelUp} style={styles.circleButtonImg}/>
              </View>
          </TouchableOpacity>
          <Text style={styles.text}>Volume</Text>
          <TouchableOpacity onPress={onPress}>
            <View>
              <Image source={imageChanelDown} style={styles.circleButtonImg}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuButtonsBlock}>
        <View>
          <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageUpMenuButton} style={styles.circleButtonImg}/>
              </View>
            </TouchableOpacity>
        </View>
        <View style={styles.rowMenuButtons}>
          <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageLeftMenuButton} style={styles.circleButtonImg}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageConfirmMenuButton} style={styles.circleButtonImg}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageRightMenuButton} style={styles.circleButtonImg}/>
              </View>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onPress}>
              <View>
                <Image source={imageDownMenuButton} style={styles.circleButtonImg}/>
              </View>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pagePressCounter}>
        <Text style={styles.text}>Press count: {count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tvController: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'    
  },
  circleButtonImg: { 
    height: 70,
    width: 70,
  },
  chanelButtonsBlock:{
    height: 250,
    flexDirection: "row",
    alignItems:"center", 
    justifyContent: "space-around",    
    marginTop: 25
  },
  chanelButtons: {
    flex: 1,
    height: 200,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  text: {
    fontSize: 19
  },
  powerButtonBlock: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40
  }, 
  menuButtonsBlock: {
    height: 225,
    alignItems: "center",
    justifyContent: "space-between"
  },
  rowMenuButtons:{
    flexDirection: "row",
    width: 225,
    justifyContent: "space-between",
    alignItems: "center"
  },
  pagePressCounter: {
    flex:1,
    justifyContent: "flex-end",
  }  
});
