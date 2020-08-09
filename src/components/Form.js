import React from 'react';
import { SERVICES } from './../constants/CONSTANTS';

export default class Form extends React.Component {
  render() {
    return(
      <div className="Form">
        <div className="Who">
        <h3>I'm looking for resources for: </h3>
          <input type="checkbox" id="myself" name="client" />Myself
          <input type="checkbox" id="myself" name="client" />A Client
          <input type="checkbox" id="myself" name="client" />Other
        </div>
        <div className="Where">
          <h3>Located In:</h3>
          City: <input type="text" placeholder="City" /> - or - Zipcode: <input type="text" placeholder="Zip Code" /> 
          <div>
            <h3>Service types: </h3><p>(Check any that apply)</p>
            {SERVICES.sort().map((e,i) => <><input type="checkbox" name="serviceType" value={e} id={i} key={i} text={e}/> {e}  </>)}
          </div>
        </div>

      </div>
    )
  }
}