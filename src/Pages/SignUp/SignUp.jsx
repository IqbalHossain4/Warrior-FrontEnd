import { useContext } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SignUpCompo from "./SignUpCompo";
const SignUp = () => {
  return (
    <div>
      <div>
        <Tabs>
          <div className=" mt-16 w-full  flex items-center justify-center">
            <TabList className="bg-transparent text-white rounded">
              <Tab>Participant</Tab>
              <Tab>Mentor</Tab>
            </TabList>
          </div>
          <TabPanel>
            <SignUpCompo />
          </TabPanel>
          <TabPanel>
            <SignUpCompo role={"mentor"} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SignUp;
