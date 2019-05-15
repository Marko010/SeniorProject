/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Button, TouchableHighlight, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ImagePicker from 'react-native-image-picker'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

handleUploadPhoto = () => {
  fetch("http://localhost:192.168.225.81/api/upload", {
    method: "POST",
    body: createFormData(this.state.photo, {userId: "123"})
  })
    .then(response => response.json())
    .then(response => {
        console.log("upload success", response);
        alert("Upload sucess!");
        this.setState({ photo:null });
    })
    .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
    });
};

type Props = {};
class SalesScreen extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.menubar}>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Sales')}
            >
            <View style={styles.currentmenucircle}>
              <Text style={styles.menutext}>S</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Post')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Categories')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Forums')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>F</Text>
            </View>
          </TouchableHighlight>
        </View>




          <View style={styles.scrollview}>
            <ScrollView>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('SalesPost')}
            >
              <View style={styles.productbox}>
              </View>
            </TouchableHighlight>

              <View style={styles.pagenavigator}>
                <View style={styles.pagenumbox}>
                  <Text style={styles.pagenumtext}>
                    Prev
                  </Text>
                </View>
                <View style={styles.pagenumbox}>
                  <Text style={styles.pagenumtext}>
                    Next
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
      </View>
    );
  }
}

class PostScreen extends React.Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if(response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  static navigationOptions = { title: 'Welcome', header: null };

  constructor(props) {
    super(props);
    this.state = { text1: 'age', text2: 'weight', text3: 'condition', text4: 'price', text5: 'category' };
  }
  render() {

    const{ photo } = this.state

    return (
      <View style={styles.container}>

        <View style={styles.menubar}>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Sales')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>S</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Post')}
            >
            <View style={styles.currentmenucircle}>
              <Text style={styles.menutext}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Categories')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Forums')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>F</Text>
            </View>
          </TouchableHighlight>
        </View>





        <View style={styles.postscreenview}>

          <View style={styles.posttopview}>
            <View style={styles.imageonpostview}>
                {photo && (
                  <React.Fragment>
                  <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 120, height: 120 }}
                  />
                  <Button title="Upload Photo" onPress={this.handleUploadPhoto}/>
                  </React.Fragment>
                )}
                <Button title="Choose Photo" onPress={this.handleChoosePhoto}/>
            </View>
            <View style={styles.postviewtextview}>
              <View style={styles.singleposttextview}>
                <Text style={styles.postviewtext}>Age:</Text>
                <TextInput
                  style={{height: 40, fontSize: 20,}}
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                />
              </View>
              <View style={styles.singleposttextview}>
                <Text style={styles.postviewtext}>Weight:</Text>
                <TextInput
                  style={{height: 40, fontSize: 20}}
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                />
              </View>
              <View style={styles.singleposttextview}>
                <Text style={styles.postviewtext}>Condition:</Text>
                <TextInput
                  style={{height: 40, fontSize: 20}}
                  onChangeText={(text3) => this.setState({text3})}
                  value={this.state.text3}
                />
              </View>
              <View style={styles.singleposttextview}>
                <Text style={styles.postviewtext}>Price:</Text>
                <TextInput
                  style={{height: 40, fontSize: 20}}
                  onChangeText={(text4) => this.setState({text4})}
                  value={this.state.text4}
                />
              </View>
              <View style={styles.singleposttextview}>
                <Text style={styles.postviewtext}>Category:</Text>
                <TextInput
                  style={{height: 40, fontSize: 20}}
                  onChangeText={(text5) => this.setState({text5})}
                  value={this.state.text5}
                />
              </View>
            </View>
          </View>
            <View style={styles.itemdescryption}>

            </View>
            <View style={styles.postbuttonview}>
              <View style={styles.postbutton}>
                <Text style={styles.pagenumtext}>Post</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

class CategoriesScreen extends Component<Props> {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.menubar}>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Sales')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>S</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Post')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Categories')}
            >
            <View style={styles.currentmenucircle}>
              <Text style={styles.menutext}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Forums')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>F</Text>
            </View>
          </TouchableHighlight>
        </View>





        <View style={styles.categorymainview}>
            <View style={styles.categorybuttonview}>
              <Text style={styles.categorytext}>Technology</Text>
            </View>
            <View style={styles.categorybuttonview}>
              <Text style={styles.categorytext}>Historical</Text>
            </View>
            <View style={styles.categorybuttonview}>
              <Text style={styles.categorytext}>Appliances</Text>
            </View>
            <View style={styles.categorybuttonview}>
              <Text style={styles.categorytext}>Cosmetics</Text>
            </View>

        </View>
      </View>
    );
  }
}

