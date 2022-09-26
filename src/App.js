import React, { Component } from 'react'
import Navbar from './compotents/Navbar'
import News from './compotents/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  apiKey = 'daece713d4124bbd939ec96c0ecd57e0';
  state = {
    progress: 0
  }
  setProgress = (prog) => {
    this.setState({ progress: prog })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={this.state.setProgress}
          />
          {/* <Switch>
            <Route exact path="/"><News apiKey={this.apikey} setProgress={this.setProgress} key="general" psize={9} country='in' category="general" /></Route>
            <Route exact path="/business" ><News apiKey={this.apikey} setProgress={this.setProgress} key="business" psize={9} country='in' category="business" /></Route>
            <Route exact path="/entertainment"><News apiKey={this.apikey} setProgress={this.setProgress} key="entertainment" psize={9} country='in' category="entertainment" /></Route>
            <Route exact path="/health"><News apiKey={this.apikey} setProgress={this.setProgress} key="health" psize={9} country='in' category="health" /></Route>
            <Route exact path="/science"><News apiKey={this.apikey} setProgress={this.setProgress} key="science" psize={9} country='in' category="science" /></Route>
            <Route exact path="/sports"><News apiKey={this.apikey} setProgress={this.setProgress} key="sports" psize={9} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News apiKey={this.apikey} setProgress={this.setProgress} key="technology" psize={9} country='in' category="technology" /></Route>
          </Switch> */}
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" psize={this.pageSize} country="in" category="general" /></Route>

            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" psize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" psize={this.pageSize} country="in" category="entertainment" /></Route>
           
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" psize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" psize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" psize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" psize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
