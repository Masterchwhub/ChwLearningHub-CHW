import React from 'react';


const TopicsCard = ({ title, subtitle, text, img }) => {
  return (
      <div className="card" style={{width: "462px", height:"504px", paddingRight: "20px", marginTop: "25px"}}>
        <img class="card-img-top" src={img} style={{height: "210px", width:"462px"}}  alt="Card cap"/>
          <div className="card-body">
              <h4 className="title-h1" >{title}</h4>
              <p className='subtitle'>{subtitle}</p>
              <p style={{color:"#666666"}}>{text}</p>
              <div className='row'>
                <div className='col-4 mt-2'>
                  <div className='row'>
                    <div className='col-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.786" height="21.5" viewBox="0 0 15.786 21.5">
                        <path id="bookmark-svgrepo-com" d="M19.5,5H8.786A1.832,1.832,0,0,0,7,6.875V25l7.143-5,7.143,5V6.875A1.832,1.832,0,0,0,19.5,5Z" transform="translate(-6.25 -4.25)" fill="none" stroke="#47bbc6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                      </svg>
                    </div>
                    <div className='col-10'>
                      <div style={{color:"#47BBC6"}}>Save for later</div>
                    </div>
                  </div>
                </div>
                <div className='col-8 mt-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.309" height="22.009" viewBox="0 0 24.309 22.009">
                    <path id="Path_1" data-name="Path 1" d="M92.748,235.655s6.88-4.777,9.876-9.369c2.967-4.545.109-9.6-3.255-10.445-4.468-1.128-6.621,3.238-6.621,3.238s-2.153-4.366-6.621-3.238c-3.365.849-6.221,5.9-3.255,10.445C85.868,230.877,92.748,235.655,92.748,235.655Z" transform="translate(-80.593 -214.646)" fill="none" stroke="#47bbc6" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </div>
              </div>
          </div>
    </div>
  );
};

export default TopicsCard;
