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
        style={styles.ImageBackground_22_122}
      />
      <View style={styles.View_22_47}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf95/e3a7/a25b64e88efce0e2f2b117d4109e956c"
          }}
          style={styles.TouchableOpacity_I22_47_17_60}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_59"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f8/2927/c5713a2dadd50552f123776212aaf899"
          }}
          style={styles.ImageBackground_I22_47_17_61}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46a1/4cde/df2bbab562e9c6a44690323adfc40103"
          }}
          style={styles.TouchableOpacity_I22_47_17_62}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_235"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978f/61e2/51f7de76d1ec918048adaf4829c28618"
          }}
          style={styles.TouchableOpacity_I22_47_17_63}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_158"))
          }
        />
      </View>
      <View style={styles.View_22_90}>
        <View style={styles.View_22_79}>
          <View style={styles.View_I22_79_15_8} />
          <View style={styles.View_I22_79_15_9}>
            <Text text="" style={styles.Text_I22_79_15_9} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43cc/7e0d/19a1c897f752ef9e3d427bf593d8d9bf"
        }}
        style={styles.ImageBackground_22_82}
      />
      <View style={styles.View_22_91}>
        <View style={styles.View_22_92} />
        <View style={styles.View_22_94}>
          <Text style={styles.Text_22_94}>VERIFICACION PROXIMA</Text>
        </View>
        <View style={styles.View_22_95}>
          <Text style={styles.Text_22_95}>
            FECHA LIMITE EL 31 DE JULIO 2021
          </Text>
        </View>
        <View style={styles.View_22_96}>
          <Text style={styles.Text_22_96}>FORD ESCAPE AGT397</Text>
        </View>
      </View>
      <View style={styles.View_22_97}>
        <View style={styles.View_22_98} />
        <View style={styles.View_22_99}>
          <Text style={styles.Text_22_99}>VERIFICACION PROXIMA</Text>
        </View>
        <View style={styles.View_22_100}>
          <Text style={styles.Text_22_100}>
            FECHA LIMITE EL 31 DE JULIO 2021
          </Text>
        </View>
        <View style={styles.View_22_101}>
          <Text style={styles.Text_22_101}>FORD ESCAPE AGT397</Text>
        </View>
      </View>
      <View style={styles.View_22_107}>
        <View style={styles.View_22_108} />
        <View style={styles.View_22_109}>
          <Text style={styles.Text_22_109}>VERIFICACION PROXIMA</Text>
        </View>
        <View style={styles.View_22_110}>
          <Text style={styles.Text_22_110}>
            FECHA LIMITE EL 31 DE JULIO 2021
          </Text>
        </View>
        <View style={styles.View_22_111}>
          <Text style={styles.Text_22_111}>FORD ESCAPE AGT397</Text>
        </View>
      </View>
      <View style={styles.View_22_102}>
        <View style={styles.View_22_103} />
        <View style={styles.View_22_104}>
          <Text style={styles.Text_22_104}>VERIFICACION PROXIMA</Text>
        </View>
        <View style={styles.View_22_105}>
          <Text style={styles.Text_22_105}>
            FECHA LIMITE EL 31 DE JULIO 2021
          </Text>
        </View>
        <View style={styles.View_22_106}>
          <Text style={styles.Text_22_106}>FORD ESCAPE AGT397</Text>
        </View>
      </View>
      <View style={styles.View_22_112}>
        <Text style={styles.Text_22_112}>1H</Text>
      </View>
      <View style={styles.View_22_113}>
        <Text style={styles.Text_22_113}>2H</Text>
      </View>
      <View style={styles.View_22_114}>
        <Text style={styles.Text_22_114}>HACE UN DÍA</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_22_122: {
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
  View_22_47: {
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
  TouchableOpacity_I22_47_17_60: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I22_47_17_61: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_47_17_62: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%")
  },
  TouchableOpacity_I22_47_17_63: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("0%")
  },
  View_22_90: {
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
  View_22_79: {
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
  View_I22_79_15_8: {
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
  View_I22_79_15_9: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7378580729166675%"),
    top: hp("0.847921736253415%"),
    justifyContent: "flex-start"
  },
  Text_I22_79_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_82: {
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
  View_22_91: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.901639344262296%")
  },
  View_22_92: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
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
  View_22_94: {
    width: wp("46.93333333333333%"),
    top: hp("4.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46666666666666%"),
    justifyContent: "flex-start"
  },
  Text_22_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_95: {
    width: wp("65.06666666666666%"),
    top: hp("7.923497267759561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333333333333%"),
    justifyContent: "flex-start"
  },
  Text_22_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_96: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0.8196721311475379%"),
    justifyContent: "flex-start"
  },
  Text_22_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_97: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("38.52459016393443%")
  },
  View_22_98: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
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
  View_22_99: {
    width: wp("46.93333333333333%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_22_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_100: {
    width: wp("65.06666666666666%"),
    top: hp("7.923497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_22_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_101: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_22_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_107: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("55.46448087431693%")
  },
  View_22_108: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
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
  View_22_109: {
    width: wp("46.93333333333333%"),
    top: hp("4.508196721311485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_22_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_110: {
    width: wp("65.06666666666666%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_22_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_111: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_22_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_102: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.901639344262296%")
  },
  View_22_103: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
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
  View_22_104: {
    width: wp("46.93333333333333%"),
    top: hp("4.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46666666666666%"),
    justifyContent: "flex-start"
  },
  Text_22_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_105: {
    width: wp("65.06666666666666%"),
    top: hp("7.923497267759561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333333333333%"),
    justifyContent: "flex-start"
  },
  Text_22_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_106: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0.8196721311475379%"),
    justifyContent: "flex-start"
  },
  Text_22_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_112: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("18.30601092896175%"),
    justifyContent: "flex-start"
  },
  Text_22_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_113: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("35.65573770491803%"),
    justifyContent: "flex-start"
  },
  Text_22_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_114: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_22_114: {
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
