import React, { Component } from 'react';

import Loader from './Loader';

class ImageGallery extends Component {

    renderImages() {

        if (this.props.showLoader) {
            return <Loader />;
        }

        if (this.props.images) {
            return this.props.images.map(image => {
                return (
                    <div key={image} className="col-md-3 col-sm-6" >
                        <div className="thumbnail" style={{ height: '200px', width: '250px' }}>
                            <a href={image} target="_blank">
                                <img className="image" src={image} alt="" />
                            </a>
                        </div>
                    </div >
                );
            });
        }
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '20px' }}>
                {this.renderImages()}
            </div>
        );
    }
}

export default ImageGallery;