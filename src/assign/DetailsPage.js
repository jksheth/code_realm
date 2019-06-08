import React from 'react';
import * as config from './config';

function DetailPage(props) {
  let isPlaceHolderRequired = props.showPlaceholder;
  return(
    <div className="detailPage">
      <div className="Left">
        {
          config.DETAILS.Left.map(detail => (
            <div className="row">
              <div className="label">{detail.name}</div>
              <input className="value_box" type={detail.type} placeholder={isPlaceHolderRequired && (detail.placeholder || null)}/>
            </div>
          ))
        }
      </div>
      <div className="Right">
        {
          config.DETAILS.Right.map(detail => (
            <div className="row" key={JSON.stringify(detail)}>
              <div className="label">{detail.name}</div>
              <input
                className="value_box" 
                type={detail.type} 
                rows={detail.type === 'textarea' ? '4' : null}
                placeholder={isPlaceHolderRequired && (detail.placeholder || null)}
              />
            </div>
          ))
        }
      </div>
      <div>
        <button onClick={() => alert('not implemented so far')}> Save </button>
        <button onClick={() => alert('not implemented so far')}> Back </button>
      </div>
    </div>
  )
}

export default DetailPage;