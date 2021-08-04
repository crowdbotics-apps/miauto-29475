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
        style={styles.ImageBackground_22_267}
      />
      <View style={styles.View_22_236}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf95/e3a7/a25b64e88efce0e2f2b117d4109e956c"
          }}
          style={styles.TouchableOpacity_I22_236_17_60}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_59"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f8/2927/c5713a2dadd50552f123776212aaf899"
          }}
          style={styles.TouchableOpacity_I22_236_17_61}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_46"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46a1/4cde/df2bbab562e9c6a44690323adfc40103"
          }}
          style={styles.ImageBackground_I22_236_17_62}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978f/61e2/51f7de76d1ec918048adaf4829c28618"
          }}
          style={styles.TouchableOpacity_I22_236_17_63}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_158"))
          }
        />
      </View>
      <View style={styles.View_22_237}>
        <Text style={styles.Text_22_237}>JUAN GOMEZ</Text>
      </View>
      <View style={styles.View_22_238}>
        <Text style={styles.Text_22_238}>MIS AUTOS</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_22_256}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("17_59"))
        }
      >
        <View style={styles.View_22_239}>
          <Text style={styles.Text_22_239}>PLACA: BHH322</Text>
        </View>
        <View style={styles.View_22_242}>
          <Text style={styles.Text_22_242}>BMW M2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0d/8919/3328883f02369147b4c4a6104b109505"
          }}
          style={styles.ImageBackground_22_245}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_22_248}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("17_59"))
        }
      >
        <View style={styles.View_I22_248_22_193}>
          <Text style={styles.Text_I22_248_22_193}>FORD ESCAPE</Text>
        </View>
        <View style={styles.View_I22_248_22_199}>
          <Text style={styles.Text_I22_248_22_199}>PLACA: AGT3907</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba0a/72af/0634a7c42672053ace5575d9ebeeb7b0"
          }}
          style={styles.ImageBackground_I22_248_22_207}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_22_267: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.733333333333334%"),
    top: hp("67.34972677595628%"),
    resizeMode: "cover"
  },
  View_22_236: {
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
  TouchableOpacity_I22_236_17_60: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_236_17_61: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("0%")
  },
  ImageBackground_I22_236_17_62: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_236_17_63: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("0%")
  },
  View_22_237: {
    width: wp("40%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    justifyContent: "flex-start"
  },
  Text_22_237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_238: {
    width: wp("19.466666666666665%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    justifyContent: "flex-start"
  },
  Text_22_238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_22_256: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("36.6120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_239: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_22_239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_242: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_245: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("0.6830601092896131%")
  },
  TouchableOpacity_22_248: {
    width: wp("51.46666666666667%"),
    minWidth: wp("51.46666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("25.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_248_22_193: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_248_22_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I22_248_22_199: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_I22_248_22_199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I22_248_22_207: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
