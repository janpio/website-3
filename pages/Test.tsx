import { people } from "../utils/constants/constants";
import EmployeeIcon from "../components/images/EmployeeIcon";
// import EmployeeIconTwo from "../components/images/EmployeeIconTwo";

export default function Test() {
  return <div className="px-12">
    <EmployeeIcon {...people[5]} />
    {/* <EmployeeIconTwo /> */}
  </div>

}