'use client';
import { Typography, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';

export default function SubDesc(props) {
  return (
    <Tabs value="html" className=" my-6 bg-gray-50 rounded-lg shadow-gray-400 shadow-sm">
      <TabsHeader>
        <Tab key="rate" value="rate">
          Ratings
        </Tab>
        <Tab key="plot" value="plot">
          Plot
        </Tab>
        <Tab key="bab" value="bab">
          Bab
        </Tab>
      </TabsHeader>

      <TabsBody>
        <TabPanel key="rate" value="rate">
          {props.data.Ratings.map((rate) => {
            return (
              <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
                {rate.Source} - {rate.Value}
              </Typography>
            );
          })}
        </TabPanel>

        <TabPanel key="plot" value="plot" className="text-black">
          {props.data.Plot}
        </TabPanel>

        <TabPanel key="bab" value="bab">
          <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
            Country - {props.data.Country}
          </Typography>
          <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
            Awards - {props.data.Awards}
          </Typography>
          <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
            Box Office - {props.data.BoxOffice}
          </Typography>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
