import React from 'react';
import { SERVICES, CHECKBOXES, DEMOGRAPHIC_GROUPS } from './../constants/CONSTANTS';

export default class Form extends React.Component {
  render() {
    return(
      <div className="Form">
        <div className="Who">
        <h3>I'm looking for resources for: </h3>
          <input type="checkbox" id="myself" name="client" /> Myself
          <input type="checkbox" id="myself" name="client" /> A Client
          <input type="checkbox" id="myself" name="client" /> Other
        </div>
        <div className="Where">
          <h3>Located In:</h3>
          City: <input type="text" placeholder="City" /> - or - Zipcode: <input type="text" placeholder="Zip Code" /> 
          <div>
            <h3>Service types:</h3>
            <p>(Check any that apply)</p>
            <div className="Services">{SERVICES.sort().map((e,i) => <><input type="checkbox" name="serviceType" className="Service" value={e} id={i} key={i} text={e}/> {e}  </>)}</div>
            {/* <br />
            <label>Other: </label><br/>
            <textarea
              placeholder="List other services needed here"
              rows={3}
              ></textarea> */}
          </div>
          <div className="Demographics1">
            <h3>The person looking for services is: </h3>
            <div className="Services">{CHECKBOXES.sort().map((e,i) => <><input type="checkbox" name="serviceType" className="Service" value={e} id={i} key={i} text={e}/> {e}  </>)}</div>
          </div>
          <div className="Demographics2">
            {/* <h3>Additional Demographics: </h3> */}
            <div className="Services">{DEMOGRAPHIC_GROUPS.sort().map((e,i) => <><input type="checkbox" name="serviceType" className="Service" value={e} id={i} key={i} text={e}/> {e}  </>)}</div>
          </div>
        </div>
        <div className="Income">
            <h3>Income (optional): <input type="text" id="incomeInput" placeholder="Approximate Income"/></h3>
          </div>  
        <button type="submit">Submit</button>  
      </div>
    )
  }
}