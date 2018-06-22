import { StyleSheet } from "react-native";
import { purple, white, orange, red, green } from "../../utils/colors";
const ButtonStyles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosQuizBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidQuizBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  quizBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosCardBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidCardBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  cardBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  correctBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 160,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 160,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  incorrectBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  iosBackBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20
  },
  androidBackBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 200,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  backBtnText: {
    color: white,
    fontSize: 18,
    textAlign: "center"
  },
  quesToggleBtn: {
    color: orange
  }
});
export default ButtonStyles;
