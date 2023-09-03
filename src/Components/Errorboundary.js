import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null,
      }
    }
    componentDidCatch(error,errorInfo)
    {
        return({error,errorInfo})
    }
    static getDerivedStateFromError(error)
    {
        return {error};
    }
  render() {
    if(this.state.error)
    return (
      <div>
        <h3 style = {{color:'red'}}>Something Went Wrong!!!!</h3>
      </div>
    )
    return this.props.children;
  }
}