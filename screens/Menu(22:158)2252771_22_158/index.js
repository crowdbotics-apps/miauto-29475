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
        style={styles.ImageBackground_22_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ef/8bf7/e0f628420e59d5bff1a94f85e2c6dba3"
        }}
        style={styles.ImageBackground_22_266}
      />
      <View style={styles.View_22_160}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf95/e3a7/a25b64e88efce0e2f2b117d4109e956c"
          }}
          style={styles.TouchableOpacity_I22_160_17_60}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_59"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f8/2927/c5713a2dadd50552f123776212aaf899"
          }}
          style={styles.TouchableOpacity_I22_160_17_61}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_46"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46a1/4cde/df2bbab562e9c6a44690323adfc40103"
          }}
          style={styles.TouchableOpacity_I22_160_17_62}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_235"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978f/61e2/51f7de76d1ec918048adaf4829c28618"
          }}
          style={styles.ImageBackground_I22_160_17_63}
        />
      </View>
      <View style={styles.View_22_161}>
        <View style={styles.View_I22_161_22_79}>
          <View style={styles.View_I22_161_22_79_15_8} />
          <View style={styles.View_I22_161_22_79_15_9}>
            <Text text="" style={styles.Text_I22_161_22_79_15_9} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43cc/7e0d/19a1c897f752ef9e3d427bf593d8d9bf"
        }}
        style={styles.ImageBackground_22_162}
      />
      <View style={styles.View_45_65}>
        <Text style={styles.Text_45_65}>MIS AUTOS</Text>
      </View>
      <View style={styles.View_45_66}>
        <Text style={styles.Text_45_66}>MI PERFIL</Text>
      </View>
      <View style={styles.View_45_67}>
        <Text style={styles.Text_45_67}>MIS DOCUMENTOS</Text>
      </View>
      <View style={styles.View_45_68}>
        <Text style={styles.Text_45_68}>HISTORIAL DE TRAMITES</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_22_159: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.733333333333334%"),
    top: hp("69.12568306010928%"),
    resizeMode: "cover"
  },
  ImageBackground_22_266: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.733333333333334%"),
    top: hp("69.12568306010928%"),
    resizeMode: "cover"
  },
  View_22_160: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("102.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I22_160_17_60: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_160_17_61: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_160_17_62: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%")
  },
  ImageBackground_I22_160_17_63: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("0%")
  },
  View_22_161: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("11.33879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_161_22_79: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_161_22_79_15_8: {
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
  View_I22_161_22_79_15_9: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7378906250000004%"),
    top: hp("0.847921736253415%"),
    justifyContent: "flex-start"
  },
  Text_I22_161_22_79_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_162: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("12.021857923497267%")
  },
  View_45_65: {
    width: wp("19.466666666666665%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_45_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_66: {
    width: wp("17.333333333333336%"),
    top: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_45_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_67: {
    width: wp("32.266666666666666%"),
    top: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_45_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_68: {
    width: wp("42.66666666666667%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_45_68: {
    color: "rgba(255, 255, 255, 1)",
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
