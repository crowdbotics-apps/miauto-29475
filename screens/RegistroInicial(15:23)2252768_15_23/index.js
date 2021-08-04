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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ef/8bf7/e0f628420e59d5bff1a94f85e2c6dba3"
        }}
        style={styles.ImageBackground_22_119}
      />
      <View style={styles.View_17_31}>
        <Text style={styles.Text_17_31}>BIENVENIDO </Text>
      </View>
      <View style={styles.View_17_32}>
        <Text style={styles.Text_17_32}>
          AUN NO TIENES AUTOS REGISTRADOS, REGSITRA UNO PARA COMENZAR
        </Text>
      </View>
      <View style={styles.View_17_36}>
        <View style={styles.View_17_33} />
        <View style={styles.View_17_34}>
          <Text style={styles.Text_17_34}>MARCA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_17_35}
        />
      </View>
      <View style={styles.View_17_40}>
        <View style={styles.View_I17_40_17_33} />
        <View style={styles.View_I17_40_17_34}>
          <Text style={styles.Text_I17_40_17_34}>SUBMARCA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_I17_40_17_35}
        />
      </View>
      <View style={styles.View_17_96}>
        <View style={styles.View_I17_96_17_33} />
        <View style={styles.View_I17_96_17_34}>
          <Text style={styles.Text_I17_96_17_34}>MODELO (AÑO)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_I17_96_17_35}
        />
      </View>
      <View style={styles.View_17_44}>
        <View style={styles.View_I17_44_17_33} />
        <View style={styles.View_I17_44_17_34}>
          <Text style={styles.Text_I17_44_17_34}>REGION DE REGISTRO</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_I17_44_17_35}
        />
      </View>
      <View style={styles.View_17_48}>
        <View style={styles.View_I17_48_17_33} />
        <View style={styles.View_I17_48_17_34}>
          <Text style={styles.Text_I17_48_17_34}>HOLOGRAMA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_I17_48_17_35}
        />
      </View>
      <View style={styles.View_17_52}>
        <View style={styles.View_I17_52_17_33} />
        <View style={styles.View_I17_52_17_34}>
          <Text style={styles.Text_I17_52_17_34}>
            ULTIMA FECHA DE VERIFICACION
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4091/09d1/00c8ff986840dd1d75b560261fa02403"
          }}
          style={styles.ImageBackground_I17_52_17_35}
        />
      </View>
      <View style={styles.View_17_37}>
        <View style={styles.View_I17_37_15_8} />
        <View style={styles.View_I17_37_15_9}>
          <Text style={styles.Text_I17_37_15_9}>AGT397</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_17_56}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("17_59"))
        }
      >
        <View style={styles.View_I17_56_5_6} />
        <View style={styles.View_I17_56_5_7}>
          <Text style={styles.Text_I17_56_5_7}>REGISTRAR AUTO</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_22_119: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.400000000000006%"),
    top: hp("67.89617486338798%"),
    resizeMode: "cover"
  },
  View_17_31: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("7.5136612021857925%"),
    justifyContent: "flex-start"
  },
  Text_17_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_32: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("17.759562841530055%"),
    justifyContent: "flex-start"
  },
  Text_17_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_36: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_17_34: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_40: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_40_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_I17_40_17_34: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_40_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_40_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_96: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("53.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_96_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_I17_96_17_34: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_96_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_96_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_44: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("60.65573770491803%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_44_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_I17_44_17_34: {
    flexGrow: 1,
    width: wp("42.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_44_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_44_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_48: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("68.16939890710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_48_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_I17_48_17_34: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_48_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_48_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_52: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("76.22950819672131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_52_17_33: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
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
  View_I17_52_17_34: {
    flexGrow: 1,
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_52_17_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_52_17_35: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("0%")
  },
  View_17_37: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("31.010928961748636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_37_15_8: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
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
  View_I17_37_15_9: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7378662109375%"),
    top: hp("0.847921736253415%"),
    justifyContent: "flex-start"
  },
  Text_I17_37_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_17_56: {
    width: wp("78.4%"),
    minWidth: wp("78.4%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_56_5_6: {
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
  View_I17_56_5_7: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_I17_56_5_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
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
