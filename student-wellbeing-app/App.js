import TabNavMaterial from "./src/navigations/TabNavMaterial";
import { resetDatabase } from "./src/utils/SetupDatabase";

export default function App() {
  resetDatabase(); // database resets after reloading app - for testing

  return <TabNavMaterial></TabNavMaterial>;
}
