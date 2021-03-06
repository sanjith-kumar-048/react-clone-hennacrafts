import { colors, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useContext } from 'react';
import ProductFilterContext from './ProductFilterContext';

function RangeSlider() {
  const filterctx = useContext(ProductFilterContext);
  //console.log(filterctx.sliderRange)
  var rangestep = Math.round((filterctx.sliderRange[1] - filterctx.sliderRange[0]) / 4);
  //console.log(rangestep)
  const useStyles = makeStyles(
    {
      wrapper:
      {
        marginBottom: '4em',
        marginTop: '4em',
        marginLeft: '0.5em',
      },

      slider:
      {
        width: '100%',
        color: 'grey',
        opacity: 1,
        size: 'medium'
      },

      ['@media (max-width:768px)']:
      {
        slider:
        {
          width: '100%'
        },
      }
    });
  const gfg = [
    {
      value:filterctx.UStoCanadianDollar?Math.ceil((filterctx.sliderRange[0] + (0 * rangestep))*1.27):filterctx.sliderRange[0] + (0 * rangestep),
      label: filterctx.UStoCanadianDollar?`C${Math.ceil((filterctx.sliderRange[0] + (0 * rangestep))*1.27)}`:`$${filterctx.sliderRange[0] + (0 * rangestep)}`,
    },
    {
      value: filterctx.UStoCanadianDollar?Math.ceil((filterctx.sliderRange[0] + (1 * rangestep))*1.27):filterctx.sliderRange[0] + (1 * rangestep),
      label: filterctx.UStoCanadianDollar?`C${Math.ceil((filterctx.sliderRange[0] + (1 * rangestep))*1.27)}`:`$${filterctx.sliderRange[0] + (1 * rangestep)}`,
    },
    {
      value: filterctx.UStoCanadianDollar?Math.ceil((filterctx.sliderRange[0] + (2 * rangestep))*1.27):filterctx.sliderRange[0] + (2 * rangestep),
      label: filterctx.UStoCanadianDollar?`C${Math.ceil((filterctx.sliderRange[0] + (2 * rangestep))*1.27)}`:`$${filterctx.sliderRange[0] + (2 * rangestep)}`,
    },
    {
      value: filterctx.UStoCanadianDollar?Math.ceil((filterctx.sliderRange[0] + (3 * rangestep))*1.27):filterctx.sliderRange[0] + (3 * rangestep),
      label: filterctx.UStoCanadianDollar?`C${(Math.ceil(filterctx.sliderRange[0] + (3 * rangestep))*1.27)}`:`$${filterctx.sliderRange[0] + (3 * rangestep)}`,
    },
   /* {
      value: filterctx.UStoCanadianDollar?(filterctx.sliderRange[0] + (4 * rangestep))*1.27:filterctx.sliderRange[0] + (4 * rangestep),
      label: filterctx.UStoCanadianDollar?`C$${(filterctx.sliderRange[0] + (4 * rangestep))*1.27}`:`$${filterctx.sliderRange[0] + (4 * rangestep)}`,
    },*/
    {
      value:filterctx.UStoCanadianDollar?Math.ceil((filterctx.sliderRange[1]*1.27)):(filterctx.sliderRange[1]),
      label:filterctx.UStoCanadianDollar?`C${Math.ceil((filterctx.sliderRange[1]*1.27))}`:`$${filterctx.sliderRange[1]}`
    }
  ];

  


  const [val, setVal] = useState(filterctx.sliderRange);
  const updateRange = (e, data) => {
    setVal(data);
  };

  const classes = useStyles()
  return <div className={classes.wrapper}>
    <Slider value={val} onChange={updateRange} onMouseUp={() => { filterctx.filterProductByPriceRange(val) }} marks={gfg}
      step={15} min={filterctx.UStoCanadianDollar?(Math.ceil(filterctx.sliderRange[0]*1.27)):(filterctx.sliderRange[0])} max={filterctx.UStoCanadianDollar?(Math.ceil(filterctx.sliderRange[1]*1.27)):(filterctx.sliderRange[1])} valueLabelDisplay="on" className={classes.slider} />
  </div>
}

export default RangeSlider;