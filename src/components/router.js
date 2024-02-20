import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import StorePicker from "./storepicker";
import App from "./app";
import NotFound from "./notfound";
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;