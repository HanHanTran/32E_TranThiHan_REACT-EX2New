import React, { Component } from 'react'
import './style.css'
import dataGlasses from './dataGlasses.json'

export default class BTGlasses extends Component {
    
    state = {
        content: {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }
// cách 1
// render glasses
   renderGlasses =() =>{
    return dataGlasses.map((glasses,index) => {
        return <img onClick={() => {this.onChangeImg(glasses)}} width={100} className='glasses_List m-2 'key={glasses.id} src={glasses.url}  alt={glasses.name} />

    })
   }
   // khi click vào glassesImage
   onChangeImg = (clickImg) => {
    this.setState({
        content: clickImg
    })
  }

    render() {
        const myImgBg = {
            backgroundImage: 'url(./glassesImage/background.jpg)',
            height:'100vh',
            backgroundSize: 'cover',
        }
      
        return (
            <div style={myImgBg}>
                <div className="bg">
                <div className="container">
                    <h1>Bài tập Glasses</h1>
                    <div className="model d-flex justify-content-around">
                        <div className="model_right">

                            <img className='img_active' src={this.state.content.url} alt="" />
                            <img className='img_model' src="./glassesImage/model.jpg" alt="..." />
                            <div className="text_content">
                                <h3>{this.state.content.name}</h3>
                                <p>{this.state.content.desc}</p>
                            </div>
                        </div>
                        <div  className="model_left" >
                            <img  className='img_model'  src="./glassesImage/model.jpg" alt="..." />
                            

                        </div>
                    </div>
                    <div className="container">
                        <div className="row bg-white p-3 mt-4">
                            <div className="col-2 d-flex  m-2" >
                             {this.renderGlasses()}
                             
                             {/* // cách 2 */}
                             {/* {
                                dataGlasses.map((glasse, index) => {
                                return <div className="row ">
                                    <div className="col-2 d-flex flex-nowrap" >
                                    <img width={100} onClick={() => this.setState({content: glasse})}  className='glasses_List m-2 'key={glasse.id} src={glasse.url}  alt={glasse.name} />

                                    </div>

                                </div>

                                })
                             } */}

                            </div>
                        
                          
                        </div>
                    </div>
                </div>

                </div>
            </div>
        )
    }
}
