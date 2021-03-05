import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10142.383025119547!2d10.179396522729604!3d36.80293110291027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34649cf5d30b%3A0x445d1ab2eecc907f!2sH%C3%B4tel%20ibis%20Tunis!5e0!3m2!1sfr!2stn!4v1607895328981!5m2!1sfr!2stn'
        width='100%'
        height='500'
        frameBorder='0'
        allowFullScreen
        // eslint-disable-next-line
      ></iframe>
      <div className='location_tag'>
        <div> Location </div>
      </div>
    </div>
  )
}

export default Location
