import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHakaton from '../../../hooks/useHakaton';
import AllHakaton from '../../AllHakaton/AllHakaton';

const Hakaton = () => {

    const [hakatons, loading] = useHakaton();

    const upcoming = hakatons.filter(hakaton => hakaton.category === 'Upcoming Hackathon');

    const running = hakatons.filter(hakaton => hakaton.category === 'Running Hackathon');

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <center className='mt-20 md:mx-80'>
                    <TabList>
                        <Tab>UpComming Hackatoon</Tab>
                        <Tab>Running Hackatoon</Tab>
                    </TabList>
                </center>


                <TabPanel>
                    <h1 className='text-center my-10  text-4xl text-white'>UpComing Hackatoon</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            upcoming.map(place => <AllHakaton key={place._id} place={place}></AllHakaton>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl text-white'>Running Hackatoon</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            running.map(place => <AllHakaton key={place._id} place={place}></AllHakaton>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Hakaton;