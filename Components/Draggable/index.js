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
    // console.log(value);
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
        console.log(gesture);

        if(gesture.dx < 200){
          // alert('dans le plateau');

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


        // if (this.isDropArea(gesture)) {
        //   Animated.timing(this.state.opacity, {
        //     toValue: 1,
        //     duration: 1000
        //   }).start(() =>
        //     this.setState({
        //       showDraggable: false
        //     })
        //   );
        // }
      }
    });
  }


  // async compoentWillReceiveProps(){
  //   await this.setState({
  //     value: this.props.value,
  //     suit: this.props.suit
  //   })
  // }
  // dropCardFromDeckOnBoard = async () => {
  //
  // }

  isDropArea(gesture) {
    return gesture.moveY < 200;
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
            {/* <VectorCard suit={this.props.suit} value={this.props.value}/> */}
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


        // {/* <Animated.View key={key}
        //       {...this.mainPanResponder.panHandlers}
        //       style={{ ...this.mainPosition.getLayout() }}
        //       >
        //   <View style={{flex: 1}}>
        //
        //     <VectorCard key={key} suit={this.props.cardsHand[key].Suit} value={this.props.cardsHand[key].Value}/>
        //
        //
        //   </View>
        // </Animated.View> */}
      );
    }
  }
}

let CIRCLE_RADIUS = 30;
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
