import React, { memo } from "react";
import './App.css'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"


const MapChart = ({setCN}) => {
  return (
    <div className="map">
      <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[20, 45]} zoom={2}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <>
                    <Geography
                      key={geo.rsmKey} 
                      geography={geo}
                      onMouseEnter={() => {
                        setCN(() => (geo.properties.name))
                      }}
                      onMouseLeave={() => {
                        // Do something
                      }}
                    />
                  </>
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
