import {React,use,useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Checkbox ,RadioButton,Divider,ProgressBar,Searchbar,Card,Switch,TouchableRipple, shadow} from "react-native-paper";
import Toast from "react-native-toast-message";
import Modal from "react-native-modal";


export default function Basicui() {
  
  const ShowMessage =()=>{
    Toast.show({
      type:"info",
      position:"top",
      text1:"Login failed",
      text2:"ok ok",
      visibilityTime:2000,
      // bottomOffset:300,
      // autoHide:true
    })
  }

  const [See,setSee] =useState(false);

  // const showmodal =()=>setVisible(true);
  // const hidemodal =()=>setVisible(false);
  // const [visible, setVisible] = useState(false);

  return (
    <View >
      {/* <StatusBar style="light" backgroundColor="blue" hidden={false} /> */}
            {/* <Icon name="home" size={60} color={"blue"} />
      <LottieView 
        source={require("./assets/Ani
        mation - 1736229823021.json")}
        autoPlay
        loop
        style={Mystyles.lottie}
      /> */}
      
      <SafeAreaView >
        <Text>Hello bro, Welcome to React Native!</Text>
        <Button
        mode="outlined"
        icon="home"
        textColor="white"
        rippleColor={"white"}
        loading={false}
        disabled={false}
        style={Mystyles.btn}
        >click me 
        </Button>
        <Divider />


        <Checkbox
        status="unchecked"

        />
        <Divider />


        <RadioButton
        status="checked"
        disabled={false}
        />

        <Divider
        bold={true}
        // leftInset={left}
        horizontalInset={true}
        style={{marginBottom:10}}
        />

        <ProgressBar
        progress={0.4}
        color="blue"
        // indeterminate={true}
        // visible={false}
        style={{marginBottom:20}}
        />
        
        <Searchbar
        placeholder="Search engine"
        // icon={"camera"}
        // loading={true}
        iconColor="orange"
        mode="bar"
        // mode="view"
        // showDivider={true}
        elevation={3}
        style={{marginBottom:20}}
        />

        <Card>
          <Card.Title title="Lion" subtitle="Mufasa" />
          <Card.Cover source={{uri:"https://www.artsindia.com/cdn/shop/articles/Lion_Art.jpg?v=1680327542"}}/>
          <Card.Content>
            <Text>Lion</Text>
          </Card.Content>
          <Card.Actions>
            <Button>ok</Button>
            <Button>Roar</Button>
          </Card.Actions>
        </Card>


        <Switch
        // value={true}
        value={true}
        // onValueChange={() =>setState(!state)}
        />
         
         <TouchableRipple
         rippleColor={"red"}
         onPress={()=>console.log("press")}
        //  onPress={()=>console.log("long pressed")}
         >
        <Text>Hello</Text>
        </TouchableRipple>

        <Modal
                isvisible={See}
                animationIn={"bounceIn"}
                animationInTiming={1600}
                animationOut={"bounceOut"}
                animationOutTiming={1600}
                // onBackdropPress={()=>setShow(false)}
                // backdropcolor="red"
                >
                  <Text style={{color:'white',fontSize:16}}>shiva</Text>
                </Modal>
                <Button
                        mode="contained"
                        icon="home"
                        onPress={()=>setSee(!See)}
                        >
                click me
                        </Button>
        
        {/* <Modal visible={visible} onDismiss={hidemodal} contentContainerStyle={Mystyles.modalstyle}>
          <Text>example modal</Text>
        </Modal>
        <Button style={{marginTop:30}} onPress={showmodal}>
        </Button> */}

        

        <Toast/>
       <Button mode="elevated" onPress={ShowMessage}>click me</Button>

      </SafeAreaView>
    </View>
    
  );
}

const Mystyles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 150,
    height: 150,
  },
  btn:{
    backgroundColor:"red",
    marginBottom:20
  },
  modalstyle:{
    backgroundColor:"white",
    padding:20
  }
  
});
