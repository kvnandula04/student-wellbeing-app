import TabNavMaterial from "./src/navigations/TabNavMaterial";
import { resetDatabase, createDatabase } from "./src/utils/SetupDatabase";

export default function App() {
  // resetDatabase(); // database resets after reloading app - for testing
  createDatabase(); // creates a database if does not exist

  return <TabNavMaterial></TabNavMaterial>;
}
