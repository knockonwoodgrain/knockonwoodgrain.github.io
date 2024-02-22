import { Link } from "react-router-dom";
import BGVideo from "../Video";
const issues = ["1", "2"];

function VDKSelect() {
  return (
    <>
      <BGVideo />
      <div className="VDKSelectContain">
        {issues.map((issue) => (
          <Link key={issue} to={"VDK HBPT RUX " + issue} className="Link">
            <div key={issue} className="VDKSelect">
              {"Issue " + issue}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default VDKSelect;
