import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';


 class Discount extends Component {
    
    state={
        discountStart:0,
        discountEnd:30
    }
    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })

        }
    } 
    componentDidUpdate(){
        setTimeout(() =>{this.porcentage()} ,50)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={()=> this.porcentage()}>
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
                </Fade>
                <Slide right>
                <div className="discount_description">
                    <h3>Purchase Ticket Befor BlaBla</h3>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At imperdiet dui accumsan sit amet nullaMaecenas sed enim ut sem viverra aliquet eget. Pretium viverra suspendisse potenti nullam ac tortor vitae. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Morbi tristique senectus et netus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Amet tellus cras adipiscing enim eu turpis egestas pretium. Integer enim neque volutpat ac.

Et netus et malesuada fames. Donec et odio pellentesque diam. Vel quam elementum pulvinar etiam non.</p>
             <MyButton 
             text="Purchase Ticket"
             bck=" #d633ff"
             color="#fffff"
             link="http://www.google.com"

             />
                </div>  
                </Slide>
                 </div>
                
            </div>
        )
    }
}

export default Discount ;
