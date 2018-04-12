import React from "react"
import ReactDOM from "react-dom"
import App from "react-starter/src/App"
import asyncComponent from "react-starter/src/react-toolbox/lib/AsyncComponent"
import { Route, Switch } from "react-router-dom"
import messages from "./locales/"

const AsyncHome = asyncComponent(() => import("react-starter/src/routes/Home"))
const AsyncExample = asyncComponent(() => import("react-starter/src/routes/Example"))
const AsyncNotFound = asyncComponent(() => import("react-starter/src/routes/NotFound"))
const AsyncDev = asyncComponent(() => import("react-starter/src/routes/dev"))

const MProjectApp = () =>
  (<App messages={ messages }>
    <Switch>
      <Route path="/" exact component={ AsyncHome } />
      <Route path="/home" exact component={ AsyncHome } />
      <Route path="/examples" component={ AsyncExample } />
      <Route path="/dev" component={ AsyncDev } />
      <Route component={ AsyncNotFound } />
    </Switch>
  </App>)

ReactDOM.render(<MProjectApp />, document.getElementById("app"))
