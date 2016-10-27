import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';

//const Greeting = ({children}) => {
//    return <div>
//        no siema!
//        <div>
//            {children}
//        </div>
//    </div>
//};
//
//const No = () => {
//    return <div>hell no</div>
//};
//
//export default (
//    <Route path="/" component={App}>
//        <Route path="hi" component={Greeting}>
//            <Route path="no" component={No}/>
//        </Route>
//    </Route>
//);


// index route wyswietlany jest gdy dopasowany jest url do sciezki rodzica
export default (
    <Route path="/" component={App}>
        <IndexRoute components={PostsIndex}/>
    </Route>
)