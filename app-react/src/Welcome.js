import React, { Component } from 'react'
// import { router, browserHistory } from 'react-router'
import store from 'store'

class Welcome extends Component {

constructor(props) {
        super(props)

        // this.getUser = this.getUser.bind(this)
        // this.recentUserActivity = this.recentUserActivity.bind(this)
        // this.save = this.save.bind(this)

        // this.state = {
        //     oauth_token: '',
        // }
}

    //     componentWillMount() {
    //     let saveToken = store.get('saveToken', [])
    //     if (this.props.params.index) {
    //         let saveToken = saveToken[this.props.params.index]
    //         this.setState({
    //             oauth_token: saveToken.oauth_token
    //         }) 
    //     }
    // }
    
    // componentDidMount() {
    //   this.getUser()
    //   this.recentUserActivity()
    // }

    // getUser() {
    //     fetch('/api/users/:id')
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }

    // recentUserActivity() {
    //     fetch('/api/twitterings/:id')
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     // .then(res => this.setState({userInfo: res}))
    // }

    // save() {
    //     let saveToken = store.get('saveToken', [])
    //     store.set('saveToken', saveToken)
    // }

    
//     getToken() {
//     var token = sessionStorage.getItem('token');

//     fetch('https://chirpyapp.herokuapp.com/user_list?api_token=' + token) 
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         renderUsersList(response);
//     })
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             api_token: token,
//         })

    r
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         renderUsersList(response);
//     })
//     clearStorage();
// }

 
  render() {
    return <div className="welcomeBackground">
    <div className="welcomeContent">
    <div className="content about">
        <h1 className="welcomeTitle">About</h1>
            <p>Our main goal is to help you cut down on your social media and turn it into something productive.
            <span> More <img className="welcomeIcon" src="/img/my-icons-collection/png/003-gym.png" alt="gymMan" /> and less <img className="welcomeIcon" src="/img/my-icons-collection/png/001-app.png" alt="phoneApp" /></span></p>
    </div>        
    <div className="content howDoesItWork">  
        <h2 className="welcomeTitle">How does it work?</h2>
            <p>Our app creates a randomly generated exercise based on the amount of time wasted spent on Twitter the day prior.</p>
                <ul>
                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                    <li>Ut non enim metus.</li>
                </ul>
    </div>        
    <div className="content toGetStarted">             
        <h2 className="welcomeTitle">To get started</h2>
            <ul>
                <li>Sign-in with your Twitter account below.</li>
                <li>Fill out the short questionarre that follows.</li>
                <li>Don't forget to Warm-up before each exercise</li>
                <li>Ut non enim metus.</li>
            </ul>
    </div>
    <div>
        <a className="button sign-up" onClick={this.getUser} onClick={() => location.href='/auth/twitter'}>
            <span className="icon">
            <i className="fa fa-twitter"></i>
            </span>
            <span>Sign-in with Twitter</span>
        </a>
        {/* <a className="button sign-up"  onClick={() => location.href='/api/twitter/signup'}>
            <span className="icon">
            <i className="fa fa-twitter"></i>
            </span>
            <span>Sign-up with Twitter</span> 
        </a> */}
    </div>
 
    </div>
</div>

}
}

export default Welcome;