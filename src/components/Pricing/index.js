import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
   
   state = {
       prices:[100,150,250],
       positions:['Balcony','Medium','Star'],
       desc:['Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing .','Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing  .','Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing .'],
       linkto:['http://star/b','http://star/b','http://star/b'],
        delay:[500,0,500]
   }

showBox = () => (
    this.state.prices.map((box,i)=>(
        <Zoom  delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[i]}
                </div>
                <div className="pricing_buttons">
                    <MyButton 
                    text='Purchase'
                    bck='#e6e600'
                    color='#fffff'
                    link={this.state.linkto[i]} />
                </div>
            </div>
        </div>
        </Zoom>
    ))
)

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>                
               <div className="pricing_wrapper">
                   {this.showBox()}
               </div>
                </div>
            </div>
        )
    }
}
export default  Pricing ;