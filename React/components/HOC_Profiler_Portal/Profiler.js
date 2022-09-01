import { Profiler } from "react";
import ProfilerFormComp from "./ProfilerFormComp";

const callback = (
  id,
  phase,
  actualDuration,
  startTime,
  baseDuration,
  commitTime,
  interactions
) => {
  console.log(
    "id " +
      id +
      " startTime " +
      startTime +
      " actualDuration " +
      actualDuration +
      " baseDuration " +
      baseDuration +
      " commitTime " +
      commitTime +
      " phase " +
      phase +
      " interactions " +
      interactions
  );
};
function ProfilerComp() {
  return (
    <div className="App">
      <Profiler id="Name" onRender={callback}>
        <ProfilerFormComp />
        <Profiler id="Number" onRender={callback}>
          <ProfilerFormComp />
        </Profiler>
      </Profiler>
    </div>
  );
}
export default ProfilerComp;
