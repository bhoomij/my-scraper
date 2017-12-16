import React, { Component } from 'react';

class SearchBar extends Component {
    state = { searchTerm: 'http://www.yahoo.com' };

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label >Enter URL</label>
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.searchTerm}
                        onChange={event => this.onInputChange(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                this.props.onUrlChange(this.state.searchTerm)
                            }
                        }}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        this.props.onUrlChange(this.state.searchTerm)
                    }}
                >Scrape!</button>
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm });
    }
}

export default SearchBar;