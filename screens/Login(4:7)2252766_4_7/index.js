import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c44/ac8c/a0aab3a950601a9b49abbde3472b8ef8"
        }}
        style={styles.ImageBackground_4_8}
      />
      <View style={styles.View_4_9}>
        <Text style={styles.Text_4_9}>BIENVENIDO </Text>
      </View>
      <View style={styles.View_4_13}>
        <Text style={styles.Text_4_13}>INICIAR SESION</Text>
      </View>
      <View style={styles.View_5_3}>
        <Text style={styles.Text_5_3}>¿AUN NO TIENES CUENTA?</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_7_9}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("15_23"))
        }
      >
        <View style={styles.View_5_6} />
        <View style={styles.View_5_7}>
          <Text style={styles.Text_5_7}>ENTRAR COMO INVITADO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_7_17}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("17_59"))
        }
      >
        <View style={styles.View_I7_17_5_6} />
        <View style={styles.View_I7_17_5_7}>
          <Text style={styles.Text_I7_17_5_7}>INICIAR SESION</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_7_14}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_23"))
        }
      >
        <View style={styles.View_I7_14_5_6} />
        <View style={styles.View_I7_14_5_7}>
          <Text style={styles.Text_I7_14_5_7}>REGISTRARSE</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_15_10}>
        <View style={styles.View_15_8} />
        <View style={styles.View_15_9}>
          <Text style={styles.Text_15_9}>pabloriverob@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_15_11}>
        <View style={styles.View_I15_11_15_8} />
        <View style={styles.View_I15_11_15_9}>
          <Text style={styles.Text_I15_11_15_9}>**************</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_4_8: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.13333333333333%"),
    top: hp("66.2568306010929%"),
    resizeMode: "cover"
  },
  View_4_9: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("18.0327868852459%"),
    justifyContent: "flex-start"
  },
  Text_4_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_13: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("27.595628415300546%"),
    justifyContent: "flex-start"
  },
  Text_4_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_3: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_5_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_9: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("60.79234972677595%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_6: {
    flexGrow: 1,
    width: wp("78.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 35, 155, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_5_7: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333332%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_5_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_17: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("43.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_17_5_6: {
    flexGrow: 1,
    width: wp("78.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 35, 155, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I7_17_5_7: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I7_17_5_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_14: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("54.50819672131148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_14_5_6: {
    flexGrow: 1,
    width: wp("78.4%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 35, 155, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I7_14_5_7: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I7_14_5_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_10: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("31.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_8: {
    flexGrow: 1,
    width: wp("78.4%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_15_9: {
    flexGrow: 1,
    width: wp("47.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0.8196721311475343%"),
    justifyContent: "flex-start"
  },
  Text_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_11: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("37.704918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_11_15_8: {
    flexGrow: 1,
    width: wp("78.4%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I15_11_15_9: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I15_11_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
