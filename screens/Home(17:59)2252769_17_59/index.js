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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8502/98e6/cecbf75cfa35dfe3711b3b2ec3f4f795"
        }}
        style={styles.ImageBackground_22_121}
      />
      <View style={styles.View_22_45}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf95/e3a7/a25b64e88efce0e2f2b117d4109e956c"
          }}
          style={styles.ImageBackground_17_60}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f8/2927/c5713a2dadd50552f123776212aaf899"
          }}
          style={styles.TouchableOpacity_17_61}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_46"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46a1/4cde/df2bbab562e9c6a44690323adfc40103"
          }}
          style={styles.TouchableOpacity_17_62}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_235"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978f/61e2/51f7de76d1ec918048adaf4829c28618"
          }}
          style={styles.TouchableOpacity_17_63}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("22_158"))
          }
        />
      </View>
      <View style={styles.View_17_93}>
        <View style={styles.View_17_64}>
          <Text style={styles.Text_17_64}>FORD ESCAPE</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8167/5912/28cc1bae48fb32ffe627a98c3f41f30f"
          }}
          style={styles.ImageBackground_17_92}
        />
      </View>
      <View style={styles.View_17_95}>
        <Text style={styles.Text_17_95}>AGT397</Text>
      </View>
      <View style={styles.View_17_109}>
        <View style={styles.View_17_101} />
        <View style={styles.View_17_105}>
          <Text style={styles.Text_17_105}>SEGURO</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1911/86d5/42d0560b900f75da6ebb6d4971f752b6"
          }}
          style={styles.ImageBackground_17_123}
        />
        <View style={styles.View_17_133}>
          <Text style={styles.Text_17_133}>VENCIMIENTO</Text>
        </View>
        <View style={styles.View_17_142}>
          <Text style={styles.Text_17_142}>30 DE AGOSTO 2021</Text>
        </View>
      </View>
      <View style={styles.View_17_110}>
        <View style={styles.View_I17_110_17_101} />
        <View style={styles.View_I17_110_17_105}>
          <Text style={styles.Text_I17_110_17_105}>VERIFICACION</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0d/8919/3328883f02369147b4c4a6104b109505"
          }}
          style={styles.ImageBackground_I17_110_17_123}
        />
        <View style={styles.View_I17_110_17_133}>
          <Text style={styles.Text_I17_110_17_133}>
            LIMITE PROXIMA VERIFICACION
          </Text>
        </View>
        <View style={styles.View_I17_110_17_142}>
          <Text style={styles.Text_I17_110_17_142}>30 DE NOVIEMBRE 2021</Text>
        </View>
      </View>
      <View style={styles.View_17_116}>
        <View style={styles.View_I17_116_17_101} />
        <View style={styles.View_I17_116_17_105}>
          <Text style={styles.Text_I17_116_17_105}>SERVICIOS</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc0d/8919/3328883f02369147b4c4a6104b109505"
          }}
          style={styles.ImageBackground_I17_116_17_123}
        />
        <View style={styles.View_I17_116_17_133}>
          <Text style={styles.Text_I17_116_17_133}>PROXIMO SERVICIO</Text>
        </View>
        <View style={styles.View_I17_116_17_142}>
          <Text style={styles.Text_I17_116_17_142}>30 DE MARZO 2022</Text>
        </View>
      </View>
      <View style={styles.View_22_83}>
        <View style={styles.View_17_120} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba0a/72af/0634a7c42672053ace5575d9ebeeb7b0"
          }}
          style={styles.ImageBackground_17_132}
        />
        <View style={styles.View_17_153}>
          <Text style={styles.Text_17_153}>PROXIMA RENOVACION</Text>
        </View>
        <View style={styles.View_17_154}>
          <Text style={styles.Text_17_154}>VENCIO EL 30 DE JULIO DEL 2021</Text>
        </View>
        <View style={styles.View_17_121}>
          <Text style={styles.Text_17_121}>TARJETA DE CIRCUALCION</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_22_121: {
    width: wp("211.46666666666664%"),
    minWidth: wp("211.46666666666664%"),
    height: hp("52.18579234972678%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.733333333333334%"),
    top: hp("68.71584699453553%"),
    resizeMode: "cover"
  },
  View_22_45: {
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
  ImageBackground_17_60: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_17_61: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("0%")
  },
  TouchableOpacity_17_62: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.333333333333336%"),
    top: hp("0%")
  },
  TouchableOpacity_17_63: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("0%")
  },
  View_17_93: {
    width: wp("54.400000000000006%"),
    minWidth: wp("54.400000000000006%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("6.557377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_64: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584774%"),
    justifyContent: "flex-start"
  },
  Text_17_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_92: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("0%")
  },
  View_17_95: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("10.655737704918032%"),
    justifyContent: "flex-start"
  },
  Text_17_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_109: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("21.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_101: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("11.475409836065573%"),
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
  View_17_105: {
    flexGrow: 1,
    width: wp("40.1343505859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.4%"),
    top: hp("1.2295081967213086%"),
    justifyContent: "flex-start"
  },
  Text_17_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_123: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    top: hp("0.9562841530054627%")
  },
  View_17_133: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("4.644808743169396%"),
    justifyContent: "flex-start"
  },
  Text_17_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_142: {
    flexGrow: 1,
    width: wp("37.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("7.786885245901637%"),
    justifyContent: "flex-start"
  },
  Text_17_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_110: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("36.33879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_110_17_101: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("11.475409836065573%"),
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
  View_I17_110_17_105: {
    flexGrow: 1,
    width: wp("40.1343505859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.4%"),
    top: hp("1.229508196721305%"),
    justifyContent: "flex-start"
  },
  Text_I17_110_17_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_110_17_123: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    top: hp("0.9562841530054627%")
  },
  View_I17_110_17_133: {
    flexGrow: 1,
    width: wp("60.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4.644808743169399%"),
    justifyContent: "flex-start"
  },
  Text_I17_110_17_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_110_17_142: {
    flexGrow: 1,
    width: wp("45.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("7.786885245901637%"),
    justifyContent: "flex-start"
  },
  Text_I17_110_17_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_116: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_116_17_101: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("11.475409836065573%"),
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
  View_I17_116_17_105: {
    flexGrow: 1,
    width: wp("40.1343505859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.4%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_I17_116_17_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_116_17_123: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    top: hp("0.956284153005484%")
  },
  View_I17_116_17_133: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.2%"),
    top: hp("4.644808743169406%"),
    justifyContent: "flex-start"
  },
  Text_I17_116_17_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_116_17_142: {
    flexGrow: 1,
    width: wp("36.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_I17_116_17_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_83: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("51.63934426229508%")
  },
  View_17_120: {
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
  ImageBackground_17_132: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  View_17_153: {
    width: wp("45.6%"),
    top: hp("4.508196721311478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%"),
    justifyContent: "flex-start"
  },
  Text_17_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_154: {
    width: wp("62.93333333333333%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    justifyContent: "flex-start"
  },
  Text_17_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_121: {
    width: wp("65.60000000000001%"),
    minWidth: wp("65.60000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_17_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
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
