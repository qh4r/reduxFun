import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import { onPostsEnter } from './route_callbacks';

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

//onEnter sprawia ze wywolywana jest metoda przy rpzejsciu na adres

// index route wyswietlany jest gdy dopasowany jest url do sciezki rodzica
export default (
    <Route path="/" component={App}>
        <IndexRoute onEnter={onPostsEnter} components={PostsIndex}/>
        <Route path="new" components={PostsNew} />
        <Route path=":id" components={PostsShow} />
    </Route>
)