class ForumsScreen extends Component<Props> {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.menubar}>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Sales')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>S</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Post')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Categories')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Forums')}
            >
            <View style={styles.currentmenucircle}>
              <Text style={styles.menutext}>F</Text>
            </View>
          </TouchableHighlight>
        </View>





        <View style={styles.forumsmainview}>
          <Text style={styles.forumtoptext}>Most viewed post:</Text>
          <View style={styles.forumstopbox}>
          </View>
          <View style={styles.forumsregbox}>
          </View>
        </View>
      </View>
    );
  }
}

class SalesPostScreen extends React.Component {


  static navigationOptions = { title: 'Welcome', header: null };

  render() {


    return (
      <View style={styles.container}>

        <View style={styles.menubar}>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Sales')}
            >
            <View style={styles.currentmenucircle}>
              <Text style={styles.menutext}>S</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Post')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Categories')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.push('Forums')}
            >
            <View style={styles.menucircle}>
              <Text style={styles.menutext}>F</Text>
            </View>
          </TouchableHighlight>
        </View>






        <View style={styles.postscreenview}>

        <View style={styles.posttopview}>
          <View style={styles.imageonpostview}>
          </View>
          <View>
            <Text styles={styles.postviewtext}>Age:</Text>
            <Text styles={styles.postviewtext}>Weight:</Text>
            <Text styles={styles.postviewtext}>Condition:</Text>
            <Text styles={styles.postviewtext}>Price:</Text>
            <Text styles={styles.postviewtext}>Category:</Text>
          </View>
        </View>
          <View style={styles.itemdescryption}>

          </View>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#C4DFE6',
    flexDirection: 'column',
  },
  menubar: {
    flex: 0.165,
    backgroundColor: '#003B46',
    borderBottomWidth: 2,
    borderColor: '#66A5AD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  scrollview: {
    flex: 0.835,
    padding: 10,
  },
  productbox:{
    backgroundColor: '#66A5AD',
    height: 200,
    marginTop: 15,
  },
  pagenavigator:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  pagenumbox:{
    backgroundColor: '#003B46',
    height: 75,
    width: 125,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagenumtext: {
    fontSize: 50,
    color: '#C4DFE6',
  },
  menutext: {
    fontSize: 60,
    color: '#C4DFE6',
  },
  menucircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#66A5AD',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  currentmenucircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#003B46',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  imageonpostview: {
    backgroundColor: '#66A5AD',
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  postscreenview: {
    flex: 0.835,
    padding: 10,
  },
  itemdescryption: {
    backgroundColor: '#66A5AD',
    flex: 1,
  },
  posttopview: {
    flexDirection: 'row',
  },
  categorymainview:{
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flex: 0.835,
    padding: 10,
  },
  categorybuttonview: {
    backgroundColor: '#66A5AD',
    height: 112,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorytext: {
    fontSize: 50,
  },
  forumstopbox: {
    backgroundColor: '#66A5AD',
    flex: 0.25,
    marginTop: 10,
  },
  forumsregbox: {
    backgroundColor: '#66A5AD',
    flex: 0.75,
    marginTop: 20,
  },
  forumtoptext: {
    fontSize: 32,
  },
  forumsmainview: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flex: 0.835,
    padding: 10,
  },
  postviewtext: {
    fontSize: 20,
  },
  postviewtextview: {
    flex: 1,
    padding: 5,
  },
  singleposttextview: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  postbutton: {
    backgroundColor: '#003B46',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postbuttonview: {
    flex: 0.3,
    alignItems: 'stretch',
    justifyContent: 'center',
  }

});

const RootStack = createStackNavigator(

  {
    Sales: {
      screen: SalesScreen,
    },
    Post: {
      screen: PostScreen,
    },
    Categories: {
      screen: CategoriesScreen,
    },
    Forums: {
      screen: ForumsScreen,
    },
    SalesPost: {
      screen: SalesPostScreen,
    },
  },
  {
    initialRouteName: 'Sales',
  },

);

const AppContainer = createAppContainer(RootStack);

  export default class App extends Component<Props> {


  render() {
    return <AppContainer />;
  }
}

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo:uri.replace("file://", "")
    });

    Objects.keys(body).forEach(key => {
      data.append(key, bosy[key]);
    });

    return data;
};
