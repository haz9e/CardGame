import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Image,
  Text
} from "react-native";
import VectorCard from '../VectorCard/component'


// {i18n.t('login.players')}


export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y:this._val.y
        })
        this.state.pan.setValue({ x:0, y:0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: async (e, gesture) => {
        console.log('gesture.dx',gesture.dx);
        console.log('gesture.dy',gesture.dy);
        if(gesture.dy < -200){
          Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 0
          }).start(() =>
            this.setState({
              showDraggable: false
            })
          );
          this.props.dropCardFromDeckToBoard(this.props.suit, this.props.value);
        }else{
          this.state.pan.setValue({ x:0, y:0})
        }
      }
    });
  }
  setImage = (image) => {
    switch (image) {
      case 'spades':
      return require('../../assets/spades.png');
        break;
      case 'clubs':
      return require('../../assets/clover.png');
        break;
      case 'hearts':
      return require('../../assets/heart.png');
        break;
      case 'diamonds':
      return require('../../assets/diamond.png');
        break;
      default:
    }
  }

  render() {
    return (
      <View style={ this.state.showDraggable?{width: 50}:{}}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle]}
          >
            <View style={styles.containerCard}>
              <View style={styles.elementCard}>
                <View style={styles.elementCardBody}>
                  <Text style={styles.elementValue}>{this.props.value}</Text>
                  <Image source={this.setImage(this.props.suit)} style={styles.elementSuit}></Image>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      );
    }
  }
}
let styles = StyleSheet.create({
  containerCard:{
    flex: 1,
  },
  elementCard:{
    width: 40,
    height: 70,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    padding: 2
  },
  elementCardBody:{
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  elementSuit:{
    width: 15,
    height: 15
  },
  elementValue:{

  },

});
