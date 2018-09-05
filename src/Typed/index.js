import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import './typed.css'


class TypedJS extends Component {
  constructor(props){
    super(props);
  }
    render() {
        const text = this.props.typingText
        const classy = this.props.classy
        // console.log(text)

        return (
            <div>
                <Typed
                    className="typing-text"
                    strings={[
                    `<span class=${classy}>${text}</span>`,
                        ]}
                    typeSpeed={150}
                    backSpeed={800}
                    loop >
                </Typed>

{/*                <br/>
                <br/>

                <Typed
                className="typing-text"
                strings={[
                    'give me <span class="markRed">jobs</span>',
                    'give me <span class="markBlue">opportunites</span>',
                    'give me <span class="markRed">skills</span>',
                    'give me <span class="markBlue">snacks</span>']}
                    typeSpeed={150}
                    backSpeed={150}
                    loop >
                </Typed>*/}




            </div>
        );
    }
}

export default TypedJS
