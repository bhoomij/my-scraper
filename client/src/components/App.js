import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';

class App extends Component {

  state = { showLoader: false };

  componentDidMount() {
    this.scrapeURL('http://www.yahoo.com');
  }

  scrapeURL(url) {
    this.setState({ showLoader: true });
    this.props.fetchImages(url, () => this.setState({ showLoader: false }));
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <SearchBar
          onUrlChange={url => this.scrapeURL(url)}
        />
        <ImageGallery
          images={this.props.images}
          showLoader={this.state.showLoader}
        />
      </div>
    );
  }
}

function mapStateToProps({ images }) {
  return { images };
}

export default connect(mapStateToProps, actions)(App);