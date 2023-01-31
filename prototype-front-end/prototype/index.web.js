/**
 * "index.web.js"
 *
 * Used for the "web" part of the React Native prototype
 *
 * Based on the following resource:
 * https://github.com/kristerkari/react-native-css-modules/blob/master/docs/web-compatibility.md
 *
 * @author Allan DeBoe
 * @date January 30th, 2023
 */
import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("AwesomeProject", () => App);
AppRegistry.runApplication("AwesomeProject", { rootTag: document.getElementById("react-app") });

if (module.hot) {
	module.hot.accept();
}