import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/user/UserCrud'

// Switch Escolha 

export default props=>
    <Switch>
        {/* exact = exatamente este path para ser encaminhado para este componente  */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={UserCrud}/>
        {/* caso qualquer outra coisa seja escrita na url sera redirecionado para / indo para Home  */}
        <Redirect from='*' to='/'/>
    </Switch>